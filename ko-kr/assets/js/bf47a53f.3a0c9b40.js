"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[8486],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34673:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(87462),a=n(67294),o=n(86010),l=n(72389),c=n(86043);const i={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function s(e){return!!e&&("SUMMARY"===e.tagName||s(e.parentElement))}function p(e,t){return!!e&&(e===t||p(e.parentElement,t))}function d(e){let{summary:t,children:n,...d}=e;const u=(0,l.Z)(),m=(0,a.useRef)(null),{collapsed:k,setCollapsed:y}=(0,c.u)({initialState:!d.open}),[f,v]=(0,a.useState)(d.open),w=a.isValidElement(t)?t:a.createElement("summary",null,t??"Details");return a.createElement("details",(0,r.Z)({},d,{ref:m,open:f,"data-collapsed":k,className:(0,o.Z)(i.details,u&&i.isBrowser,d.className),onMouseDown:e=>{s(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;s(t)&&p(t,m.current)&&(e.preventDefault(),k?(y(!1),v(!0)):y(!0))}}),w,a.createElement(c.z,{lazy:!1,collapsed:k,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{y(e),v(!e)}},a.createElement("div",{className:i.collapsibleContent},n)))}const u={details:"details_b_Ee"},m="alert alert--info";function k(e){let{...t}=e;return a.createElement(d,(0,r.Z)({},t,{className:(0,o.Z)(m,u.details,t.className)}))}},7765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),o=n(34673),l=n(60614),c=n(39960);const i={sidebar_position:1},s="XPLA Academy \uc2dc\uc791\ud558\uae30",p={unversionedId:"overview/intro",id:"overview/intro",title:"XPLA Academy \uc2dc\uc791\ud558\uae30",description:"XPLA Academy\ub294 XPLA \ube14\ub85d\uccb4\uc778\uc5d0\uc11c \ucc98\uc74c \uac1c\ubc1c\uc744 \uc2dc\uc791\ud558\ub824\ub294 \ubd84\ub4e4\uc744 \uc704\ud574 \uc791\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ubcf8\ubb38 \uad6c\uc131\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko-kr/docusaurus-plugin-content-docs/current/1-overview/1-intro.mdx",sourceDirName:"1-overview",slug:"/overview/intro",permalink:"/xpla-academy-dev/ko-kr/docs/overview/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Create wallet",permalink:"/xpla-academy-dev/ko-kr/docs/category/create-wallet"}},d={},u=[],m={toc:u},k="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(k,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"xpla-academy-\uc2dc\uc791\ud558\uae30"},"XPLA Academy \uc2dc\uc791\ud558\uae30"),(0,a.kt)("p",null,"XPLA Academy\ub294 XPLA \ube14\ub85d\uccb4\uc778\uc5d0\uc11c \ucc98\uc74c \uac1c\ubc1c\uc744 \uc2dc\uc791\ud558\ub824\ub294 \ubd84\ub4e4\uc744 \uc704\ud574 \uc791\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ubcf8\ubb38 \uad6c\uc131\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,a.kt)(l.Z,{mdxType:"CodeBlock"},(0,a.kt)("p",null,"Overview\n","\xa0","\xa0","\xa0","\xa0",(0,a.kt)(c.Z,{to:"/docs/overview/intro",mdxType:"Link"},"XPLA Academy \uc2dc\uc791\ud558\uae30"),"\n","\xa0","\xa0","\xa0","\xa0","Web3 Game Architecture (Coming Soon)     # XPLA Web3 Game\uc744 \uc9c1\uc811 \ub530\ub77c \ub9cc\ub4e4\uc5b4 \ubcfc \uac83\uc785\ub2c8\ub2e4."),(0,a.kt)("p",null,"Settings\n","\xa0","\xa0","\xa0","\xa0","\uc9c0\uac11 \uc0dd\uc131\ud558\uae30\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)(c.Z,{to:"/docs/settings/create-wallet/create-wallet-with-vault",mdxType:"Link"},"\uc9c0\uac11 \ub9cc\ub4e4\uae30 (Vault)"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)(c.Z,{to:"/docs/settings/create-wallet/create-wallet-with-js",mdxType:"Link"},"\uc9c0\uac11 \ub9cc\ub4e4\uae30 (Javascript)"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)(c.Z,{to:"/docs/settings/create-wallet/create-wallet-with-xplad",mdxType:"Link"},"\uc9c0\uac11 \ub9cc\ub4e4\uae30 (CLI)"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)(c.Z,{to:"/docs/settings/create-wallet/get-testnet-xpla",mdxType:"Link"},"\ud14c\uc2a4\ud2b8\ub137 XPLA \ucf54\uc778 \ubc1b\uae30"),"\n","\xa0","\xa0","\xa0","\xa0","\ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131\ud558\uae30\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)(c.Z,{to:"/docs/settings/create-testnet-transaction/send-tx",mdxType:"Link"},"XPLA \uc804\uc1a1 \ud2b8\ub79c\uc7ad\uc158 \ub9cc\ub4e4\uae30"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)(c.Z,{to:"/docs/settings/create-testnet-transaction/check-tx-in-explorer",mdxType:"Link"},"\ud2b8\ub79c\uc7ad\uc158 \ud655\uc778\ud558\uae30 (Explorer)"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)(c.Z,{to:"/docs/settings/create-testnet-transaction/send-query",mdxType:"Link"},"\ud2b8\ub79c\uc7ad\uc158 \ud655\uc778\ud558\uae30 (Javascript)"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)(c.Z,{to:"/docs/settings/create-testnet-transaction/use-xplad",mdxType:"Link"},"\ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131 \ubc0f \ud655\uc778\ud558\uae30 (CLI)")),(0,a.kt)("p",null,"Code Along Tutorial\n","\xa0","\xa0","\xa0","\xa0","\ud1a0\ud070(CW20) \ub2e4\ub8e8\uae30\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)(c.Z,{to:"/docs/tutorial/make-cw20/make-cw20-with-vault",mdxType:"Link"},"\ud1a0\ud070(CW20) \ubc1c\ud589 \ubc0f \uc804\uc1a1\ud558\uae30 (Vault)"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)(c.Z,{to:"/docs/tutorial/make-cw20/make-cw20-with-js",mdxType:"Link"},"\ud1a0\ud070(CW20) \ubc1c\ud589 \ubc0f \uc804\uc1a1\ud558\uae30 (Javascript)"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)(c.Z,{to:"/docs/tutorial/make-cw20/query-cw20",mdxType:"Link"},"CW20 \ub370\uc774\ud130 \uc0ac\uc6a9\ud558\uae30"),"\n","\xa0","\xa0","\xa0","\xa0","NFT(CW721) \ub2e4\ub8e8\uae30\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)(c.Z,{to:"/docs/tutorial/make-cw721/make-nft-vault",mdxType:"Link"},"NFT(CW721) \ubc1c\ud589\ud558\uae30 (Vault)"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)(c.Z,{to:"/docs/tutorial/make-cw721/make-nft-js",mdxType:"Link"},"NFT(CW721) \ubc1c\ud589\ud558\uae30 (Javascript)"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)(c.Z,{to:"/docs/tutorial/make-cw721/query-cw721",mdxType:"Link"},"CW721 \ub370\uc774\ud130 \uc0ac\uc6a9\ud558\uae30"),"\n","\xa0","\xa0","\xa0","\xa0","\uc2ec\ud654 - XPLA \ube14\ub85d\uccb4\uc778 \uae4a\uac8c \uc774\ud574\ud558\uae30\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)(c.Z,{to:"/docs/tutorial/deep-understand-xpla/local-network",mdxType:"Link"},"XPLA \ube14\ub85d\uccb4\uc778\uc744 Local(Private) Network\uc5d0\uc11c \uc2e4\ud589\ud558\uae30"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)(c.Z,{to:"/docs/tutorial/deep-understand-xpla/account-sequence",mdxType:"Link"},"\ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c AccountNumber\uc640 Sequence \ud56d\ubaa9 \uc774\ud574\ud558\uae30"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)(c.Z,{to:"/docs/tutorial/deep-understand-xpla/walletprovider",mdxType:"Link"},"Wallet Provider\ub85c React\uc640 XPLA Vault \uc9c0\uac11 \uc5f0\uacb0\ud558\uae30"),"\n","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0","\xa0",(0,a.kt)(c.Z,{to:"/docs/tutorial/deep-understand-xpla/write-contract",mdxType:"Link"},"Cosmwasm \ucee8\ud2b8\ub799\ud2b8 \uc791\uc131 \ubc0f \ube4c\ub4dc\ud558\uae30"))),(0,a.kt)("br",null),(0,a.kt)("p",null,"XPLA Academy\uc5d0\uc11c \uc0ac\uc6a9\ud55c \ubaa8\ub4e0 \uc608\uc81c \ucf54\ub4dc\ub294 XPLA Github\uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. XPLA Academy\ub97c \ud1b5\ud574 \uc5ec\ub7ec\ubd84\uc758 Web3 \uac8c\uc784 \uac1c\ubc1c\uc744 \uc704\ud55c \uc9c0\uc2dd\uc744 \uc2b5\ub4dd\ud574\ubcf4\uc138\uc694. \uadf8\ub7fc ",(0,a.kt)("a",{parentName:"p",href:"/docs/settings/create-wallet/create-wallet-with-vault"},"XPLA \ube14\ub85d\uccb4\uc778\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc9c0\uac11"),"\ubd80\ud130 \ub9cc\ub4e4\uc5b4\ubd05\uc2dc\ub2e4."),(0,a.kt)(o.Z,{summary:"XPLA \ube14\ub85d\uccb4\uc778\uc758 \ud2b9\uc9d5\uc740 \ubb34\uc5c7\uc778\uac00\uc694?",mdxType:"Details"},(0,a.kt)("p",null,"XPLA \ube14\ub85d\uccb4\uc778\uc740 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/xpladev/xpla"},"\uc624\ud508 \uc18c\uc2a4"),"\uc774\uba70, ",(0,a.kt)("a",{parentName:"p",href:"https://tendermint.com/"},"Tendermint Tool")," \uae30\ubc18\uc758 Proof-of-Stake(PoS) \ube14\ub85d\uccb4\uc778\uc785\ub2c8\ub2e4. \ub610\ud55c ",(0,a.kt)("a",{parentName:"p",href:"https://v1.cosmos.network/sdk"},"Cosmos SDK"),"\ub97c \uc0ac\uc6a9\ud558\uba74\uc11c, \ub3d9\uc2dc\uc5d0 ",(0,a.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/evm/"},"EVM(Ethereum Virtual Machine)")," \ud638\ud658\uc131\ub3c4 \uac16\ucd94\uace0 \uc788\uc5b4\uc11c Rust\uc640 Solidity \uc5b8\uc5b4\ub85c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc791\uc131\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.. \ub354 \uc790\uc138\ud55c \uc815\ubcf4\ub294 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.xpla.io/docs/learn/about-xpla-chain/"},"XPLA Docs"),"\ub97c \ucc38\uace0\ud574\ubcf4\uc138\uc694."),(0,a.kt)("p",null,"\uc544\uc9c1 \uc704 \ub0b4\uc6a9\uc744 \ubaa8\ub450 \uc774\ud574\ud558\uc9c0 \ubabb\ud574\ub3c4 \uad1c\ucc2e\uc2b5\ub2c8\ub2e4. XPLA Academy\ub97c \ud1b5\ud574 \uad00\ub828 \uc9c0\uc2dd\uc744 \ubc30\uc6b0\uac8c \ub420 \uac83\uc785\ub2c8\ub2e4.")),(0,a.kt)(o.Z,{summary:"XPLA \ube14\ub85d\uccb4\uc778\uc5d0 \uad00\ud55c \ub2e4\ub978 \ubb38\uc11c\uac00 \uc788\uc744\uae4c\uc694?",mdxType:"Details"},(0,a.kt)("p",null,"XPLA \ube14\ub85d\uccb4\uc778\uacfc \uad00\ub828\ub41c \ubb38\uc11c\ub294 XPLA Academy \uc0ac\uc774\ud2b8 \ub9e8 \ud558\ub2e8\uc5d0\uc11c Dev Resources\ub97c \ucc38\uace0\ud574\ubcf4\uc138\uc694.")))}y.isMDXComponent=!0}}]);