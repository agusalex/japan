self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open('your-cache-name').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/main.css',
                '/js/main.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
