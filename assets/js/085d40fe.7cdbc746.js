"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[1417],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=l.createContext({}),d=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return l.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(a),u=n,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return a?l.createElement(k,o(o({ref:t},p),{},{components:a})):l.createElement(k,o({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[m]="string"==typeof e?e:n,o[1]=r;for(var d=2;d<i;d++)o[d]=a[d];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},34673:(e,t,a)=>{a.d(t,{Z:()=>k});var l=a(87462),n=a(67294),i=a(86010),o=a(72389),r=a(86043);const s={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function d(e){return!!e&&("SUMMARY"===e.tagName||d(e.parentElement))}function p(e,t){return!!e&&(e===t||p(e.parentElement,t))}function m(e){let{summary:t,children:a,...m}=e;const c=(0,o.Z)(),u=(0,n.useRef)(null),{collapsed:k,setCollapsed:g}=(0,r.u)({initialState:!m.open}),[y,x]=(0,n.useState)(m.open),v=n.isValidElement(t)?t:n.createElement("summary",null,t??"Details");return n.createElement("details",(0,l.Z)({},m,{ref:u,open:y,"data-collapsed":k,className:(0,i.Z)(s.details,c&&s.isBrowser,m.className),onMouseDown:e=>{d(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;d(t)&&p(t,u.current)&&(e.preventDefault(),k?(g(!1),x(!0)):g(!0))}}),v,n.createElement(r.z,{lazy:!1,collapsed:k,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{g(e),x(!e)}},n.createElement("div",{className:s.collapsibleContent},a)))}const c={details:"details_b_Ee"},u="alert alert--info";function k(e){let{...t}=e;return n.createElement(m,(0,l.Z)({},t,{className:(0,i.Z)(u,c.details,t.className)}))}},51007:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(67294),n=a(86010);const i={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function o(e){let{children:t,minHeight:a,url:o="http://localhost:3000",style:r,bodyStyle:s}=e;return l.createElement("div",{className:i.browserWindow,style:{...r,minHeight:a}},l.createElement("div",{className:i.browserWindowHeader},l.createElement("div",{className:i.buttons},l.createElement("span",{className:i.dot,style:{background:"#f25f58"}}),l.createElement("span",{className:i.dot,style:{background:"#fbbe3c"}}),l.createElement("span",{className:i.dot,style:{background:"#58cb42"}})),l.createElement("div",{className:(0,n.Z)(i.browserWindowAddressBar,"text--truncate")},o),l.createElement("div",{className:i.browserWindowMenuIcon},l.createElement("div",null,l.createElement("span",{className:i.bar}),l.createElement("span",{className:i.bar}),l.createElement("span",{className:i.bar})))),l.createElement("div",{className:i.browserWindowBody,style:s},t))}},61497:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(67294);const n=e=>{let{imgSrc:t,style:a}=e;return l.createElement("img",{className:"max-w-sm",style:a,src:t,alt:""})}},82231:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var l=a(87462),n=(a(67294),a(3905)),i=a(34673),o=a(61497),r=a(51007);const s={sidebar_position:2},d="Vault\ub85c \uac8c\uc784 \ud1a0\ud070(CW20) \ubc1c\ud589 \ubc0f \uc804\uc1a1\ud558\uae30",p={unversionedId:"tutorial/make-cw20/make-cw20-with-vault",id:"tutorial/make-cw20/make-cw20-with-vault",title:"Vault\ub85c \uac8c\uc784 \ud1a0\ud070(CW20) \ubc1c\ud589 \ubc0f \uc804\uc1a1\ud558\uae30",description:"CW20\uc744 \uc774\uc6a9\ud558\uba74 \uac8c\uc784 \uc0dd\ud0dc\uacc4\uc640 XPLA \ube14\ub85d\uccb4\uc778\uc744 \ub354 \uc27d\uac8c \uc5f0\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. XPLA \uc9c0\uac11 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc778 Vault\ub97c \uc774\uc6a9\ud558\uc5ec \uac8c\uc784 \ud1a0\ud070\uc744 \ubc1c\ud589\ud558\uace0 \uc804\uc1a1\uae4c\uc9c0 \ud574\ubd05\uc2dc\ub2e4. Vault \uc124\uce58 \ubc0f \uc9c0\uac11 \uc0dd\uc131\uc740 \uc774\uc804 \ub2e8\uacc4\ub97c \ucc38\uace0\ud574\uc8fc\uc138\uc694.",source:"@site/docs/3-tutorial/1-make-cw20/1-make-cw20-with-vault.mdx",sourceDirName:"3-tutorial/1-make-cw20",slug:"/tutorial/make-cw20/make-cw20-with-vault",permalink:"/xpla-academy-dev/docs/tutorial/make-cw20/make-cw20-with-vault",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\uac8c\uc784 \ud1a0\ud070(CW20) \ub2e4\ub8e8\uae30",permalink:"/xpla-academy-dev/docs/category/\uac8c\uc784-\ud1a0\ud070cw20-\ub2e4\ub8e8\uae30"},next:{title:"Javascript\ub85c \uac8c\uc784 \ud1a0\ud070(CW20) \ubc1c\ud589 \ubc0f \uc804\uc1a1\ud558\uae30",permalink:"/xpla-academy-dev/docs/tutorial/make-cw20/make-cw20-with-js"}},m={},c=[{value:"CW20 \ubc1c\ud589\ud558\uae30",id:"make-cw20",level:2},{value:"Vault \uc811\uc18d",id:"make-accessvault",level:3},{value:"CW20 \ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131",id:"instantiate",level:3},{value:"\ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131 \ud655\uc778",id:"make-confirm",level:3},{value:"CW20 \uc804\uc1a1\ud558\uae30",id:"send-cw20",level:2}],u={toc:c},k="wrapper";function g(e){let{components:t,...a}=e;return(0,n.kt)(k,(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"vault\ub85c-\uac8c\uc784-\ud1a0\ud070cw20-\ubc1c\ud589-\ubc0f-\uc804\uc1a1\ud558\uae30"},"Vault\ub85c \uac8c\uc784 \ud1a0\ud070(CW20) \ubc1c\ud589 \ubc0f \uc804\uc1a1\ud558\uae30"),(0,n.kt)("p",null,"CW20\uc744 \uc774\uc6a9\ud558\uba74 \uac8c\uc784 \uc0dd\ud0dc\uacc4\uc640 XPLA \ube14\ub85d\uccb4\uc778\uc744 \ub354 \uc27d\uac8c \uc5f0\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. XPLA \uc9c0\uac11 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc778 Vault\ub97c \uc774\uc6a9\ud558\uc5ec \uac8c\uc784 \ud1a0\ud070\uc744 \ubc1c\ud589\ud558\uace0 \uc804\uc1a1\uae4c\uc9c0 \ud574\ubd05\uc2dc\ub2e4. Vault \uc124\uce58 \ubc0f \uc9c0\uac11 \uc0dd\uc131\uc740 ",(0,n.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-vault"},"\uc774\uc804 \ub2e8\uacc4"),"\ub97c \ucc38\uace0\ud574\uc8fc\uc138\uc694."),(0,n.kt)(i.Z,{summary:"CW20\uc774\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",mdxType:"Details"},(0,n.kt)("p",null,"XPLA \ube14\ub85d\uccb4\uc778\uc740 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ud50c\ub7ab\ud3fc\uc778 ",(0,n.kt)("inlineCode",{parentName:"p"},"Cosmwasm"),"\uc744 \uc774\uc6a9\ud569\ub2c8\ub2e4. \uc774\ub354\ub9ac\uc6c0\uc758 ERC20\ucc98\ub7fc, ",(0,n.kt)("strong",{parentName:"p"},"CW20"),"\uc740 ",(0,n.kt)("inlineCode",{parentName:"p"},"Cosmwasm"),"\uc5d0\uc11c \ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070(Fungible tokens)\uc5d0 \ub300\ud55c \ud45c\uc900\uc785\ub2c8\ub2e4. \ub354 \uc790\uc138\ud788 \uc54c\uace0 \uc2f6\ub2e4\uba74 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.rs/crate/cw20/0.2.3"},"\uacf5\uc2dd \ubb38\uc11c"),"\ub97c \ucc38\uace0\ud574\ubcf4\uc138\uc694.")),(0,n.kt)("h2",{id:"make-cw20"},"CW20 \ubc1c\ud589\ud558\uae30"),(0,n.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uc808\ucc28\ub85c Vault\ub97c \ud1b5\ud574 CW20\uc744 \ubc1c\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/make-cw20-with-vault#make-accessvault"},"Vault \uc811\uc18d"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/make-cw20-with-vault#instantiate"},"CW20 \ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/make-cw20-with-vault#make-confirm"},"\ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131 \ud655\uc778")))),(0,n.kt)("h3",{id:"make-accessvault"},"Vault \uc811\uc18d"),(0,n.kt)("p",null,"\uba3c\uc800 Chrome Extension \uc571\uc778 Vault\uc5d0\uc11c CW20\uc744 \ubc1c\ud589\ud560 \uc9c0\uac11\uc744 \uc120\ud0dd\ud558\uace0, \ub124\ud2b8\uc6cc\ud06c\ub97c ",(0,n.kt)("inlineCode",{parentName:"p"},"testnet"),"\uc73c\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,n.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,n.kt)("img",{style:{height:"100%"},src:"/xpla-academy-dev/img/2-settings/1-create-wallet/google.png"})),(0,n.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,n.kt)(o.Z,{imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/vault/select-testnet.png",mdxType:"VaultImgCard"}))),(0,n.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,n.kt)("img",{style:{height:"100%"},src:"/xpla-academy-dev/img/2-settings/1-create-wallet/google.png"})),(0,n.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,n.kt)(o.Z,{imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/vault/vault-testnet.png",mdxType:"VaultImgCard"}))),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://vault.xpla.io/"},"Vault \uc6f9\uc0ac\uc774\ud2b8"),"\uc5d0 \uc811\uc18d\ud558\uace0, \uc6b0\uce21 \uc0c1\ub2e8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Connect")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec \uc9c0\uac11\uc744 \uc5f0\uacb0\ud569\ub2c8\ub2e4."),(0,n.kt)(r.Z,{url:"https://vault.xpla.io/",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"40px",width:"100%",top:0,zIndex:0}}),(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"34.5px",width:"100%",top:40,zIndex:0}}),(0,n.kt)(o.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/click-connect.png",mdxType:"VaultImgCard"}))),(0,n.kt)(r.Z,{url:"https://vault.xpla.io/",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#000000CC",height:"100%",width:"100%",top:0,zIndex:0}}),(0,n.kt)(o.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/web-vault-popup.png",mdxType:"VaultImgCard"}))),(0,n.kt)(r.Z,{url:"https://vault.xpla.io/",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"18px",width:"100%",top:0,zIndex:0}}),(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:18,zIndex:0}}),(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"2.12em",width:"100%",top:59,zIndex:0}}),(0,n.kt)(o.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/vault-web-testnet.png",mdxType:"VaultImgCard"}))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"instantiate"},"CW20 \ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131"),(0,n.kt)("p",null,"Vault \uc6f9\uc5d0\uc11c Contract \ud56d\ubaa9\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,n.kt)(r.Z,{url:"https://vault.xpla.io/",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"18px",width:"100%",top:0,zIndex:0}}),(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:18,zIndex:0}}),(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"2.12em",width:"100%",top:59,zIndex:0}}),(0,n.kt)(o.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/vault-web-click-contract.png",mdxType:"VaultImgCard"}))),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Instantiate")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,n.kt)(r.Z,{url:"https://vault.xpla.io/contract",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"18px",width:"100%",top:0,zIndex:0}}),(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:18,zIndex:0}}),(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"34.5px",width:"100%",top:59,zIndex:0}}),(0,n.kt)(o.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/vault-web-click-instantiate.png",mdxType:"VaultImgCard"}))),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Admin"),"\uc774\ub780 \ucee8\ud2b8\ub799\ud2b8\uc758 \uc8fc\uc778\uc774 \ub420 \uc9c0\uac11 \uc8fc\uc18c\uc785\ub2c8\ub2e4. \uc608\uc81c\uc5d0\uc11c\ub294 ",(0,n.kt)("inlineCode",{parentName:"p"},"xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk")," \uc9c0\uac11 \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,n.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"17.5px",width:"100%",top:0,zIndex:0}}),(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:17.5,zIndex:0}}),(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"2.12em",width:"100%",top:58.5,zIndex:0}}),(0,n.kt)(o.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/vault-web-instantiate-admin.png",mdxType:"VaultImgCard"}))),(0,n.kt)("br",null),(0,n.kt)("p",null,"CW20 \ucee8\ud2b8\ub799\ud2b8\uc758 ",(0,n.kt)("inlineCode",{parentName:"p"},"Code ID"),"\ub294 ",(0,n.kt)("inlineCode",{parentName:"p"},"1"),"\uc774\ubbc0\ub85c, ",(0,n.kt)("inlineCode",{parentName:"p"},"Code ID"),"\uc5d0\ub294 ",(0,n.kt)("inlineCode",{parentName:"p"},"1"),"\uc744 \uc785\ub825\ud574\uc90d\ub2c8\ub2e4. "),(0,n.kt)(i.Z,{summary:"Code ID\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",mdxType:"Details"},(0,n.kt)("p",null,"EVM\uacfc \ub2ec\ub9ac, Cosmwasm\uc5d0\uc11c\ub294 \ucf54\ub4dc \ubc30\ud3ec(Code Deploy)\uc640 \ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131\uc774 \ud55c\ubc88\uc5d0 \uc774\ub904\uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uba3c\uc800 \ucf54\ub4dc\ub97c \ube14\ub85d\uccb4\uc778\uc5d0 \ubc30\ud3ec(StoreCode)\ud558\uba74 \ud574\ub2f9 \ucf54\ub4dc\uc758 ",(0,n.kt)("inlineCode",{parentName:"p"},"Code ID"),"\ub97c \ubc1c\uae09 \ubc1b\uc2b5\ub2c8\ub2e4. \uc774\ud6c4 ",(0,n.kt)("inlineCode",{parentName:"p"},"Code ID"),"\ub97c \uae30\ubc18\uc73c\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131(InstantiateContract)\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\ub611\uac19\uc740 Code ID\ub85c \uc0dd\uc131\ub41c \ucee8\ud2b8\ub799\ud2b8\ub4e4\uc740 \ubaa8\ub450 \uac19\uc740 \ucf54\ub4dc \uae30\ubc18\uc785\ub2c8\ub2e4. \ub2e4\ub9cc \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131\ud560 \ub54c \uc785\ub825\ud558\ub294 \ucd08\uae43\uac12(init_msg)\uc774 \ub2e4\ub974\uba74, \ucee8\ud2b8\ub799\ud2b8\uc758 \uc138\ubd80 \uc0ac\ud56d\ub3c4 \ub2ec\ub77c\uc9d1\ub2c8\ub2e4. \ub354 \uc790\uc138\ud55c \uc0ac\ud56d\uc740 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.xpla.io/docs/develop/core-modules/wasm/#code-id"},"XPLA Docs"),"\ub97c \ucc38\uace0\ud574\ubcf4\uc138\uc694.")),(0,n.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"17.5px",width:"100%",top:0,zIndex:0}}),(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:17.5,zIndex:0}}),(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"34.5px",width:"100%",top:58.5,zIndex:0}}),(0,n.kt)(o.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/vault-web-instantiate-codeid.png",mdxType:"VaultImgCard"}))),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Init msg"),"\uc5d0\ub294 \ucee8\ud2b8\ub799\ud2b8\uc758 \ucd08\uae43\uac12\uc744 \uc785\ub825\ud574\uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4. \ucd08\uae43\uac12\uc740 \ubc1c\ud589\ud560 \ud1a0\ud070\uc5d0 \ub300\ud55c \uc815\ubcf4\uc785\ub2c8\ub2e4. \ubc1c\ud589\uc790\uac00 \ub204\uad6c\uc778\uc9c0(minter), \uc5b4\ub290 \uc9c0\uac11\uc5d0 \ud1a0\ud070\uc744 \uba87 \uac1c\ub098 \ubc1c\ud589\ud560 \uac83\uc778\uc9c0(initial_balances), \ud1a0\ud070 \ub2e8\uc704\ub294 \ubb34\uc5c7\uc778\uc9c0(symbol) \ub4f1\uc744 \uc0b4\ud3b4\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,"\uc608\uc81c\uc5d0\uc11c\ub294 \uc544\ub798 \ud615\uc2dd\uc73c\ub85c \uc785\ub825\ud558\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc740 minter\uc640 address \ud56d\ubaa9\uc5d0 \ubcf8\uc778 \uc9c0\uac11 \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4. name, symbol, \ud639\uc740 amount \uac12\ub3c4 \ubc14\uafb8\uace0 \uc2f6\ub2e4\uba74 \ub2e4\ub978 \uac12\uc73c\ub85c \ub123\uc5b4\uc8fc\uc138\uc694."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "My CW20 Token",\n  "symbol": "MCT",\n  "decimals": 6,\n  "initial_balances": [\n    {\n      "address": "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk",\n      "amount": "2000000000000000"\n    }\n  ],\n  "mint": {\n    "minter": "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk"\n  }\n}\n')),(0,n.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"18.5px",width:"100%",top:0,zIndex:0}}),(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"41px",width:"100%",top:18.5,zIndex:0}}),(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"33px",width:"100%",top:58.5,zIndex:0}}),(0,n.kt)(o.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/vault-web-instantiate-initmsg.png",mdxType:"VaultImgCard"}))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\uc608\uc81c\ucc98\ub7fc \ucd08\uae43\uac12\uc744 \uc124\uc815\ud558\uba74, \ubc1c\ud589\ud55c CW20 \ud1a0\ud070\uc758 \uae30\ubcf8 \ub2e8\uc704\ub294 ",(0,n.kt)("strong",{parentName:"p"},"MCT"),"\uc785\ub2c8\ub2e4. \uadf8\ub7f0\ub370 \ub54c\ub85c\ub294 \ub354 \uc791\uc740 \ub2e8\uc704\uac00 \ud544\uc694\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. CW20\uc758 \ucd5c\uc18c \ub2e8\uc704\ub294 \uae30\ubcf8 \ub2e8\uc704\uc5d0 \uc811\ub450\uc0ac\ub85c ",(0,n.kt)("strong",{parentName:"p"},"u"),"\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4. \uc608\uc81c \ucee8\ud2b8\ub799\ud2b8\ub294 ",(0,n.kt)("strong",{parentName:"p"},"uMCT"),"\uac00 \ub418\uaca0\uad70\uc694."),(0,n.kt)("p",{parentName:"admonition"},"\uc608\uc81c \ucd08\uae43\uac12\uc5d0\uc11c ",(0,n.kt)("inlineCode",{parentName:"p"},"decimals")," \ud56d\ubaa9\uc744 ",(0,n.kt)("strong",{parentName:"p"},"6"),"\uc73c\ub85c \uc9c0\uc815\ud588\uae30 \ub54c\ubb38\uc5d0 10",(0,n.kt)("sup",null,"6")," ",(0,n.kt)("strong",{parentName:"p"},"uMCT")," = 1 ",(0,n.kt)("strong",{parentName:"p"},"MCT")," \uac00 \ub429\ub2c8\ub2e4. \ucc38\uace0\ub85c ",(0,n.kt)("strong",{parentName:"p"},"XPLA"),"\ub294 decimals\ub294 ",(0,n.kt)("strong",{parentName:"p"},"18"),"\uc774\ubbc0\ub85c, 10",(0,n.kt)("sup",null,"18")," ",(0,n.kt)("strong",{parentName:"p"},"aXPLA")," = 1 ",(0,n.kt)("strong",{parentName:"p"},"XPLA")," \uc600\uc2b5\ub2c8\ub2e4. ")),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Amount"),"\ub294 \ucee8\ud2b8\ub799\ud2b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Instantiate"),"\ub97c \uc9c4\ud589\ud560 \ub54c, \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc804\uc1a1\ud558\uace0 \uc2f6\uc740 XPLA \uc218\ub7c9\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4. CW20 \ucee8\ud2b8\ub799\ud2b8\ub294 XPLA \ucf54\uc778\uc744 \ubcf4\uc720\ud560 \uc774\uc720\uac00 \uc5c6\uc73c\ubbc0\ub85c, \uc774 \ubd80\ubd84\uc740 \uc0dd\ub7b5\ud558\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Label"),"\uc740 \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ub2a5\uc744 \ub098\ud0c0\ub0b4\ub3c4\ub85d \uc791\uc131\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4. \uc608\uc81c\uc5d0\uc11c\ub294 ",(0,n.kt)("inlineCode",{parentName:"p"},"My CW20 Token"),"\uc73c\ub85c \uae30\uc785\ud558\uaca0\uc2b5\ub2c8\ub2e4. \uc774\ud6c4 Submit \ubc84\ud2bc\uc744 \ub20c\ub7ec\uc8fc\uc138\uc694."),(0,n.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#FC9803",height:"16.5px",width:"100%",top:0,zIndex:0}}),(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#031435",height:"38.5px",width:"100%",top:16.5,zIndex:0}}),(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#031435F5",height:"33.5px",width:"100%",top:55,zIndex:0}}),(0,n.kt)(o.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/vault-web-instantiate-label.png",mdxType:"VaultImgCard"}))),(0,n.kt)("br",null),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\ucee8\ud2b8\ub799\ud2b8\ub97c ",(0,n.kt)("inlineCode",{parentName:"p"},"Instantiate"),"\ud558\uace0 \uc2f6\uc740\ub370, \uac01 \ud56d\ubaa9\uc5d0 \uc5b4\ub5a4 \uac12\uc744 \uc785\ub825\ud574\uc57c \ud560 \uc9c0 \ubaa8\ub97c \ub54c\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7f4 \ub54c\ub294 \uac19\uc740 ",(0,n.kt)("inlineCode",{parentName:"p"},"Code ID"),"\ub85c ",(0,n.kt)("inlineCode",{parentName:"p"},"Instantiate"),"\ub41c \ucee8\ud2b8\ub799\ud2b8\ub97c \ucc38\uace0\ud558\uba74 \ub429\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, ",(0,n.kt)("inlineCode",{parentName:"p"},"Code ID"),"\uac00 1\uc778 \ub2e4\ub978 CW20 \ucee8\ud2b8\ub799\ud2b8\ub97c ",(0,n.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/testnet/address/xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc#InitMsg"},"XPLA Explorer"),"\uc5d0\uc11c \uc0b4\ud3b4\ubd05\uc2dc\ub2e4. ",(0,n.kt)("inlineCode",{parentName:"p"},"Init Msg")," \uac12\uc744 \ucc38\uace0\ud558\uc5ec \uc5ec\ub7ec\ubd84\uc758 \uae30\ud638\ub300\ub85c \ub0b4\uc6a9\uc744 \uc218\uc815\ud558\uba74, \uc27d\uac8c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.  ")),(0,n.kt)("br",null),(0,n.kt)("p",null,"Submit \ubc84\ud2bc\uc744 \ub204\ub974\uba74 Chrome Extension Vault \uc571\uc5d0\uc11c \ud31d\uc5c5\uc774 \ud558\ub098 \ub728\uac8c \ub429\ub2c8\ub2e4. \uc774\ub54c Password\ub97c \uc785\ub825\ud558\uba74, ",(0,n.kt)("inlineCode",{parentName:"p"},"Instantatie")," Method \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud558\uac8c \ub418\ub294 \uac83\uc785\ub2c8\ub2e4. \uc9c0\uac11\uc744 \ub9cc\ub4e4\uc5c8\uc744 \ub54c \uc124\uc815\ud588\ub358 Password\ub97c \uc785\ub825\ud558\uace0, Post \ubc84\ud2bc\uc744 \ub20c\ub7ec\uc8fc\uc138\uc694."),(0,n.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:"0px 0px 16px 0px"},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center"},(0,n.kt)(o.Z,{imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/input-password.png",mdxType:"VaultImgCard"}))),(0,n.kt)("br",null),(0,n.kt)("p",null,"\uc11c\uba85\uc774 \uc644\ub8cc\ub418\uba74 \ud2b8\ub79c\uc7ad\uc158\uc774 XPLA \ube14\ub85d\uccb4\uc778\uc5d0 \uae30\ub85d\ub420 \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub824\uc57c \ud569\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc774 \uc0dd\uc131\ub418\uc5c8\ub2e4\uba74 ",(0,n.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),"\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158 \uc815\ubcf4\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Tx hash \uac12\uc744 \ud074\ub9ad\ud574\ubcf4\uc138\uc694."),(0,n.kt)(r.Z,{url:"https://vault.xpla.io/contract/instantiate",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,n.kt)("div",{style:{position:"absolute",backgroundColor:"#000000CC",height:"100%",width:"100%",top:0,zIndex:0}}),(0,n.kt)(o.Z,{style:{zIndex:1,zoom:"200%"},imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/success-tx-click-hash.png",mdxType:"VaultImgCard"}))),(0,n.kt)(r.Z,{url:"https://explorer.xpla.io/testnet/tx/E3D5F9E105E5E8729A357BB6B44E54372FF46B1C6D97C6542D8617694E2D2AD5",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,n.kt)(o.Z,{style:{zIndex:1,maxWidth:"100%"},imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/explorer-tx.png",mdxType:"VaultImgCard"}))),(0,n.kt)("br",null),(0,n.kt)("h3",{id:"make-confirm"},"\ucee8\ud2b8\ub799\ud2b8 \uc0dd\uc131 \ud655\uc778"),(0,n.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158\uc774 \uc798 \ub098\uc654\ub2e4\uba74 EventLogs\uc5d0\uc11c \uc5ec\ub7ec\ubd84\uc774 \ubc1c\ud589\ud55c CW20 \ud1a0\ud070\uc758 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub97c \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),(0,n.kt)(r.Z,{url:"https://explorer.xpla.io/testnet/tx/E3D5F9E105E5E8729A357BB6B44E54372FF46B1C6D97C6542D8617694E2D2AD5#EventLogs",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,n.kt)(o.Z,{style:{zIndex:1,maxWidth:"100%"},imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/vault/eventlogs.png",mdxType:"VaultImgCard"}))),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Init msg")," \uac12\uc744 \uc785\ub825\ud560 \ub54c, ",(0,n.kt)("inlineCode",{parentName:"p"},"initial_balances")," \ud56d\ubaa9\uc5d0\uc11c CW20 \ud1a0\ud070\uc744 \uc5b4\ub290 \uc9c0\uac11\uc5d0 \uba87 \uac1c \ubc1c\ud589\ud560 \uac83\uc778\uc9c0\ub97c \uae30\uc785\ud588\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud574\ub2f9 \uc9c0\uac11\uc5d0 \ud1a0\ud070\uc774 \uc798 \ub4e4\uc5b4\uc654\ub294\uc9c0\ub97c \ud655\uc778\ud574\ubd10\uc57c\uaca0\uc9c0\uc694. \uc5ed\uc2dc Vault\uc5d0\uc11c \uc27d\uac8c \ud655\uc778\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,n.kt)("p",null,"Chrome Extension \uc571 Vault\uc5d0\uc11c ",(0,n.kt)("inlineCode",{parentName:"p"},"Add tokens"),"\ub97c \ud074\ub9ad\ud574\uc8fc\uc138\uc694. "),(0,n.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,n.kt)("img",{style:{height:"100%"},src:"/xpla-academy-dev/img/2-settings/1-create-wallet/google.png"})),(0,n.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,n.kt)(o.Z,{imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/vault/vault-addtokens.png",mdxType:"VaultImgCard"}))),(0,n.kt)("br",null),(0,n.kt)("p",null,"\uac80\uc0c9\ucc3d\uc5d0 \uc5ec\ub7ec\ubd84\uc758 CW20 \ud1a0\ud070 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),(0,n.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,n.kt)("img",{style:{height:"100%"},src:"/xpla-academy-dev/img/2-settings/1-create-wallet/google.png"})),(0,n.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,n.kt)(o.Z,{imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/vault/vault-search.png",mdxType:"VaultImgCard"}))),(0,n.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,n.kt)("img",{style:{height:"100%"},src:"/xpla-academy-dev/img/2-settings/1-create-wallet/google.png"})),(0,n.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,n.kt)(o.Z,{imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/vault/vault-search-token.png",mdxType:"VaultImgCard"}))),(0,n.kt)("br",null),(0,n.kt)("p",null,"\uc774\ucc98\ub7fc Vault\uc5d0\uc11c MCT \ud1a0\ud070\uc774 \uc798 \ubc1c\ud589\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4! "),(0,n.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,n.kt)("img",{style:{height:"100%"},src:"/xpla-academy-dev/img/2-settings/1-create-wallet/google.png"})),(0,n.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,n.kt)(o.Z,{imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/vault/vault-add-cw20.png",mdxType:"VaultImgCard"}))),(0,n.kt)(i.Z,{summary:"initial_balances\uc5d0\uc11c amount\uac12\uc774 2,000,000,000,000,000\uac1c\uc778\ub370 \uc65c 2,000,000,000\uac1c \ubc16\uc5d0 \ub4e4\uc5b4 \uc788\uc9c0 \uc54a\ub098\uc694?",mdxType:"Details"},(0,n.kt)("p",null,"initial_balances\uc5d0\uc11c amount\uac12\uc758 \ub2e8\uc704\uac00 uMCT\uc600\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. decimals\ub97c ",(0,n.kt)("strong",{parentName:"p"},"6"),"\uc73c\ub85c \uc9c0\uc815\ud588\uae30 \ub54c\ubb38\uc5d0 uMCT 2,000,000,000,000,000\uac1c\ub294 MCT 2,000,000,000\uac1c\uc640 \ub3d9\uc77c\ud55c \uac12\uc785\ub2c8\ub2e4. \uc989, \uc815\uc0c1\uc801\uc73c\ub85c \ubc1c\ud589\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")),(0,n.kt)("br",null),(0,n.kt)("h2",{id:"send-cw20"},"CW20 \uc804\uc1a1\ud558\uae30"),(0,n.kt)("p",null,"\ubc1c\ud589\ud55c CW20\uc744 \ub2e4\ub978 \uc9c0\uac11\uc73c\ub85c \uc804\uc1a1\ud574\ubd05\uc2dc\ub2e4. Chrome Extension \uc571 Vault\uc5d0\uc11c \uc804\uc1a1\ud558\uace0 \uc2f6\uc740 CW20 \ud1a0\ud070\uc758 ",(0,n.kt)("inlineCode",{parentName:"p"},"Send")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,n.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,n.kt)("img",{style:{height:"100%"},src:"/xpla-academy-dev/img/2-settings/1-create-wallet/google.png"})),(0,n.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,n.kt)(o.Z,{imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/vault/vault-click-send.png",mdxType:"VaultImgCard"}))),(0,n.kt)("br",null),(0,n.kt)("p",null,"\ubcf4\ub0b4\uace0 \uc2f6\uc740 \uc9c0\uac11 \uc8fc\uc18c\ub97c Recipient\uc5d0, \ubcf4\ub0b4\uace0 \uc2f6\uc740 \uc218\ub7c9\ub9cc\ud07c Amount\uc5d0  \uc785\ub825\ud569\ub2c8\ub2e4. \uc608\uc81c\uc5d0\uc11c\ub294 ",(0,n.kt)("inlineCode",{parentName:"p"},"xpla1f6hcc3hpxyg8rst9d5sg393e5jaj7453t0xmz8")," \uc9c0\uac11\uc73c\ub85c 10 MCT\ub9cc\ud07c \uc804\uc1a1\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,n.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,n.kt)("img",{style:{height:"100%"},src:"/xpla-academy-dev/img/2-settings/1-create-wallet/google.png"})),(0,n.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,n.kt)(o.Z,{imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/vault/send-input-amount.png",mdxType:"VaultImgCard"}))),(0,n.kt)("br",null),(0,n.kt)("p",null,"Memo \ud56d\ubaa9\uc740 \uc0dd\ub7b5\ud558\uace0, \ubc14\ub85c Password\ub97c \uc785\ub825 \ud6c4 ",(0,n.kt)("inlineCode",{parentName:"p"},"Submit")," \ubc84\ud2bc\uc744 \ub20c\ub800\uc2b5\ub2c8\ub2e4."),(0,n.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,n.kt)("img",{style:{height:"100%"},src:"/xpla-academy-dev/img/2-settings/1-create-wallet/google.png"})),(0,n.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,n.kt)(o.Z,{imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/vault/send-submit.png",mdxType:"VaultImgCard"}))),(0,n.kt)("br",null),(0,n.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158\uc774 \uc804\ud30c\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ud31d\uc5c5\uc744 \uae30\ub2e4\ub9ac\uba74 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc798 \uc0dd\uc131\ub418\uc5c8\ub2e4\ub294 \uacb0\uacfc\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub54c \ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc\uac12\uc744 \ud074\ub9ad\ud558\uba74 CW20 \uc804\uc1a1 \ud2b8\ub79c\uc7ad\uc158\uc744 ",(0,n.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,n.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,n.kt)("img",{style:{height:"100%"},src:"/xpla-academy-dev/img/2-settings/1-create-wallet/google.png"})),(0,n.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,n.kt)(o.Z,{imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/vault/send-click-txhash.png",mdxType:"VaultImgCard"}))),(0,n.kt)(r.Z,{url:"https://explorer.xpla.io/testnet/tx/573D9161AC25F1691E2ADADD15C68B747FC783F4C13DBAD8BBB26CEE4C8174A1",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,n.kt)(o.Z,{style:{zIndex:1,maxWidth:"100%"},imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/vault/send-explorer.png",mdxType:"VaultImgCard"}))),(0,n.kt)("br",null),(0,n.kt)("p",null,"\ub2e4\uc2dc \uc9c0\uac11\uc744 \uc0b4\ud3b4\ubcf4\uba74 \uae30\uc874 2000000000\uac1c \uc788\uc5c8\ub358 MCT\uac00 10\uac1c \ub9cc\ud07c \uc904\uc5b4\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4. CW20 \uc804\uc1a1\uc774 \uc798 \uc9c4\ud589\ub418\uc5c8\uad70\uc694!"),(0,n.kt)(r.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,n.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,n.kt)("img",{style:{height:"100%"},src:"/xpla-academy-dev/img/2-settings/1-create-wallet/google.png"})),(0,n.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,n.kt)(o.Z,{imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/vault/send-result.png",mdxType:"VaultImgCard"}))),(0,n.kt)("br",null),(0,n.kt)("p",null,"\uc774\ub807\uac8c Vault \uc571\uc73c\ub85c CW20 \ud1a0\ud070 \ubc1c\ud589\uacfc \uc804\uc1a1\ud558\ub294 \ubc29\ubc95\uc744 \uc54c\uc544\ubcf4\uc558\uc2b5\ub2c8\ub2e4. ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/make-cw20-with-js"},"\ub2e4\uc74c \ub2e8\uacc4"),"\uc5d0\uc11c\ub294 Javascript \ucf54\ub4dc\ub85c \uc9c1\uc811 CW20 \ud1a0\ud070\uc744 \ubc1c\ud589\ud558\uace0 \uc804\uc1a1\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."))}g.isMDXComponent=!0}}]);