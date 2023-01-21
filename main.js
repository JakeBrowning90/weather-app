(()=>{"use strict";var e={917:(e,n,t)=>{t.d(n,{Z:()=>d});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]);const d=a},426:(e,n,t)=>{t.d(n,{Z:()=>d});var i=t(81),o=t.n(i),r=t(645),a=t.n(r)()(o());a.push([e.id,':root {\n    --dark: rgba(53, 53, 53, 0.53);\n}\n\nhtml, body {\n    font-family: Arial, sans-serif;\n    color: white;\n    background-size: cover;\n    /* background-image: url(./img/white-cloud-blue-sky.jpg); */\n    background-color: #b0c4de;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: stretch;\n}\n\nbody > * {\n    width: 50%;\n    min-width: 500px;\n    box-sizing: border-box;\n}\n\nbutton {\n    border-radius: 10px;\n}\n\n#top, #weatherOutput, #footer {\n    background-color: var(--dark);\n    padding: 10px;\n}\n\n#top {\n    flex-grow: 1;\n    display: grid;\n    grid-template-rows: repeat (3 1fr);\n    justify-content: stretch;\n    align-items: stretch;\n    margin: 5% 0;\n    border-radius: 10px;\n}\n\n#top > *, #weatherOutput > * , #footer{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#title {\n    font-size: 2rem;\n}\n\n#form {\n    display: flex;\n    align-items: stretch;\n    justify-content: space-between;\n}\n\n#cityField{\n    width: 90%;\n    border-radius: 10px;\n}\n\n#top2 {\n    flex-grow: 4;\n}\n\n#weatherOutput {\n    border-radius: 10px;\n    height: 75%;\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    grid-template-rows: repeat(6, 1fr);\n    grid-template-areas:\n        "locationDiv localTimeDiv"\n        "iconDiv conditionDiv"\n        "iconDiv windDiv"\n        "iconDiv humidityDiv"\n        "tempDiv feelsLikeDiv"\n        "tempDiv toggleDiv";\n}\n\n#weatherOutput > * {\n    border-bottom: 1px solid white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#locationDiv {\n    grid-area: locationDiv;\n    font-size: 2rem;\n}\n\n#localTimeDiv {\n    grid-area: localTimeDiv;\n}\n\n#iconDiv {\n    grid-area: iconDiv;\n}\n\n#weatherIcon {\n    height: 75%;\n}\n\n#conditionDiv {\n    grid-area: conditionDiv;\n}\n\n#windDiv {\n    grid-area: windDiv;\n}\n\n#humidityDiv {\n    grid-area: humidityDiv;\n}\n\n#feelsLikeDiv {\n    grid-area: feelsLikeDiv;\n    border-bottom: none;\n}\n\n#tempDiv {\n    grid-area: tempDiv;\n    border-bottom: none;\n    font-size: 2rem;\n}\n\n#toggleDiv {\n    grid-area: toggleDiv;\n    border-bottom: none;\n}\n\n#toggleButton {\n    height: 100%;\n    width: 100%;\n    font-size: large;\n}\n\n#footer {\n    border-radius: 10px 10px 0px 0px;\n}\n\n.hidden {\n    display: none;\n}',""]);const d=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);i&&a[s[0]]||(void 0!==r&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=r),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var r={},a=[],d=0;d<e.length;d++){var c=e[d],l=i.base?c[0]+i.base:c[0],s=r[l]||0,m="".concat(l," ").concat(s);r[l]=s+1;var u=t(m),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var f=o(p,i);i.byIndex=d,n.splice(d,0,{identifier:m,updater:f,references:1})}a.push(m)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var r=i(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var d=t(r[a]);n[d].references--}for(var c=i(e,o),l=0;l<r.length;l++){var s=t(r[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}r=c}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var r=n[i]={id:i,exports:{}};return e[i](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),i=t(795),o=t.n(i),r=t(569),a=t.n(r),d=t(565),c=t.n(d),l=t(216),s=t.n(l),m=t(589),u=t.n(m),p=t(917),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),n()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;var v=t(426),h={};function g(e){let n=async function(e){const n=new Object,t=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&APPID=e8257bcdcd628305b554f62d782b0777",{mode:"cors"}),i=await t.json();n.icon=i.weather[0].icon,n.location=i.name,n.country=i.sys.country,n.condition=i.weather[0].main;let o=Date.now(),r=new Date(o+1e3*i.timezone);return n.localTime=r.toUTCString().slice(0,-3),n.windDirection=function(e){let n;return n=348.75<e&&e<361||-1<e&&e<11.25?"N":11.25<e&&e<33.75?"NNE":33.75<e&&e<56.25?"NE":56.25<e&&e<78.75?"ENE":78.75<e&&e<101.25?"E":101.25<e&&e<123.75?"ESE":123.75<e&&e<146.25?"SE":146.25<e&&e<168.75?"SSE":168.75<e&&e<191.25?"S":191.25<e&&e<213.75?"SSW":213.75<e&&e<236.25?"SW":236.25<e&&e<258.75?"WSW":258.75<e&&e<281.25?"W":281.25<e&&e<303.75?"WNW":303.75<e&&e<326.25?"NW":326.25<e&&e<348.75?"NNW":"Invalid",n}(i.wind.deg),n.windSpeedKPH=(3.6*i.wind.speed).toFixed(0),n.windSpeedMPH=(2.237*i.wind.speed).toFixed(0),n.humidity=i.main.humidity,n.cTemp=(i.main.temp-273.15).toFixed(1),n.fTemp=(9*(i.main.temp-273.15)/5+32).toFixed(1),n.cTempFeel=(i.main.feels_like-273.15).toFixed(1),n.fTempFeel=(9*(i.main.feels_like-273.15)/5+32).toFixed(1),n}(e);n.then((function(){n.then((e=>weatherIcon.src="http://openweathermap.org/img/wn/"+e.icon+"@2x.png")),n.then((e=>locationDiv.textContent=e.location+", "+e.country)),localTimeDiv.innerHTML="Local time: <br />",n.then((e=>localTimeDiv.innerHTML+=e.localTime)),n.then((e=>conditionDiv.textContent=e.condition)),n.then((e=>metricWindDiv.textContent="Wind: "+e.windDirection+" "+e.windSpeedKPH+" km/h")),n.then((e=>imperialWindDiv.textContent="Wind: "+e.windDirection+" "+e.windSpeedMPH+" mph")),n.then((e=>humidityDiv.textContent="Humidity: "+e.humidity+"%")),n.then((e=>cTempDiv.textContent=e.cTemp+"° C")),n.then((e=>fTempDiv.textContent=e.fTemp+"° F")),n.then((e=>cTempFeelDiv.textContent="Feels like "+e.cTempFeel+"° C")),n.then((e=>fTempFeelDiv.textContent="Feels like "+e.fTempFeel+"° F"));let e=new Date;timeStamp.textContent="Last searched: "+e,function(e){let n=e.getHours();n>=9&&n<=14?document.body.style.backgroundImage="url(../src/img/white-cloud-blue-sky.jpg)":n>=15&&n<=20?document.body.style.backgroundImage="url(../src/img/nature-colorful-landscape-dusk-cloud.jpg)":n>=21||n<=2?document.body.style.backgroundImage="url(../src/img/paul-volkmer-qVotvbsuM_c-unsplash.jpg)":n>=3&&n<=8&&(document.body.style.backgroundImage="url(../src/img/sky-background-sunrise.jpg)")}(e)})),n.catch((function(e){timeStamp.innerHTML="No results found! <br />",timeStamp.innerHTML+="Try searching for a city name, or a city name followed by a comma and country / country code."}))}h.styleTagTransform=u(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=s(),n()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals,document.getElementById("timeStamp"),document.getElementById("weatherIcon"),document.getElementById("locationDiv"),document.getElementById("localTimeDiv"),document.getElementById("conditionDiv"),document.getElementById("metricWindDiv"),document.getElementById("imperialWindDiv"),document.getElementById("humidityDiv"),document.getElementById("cTempDiv"),document.getElementById("fTempDiv"),document.getElementById("cTempFeelDiv"),document.getElementById("fTempFeelDiv"),document.getElementById("toggleButton").addEventListener("click",(function(){"hidden"==fTempDiv.className?(cTempDiv.classList.add("hidden"),cTempFeelDiv.classList.add("hidden"),metricWindDiv.classList.add("hidden"),fTempDiv.classList.remove("hidden"),fTempFeelDiv.classList.remove("hidden"),imperialWindDiv.classList.remove("hidden"),toggleButton.textContent="Show metric"):"hidden"==cTempDiv.className&&(fTempDiv.classList.add("hidden"),fTempFeelDiv.classList.add("hidden"),imperialWindDiv.classList.add("hidden"),cTempDiv.classList.remove("hidden"),cTempFeelDiv.classList.remove("hidden"),metricWindDiv.classList.remove("hidden"),toggleButton.textContent="Show imperial")}));const y=document.getElementById("form"),b=document.getElementById("cityField");y.addEventListener("submit",(e=>{e.preventDefault(),g(b.value)})),g(function(){const e=["Tokyo","Mexico City","Sao Paulo","Lagos"," Istanbul","Sydney","McMurdo Station"];return e[Math.floor(Math.random()*e.length)]}())})()})();