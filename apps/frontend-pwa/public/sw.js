const CACHE_NAME = 'buses-pwa-v4';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Intentar cachear rutas principales, ignorar errores
      return Promise.all([
        cache.addAll(['/chofer/cobrar', '/chofer/escanear']).catch(() => {})
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // No cachear archivos estáticos (CSS, JS, etc.) - siempre intentar desde red
  if (url.pathname.includes('_next/static') || url.pathname.includes('.css') || url.pathname.includes('.js')) {
    event.respondWith(fetch(event.request));
    return;
  }
  
  // Para otras rutas, usar network first con fallback a caché
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request).then((response) => {
        return response || new Response('Offline Mode');
      });
    })
  );
});
