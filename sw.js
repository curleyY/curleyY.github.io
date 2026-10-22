/*
 * AFFiNE 站点加速 Service Worker
 * 背景：部署所用静态服务器不支持 gzip 内容协商，且部署工具只上传 .js/.css/.html
 *       等 Web 资源，还会过滤文件名含压缩字样（.gz/.zip 等）与超大（>2MB）文件，
 *       并对 index.* 开头的文件名做特殊处理（实测上传后不可达）。
 * 因此采用「gzip + base64 + 分块 + pw- 前缀 + .js 后缀」方案：
 *   构建产物 js/xxx.js  →  js/pw-xxx.js.packed.1.js / .packed.2.js / ...
 *   （每块约 1.2MB base64，pw- 前缀避开 index.* 特殊处理）
 *   SW 拦截 .js/.css 请求 → 依次拉取分块拼接 → 解码 → DecompressionStream 解压。
 * 兼容：任何环节失败（分块缺失 / 不是 base64 / 不支持 DecompressionStream）
 *       都自动回退原文件，功能不受影响。
 */
/* global self, caches, DecompressionStream, fetch, Request, Response, atob, Blob */
'use strict';

var CACHE = 'affine-gz-v111';
var COMPRESSIBLE = /\.(js|css)(\?.*)?$/i;
var MAX_CHUNKS = 64;
var CHUNK_B64 = 1200000; // 分块大小参考值（与 prepare_gzip.py 保持一致）
var CHUNK_CONCURRENCY = 8; // 分块并发下载数（原来串行拉取，往返数是首屏最大瓶颈）

function mimeFor(pathname) {
  if (/\.js(\?.*)?$/i.test(pathname)) return 'application/javascript; charset=utf-8';
  if (/\.css(\?.*)?$/i.test(pathname)) return 'text/css; charset=utf-8';
  return 'application/octet-stream';
}

/** 由原资源路径推导第 i 个分块 URL（pw- 前缀避开 index.* 特殊处理） */
function chunkUrl(url, i) {
  var path = url.pathname;
  var slash = path.lastIndexOf('/');
  var dir = slash >= 0 ? path.substring(0, slash + 1) : '/';
  var base = slash >= 0 ? path.substring(slash + 1) : path;
  return url.origin + dir + 'pw-' + base + '.packed.' + i + '.js' + url.search;
}

self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    (async function () {
      var keys = await caches.keys();
      await Promise.all(
        keys
          .filter(function (k) {
            return k !== CACHE;
          })
          .map(function (k) {
            return caches.delete(k);
          })
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return;
  var url;
  try {
    url = new URL(req.url);
  } catch (e) {
    return;
  }
  if (url.origin !== self.location.origin) return;
  if (!COMPRESSIBLE.test(url.pathname)) return;
  if (typeof DecompressionStream === 'undefined') return;
  event.respondWith(handle(req, url, event));
});

async function handle(req, url, event) {
  var cache = await caches.open(CACHE);
  var cacheKey = new Request(url.origin + url.pathname);
  // 1. 命中缓存 → 直接返回（缓存里已是解码后的原始内容，无需再解压）
  var hit = await cache.match(cacheKey);
  if (hit) {
    var out = await decodeCached(hit, url);
    if (out) return out;
  }
  // 2. 并发拉取分块（pw-xxx.js.packed.1.js / .packed.2.js / ...），直到某块缺失为止
  var parts = await fetchChunks(url);
  if (!parts.length) {
    return fetch(req); // 无分块：回退原文件
  }
  var bytes = base64ToBytes(parts.join(''));
  if (!bytes) {
    return fetch(req); // 内容异常：回退
  }
  // 3. 解压一次，之后把「解压后的原文」写入缓存：
  //    老实现缓存的是 base64 文本，导致每次访问都要重复 base64 解码 + gunzip（CPU 开销大）
  try {
    var plain = await gunzip(bytes);
    if (plain) {
      var mime = mimeFor(url.pathname);
      event.waitUntil(
        cache
          .put(cacheKey, new Response(plain, { status: 200, headers: { 'Content-Type': mime } }))
          .catch(function () {})
      );
      return new Response(plain, { status: 200, headers: { 'Content-Type': mime } });
    }
  } catch (e) {
    /* 解压失败则走下面的流式回退 */
  }
  // 流式回退：直接把 gzip 流转成 DecompressionStream
  try {
    return new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip')), {
      status: 200,
      headers: { 'Content-Type': mimeFor(url.pathname) },
    });
  } catch (e) {
    return fetch(req);
  }
}

