/*
 * 站点级 Service Worker（真题站 + readest 子站共用，scope = /）。
 *
 * 设计目标：彻底解决「GitHub Pages 对 HTML 返回 Cache-Control: max-age=600
 * 导致用户长时间看到旧界面 / 旧 bundle」的问题。
 *
 * 策略：
 *   1. 导航请求（HTML 文档）：network-first + fetch(..., {cache:'reload'})
 *      —— 强制绕过浏览器/CDN 的 10 分钟缓存，每次都拿最新 HTML，
 *         从而保证引用的 bundle / 资源永远是最新版。
 *   2. 静态资源（JS/CSS/字体/图片等）：stale-while-revalidate，
 *      先用缓存秒开，后台静默更新，既快又不会长期陈旧。
 *   3. install 直接 skipWaiting；activate 时 claim 所有已打开的页面，
 *      让新 SW 立即生效，不必等下次访问。
 */
const CACHE = 'wb-site-v1';

self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    (async function () {
      try {
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
      } catch (e) {}
      try {
        await self.clients.claim();
      } catch (e) {}
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
  // 只处理同源请求
  if (url.origin !== self.location.origin) return;

  // ---- 导航请求：network-first，强制绕过缓存 ----
  if (req.mode === 'navigate') {
    event.respondWith(
      (async function () {
        try {
          var fresh = await fetch(req, { cache: 'reload' });
          if (fresh && fresh.ok) {
            var copy = fresh.clone();
            caches.open(CACHE).then(function (c) {
              return c.put(req, copy);
            }).catch(function () {});
          }
          return fresh;
        } catch (e) {
          var cached = await caches.match(req);
          if (cached) return cached;
          return new Response('当前离线且页面未被缓存', {
            status: 503,
            headers: { 'Content-Type': 'text/plain; charset=utf-8' },
          });
        }
      })()
    );
    return;
  }

  // ---- 静态资源：stale-while-revalidate ----
  event.respondWith(
    (async function () {
      var cached = await caches.match(req);
      var network = fetch(req)
        .then(function (resp) {
          if (resp && resp.status === 200) {
            var copy = resp.clone();
            caches.open(CACHE).then(function (c) {
              return c.put(req, copy);
            }).catch(function () {});
          }
          return resp;
        })
        .catch(function () {
          return cached;
        });
      return cached || network;
    })()
  );
});
