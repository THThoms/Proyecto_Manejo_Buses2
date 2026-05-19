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

// Prevent duplicate notifications
const notificationCache = new Set();

// Register event listener for push notifications
self.addEventListener('push', function(event) {
  const data = event.data.json();
  const notificationId = data.id; // Unique ID for the notification

  if (notificationCache.has(notificationId)) {
    return; // Skip duplicate notification
  }

  notificationCache.add(notificationId);

  const options = {
    body: data.body,
    icon: data.icon || '/default-icon.png',
    badge: data.badge || '/default-badge.png',
    data: data.data || {},
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Handle notification click
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const clickAction = event.notification.data.click_action;

  if (clickAction) {
    event.waitUntil(clients.openWindow(clickAction));
  }
});

// Handle push notification subscription
self.addEventListener('pushsubscriptionchange', function(event) {
  event.waitUntil(
    self.registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: '<Your_Public_VAPID_Key>'
    }).then(function(newSubscription) {
      // Send new subscription to the server
      return fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify(newSubscription),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    })
  );
});
