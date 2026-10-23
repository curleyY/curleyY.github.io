/*
 * AFFiNE 站点加速 Service Worker
 * 背景：部署所用静态服务器不支持 gzip 内容协商，且部署工具只上传 .js/.css/.html
 *       等 Web 资源，还会过滤文件名含压缩字样（.gz/.zip 等）与超大（>2MB）文件，
 *       并对 index.* 开头的文件名做特殊处理（实测上传后不可达）。
 * 因此采用「gzip + 分块 + pw- 前缀」方案：
 *   构建产物 js/xxx.js  →  js/pw-xxx.js.packed.1.bin / .packed.2.bin / ...
 *   （每块约 0.86MB 二进制；同名 .js 分块是 base64 版本，作为 .bin 不可用时的回退）
 *   SW 拦截 .js/.css 请求 → 拉取分块拼接 → DecompressionStream 解压。
 *
 * 加速要点（2026-10-23）：
 * 1. MANIFEST 直接给出每个资源有几块 —— 老实现靠「一直取到 404 才知道结束」，
 *    首屏 13 个资源就是 13 个多余往返，慢网下是好几秒。
 * 2. 页面在等 SW 接管的空档里已经把首屏分块并行下载完，并通过 postMessage 移交
 *    给 SW（PREFETCH），于是「下载」和「SW 生命周期」重叠，不再串行。
 * 3. 缓存名固定 + 按清单增量清理：只有本次构建真正变化的资源才需要重新下载，
 *    老实现每次部署换缓存名等于全站缓存清空。
 * 4. 二进制分块比 base64 省 25% 传输量，也省掉 base64 解码的 CPU 开销。
 *
 * 兼容：任何环节失败（分块缺失 / 不支持 DecompressionStream / .bin 未上传）
 *       都自动回退 —— 先退 base64 分块，再退原文件，功能不受影响。
 */
/* global self, caches, DecompressionStream, fetch, Request, Response, atob, Blob */
'use strict';

var CACHE = 'affine-gz-assets';
var COMPRESSIBLE = /\.(js|css)(\?.*)?$/i;
var MAX_CHUNKS = 64;
var CHUNK_CONCURRENCY = 8; // 分块并发下载数
// 停滞保护：主机/CDN 限流时连接会「建立成功但几乎不发数据」，导致分块请求永远挂着、
// 页面 script 拿不到内容而白屏。任一块超过 STALL_MS 没收到新字节就中止并重试一次。
var STALL_MS = 30000;
var STALL_RETRY = 1;

