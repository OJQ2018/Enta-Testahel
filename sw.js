
const CACHE_NAME = 'enta-testahel-v3';
const urlsToCache = ['./', './index.html', './manifest.json'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

self.addEventListener('push', event => {
  const data = event.data ? event.data.text() : 'تستاهل كلام حلو 💌';
  event.waitUntil(
    self.registration.showNotification('إنت تستاهل', {
      body: data,
      icon: './icon-192.png',
      badge: './icon-72.png',
      vibrate: [200, 100, 200],
      tag: 'sweet-message'
    })
  );
});
