// COCO Tattoo App Service Worker
const CACHE_NAME = 'coco-tattoo-v1';
const urlsToCache = [
  './coco-app-customer.html',
  './coco-app-admin.html',
  './manifest.json'
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch Event - Serve from Cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

// Activate Event - Clean old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Push Notification Event
self.addEventListener('push', event => {
  let options = {
    body: 'Neue spontane Termine verfügbar!',
    icon: './icon-192.png',
    badge: './icon-96.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Termine ansehen',
        icon: './icon-96.png'
      },
      {
        action: 'close',
        title: 'Schließen',
        icon: './icon-96.png'
      }
    ]
  };

  if (event.data) {
    const data = event.data.json();
    options.body = data.body || options.body;
    options.title = data.title || 'COCO Tattoo';
  }

  event.waitUntil(
    self.registration.showNotification('COCO Tattoo', options)
  );
});

// Notification Click Event
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'explore') {
    // Open slots page
    event.waitUntil(
      clients.openWindow('./coco-app-customer.html#slots')
    );
  } else if (event.action === 'close') {
    // Just close
    event.notification.close();
  } else {
    // Default action - open app
    event.waitUntil(
      clients.openWindow('./coco-app-customer.html')
    );
  }
});

// Background Sync for offline requests
self.addEventListener('sync', event => {
  if (event.tag === 'sync-requests') {
    event.waitUntil(syncRequests());
  }
});

async function syncRequests() {
  // Sync any pending requests when back online
  try {
    const cache = await caches.open(CACHE_NAME);
    const pendingRequests = await cache.match('pending-requests');
    
    if (pendingRequests) {
      const requests = await pendingRequests.json();
      // Process pending requests here
      console.log('Syncing pending requests:', requests);
    }
  } catch (error) {
    console.error('Sync failed:', error);
  }
}

// Message Event for communication with app
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'PUSH_NOTIFICATION') {
    // Handle custom push notification
    const options = {
      body: event.data.message,
      icon: './icon-192.png',
      badge: './icon-96.png',
      vibrate: [200, 100, 200],
      tag: 'coco-notification',
      requireInteraction: true
    };
    
    self.registration.showNotification(event.data.title, options);
  }
});

console.log('COCO Tattoo Service Worker loaded');