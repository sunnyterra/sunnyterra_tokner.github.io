'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1e5052885e4c40a2cc70c7b35f82ab30",
".git/config": "d06821bfd282aa2bcd7d31a41fd73e55",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6a533d36d4141ccc2a62d7064a3f162f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7dca1a8ac73a4fd3a627761be2e7a683",
".git/logs/refs/heads/main": "53162ba8a994abaa51a7a5773077d8c5",
".git/logs/refs/remotes/origin/main": "3d4c87791e4961b62c9ee1dd4a29bab3",
".git/objects/01/b810804db32d02cebf46d9f5d59fb2d84c731d": "6b58eba8eb09394964511a956be9a8f5",
".git/objects/05/df986fd8dbc1e9c70d68110259379534786873": "4f30474b29fc7401cc4f2ee2ed734946",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0e/95a5c86b0e078ad7fcc7afee179ddf5daa302a": "c950788928691f0e2462883bf34417fb",
".git/objects/14/0875bf7207f240f5dc27f6a838235c1e71fe50": "665e518fd74a8d04574dc2b7af12ac2e",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/19/5ef118e7579653694e89ff2d67e09a854e662d": "f1bfe6292cc2011bee4f91674a2ca26a",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/27c8aa5f3783182070429e5e609459d6734351": "e760c52d70147ed923574e87e1922d7e",
".git/objects/22/fdd27e2abc9c0ab107fcc09a25feeafd988f98": "9854776d7d07f76a9e8076c32aa54204",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/c0b74d75786d17c6e59e1043335bd8b2f6db58": "e5e0dc0bb9c26e4954ee4e1e3b57d9bf",
".git/objects/26/35f7f2578d89baaf2d59ac8eeda601820d4337": "04707029f030d370c3cfb53540ecd010",
".git/objects/28/eb348bc6134b7aa628ab8b64b51fcabfe1e3aa": "dca186e2b6cb95c683e7f1544a83549d",
".git/objects/2e/97e303b29f8fc96de650e11a8e4169e45824d6": "12f633d3d1b08545263361f9c059a03c",
".git/objects/38/e30ff008640a01d3fab11f7a7a03426a08e873": "d741bd364bf90ea288f3e9d40d1c9217",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4e/24c42e2b57a93516edbb947ec6f0be0f5ac4c5": "34edd74af38224359e75a0ee06a79050",
".git/objects/4e/f7b1f4b5ccfd42004e5d3adc86728d98744e58": "204f6add99aa513ae9c37a0ed007e501",
".git/objects/52/a28f597ea3e0322346a0c285663be5b3d0fa23": "d1dcd649f4826aff95e9fe088ef1f2e7",
".git/objects/59/7da3b2e07f287d6e5ca64247af6ff6f7dcb855": "d887ab712605918a132859eba3dd3bfa",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/62/82624cb9f7483685b6433394d69b71ad2fdf8b": "1bb87eb5622694685752e7ba3ee4211c",
".git/objects/64/4ef5167b4726fec6834017bd432b41417e6d0a": "da541223ed17fdb5f7c7c37fc6fe9364",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/7a/c7ae7a27893ee6d7c51fb039c0911f1fc9f744": "c94a04b5250b53fb9188b1caa88c00b9",
".git/objects/7b/4f28bafe401f046003195de2422bd5c18955fd": "2afc7bf4780a3d5253a824bce50b1bf0",
".git/objects/7f/b9dba2f332b8ea3eb4ead4b15efad9334e3b8b": "8fd11fef3380147b2cd7e02296e5d23c",
".git/objects/81/63d51cff9fa5e43b2c77386058d793249bc190": "6c8a2b71bb898b4aa1e18a50e6054ab2",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/02a3b1984276a2f9a0d225f4a22b437cb10bba": "cc7028a707992683e759dfb79851351b",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/9b/b684c45c5c471c2cc59cbfe548f35238571e0f": "7d9a04599c5ce6ee35fa301ee903ecc8",
".git/objects/9d/eb587a9a4d1c86bb3bed10d2550dc06638ddea": "2e416f029172524dac9ee4b116c89e20",
".git/objects/a0/3e31f1819d6cc29628df642b734e7846ad3388": "ee25c197515e819eeff9ea12c24f5ec9",
".git/objects/a4/296ea4a2dafef2653038e4995ccdb4cad610f3": "d0bcc29c3f6b8275d2e90a4a327c6c1a",
".git/objects/a7/288f23ca5123355ffa87f2cd597bd481337f02": "c4b1abe78984af52bb7e8b69331a12c6",
".git/objects/ad/2250c2ed14a9ec96fb4a19c70340a818664ed3": "41c5858e8467b291cb286ac039074721",
".git/objects/ae/515bd1fb94e2d6e9728f21f24a31a8cb065d21": "f6cedbe2f002a20c80eab21b6b9ab3c4",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/2dc139fabd67356c07705c2a310ca709efcdc9": "86465b61f2b27fde05d240fb3f028c1e",
".git/objects/cf/85bc27e18d071c644dc6cefffd4ca4e83ab2aa": "4ef3684154196d45806fdc2941351d9a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ed30ffa61bf748d99e6a78cfc21e4bf5619b90": "cb948ee37ea574f6d808bb5d7edd9dd4",
".git/objects/dc/c585107d34d04ac8370e57448df68b3de811c0": "35ae92b535cffc7a4577309b549cf46c",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/72dbac307abe9e038130a9a3849f995bcdfb9c": "561de193fab5eea93c9bd649833270c4",
".git/objects/ee/9b80e5431ef3a646c37c176cf46d61a2c2d230": "a6c649ced3ef53114c1684e88b5414c0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/f2464ae667d5bc9584c3f90784a27126a3be34": "0ae6998d626a47e6fb8a650dacfc5e20",
".git/refs/heads/main": "ffdfbcb9f4f52bd2a6ae0f80c7df5248",
".git/refs/remotes/origin/main": "ffdfbcb9f4f52bd2a6ae0f80c7df5248",
"assets/AssetManifest.bin": "01158aa5e9d0b09c893ff2ca1629cbd3",
"assets/AssetManifest.bin.json": "a7220e83924495a4d604746e5d61b457",
"assets/AssetManifest.json": "ec587c8e425b56bcf3dcea11c1f321be",
"assets/assets/images/big_logo.svg": "650894c3f1cb0fa88b037bb78e1cc1f6",
"assets/assets/images/creators.png": "1eb280c4e3270de47860f97a06d04de9",
"assets/assets/images/ellipsis.svg": "cb52ae4a1f237284c169fb509ce8ff95",
"assets/assets/images/github_icon.png": "19a1811bdcdddaea3456a2b5639f44a7",
"assets/assets/images/holders.png": "d211468d0a228d9bf699215ec82b5972",
"assets/assets/images/instagram_icon.png": "337caf1170a3eff973b7a38765af405a",
"assets/assets/images/iphone_mockup.png": "8daa185216f45156f897eb5038e36d21",
"assets/assets/images/left_triangle.png": "fc631452c77b53d1414d2faff44aa11e",
"assets/assets/images/medium_icon.png": "1b3bcf5d6881d2e264e8e3274462e828",
"assets/assets/images/mobile_holding.png": "bb3617123ad0abd850878fd71649c065",
"assets/assets/images/oleg_kulik.png": "6eda7b74a601a8ef3a7f79b27a8976df",
"assets/assets/images/reddit_icon.png": "23d46df3d22334da3739b2a95c0b3e63",
"assets/assets/images/telegram_icon.png": "9c181155adac21513834306fcb665964",
"assets/assets/images/twitter_icon.png": "dc048cbd40d2e3676c8637a1ff62bc15",
"assets/assets/images/w_logo.png": "142c04fbdb9659af71c67b6e695762af",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "fc7e5184863494e8feb7b59e65312b6a",
"assets/NOTICES": "f8a55db15fe710967d2ee5405dc686fe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3f908252f5d0d8e3c87d2169fabe8403",
"/": "3f908252f5d0d8e3c87d2169fabe8403",
"main.dart.js": "d189e62a509961ee5f5b9cfed77a2ed7",
"manifest.json": "d63ad2a0e49c3a4c38de55cfdcd6c2cb",
"version.json": "a8a27a64d3c5336de0e8702ad39ce884"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