// 资源路径 → 分块数（构建时注入）
var MANIFEST = {"/npm-async-@vanilla-extract.118f9453.css":1,"/styles.e73ab7b1.css":1,"/vendor.b804469a.css":1,"/js/1155.a9be9124.js":0,"/js/1362.a3f0a967.js":0,"/js/1510.5fb76dc8.js":0,"/js/1595.b3096678.js":1,"/js/1886.db90fcb1.js":1,"/js/1948.181aacb9.js":0,"/js/2029.01040c7c.js":0,"/js/2134.e9d806a1.js":0,"/js/2203.ec2c0697.js":0,"/js/2363.747a6b9c.js":0,"/js/2371.ca5b16ad.js":1,"/js/246.f7148377.js":0,"/js/2793.ee43260a.js":0,"/js/2795.868f28ba.js":1,"/js/3038.4fc8b101.js":0,"/js/3080.8f3e0859.js":0,"/js/3250.51321336.js":0,"/js/3273.8e578ae2.js":0,"/js/3411.35c617f3.js":0,"/js/3425.22bd0f80.js":0,"/js/3762.c1cdf10d.js":0,"/js/3860.9591e2bd.js":0,"/js/4222.df4a4425.js":0,"/js/4252.aafd389e.js":0,"/js/4493.a17a409f.js":1,"/js/5202.5eb54e48.js":0,"/js/5418.de431747.js":1,"/js/5443.652d004b.js":0,"/js/55.bb249f0e.js":1,"/js/557.ff4ae94e.js":0,"/js/5606.52906ee1.js":0,"/js/5817.5f43f3e0.js":0,"/js/6062.02cc6ec8.js":0,"/js/6329.0ba7ca2d.js":0,"/js/633.e5046b4d.js":0,"/js/6507.b7e13ee2.js":1,"/js/667.21aa8ef5.js":0,"/js/6913.8040429e.js":0,"/js/7139.ad7f145d.js":0,"/js/7699.3a6db1eb.js":1,"/js/7960.bf2839c4.js":0,"/js/8171.635e643e.js":1,"/js/827.6d1d85cd.js":0,"/js/8339.d34b08d8.js":0,"/js/9055.928b95d7.js":0,"/js/9159.becbde7b.js":1,"/js/9293.2091c88f.js":0,"/js/9463.0e65856c.js":0,"/js/9759.444b9f8e.js":0,"/js/9811.aa0e83ac.js":0,"/js/auth.155bfb38.js":0,"/js/global-error-handler.js":0,"/js/i18n-langs.ar.841bfe18.js":1,"/js/i18n-langs.ca.7684b439.js":1,"/js/i18n-langs.da.cd972c48.js":0,"/js/i18n-langs.de.86cfb26f.js":1,"/js/i18n-langs.es-AR.060c8d0e.js":0,"/js/i18n-langs.es-CL.c4e7a566.js":0,"/js/i18n-langs.es.36c228cd.js":1,"/js/i18n-langs.fa.d4d1a83e.js":1,"/js/i18n-langs.fr.8d14bccd.js":1,"/js/i18n-langs.hi.fe7b0ac5.js":0,"/js/i18n-langs.i18n-completenesses.f3193f5f.js":0,"/js/i18n-langs.it.e43e29db.js":1,"/js/i18n-langs.ja.b3ae8c9d.js":1,"/js/i18n-langs.kk.56f52f04.js":1,"/js/i18n-langs.ko.5decf799.js":1,"/js/i18n-langs.nb-NO.76f40995.js":1,"/js/i18n-langs.pl.e0357514.js":1,"/js/i18n-langs.pt-BR.a994a381.js":1,"/js/i18n-langs.ru.03f2ee9a.js":1,"/js/i18n-langs.sv-SE.4e58a5ec.js":1,"/js/i18n-langs.tr.0a9f2139.js":1,"/js/i18n-langs.uk.e2dbdde8.js":1,"/js/i18n-langs.ur.c150980d.js":1,"/js/i18n-langs.zh-Hans.2471e30c.js":1,"/js/i18n-langs.zh-Hant.a0689239.js":1,"/js/i18n.eb5bc4b6.js":1,"/js/index.8a99a786.js":4,"/js/mermaid-0.27.5.worker.js":1,"/js/nbstore-0.27.5.worker.js":1,"/js/npm-async-@braintree.8c484898.js":0,"/js/npm-async-@iconify.ec915853.js":0,"/js/npm-async-@lottiefiles.e026220a.js":1,"/js/npm-async-@mermaid-js.dd19b8a1.js":1,"/js/npm-async-@pdf-lib.eb09a385.js":1,"/js/npm-async-@shikijs.63ad3941.js":2,"/js/npm-async-@upsetjs.cc6533de.js":1,"/js/npm-async-cose-base.409c7c4e.js":1,"/js/npm-async-cytoscape-cose-bilkent.f737ab40.js":0,"/js/npm-async-cytoscape-fcose.419cbc3e.js":1,"/js/npm-async-cytoscape.865e2d5e.js":1,"/js/npm-async-d3-array.151fa936.js":0,"/js/npm-async-d3-axis.3e2a6b9a.js":0,"/js/npm-async-d3-brush.113f8e7c.js":0,"/js/npm-async-d3-color.f11fb0e0.js":1,"/js/npm-async-d3-dispatch.25f06b2d.js":0,"/js/npm-async-d3-ease.abf25164.js":0,"/js/npm-async-d3-format.e368da28.js":0,"/js/npm-async-d3-hierarchy.e3a75163.js":0,"/js/npm-async-d3-interpolate.7969ff62.js":0,"/js/npm-async-d3-path.06fdaff8.js":0,"/js/npm-async-d3-sankey.4abe9295.js":1,"/js/npm-async-d3-scale-chromatic.6c1ec769.js":0,"/js/npm-async-d3-scale.e88e7cd2.js":1,"/js/npm-async-d3-selection.5a8d05a4.js":1,"/js/npm-async-d3-shape.ec3d612b.js":1,"/js/npm-async-d3-time-format.ddbbe73e.js":1,"/js/npm-async-d3-time.fa4727cd.js":0,"/js/npm-async-d3-timer.13e213b7.js":0,"/js/npm-async-d3-transition.e136224c.js":1,"/js/npm-async-d3-zoom.1f13f4e0.js":0,"/js/npm-async-d3.513d8b5e.js":0,"/js/npm-async-dagre-d3-es.573c007e.js":1,"/js/npm-async-dayjs.b38a4542.js":1,"/js/npm-async-decimal.js-light.38cfc0e0.js":1,"/js/npm-async-es-toolkit.2b7aea53.js":1,"/js/npm-async-fast-equals.0aca5292.js":0,"/js/npm-async-html2canvas.3c60ce94.js":1,"/js/npm-async-internmap.ae41537d.js":0,"/js/npm-async-khroma.00d4e234.js":1,"/js/npm-async-layout-base.4cd782ef.js":1,"/js/npm-async-lodash-es.d6df6dce.js":0,"/js/npm-async-mermaid.327be3b4.js":1,"/js/npm-async-pako.c4841538.js":1,"/js/npm-async-pdf-lib.1f9c4c64.js":1,"/js/npm-async-pdfjs-dist.1d4b845f.js":1,"/js/npm-async-pdfmake.ea1920fe.js":1,"/js/npm-async-prop-types.bc5f087f.js":0,"/js/npm-async-react-smooth.24d5c273.js":1,"/js/npm-async-recharts-scale.2f3d0d44.js":0,"/js/npm-async-recharts.c3478bf6.js":1,"/js/npm-async-roughjs.11541916.js":1,"/js/npm-async-shiki.9d384ff9.js":0,"/js/npm-async-tiny-invariant.eba1bcb7.js":0,"/js/npm-async-ts-dedent.464df67a.js":0,"/js/npm-async-victory-vendor.62df669b.js":0,"/js/npm-blocksuite.912c9df9.js":1,"/js/npm-emotion.06ccdb5b.js":1,"/js/npm-jotai.ff53f772.js":1,"/js/npm-lodash.126c9bf1.js":1,"/js/npm-react.d249c215.js":1,"/js/npm-rxjs.2a651a07.js":1,"/js/pdf-0.27.5.worker.js":1,"/js/runtime.e5fcd041.js":1,"/js/turbo-painter-0.27.5.worker.js":1,"/js/typst-0.27.5.worker.js":1,"/js/vendor.44009b03.js":2,"/js/workspace-profile-0.27.5.worker.js":1};
// 本次构建仍然存在的资源（构建时注入），用于增量清理缓存
var KEEP = ["/js/1595.b3096678.js","/js/1886.db90fcb1.js","/js/2371.ca5b16ad.js","/js/2795.868f28ba.js","/js/4493.a17a409f.js","/js/5418.de431747.js","/js/55.bb249f0e.js","/js/6507.b7e13ee2.js","/js/7699.3a6db1eb.js","/js/8171.635e643e.js","/js/9159.becbde7b.js","/js/i18n-langs.ar.841bfe18.js","/js/i18n-langs.ca.7684b439.js","/js/i18n-langs.de.86cfb26f.js","/js/i18n-langs.es.36c228cd.js","/js/i18n-langs.fa.d4d1a83e.js","/js/i18n-langs.fr.8d14bccd.js","/js/i18n-langs.it.e43e29db.js","/js/i18n-langs.ja.b3ae8c9d.js","/js/i18n-langs.kk.56f52f04.js","/js/i18n-langs.ko.5decf799.js","/js/i18n-langs.nb-NO.76f40995.js","/js/i18n-langs.pl.e0357514.js","/js/i18n-langs.pt-BR.a994a381.js","/js/i18n-langs.ru.03f2ee9a.js","/js/i18n-langs.sv-SE.4e58a5ec.js","/js/i18n-langs.tr.0a9f2139.js","/js/i18n-langs.uk.e2dbdde8.js","/js/i18n-langs.ur.c150980d.js","/js/i18n-langs.zh-Hans.2471e30c.js","/js/i18n-langs.zh-Hant.a0689239.js","/js/i18n.eb5bc4b6.js","/js/index.8a99a786.js","/js/mermaid-0.27.5.worker.js","/js/nbstore-0.27.5.worker.js","/js/npm-async-@lottiefiles.e026220a.js","/js/npm-async-@mermaid-js.dd19b8a1.js","/js/npm-async-@pdf-lib.eb09a385.js","/js/npm-async-@shikijs.63ad3941.js","/js/npm-async-@upsetjs.cc6533de.js","/js/npm-async-cose-base.409c7c4e.js","/js/npm-async-cytoscape-fcose.419cbc3e.js","/js/npm-async-cytoscape.865e2d5e.js","/js/npm-async-d3-color.f11fb0e0.js","/js/npm-async-d3-sankey.4abe9295.js","/js/npm-async-d3-scale.e88e7cd2.js","/js/npm-async-d3-selection.5a8d05a4.js","/js/npm-async-d3-shape.ec3d612b.js","/js/npm-async-d3-time-format.ddbbe73e.js","/js/npm-async-d3-transition.e136224c.js","/js/npm-async-dagre-d3-es.573c007e.js","/js/npm-async-dayjs.b38a4542.js","/js/npm-async-decimal.js-light.38cfc0e0.js","/js/npm-async-es-toolkit.2b7aea53.js","/js/npm-async-html2canvas.3c60ce94.js","/js/npm-async-khroma.00d4e234.js","/js/npm-async-layout-base.4cd782ef.js","/js/npm-async-mermaid.327be3b4.js","/js/npm-async-pako.c4841538.js","/js/npm-async-pdf-lib.1f9c4c64.js","/js/npm-async-pdfjs-dist.1d4b845f.js","/js/npm-async-pdfmake.ea1920fe.js","/js/npm-async-react-smooth.24d5c273.js","/js/npm-async-recharts.c3478bf6.js","/js/npm-async-roughjs.11541916.js","/js/npm-blocksuite.912c9df9.js","/js/npm-emotion.06ccdb5b.js","/js/npm-jotai.ff53f772.js","/js/npm-lodash.126c9bf1.js","/js/npm-react.d249c215.js","/js/npm-rxjs.2a651a07.js","/js/pdf-0.27.5.worker.js","/js/runtime.e5fcd041.js","/js/turbo-painter-0.27.5.worker.js","/js/typst-0.27.5.worker.js","/js/vendor.44009b03.js","/js/workspace-profile-0.27.5.worker.js","/npm-async-@vanilla-extract.118f9453.css","/styles.e73ab7b1.css","/vendor.b804469a.css"];
// 页面预热好后移交过来的分块内容：URL → ArrayBuffer
var PREFETCH = {};
// .bin 分块在本站点是否可用（部署工具若不上传 .bin，全局降级到 base64 分块，只探一次）
var BIN_DISABLED = false;

