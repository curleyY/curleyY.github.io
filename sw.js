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

var CACHE = 'affine-gz-v98';
var COMPRESSIBLE = /\.(js|css)(\?.*)?$/i;
var MAX_CHUNKS = 64;
var CHUNK_B64 = 1200000; // 分块大小参考值（与 prepare_gzip.py 保持一致）

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
  // 1. 命中缓存（缓存的是完整 base64 文本）→ 解码解压返回
  var hit = await cache.match(cacheKey);
  if (hit) {
    var out = await decodeCached(hit, url);
    if (out) return out;
  }
  // 2. 依次拉取分块（pw-xxx.js.packed.1.js / .packed.2.js / ...），直到取不到为止
  var parts = [];
  for (var i = 1; i <= MAX_CHUNKS; i++) {
    var text = null;
    try {
      var resp = await fetch(chunkUrl(url, i), { cache: 'no-store' });
      if (!resp.ok) break;
      text = await resp.text();
    } catch (e) {
      break;
    }
    // 首块就必须是合法 base64，否则整体不可用（可能是 SPA fallback 的 HTML）
    if (i === 1 && !looksLikeBase64(text)) break;
    if (text && text.trim()) parts.push(text.trim());
    if (text && text.trim().length < CHUNK_B64) break; // 最后一块（未满）
  }
  if (!parts.length) {
    return fetch(req); // 无分块：回退原文件
  }
  var bytes = base64ToBytes(parts.join(''));
  if (!bytes) {
    return fetch(req); // 内容异常：回退
  }
  // 3. 解压返回，并把完整 base64 写入缓存（省去下次重复拉分块）
  try {
    var ds = new DecompressionStream('gzip');
    var out2 = new Response(new Blob([bytes]).stream().pipeThrough(ds), {
      status: 200,
      headers: { 'Content-Type': mimeFor(url.pathname) },
    });
    var b64All = parts.join('');
    event.waitUntil(
      cache
        .put(
          cacheKey,
          new Response(b64All, {
            status: 200,
            headers: { 'Content-Type': 'text/plain' },
          })
        )
        .catch(function () {})
    );
    return out2;
  } catch (e) {
    return fetch(req);
  }
}

async function decodeCached(hit, url) {
  try {
    var b64 = await hit.text();
    var bytes = base64ToBytes(b64);
    if (!bytes) return null;
    var ds = new DecompressionStream('gzip');
    return new Response(new Blob([bytes]).stream().pipeThrough(ds), {
      status: 200,
      headers: { 'Content-Type': mimeFor(url.pathname) },
    });
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
