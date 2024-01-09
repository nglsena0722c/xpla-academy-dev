(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[1496],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>d,kt:()=>f});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=l.createContext({}),i=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=i(e.components);return l.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=i(n),u=o,f=m["".concat(s,".").concat(u)]||m[u]||p[u]||r;return n?l.createElement(f,a(a({ref:t},d),{},{components:n})):l.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:o,a[1]=c;for(var i=2;i<r;i++)a[i]=n[i];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68597:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var l=n(67294),o=n(52252),r=n(95999),a=n(37538),c=n(25108);function s(){const{status:e,network:t,wallets:n,availableConnections:s,availableConnectTypes:i,connect:d,disconnect:m}=(0,o.Os)();return l.createElement("div",{className:"buttonContainer",onClick:async()=>{if(e===o.PR.WALLET_NOT_CONNECTED)try{const e=await(0,a.s)(s.filter((e=>e.type!=o.cP.READONLY)));if(!e)throw c.log("Wallet Connect Error"),new Error("Wallet Connect Error");const t=e[0],n=e[1]||"";d(t,n)}catch(t){c.log(t)}else m()}},l.createElement("div",{className:"connectwallet"},e===o.PR.WALLET_NOT_CONNECTED?l.createElement(r.Z,{id:"ddd"},"Connect Wallet"):0==n.length?"Loading...":l.createElement("span",null,n[0].xplaAddress)))}var i=n(86010),d=n(25108);const m=()=>{const e=localStorage.getItem("xInfo"),t=JSON.parse(e)?.id||void 0;return d.log(1),l.createElement("div",null,l.createElement("div",{className:"w-full flex justify-end"},l.createElement(s,null)),l.createElement("div",{className:"mt-[20px] bg-[#FFF2CD] rounded text-[30px] flex flex-col justify-center items-center p-[30px]"},l.createElement("span",null,"\uba54\uc778 \ubc30\ub108"),l.createElement("span",null,"Start with connect wallet")),l.createElement("div",{className:"mt-[20px] font-semibold text-[20px]"},"\ucee4\ubba4\ub2c8\ud2f0 \uae30\ubcf8 \ud018\uc2a4\ud2b8 1"),l.createElement("div",{className:"mt-[20px] grid grid-cols-3 gap-[10px]"},l.createElement("div",{className:"rounded border-solid border-[1px] p-[20px] flex flex-col gap-[10px] justify-center items-center bg-[#012060] text-white"},"XPLA \ud2b8\uc704\ud130 \ud314\ub85c\uc6b0",l.createElement("div",{className:(0,i.Z)("w-full grid gap-[10px]",e&&void 0===t?"grid-cols-2 ":"grid-cols-1 ")},e?t?l.createElement("div",{className:"border-solid border-[1px] rounded bg-[#FEBF01] border-black p-[5px] hover:cursor-pointer"},"claim"):l.createElement(l.Fragment,null,l.createElement("input",{placeholder:"Input your x id"}),l.createElement("div",{className:"border-solid border-[1px] rounded bg-[#FEBF01] border-black p-[5px] hover:cursor-pointer"},"submit")):l.createElement("div",{onClick:()=>localStorage.setItem("xInfo",JSON.stringify({clicked:!0})),className:"border-solid border-[1px] rounded bg-[#FEBF01] border-black p-[5px] hover:cursor-pointer"},"Follow"))),l.createElement("div",{className:"rounded border-solid border-[1px] p-[20px] flex justify-center items-center bg-[#012060] text-white"},"\ud154\ub808\uadf8\ub7a8 \uc5b4\uca4c\uad6c"),l.createElement("div",{className:"rounded border-solid border-[1px] p-[20px] flex justify-center items-center bg-[#012060] text-white"},"\ubbf8\ub514\uc5c4 \uc5b4\uca4c\uad6c")))}},37538:(e,t,n)=>{"use strict";n.d(t,{s:()=>o});const l="\n@keyframes wallet-select-modal--dim-enter {\n  0% {\n    opacity: 0;\n  }\n  \n  100% {\n    opacity: 1;\n  }\n}\n@keyframes wallet-select-modal--content-enter {\n  0% {\n    opacity: 0;\n    transform: scale(0.4);\n  }\n  \n  100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.wallet-select-modal {\n  position: fixed;\n  z-index: 100000;\n  \n  color: #212121;\n  \n  left: 0;\n  top: 0;\n  bottom : 0;\n  width: 100vw;\n  \n  font-family: sans-serif;\n  \n  display: grid;\n  place-content: center;\n}\n.wallet-select-modal > .wallet-select-modal--dim {\n  position: fixed;\n  z-index: -1;\n  \n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.3);\n  \n  animation: wallet-select-modal--dim-enter 0.2s ease-in-out;\n}\n.wallet-select-modal > .wallet-select-modal--content {\n  box-sizing: border-box;\n  \n  border-radius: 8px;\n  \n  background-color: #ffffff;\n  box-shadow: 0 4px 18px 3px rgba(0, 0, 0, 0.43);\n  \n  animation: wallet-select-modal--content-enter 0.2s ease-in-out;\n  \n  width: 100vw;\n  max-width: 480px;\n  padding: 40px;\n}\n.wallet-select-modal > .wallet-select-modal--content h1 {\n  font-size: 20px;\n  font-weight: bold;\n  \n  margin: 0 0 32px 0;\n  \n  text-align: center;\n}\n.wallet-select-modal > .wallet-select-modal--content ul {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  \n  display: flex;\n  flex-direction: column;\n}\n.wallet-select-modal > .wallet-select-modal--content ul li {\n  border-top: 1px solid #cfd8ea;\n}\n.wallet-select-modal > .wallet-select-modal--content ul li:last-child {\n  border-bottom: 1px solid #cfd8ea;\n}\n.wallet-select-modal > .wallet-select-modal--content ul button {\n  width: 100%;\n  height: 66px;\n  \n  border: none;\n  background-color: transparent;\n  outline: none;\n  cursor: pointer;\n  \n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n.wallet-select-modal > .wallet-select-modal--content ul button:hover {\n  background-color: hsl(220, 39%, 86%, 0.25);\n}\n.wallet-select-modal > .wallet-select-modal--content ul button .wallet-select-modal--icon {\n  display: inline-grid;\n  width: 50px;\n  height: 50px;\n  \n  place-content: center;\n}\n.wallet-select-modal > .wallet-select-modal--content ul button .wallet-select-modal--icon img {\n  width: 30px;\n  height: 30px;\n}\n.wallet-select-modal > .wallet-select-modal--content ul button .wallet-select-modal--description {\n  flex: 1;\n  text-align: left;\n  \n  font-size: 16px;\n  font-weight: 600;\n  color: #212121;\n}\n.wallet-select-modal > .wallet-select-modal--content ul button svg {\n  width: 18px;\n  height: 18px;\n  \n  fill: #cfd8ea;\n}\n.wallet-select-modal > .wallet-select-modal--content ul button:hover svg {\n  fill: #2043b5;\n}\n@media (max-width: 450px) {\n  .wallet-select-modal {\n    place-content: flex-end;\n  }\n  \n  .wallet-select-modal > .wallet-select-modal--content {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n  }\n}\n";function o(e){return new Promise((t=>{const n=document.createElement("style"),o=document.createElement("div");const r=function(e){let{connections:t,onComplete:n}=e;const l=document.createElement("div");l.setAttribute("class","wallet-select-modal");const o=document.createElement("div");o.setAttribute("class","wallet-select-modal--dim"),l.appendChild(o);const r=document.createElement("section");r.setAttribute("class","wallet-select-modal--content"),l.appendChild(r);const a=document.createElement("h1");a.textContent="Select a Wallet",r.appendChild(a);const c=document.createElement("ul");r.appendChild(c);for(const s of t){const e=document.createElement("li"),t=document.createElement("button");t.addEventListener("click",(()=>n(s))),e.appendChild(t);const l=document.createElement("span");l.setAttribute("class","wallet-select-modal--icon"),t.appendChild(l);const o=document.createElement("img");o.setAttribute("src",s.icon),o.setAttribute("alt",`${s.name} [${s.identifier}]`),l.appendChild(o);const r=document.createElement("span");r.setAttribute("class","wallet-select-modal--description"),r.textContent=s.name,t.appendChild(r);const a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("viewBox","0 0 24 24"),t.appendChild(a);const i=document.createElementNS("http://www.w3.org/2000/svg","path");i.setAttribute("d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"),a.appendChild(i),c.appendChild(e)}return o.addEventListener("click",(()=>n(null))),l}({connections:e,onComplete:function(e){t(e?[e.type,e.identifier]:null),n.parentElement?.removeChild(n),o.parentElement?.removeChild(o),document.body.style.overflow="unset"}});n.textContent=l,o.appendChild(r),document.querySelector("head")?.appendChild(n),document.querySelector("body")?.appendChild(o),document.body.style.overflow="hidden"}))}},85405:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var l=n(52252),o=n(67294),r=n(25108);const a=e=>{let{children:t}=e;const[n,a]=(0,o.useState)(),[c,s]=(0,o.useState)(!0);return(0,o.useEffect)((()=>{s("undefined"==typeof window)}),[]),(0,o.useEffect)((()=>{(0,l.c3)().then((e=>a(e))).catch((e=>{r.log(e)}))}),[]),c?o.createElement(o.Fragment,null):o.createElement(l.nS,n,t)}},1818:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>m});var l=n(87462),o=(n(67294),n(3905)),r=n(68597),a=n(85405);const c={slug:"test",title:"Test",authors:["slorber"],tags:["docusaurus"]},s=void 0,i={permalink:"/xpla-academy-dev/ko-kr/blog/test",source:"@site/blog/2021-08-01-test.mdx",title:"Test",description:"",date:"2021-08-01T00:00:00.000Z",formattedDate:"2021\ub144 8\uc6d4 1\uc77c",tags:[{label:"docusaurus",permalink:"/xpla-academy-dev/ko-kr/blog/tags/docusaurus"}],readingTime:.06,hasTruncateMarker:!1,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",imageURL:"https://github.com/slorber.png",key:"slorber"}],frontMatter:{slug:"test",title:"Test",authors:["slorber"],tags:["docusaurus"]},prevItem:{title:"Play Game!",permalink:"/xpla-academy-dev/ko-kr/blog/play-game"},nextItem:{title:"Long Blog Post",permalink:"/xpla-academy-dev/ko-kr/blog/long-blog-post"}},d={authorsImageUrls:[void 0]},m=[],p={toc:m},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{mdxType:"WalletWrap"},(0,o.kt)(r.Z,{mdxType:"Market"})))}f.isMDXComponent=!0},36563:()=>{},46601:()=>{},89214:()=>{},85568:()=>{},34845:()=>{},52361:()=>{},94616:()=>{},33370:()=>{}}]);