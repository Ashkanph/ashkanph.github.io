if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise(async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()})),s.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},s=(s,i)=>{Promise.all(s.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(s)};self.define=(s,n,o)=>{i[s]||(i[s]=Promise.resolve().then(()=>{let i={};const c={uri:location.origin+s.slice(1)};return Promise.all(n.map(s=>{switch(s){case"exports":return i;case"module":return c;default:return e(s)}})).then(e=>{const s=o(...e);return i.default||(i.default=s),i})}))}}define("./sw.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/books.js",revision:"95efd25f978f56cbf178ace31c1b8380"},{url:"assets/fonts/myIconFont.eot",revision:"8919b4071e234101dc89b6c2c5284d75"},{url:"assets/fonts/myIconFont.svg",revision:"342cb068273bf468d7ca8e534b01d5fb"},{url:"assets/fonts/myIconFont.ttf",revision:"746073da4c73f259a0480ea681433e16"},{url:"assets/fonts/myIconFont.woff",revision:"e0db57a416cbbbdb84bf4f8443473e10"},{url:"assets/fonts/sahel.woff",revision:"c59ff27efabee832aace05b00f83fa58"},{url:"assets/icons/icon-128x128.png",revision:"aedfaa4e37fd23c1ab7f7524f33c96a9"},{url:"assets/icons/icon-144x144.png",revision:"59f5f8a392fde71067a7eaf17155a711"},{url:"assets/icons/icon-152x152.png",revision:"857891483c6cd94143af5e2a100f494f"},{url:"assets/icons/icon-192x192.png",revision:"2f92485b90ca48726c08434b55245a4d"},{url:"assets/icons/icon-384x384.png",revision:"73d70f1d9cf352818a2b66bfdec27f8e"},{url:"assets/icons/icon-512x512.png",revision:"2870680adcfac71c8582c345f6bf3584"},{url:"assets/icons/icon-72x72.png",revision:"8fe0ef21700da26852da9559e013703c"},{url:"assets/icons/icon-96x96.png",revision:"ecc529c2eae3e6f91868bae0d61eea40"},{url:"assets/skills.js",revision:"4441d24c4b0df92b65f251c4f5dbbe77"},{url:"book-recommendation.html",revision:"108eca02ab79280bd1a580e28af15ee2"},{url:"css/book-recommendation.min.css",revision:"fc152ff3480b50918f633ba1c34fdb5f"},{url:"css/common.min.css",revision:"63d159a1327c850f06fd9b9bb10043de"},{url:"css/index.min.css",revision:"290a80799e88badae287b44ae06d5547"},{url:"css/notes.min.css",revision:"32ce8ecedb9d8983df1037e432ebdfb9"},{url:"css/skills.min.css",revision:"d4ab3c43b07c9d0358b6d585a65c9a68"},{url:"index.html",revision:"ec598e0b45e74a6206bba2583ce030a9"},{url:"js/book-recommendation.min.js",revision:"d116b7d83ae870ee99ca4a3f2d3afa4d"},{url:"js/common.min.js",revision:"8ee57b188b739982a5ebb002089bc2f3"},{url:"js/notes.min.js",revision:"41c122d7c94dfd5a6ff3f43cebe87294"},{url:"js/skills.min.js",revision:"322a1cc85b33d76aab2a5fe5e868b826"},{url:"manifest.json",revision:"e755b2fc7726c198b47e78fca826379b"},{url:"notes.html",revision:"f8b82f1874af3a5857da0a3333974d57"},{url:"siri_rebellion.html",revision:"7b19865d68ba5da58f1a3fa6710f55c4"},{url:"skills.html",revision:"7e68176c680e35b46f3bbc74420c986b"}],{})}));
//# sourceMappingURL=sw.js.map