function mimeFor(pathname) {
  if (/\.js(\?.*)?$/i.test(pathname)) return 'application/javascript; charset=utf-8';
  if (/\.css(\?.*)?$/i.test(pathname)) return 'text/css; charset=utf-8';
  return 'application/octet-stream';
}

/** 由原资源路径推导第 i 个分块 URL（pw- 前缀避开 index.* 特殊处理） */
function chunkUrl(url, i, ext) {
  var path = url.pathname;
  var slash = path.lastIndexOf('/');
  var dir = slash >= 0 ? path.substring(0, slash + 1) : '/';
  var base = slash >= 0 ? path.substring(slash + 1) : path;
  return url.origin + dir + 'pw-' + base + '.packed.' + i + (ext || '.bin') + url.search;
}

self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    (async function () {
      // 干掉历史命名（affine-gz-v###）等无关缓存
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
      // 增量清理：本次构建里已经不存在的资源（hash 变了）才删
      try {
        var cache = await caches.open(CACHE);
        var reqs = await cache.keys();
        await Promise.all(
          reqs.map(function (r) {
            var p;
            try {
              p = new URL(r.url).pathname;
            } catch (e) {
              return null;
            }
            return KEEP.indexOf(p) === -1 ? cache['delete'](r).catch(function () {}) : null;
          })
        );
      } catch (e) {
        /* 清理失败不影响使用 */
      }
      await self.clients.claim();
    })()
  );
});

