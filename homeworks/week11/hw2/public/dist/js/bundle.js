!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){const n=e=>document.querySelector(e);n(".shortener__btn").addEventListener("click",e=>{const t=n(".shortener__url").value;t&&(n(".shortener__btn").setAttribute("disabled","disabled"),async function(){try{const e=new Headers;e.append("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");const r=new Request("/v1/shortener",{method:"POST",headers:e,body:"url="+t});let o=await fetch(r);o.ok?(n(".newurl__url").textContent=await o.text(),n(".shortener__url").value="",n(".shortener__btn").removeAttribute("disabled")):(n(".newurl__url").textContent="系統維護，請稍後再試",n(".shortener__btn").removeAttribute("disabled"))}catch(e){console.log(e),n(".newurl__url").textContent="系統維護，請稍後再試",n(".shortener__btn").removeAttribute("disabled")}}())}),n(".newurl").addEventListener("click",e=>{window.location="http://"+e.target.innerText})},function(e,t,n){}]);