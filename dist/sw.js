if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,c,n)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const o={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return i;case"module":return o;default:return e(s)}})).then(e=>{const s=n(...e);return i.default||(i.default=s),i})}))}}define("./sw.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/books.js",revision:"7578129668cd35c1ccc5d9b2855c584d"},{url:"assets/fonts/myIconFont.eot",revision:"8919b4071e234101dc89b6c2c5284d75"},{url:"assets/fonts/myIconFont.svg",revision:"342cb068273bf468d7ca8e534b01d5fb"},{url:"assets/fonts/myIconFont.ttf",revision:"746073da4c73f259a0480ea681433e16"},{url:"assets/fonts/myIconFont.woff",revision:"e0db57a416cbbbdb84bf4f8443473e10"},{url:"assets/fonts/sahel.woff",revision:"c59ff27efabee832aace05b00f83fa58"},{url:"assets/icons/icon-128x128.png",revision:"aedfaa4e37fd23c1ab7f7524f33c96a9"},{url:"assets/icons/icon-144x144.png",revision:"59f5f8a392fde71067a7eaf17155a711"},{url:"assets/icons/icon-152x152.png",revision:"857891483c6cd94143af5e2a100f494f"},{url:"assets/icons/icon-192x192.png",revision:"2f92485b90ca48726c08434b55245a4d"},{url:"assets/icons/icon-384x384.png",revision:"73d70f1d9cf352818a2b66bfdec27f8e"},{url:"assets/icons/icon-512x512.png",revision:"2870680adcfac71c8582c345f6bf3584"},{url:"assets/icons/icon-72x72.png",revision:"8fe0ef21700da26852da9559e013703c"},{url:"assets/icons/icon-96x96.png",revision:"ecc529c2eae3e6f91868bae0d61eea40"},{url:"assets/skills.js",revision:"4441d24c4b0df92b65f251c4f5dbbe77"},{url:"book-recommendation.html",revision:"4918ae459d372b04cbe87891dda4530d"},{url:"css/book-recommendation.min.css",revision:"11d2ee6f6c973d1090dc392465578404"},{url:"css/common.min.css",revision:"effd9be8d72f28a4aca68ada53dfd282"},{url:"css/index.min.css",revision:"290a80799e88badae287b44ae06d5547"},{url:"css/notes.min.css",revision:"1a81bfd78ee1da47768063bf14c49a7c"},{url:"css/skills.min.css",revision:"d4ab3c43b07c9d0358b6d585a65c9a68"},{url:"index.html",revision:"ec598e0b45e74a6206bba2583ce030a9"},{url:"js/book-recommendation.min.js",revision:"d116b7d83ae870ee99ca4a3f2d3afa4d"},{url:"js/common.min.js",revision:"ade78c28512ba407cdafc76b592321c2"},{url:"js/notes.min.js",revision:"41c122d7c94dfd5a6ff3f43cebe87294"},{url:"js/skills.min.js",revision:"322a1cc85b33d76aab2a5fe5e868b826"},{url:"manifest.json",revision:"e755b2fc7726c198b47e78fca826379b"},{url:"notes.html",revision:"b3c6ef7f33e9ab2b01fe4a312379295b"},{url:"siri_rebellion.html",revision:"e7fe684566c8d07c6f36b3b6168105ef"},{url:"skills.html",revision:"be2fc2e5ca8e91cd4054e66765daf672"}],{})}));
//# sourceMappingURL=sw.js.map