self.addEventListener('message', function (event) {
  var d = event.data;
  if (d && d.t === 'prefetch' && d.d) {
    for (var k in d.d) {
      if (Object.prototype.hasOwnProperty.call(d.d, k)) PREFETCH[k] = d.d[k];
    }
  }
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
  // 2. 清单里明确写了「0 块」（小文件不打包）→ 直接取原文件，别再发探测请求
  var declared = MANIFEST[url.pathname];
  if (typeof declared === 'number' && declared === 0) {
    return fetch(req);
  }
  // 3. 拉取分块（优先页面预热好的，其次网络）
  var chunked = await fetchChunks(url, declared);
  // 无分块 / 任一块下载停滞：回退原文件（至少浏览器原生下载不会永久挂死）
  if (!chunked || chunked.errored || !chunked.parts.length) {
    return fetch(req);
  }
  var bytes = concatBytes(chunked.parts);
  if (!bytes) {
    return fetch(req); // 内容异常：回退
  }
  var mime = mimeFor(url.pathname);
  // 3. 解压一次，之后把「解压后的原文」写入缓存：
  //    老实现缓存的是 base64 文本，导致每次访问都要重复 base64 解码 + gunzip（CPU 开销大）
  try {
    var plain = await gunzip(bytes);
    if (plain) {
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
      headers: { 'Content-Type': mime },
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

function concatBytes(parts) {
  var total = 0;
  for (var i = 0; i < parts.length; i++) total += parts[i].length;
  var out = new Uint8Array(total);
  var off = 0;
  for (var j = 0; j < parts.length; j++) {
    out.set(parts[j], off);
    off += parts[j].length;
  }
  return out;
}

/**
 * 带「停滞超时」的 fetch：只要 stallMs 内没有新字节到达就中止（可选重试 StallRetry 次）。
 * 返回 { resp, errored } —— errored 为 true 表示这一步彻底失败（含停滞中止）。
 * 注意：普通 fetch 在连接被限流时不会报错，只会一直挂着，所以必须用 reader 手动看数据。
 */
async function fetchWithStall(url, stallMs, retries) {
  for (var attempt = 0; attempt <= retries; attempt++) {
    var ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
    var timer = null;
    var settled = false;
    try {
      var resp = await fetch(url, ctrl ? { signal: ctrl.signal } : undefined);
      if (!resp) return { resp: null, errored: true };
      if (!resp.ok) {
        return { resp: resp, errored: false }; // 404 等正常语义：由调用方判定「没有更多分块」
      }
      if (!resp.body || typeof resp.body.getReader !== 'function') {
        return { resp: resp, errored: false }; // 不支持流式读取：放弃停滞保护
      }
      var reader = resp.body.getReader();
      var parts = [];
      function arm(ms) {
        if (timer) clearTimeout(timer);
        if (!ctrl) return;
        timer = setTimeout(function () {
          if (!settled) {
            settled = true;
            try {
              ctrl.abort();
            } catch (e) {}
          }
        }, ms);
      }
      arm(stallMs);
      while (true) {
        var r = await reader.read();
        if (r.done) break;
        if (r.value && r.value.length) parts.push(r.value);
        arm(stallMs); // 有数据到达 → 重置停滞计时
      }
      settled = true;
      if (timer) clearTimeout(timer);
      return {
        resp: new Response(new Blob(parts), {
          status: 200,
          headers: resp.headers,
        }),
        errored: false,
      };
    } catch (e) {
      settled = true;
      if (timer) clearTimeout(timer);
      if (attempt >= retries) return { resp: null, errored: true };
    }
  }
  return { resp: null, errored: true };
}

/** 取第 i 块，返回 Uint8Array（gzip 片段），拿不到返回 null */
async function fetchChunk(url, i) {
  // 页面预热好的直接拿来用，零网络等待
  var binKey = chunkUrl(url, i, '.bin');
  if (PREFETCH[binKey] != null) {
    var ab = PREFETCH[binKey];
    return ab instanceof Uint8Array ? ab : new Uint8Array(ab);
  }
  var jsKey = chunkUrl(url, i, '.js');
  if (PREFETCH[jsKey] != null) {
    return base64ToBytes(new TextDecoder().decode(new Uint8Array(PREFETCH[jsKey])));
  }
  if (!BIN_DISABLED) {
    var r = await fetchWithStall(binKey, STALL_MS, STALL_RETRY);
    if (r.resp && r.resp.ok) {
      return new Uint8Array(await r.resp.arrayBuffer());
    }
    if (!r.resp || r.resp.status === 404 || r.errored) {
      // .bin 没被部署上去（或取不到）→ 全局改用 base64 分块，别再逐个试探
      BIN_DISABLED = true;
    }
  }
  var r2 = await fetchWithStall(jsKey, STALL_MS, STALL_RETRY);
  if (!r2.resp || !r2.resp.ok) return null;
  var text = (await r2.resp.text()).trim();
  return base64ToBytes(text);
}

async function fetchChunks(url, declared) {
  var count = typeof declared === 'number' ? declared : 0;
  var parts = [];
  var errored = false;
  var i = 1;
  while (i <= MAX_CHUNKS) {
    // 已知块数 → 一次并发拉完，不再靠 404 判尾
    var known = count > 0;
    if (known && i > count) break;
    var upto = Math.min(known ? count : MAX_CHUNKS, i + CHUNK_CONCURRENCY - 1);
    var batch = [];
    for (var k = i; k <= upto; k++) {
      batch.push(fetchChunk(url, k));
    }
    var resps = await Promise.all(batch);
    for (var m = 0; m < resps.length; m++) {
      var part = resps[m];
      if (!part) {
        // 缺一块即整体损坏（分块从左到右切开）；未知块数时视为「到最后一块了」
        if (known) errored = true;
        i = MAX_CHUNKS + 1;
        break;
      }
      parts.push(part);
    }
    i = upto + 1;
  }
  return { parts: parts, errored: errored };
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
