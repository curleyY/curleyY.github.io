/*
 * 站点已由 AFFiNE 换成独立的真题练习站，旧的压缩分块 Service Worker 不再需要。
 * 这份 sw.js 只负责「自我注销 + 清空缓存」：
 * 浏览器发现 sw.js 字节变化 → 安装并激活它 → 清掉历史缓存 → 注销自身，
 * 之后所有请求直接走网络（GitHub Pages 本身支持 gzip，无需再靠 SW 分块拼装）。
 */
self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    (async function () {
      try {
        var keys = await caches.keys();
        await Promise.all(
          keys.map(function (k) {
            return caches['delete'](k);
          })
        );
      } catch (e) {
        /* 清缓存失败不影响注销 */
      }
      try {
        await self.clients.claim();
      } catch (e) {}
      try {
        await self.registration.unregister();
      } catch (e) {}
    })()
  );
});

self.addEventListener('fetch', function () {
  // 不拦截任何请求
});
