if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const a=e=>i(e,l),u={module:{uri:l},exports:o,require:a};s[l]=Promise.all(r.map((e=>u[e]||a(e)))).then((e=>(n(...e),o)))}}define(["./workbox-4ee0fbad"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"dices.png",revision:"6d791ea5289f47a0b3b4371be9ba2faa"},{url:"flag.germany.svg",revision:"b08d85acb5d51daf23191734f92390e6"},{url:"flag.usa.svg",revision:"9d540162cf889438016b570870726b4f"},{url:"index.html",revision:"a8e5d27d311dd27188aa2c09695aaa57"},{url:"logo-128.png",revision:"0108489b346e34e850b7b8153417518f"},{url:"logo-144.png",revision:"8882cf2e9b3511b931e4876b4f1a635c"},{url:"logo-152.png",revision:"7478cc84b69e6bff7bb4ecaab169bab2"},{url:"logo-16.png",revision:"666a5f782c3711167abf34c26aa0cfd4"},{url:"logo-180.png",revision:"68f30f592a84403659ec284d020ae062"},{url:"logo-192.png",revision:"bfcb090853ddb7545e3667592bb8442a"},{url:"logo-24.png",revision:"f866b30ff83990e849bd3ac3e4182143"},{url:"logo-32.png",revision:"897730eb6324d6ed12b12514270149e7"},{url:"logo-512.png",revision:"43331623f6c495a00a3ec27db8587d77"},{url:"logo-64.png",revision:"c28847495ce87ee5c3099522968bec82"},{url:"logo.svg",revision:"5262eaf5d2a45304914d99cbe4343207"},{url:"preview-again.jpg",revision:"5fc031bdbb897f6e9d108079d3e130c7"},{url:"preview-decrypto.jpg",revision:"cb31e2823e6b781d8ed4b79afd85f381"},{url:"preview-gimmick.jpg",revision:"62ba443d3e54bae6b04073a65ac916da"},{url:"preview-quixx.jpg",revision:"907ab24c64a45f25a74a02a904233cc4"},{url:"preview-sit.jpg",revision:"fc4f1aca0abcf480d4e13208bccb9b47"},{url:"preview-veryClever.jpg",revision:"41428006f0f68a3135f88a0542b14ece"},{url:"select.svg",revision:"dcefa206f41a58750cf460f4ed71d7c6"},{url:"manifest.json",revision:"6f9de80f08924a26ec3f4d38b654591e"},{url:"assets/Cube-Cnmvxxbg.js",revision:null},{url:"assets/DisplayError-B-QuU1PC.js",revision:null},{url:"assets/FooterRestart-WM3EyTOt.js",revision:null},{url:"assets/FooterUndo-yRoqo1TH.js",revision:null},{url:"assets/index-BJQmKMjs.js",revision:null},{url:"assets/index-CPw6sur6.js",revision:null},{url:"assets/index-CQB3q3d9.js",revision:null},{url:"assets/index-CTKFQrki.js",revision:null},{url:"assets/index-Dj4gGufc.css",revision:null},{url:"assets/index-DrbDkKFX.js",revision:null},{url:"assets/index-Dt4jCKGt.js",revision:null},{url:"assets/index-VnnWUwzb.js",revision:null},{url:"assets/input-M9Vg70J2.js",revision:null},{url:"assets/PlayerSelection-DWjhOEfK.js",revision:null},{url:"assets/select-qucepJKc.js",revision:null},{url:"manifest.webmanifest",revision:"42a9bb6b50513edb1d296e2cc3e6db65"}],{}),e.cleanupOutdatedCaches()}));
