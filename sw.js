// Install event - caching resources
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('bca-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',     // Add your main HTML file
          '/style.css',      // Add your CSS file
          '/script.js',       // Add your main JS file
          '/icons/icon.png'   // Add your icon
        ]);
      })
    );
    console.log('Service Worker Installed');
  });
  
  // Fetch event - serve resources from cache or network
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  