/** gzip 字节 → 原始文本（成功返回值，失败返回 null） */
async function gunzip(bytes) {
  if (typeof DecompressionStream === 'undefined') return null;
  try {
    var ds = new DecompressionStream('gzip');
    var resp = new Response(new Blob([bytes]).stream().pipeThrough(ds));
    return await resp.arrayBuffer
      ? new Uint8Array(await resp.arrayBuffer())
      : null;
  } catch (e) {
    return null;
  }
}

/**
 * 并发按序拉取某资源的所有分块。
 * 老实现是一次 await 一块（串行），大文件（如 12MB 的主 bundle 拆 4 块）
 * 就多花 4 个 RTT；这里按 CHUNK_CONCURRENCY 分批并发，再按序拼接。
 */
async function fetchChunks(url) {
  var parts = [];
  var last = false;
  var i = 1;
  while (i <= MAX_CHUNKS && !last) {
    var upto = Math.min(MAX_CHUNKS, i + CHUNK_CONCURRENCY - 1);
    var batch = [];
    for (var k = i; k <= upto; k++) {
      // 走默认缓存策略：允许复用页面预热分块时留下的 HTTP 缓存
      batch.push(
        fetch(chunkUrl(url, k)).catch(function () {
          return null;
        })
      );
    }
    var resps = await Promise.all(batch);
    for (var m = 0; m < resps.length; m++) {
      var resp = resps[m];
      var idx = i + m;
      if (!resp || !resp.ok) {
        last = true;
        break;
      }
      var text = (await resp.text()).trim();
      // 首块必须是合法 base64，否则整体不可用（可能是 SPA fallback 返回的 HTML）
      if (idx === 1 && !looksLikeBase64(text)) {
        last = true;
        break;
      }
      if (text) parts.push(text);
      if (text.length < CHUNK_B64) {
        last = true; // 未满一块 ⇒ 这是最后一块
        break;
      }
    }
    i = upto + 1;
  }
  return parts;
}

/**
 * 处理缓存命中：
 * - 新版缓存（Content-Type 为 application/javascript / text/css）存的是
 *   已解压的原文，直接返回即可，零解压开销；
 * - 旧版缓存（text/plain）存的是 base64 文本，按原逻辑解码 + 解压。
 */
async function decodeCached(hit, url) {
  try {
    var ct = (hit.headers.get('Content-Type') || '').toLowerCase();
    if (ct.indexOf('text/plain') !== -1) {
      var b64 = await hit.text();
      var bytes = base64ToBytes(b64);
      if (!bytes) return null;
      if (typeof DecompressionStream === 'undefined') return null;
      return new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip')), {
        status: 200,
        headers: { 'Content-Type': mimeFor(url.pathname) },
      });
    }
    return hit;
  } catch (e) {
    return null;
  }
}

/** 粗判是否为 base64 文本（排除 SPA fallback 返回的 HTML） */
function looksLikeBase64(s) {
  if (!s || typeof s !== 'string') return false;
  s = s.trim();
  if (s.length < 16) return false;
  if (s.indexOf('<') !== -1 || s.indexOf('>') !== -1) return false;
  return /^[A-Za-z0-9+/\r\n]+=*$/.test(s);
}

/**
 * base64 → Uint8Array。内容不是合法 base64 或解出来不是 gzip 时返回 null。
 */
function base64ToBytes(b64) {
  if (!b64 || typeof b64 !== 'string') return null;
  b64 = b64.trim();
  if (b64.length < 16) return null;
  if (b64.indexOf('<') !== -1 || b64.indexOf('>') !== -1) return null;
  if (!/^[A-Za-z0-9+/\r\n]+=*$/.test(b64)) return null;
  try {
    var bin = atob(b64);
    if (bin.length < 8) return null;
    var bytes = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) {
      bytes[i] = bin.charCodeAt(i);
    }
    // gzip 魔数校验：1f 8b
    if (bytes[0] !== 0x1f || bytes[1] !== 0x8b) return null;
    return bytes;
  } catch (e) {
    return null;
  }
}
