const CACHE_NAME = 'buses-pwa-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(['/chofer/cobrar']);
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Solo interceptamos si falla la red (Network First)
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request).then((response) => {
        return response || new Response('Offline Mode');
      });
    })
  );
});
