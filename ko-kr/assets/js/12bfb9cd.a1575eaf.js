"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[7697],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68597:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(67294),a=r(52252),o=r(95999),l=r(37538),c=r(25108);function s(){const{status:e,network:t,wallets:r,availableConnections:s,availableConnectTypes:i,connect:p,disconnect:d}=(0,a.Os)();return n.createElement("div",{className:"buttonContainer",onClick:async()=>{if(e===a.PR.WALLET_NOT_CONNECTED)try{const e=await(0,l.s)(s.filter((e=>e.type!=a.cP.READONLY)));if(!e)throw c.log("Wallet Connect Error"),new Error("Wallet Connect Error");const t=e[0],r=e[1]||"";p(t,r)}catch(t){c.log(t)}else d()}},n.createElement("div",{className:"connectwallet"},e===a.PR.WALLET_NOT_CONNECTED?n.createElement(o.Z,{id:"ddd"},"Connect Wallet"):0==r.length?"Loading...":n.createElement("span",null,r[0].xplaAddress)))}var i=r(86010),p=r(25108);const d=()=>{const e=localStorage.getItem("xInfo"),t=JSON.parse(e)?.id||void 0;return p.log(1),n.createElement("div",null,n.createElement("div",{className:"w-full flex justify-end"},n.createElement(s,null)),n.createElement("div",{className:"mt-[20px] bg-[#FFF2CD] rounded text-[30px] flex flex-col justify-center items-center p-[30px]"},n.createElement("span",null,"\uba54\uc778 \ubc30\ub108"),n.createElement("span",null,"Start with connect wallet")),n.createElement("div",{className:"mt-[20px] font-semibold text-[20px]"},"\ucee4\ubba4\ub2c8\ud2f0 \uae30\ubcf8 \ud018\uc2a4\ud2b8 1"),n.createElement("div",{className:"mt-[20px] grid grid-cols-3 gap-[10px]"},n.createElement("div",{className:"rounded border-solid border-[1px] p-[20px] flex flex-col gap-[10px] justify-center items-center bg-[#012060] text-white"},"XPLA \ud2b8\uc704\ud130 \ud314\ub85c\uc6b0",n.createElement("div",{className:(0,i.Z)("w-full grid gap-[10px]",e&&void 0===t?"grid-cols-2 ":"grid-cols-1 ")},e?t?n.createElement("div",{className:"border-solid border-[1px] rounded bg-[#FEBF01] border-black p-[5px] hover:cursor-pointer"},"claim"):n.createElement(n.Fragment,null,n.createElement("input",{placeholder:"Input your x id"}),n.createElement("div",{className:"border-solid border-[1px] rounded bg-[#FEBF01] border-black p-[5px] hover:cursor-pointer"},"submit")):n.createElement("div",{onClick:()=>localStorage.setItem("xInfo",JSON.stringify({clicked:!0})),className:"border-solid border-[1px] rounded bg-[#FEBF01] border-black p-[5px] hover:cursor-pointer"},"Follow"))),n.createElement("div",{className:"rounded border-solid border-[1px] p-[20px] flex justify-center items-center bg-[#012060] text-white"},"\ud154\ub808\uadf8\ub7a8 \uc5b4\uca4c\uad6c"),n.createElement("div",{className:"rounded border-solid border-[1px] p-[20px] flex justify-center items-center bg-[#012060] text-white"},"\ubbf8\ub514\uc5c4 \uc5b4\uca4c\uad6c")))}},79581:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),o=r(68597),l=r(85405);const c={slug:"test",title:"Test",authors:["slorber"],tags:["docusaurus"]},s=void 0,i={permalink:"/xpla-academy-dev/ko-kr/blog/test",source:"@site/blog/2021-08-01-test.mdx",title:"Test",description:"",date:"2021-08-01T00:00:00.000Z",formattedDate:"2021\ub144 8\uc6d4 1\uc77c",tags:[{label:"docusaurus",permalink:"/xpla-academy-dev/ko-kr/blog/tags/docusaurus"}],readingTime:.06,hasTruncateMarker:!1,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",imageURL:"https://github.com/slorber.png",key:"slorber"}],frontMatter:{slug:"test",title:"Test",authors:["slorber"],tags:["docusaurus"]},prevItem:{title:"Play Game!",permalink:"/xpla-academy-dev/ko-kr/blog/play-game"},nextItem:{title:"Long Blog Post",permalink:"/xpla-academy-dev/ko-kr/blog/long-blog-post"}},p={authorsImageUrls:[void 0]},d=[],u={toc:d},m="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.Z,{mdxType:"WalletWrap"},(0,a.kt)(o.Z,{mdxType:"Market"})))}b.isMDXComponent=!0}}]);