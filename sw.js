const CACHE_NAME = 'snooker-v1';
const ASSETS = [
  '/',
  '/scorecard.html',
];

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching Assets');
        return cache.addAll(ASSETS);
      })
      .then(() => self.skipWaiting()) // Force activation
  );
});

// Activate Event
self.addEventListener('activate', (event) => {
  console.log('Service Worker activated successfully.');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache...', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim()) // Claim clients immediately
  );
});

// Fetch Event (Network First, falling back to Cache)
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});