!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=504;t.Globals={cacheName:"3b9aca00",staticFiles:["index.html","manifest.json","select.svg","static/css/main.b3063ab0.css","static/js/main.35d562db.js","vl-logo-128.png","vl-logo-144.png","vl-logo-152.png","vl-logo-192.png","vl-logo-32.png","vl-logo-512.png","vl-logo.svg"],doNotCacheUrls:[],fetch:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){return fetch.apply(void 0,arguments)}),console:function(){return self.console},caches:function(){return self.caches},navigator:function(){return self.navigator},skipWaiting:function(){return self.skipWaiting()},newResponse:function(e){return new Response(e,{status:o})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InstallListener=void 0;var o=n(0);t.InstallListener={listen:function(e){e.waitUntil(o.Globals.caches().open(o.Globals.cacheName).then(function(e){return e.addAll(o.Globals.staticFiles)}).then(function(){return o.Globals.skipWaiting()}))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ActivateListener=void 0;var o=n(0);t.ActivateListener={listen:function(e){var t=[o.Globals.cacheName];e.waitUntil(o.Globals.caches().keys().then(function(e){return Promise.all(e.map(function(e){if(-1===t.indexOf(e))return o.Globals.caches().delete(e)}))}))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FetchListener=void 0;var o=n(0),r=function(e){return"GET"!==e.method||o.Globals.doNotCacheUrls.find(function(t){return n=e.url,o=t,0===n.indexOf(location.origin+o);var n,o})};t.FetchListener={listen:function(e){var t;r(e.request)||e.respondWith("navigate"===e.request.mode?(t=e.request,o.Globals.caches().match("/index.html").then(function(e){return e||o.Globals.fetch(t)})):o.Globals.caches().match(e.request.url).then(function(t){return t||(o.Globals.navigator().onLine?o.Globals.fetch(e.request.clone()).then(function(t){var n=t.clone();return function(e){return Boolean(e&&e.ok)}(t)&&o.Globals.caches().open(o.Globals.cacheName).then(function(t){return t.put(e.request.url,n)}),t}):o.Globals.newResponse())}))}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._SwIndex=void 0;var o=n(3),r=n(2),i=n(1),l=function(e){e.addEventListener("install",i.InstallListener.listen),e.addEventListener("activate",r.ActivateListener.listen),e.addEventListener("fetch",o.FetchListener.listen)};l(self);t._SwIndex={init:l}},function(e,t,n){e.exports=n(4)}]);