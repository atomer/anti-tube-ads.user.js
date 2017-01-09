// ==UserScript==
// @name        Anti tube ads
// @namespace   http://www.atomer.sakura.ne.jp
// @description よつべの動画広告嫌い
// @include     https://www.youtube.com/watch*
// @version     1.0.0
// ==/UserScript==

let id = setInterval(() => {
    let ads = document.querySelector(".video-ads");
    if (ads) {
        ads.parentNode.removeChild(ads);
        clearInterval(id);
    }
}, 30);