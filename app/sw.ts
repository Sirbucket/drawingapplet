import {workbox} from "workbox-sw"

workbox.routing.registerRoute(
	/\.(?:css|ts|js)$/,
	new workbox.strategies.StaleWhileRevalidate({
		"cacheName": "app",
		plugins:[
			new workbox.expiration.Plugin({
				maxEntries: 1000,
				maxAgeSeconds: 2592000
				
			})
		]
	})
);

workbox.routing.registerRoute(
	/\.(?:png|jpg)$/,
	new workbox.strategies.CacheFirst({
		"cacheName": "images",
		plugins:[
			new workbox.expiration.Plugin({
				maxEntries: 1000,
				maxAgeSeconds: 2592000
				
			})
		]
	})
);