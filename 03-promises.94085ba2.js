function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");document.querySelector(".form");const u=document.querySelector('input[name="delay"]'),l=document.querySelector('input[name="step"]'),d=document.querySelector('input[name="amount"]');function s(e,t){return new Promise(((o,n)=>{setTimeout((()=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}document.querySelector('button[type="submit"]').addEventListener("click",(t=>{t.preventDefault();let o=Number(u.value),n=Number(l.value);console.log(o);for(let t=0;t<d.value;t+=1)s(1+t,o+t*n).then((({position:t,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(i).Notify.success(`❌ Rejected promise ${t} in ${o}ms`)}))}));
//# sourceMappingURL=03-promises.94085ba2.js.map
