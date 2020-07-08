var cacheName = 'p5js-pwa';

var filesToCache = [
    '/',
    './index.html',
    './main.js',
    'js/patch.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener("fetch", function(event) {
    event.respondWith(
      caches.open('file-cache').then(function(cache) {
        return cache.match(event.request).then(function (response) {
          if(response) {
            return response;
          }else{
            return fetch(event.request).then(function(response) {
              cache.put(event.request, response.clone());
              return response;
            });
          }
        });
      })
    );
  });