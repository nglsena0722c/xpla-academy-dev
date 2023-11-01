"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[5404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>w});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),i=c(n),u=r,w=i["".concat(l,".").concat(u)]||i[u]||m[u]||s;return n?a.createElement(w,p(p({ref:t},d),{},{components:n})):a.createElement(w,p({ref:t},d))}));function w(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,p=new Array(s);p[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[i]="string"==typeof e?e:r,p[1]=o;for(var c=2;c<s;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const s={sidebar_position:6},p="Swap \uae30\ub2a5 \uad6c\ud604\ud558\uae30",o={unversionedId:"tutorial/deep-understand-xpla/swap",id:"tutorial/deep-understand-xpla/swap",title:"Swap \uae30\ub2a5 \uad6c\ud604\ud558\uae30",description:"Swap \uae30\ub2a5\uc744 \ud1b5\ud574 CW20 \ud1a0\ud070\uacfc XPLA\ub97c \uad50\ud658\ud558\uac70\ub098, \ud639\uc740 CW20 \ud1a0\ud070\ub07c\ub9ac\ub3c4 \uc27d\uac8c \uad50\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/3-tutorial/3-deep-understand-xpla/6-swap.mdx",sourceDirName:"3-tutorial/3-deep-understand-xpla",slug:"/tutorial/deep-understand-xpla/swap",permalink:"/xpla-academy-dev/ko-kr/docs/tutorial/deep-understand-xpla/swap",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Convert \uae30\ub2a5 \uc774\ud574\ud558\uae30",permalink:"/xpla-academy-dev/ko-kr/docs/tutorial/deep-understand-xpla/convert"}},l={},c=[{value:"\ubaa9\ucc28",id:"\ubaa9\ucc28",level:2},{value:"0. CW20 \ud1a0\ud070 \uc900\ube44",id:"make-cw20",level:3},{value:"1. Swap Pool \uc0dd\uc131",id:"create-swap-pool",level:3},{value:"2. Increase Allowance",id:"increase-allowance",level:3},{value:"3. \uc720\ub3d9\uc131 \uacf5\uae09",id:"provide-liquidity",level:3},{value:"4. Swap \uc9c4\ud589 (Execute Swap)",id:"execute-swap",level:3},{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",level:2}],d={toc:c},i="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(i,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"swap-\uae30\ub2a5-\uad6c\ud604\ud558\uae30"},"Swap \uae30\ub2a5 \uad6c\ud604\ud558\uae30"),(0,r.kt)("p",null,"Swap \uae30\ub2a5\uc744 \ud1b5\ud574 CW20 \ud1a0\ud070\uacfc XPLA\ub97c \uad50\ud658\ud558\uac70\ub098, \ud639\uc740 CW20 \ud1a0\ud070\ub07c\ub9ac\ub3c4 \uc27d\uac8c \uad50\ud658\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc720\uc800\ub4e4\uc740 \uac8c\uc784\uc744 \ud1b5\ud574 \uc5bb\uc740 CW20 \ud1a0\ud070\uc73c\ub85c \uc27d\uac8c XPLA\ub97c \uc5bb\uc744 \uc218 \uc788\uace0, XPLA\ub97c \uac8c\uc784\uc5d0 \ud544\uc694\ud55c CW20 \ud1a0\ud070\uc73c\ub85c \uad50\ud658\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/#playgame"},"Break The Bricks \uac8c\uc784"),"\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 CW20 \ud1a0\ud070",(0,r.kt)("img",{src:"/xpla-academy-dev/img/3-tutorial/3-deep-understand-xpla/5-convert/academy-token.svg",width:"16",height:"16"}),"\uacfc XPLA",(0,r.kt)("img",{src:"/xpla-academy-dev/img/logo192.png",width:"16",height:"16"}),"\ub97c \uad50\ud658\ud558\ub294 Swap Pool\ub3c4 ",(0,r.kt)("a",{parentName:"p",href:"/tool"},"Tool Page"),"\uc5d0 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774\ubc88 \ub2e8\uacc4\uc5d0\uc11c\ub294 CW20 \ud1a0\ud070\uacfc XPLA \uac04 Swap \uae30\ub2a5\uc744 \uc5b4\ub5bb\uac8c \uad6c\ud604\ud558\ub294\uc9c0 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\uc774\ubc88 \ub2e8\uacc4\uc5d0\uc11c Swap Pool\uc744 \ub9cc\ub4e4\uae30 \uc704\ud574 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dezswap"},"Dezswap Contract"),"\ub97c \uc0ac\uc6a9\ud558\uc600\uc2b5\ub2c8\ub2e4.\nDezswap Contract\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.dezswap.io/docs/introduction/mechanism/"},"Automated Market-Maker(AMM) \ud504\ub85c\ud1a0\ucf5c"),"\uc744 \uc774\uc6a9\ud569\ub2c8\ub2e4.\n\ub354 \uc790\uc138\ud55c \uc815\ubcf4\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.dezswap.io/"},"Dezswap Docs"),"\ub97c \ucc38\uace0\ud574\ubcf4\uc138\uc694.\n\uc5ec\ub7ec\ubd84\ub4e4\uc740 \uc0c8\ub85c Contract\ub97c \uac1c\ubc1c\ud558\uc5ec Swap Pool\uc744 \ub9cc\ub4dc\uc154\ub3c4 \uc88b\uace0, \uc608\uc81c\ucc98\ub7fc Dezswap\uc744 \uc774\uc6a9\ud558\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h2",{id:"\ubaa9\ucc28"},"\ubaa9\ucc28"),(0,r.kt)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uc808\ucc28\ub85c Swap \uae30\ub2a5\uc744 \uad6c\ud604\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("ol",{start:0},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/deep-understand-xpla/swap#make-cw20"},"CW20 \ud1a0\ud070 \uc900\ube44"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/deep-understand-xpla/swap#create-swap-pool"},"Swap Pool \uc0dd\uc131"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/deep-understand-xpla/swap#increase-allowance"},"Increase Allowance"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/deep-understand-xpla/swap#provide-liquidity"},"\uc720\ub3d9\uc131 \uacf5\uae09 (Provide Liquidity)"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/deep-understand-xpla/swap#execute-swap"},"Swap \uc9c4\ud589 (Execute Swap)")))),(0,r.kt)("h3",{id:"make-cw20"},"0. CW20 \ud1a0\ud070 \uc900\ube44"),(0,r.kt)("p",null,"\uba3c\uc800 \uc608\uc81c\uc5d0\uc11c \uc0ac\uc6a9\ud560 ",(0,r.kt)("inlineCode",{parentName:"p"},"ACAD"),"\ub780 \uc774\ub984\uc758 CW20 \ud1a0\ud070\uc744 \uc0dd\uc131\ud558\uc600\uc2b5\ub2c8\ub2e4.\n\ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/testnet/address/xpla13mxqv7yqedcpm67fw7yz7p4s32rlsdkaae3ecmc0tram72ewefts2uu3ax"},"xpla13mxqv7yqedcpm67fw7yz7p4s32rlsdkaae3ecmc0tram72ewefts2uu3ax"),"\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"CW20 \ud1a0\ud070\uc744 \uc0dd\uc131\ud558\ub294 Javascript \ucf54\ub4dc\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4.\n",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/make-cw20-with-js"},"\ud1a0\ud070(CW20) \ubc1c\ud589 \ubc0f \uc804\uc1a1\ud558\uae30 (Javascript)")," \ub2e8\uacc4\uc5d0\uc11c \uc0ac\uc6a9\ud55c \ucf54\ub4dc \uc911 name\uacfc symbol\ub9cc \uc218\uc815\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{17,18}","{17,18}":!0},"const { LCDClient, MnemonicKey, MsgInstantiateContract } = require(\"@xpla/xpla.js\");\n\nconst lcd = new LCDClient({\n    chainID: 'cube_47-5',\n    URL: 'https://cube-lcd.xpla.dev'\n});\n\nconst main = async () => {\n    const mk = new MnemonicKey({\n        mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle' // \uc5ec\ub7ec\ubd84\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub85c \ubc14\uafd4\uc8fc\uc138\uc694.\n    })\n\n    const wallet = lcd.wallet(mk);\n    const myWalletAddress = wallet.key.accAddress;\n\n    const init_msg = {\n        name: \"CW20 Contract for Swap Tutorial\", \n        symbol: \"ACAD\", \n        decimals: 6,\n        initial_balances: [{ address: myWalletAddress, amount: \"2000000000000000\" }], \n        mint: { \n            minter: myWalletAddress\n        }\n    };\n\n    const instantiate = new MsgInstantiateContract(\n        myWalletAddress, \n        myWalletAddress, \n        1,\n        init_msg,\n        {},\n        'Example for Swap',\n    );\n\n    const signedTx = await lcd.wallet(mk).createAndSignTx({ \n        msgs: [instantiate]\n    });\n\n    const txResult = await lcd.tx.broadcastSync(signedTx);\n    console.log(txResult.txhash);\n}\nmain()\n")),(0,r.kt)("h3",{id:"create-swap-pool"},"1. Swap Pool \uc0dd\uc131"),(0,r.kt)("p",null,"\uc608\uc81c\uc5d0\uc11c\ub294 Dezswap\uc758 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dezswap/dezswap-contracts/tree/main/contracts/dezswap_factory"},"dezswap_factory \ucee8\ud2b8\ub799\ud2b8"),"\ub97c \uc2e4\ud589\uc2dc\ucf1c Swap Pool\uc744 \uc0dd\uc131\ud560 \uac83\uc785\ub2c8\ub2e4.\ndezswap_factory \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub294 Mainnet\uc758 \uacbd\uc6b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"xpla1j33xdql0h4kpgj2mhggy4vutw655u90z7nyj4afhxgj4v5urtadq44e3vd"),"\uc774\uace0, Testnet\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"xpla1j4kgjl6h4rt96uddtzdxdu39h0mhn4vrtydufdrk4uxxnrpsnw2qug2yx2"),"\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"dezswap_factory \ucee8\ud2b8\ub799\ud2b8\uc758 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dezswap/dezswap-contracts/tree/main/contracts/dezswap_factory#create_pair"},"create_pair \ud568\uc218"),"\ub97c Execute\ud558\ub294 Javascript \ucf54\ub4dc\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{16,27,35}","{16,27,35}":!0},'const { LCDClient, MnemonicKey, MsgExecuteContract } = require("@xpla/xpla.js");\n\nconst lcd = new LCDClient({\n    chainID: \'cube_47-5\',\n    URL: \'https://cube-lcd.xpla.dev\'\n});\n\nconst main = async () => {\n    const mk = new MnemonicKey({\n        mnemonic: \'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle\'\n    })\n\n    const wallet = lcd.wallet(mk);\n    const myWalletAddress = wallet.key.accAddress;\n\n    const testnet_dezswap_factory = "xpla1j4kgjl6h4rt96uddtzdxdu39h0mhn4vrtydufdrk4uxxnrpsnw2qug2yx2";\n\n    const createPairMsg = new MsgExecuteContract(\n        myWalletAddress,\n        testnet_dezswap_factory,\n        {\n            "create_pair": {\n                "assets": [\n                    {\n                        "info": {\n                            "native_token": {\n                                "denom": "axpla"\n                            }\n                        },\n                        "amount": "0"\n                    },\n                    {\n                        "info": {\n                            "token": {\n                                "contract_addr": "xpla13mxqv7yqedcpm67fw7yz7p4s32rlsdkaae3ecmc0tram72ewefts2uu3ax" // Your Contract Address\n                            }\n                        },\n                        "amount": "0"\n                    }\n                ]\n            }\n        }\n    );\n\n    const signedTx = await lcd.wallet(mk).createAndSignTx({\n        msgs: [createPairMsg]\n    });\n\n    const txResult = await lcd.tx.broadcastSync(signedTx);\n    console.log(txResult.txhash);\n}\nmain()\n')),(0,r.kt)("p",null,"\uc704 \ucf54\ub4dc\ub97c \uc2e4\ud589\ud558\uc5ec Testnet\uc5d0\uc11c Swap Pool\uc744 \uc0dd\uc131\ud558\uc600\uc2b5\ub2c8\ub2e4.\n\ud2b8\ub79c\uc7ad\uc158 \uacb0\uacfc\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/testnet/tx/1b6f0d98e79b3232cb2f8c9df6b46f4859b70820facf063a66710f90c158b642#Messages"},"XPLA Explorer"),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc5ec\ub7ec\ubd84\uc740 \uc2e4\ud589\ud558\uc2e4 \ub54c ",(0,r.kt)("inlineCode",{parentName:"p"},"contract_addr")," \ud56d\ubaa9\uc5d0 \uc5ec\ub7ec\ubd84\uc774 \ub9cc\ub4e0 CW20 \ud1a0\ud070 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub97c \uae30\uc785\ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/testnet/tx/1B6F0D98E79B3232CB2F8C9DF6B46F4859B70820FACF063A66710F90C158B642#EventLogs"},"Event Logs"),"\ub97c \ud655\uc778\ud574\ubcf4\uba74, \uc0c8\ub85c\uc6b4 \ucee8\ud2b8\ub799\ud2b8\uac00 ",(0,r.kt)("inlineCode",{parentName:"p"},"instantiate"),"\ub41c \uac83\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774 \uc911 ",(0,r.kt)("inlineCode",{parentName:"p"},"code_id"),"\uac00 369\uc778 \ucee8\ud2b8\ub799\ud2b8\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dezswap/dezswap-contracts/tree/main/contracts/dezswap_pair"},"dezswap_pair Contract"),"\uc774\uace0, ",(0,r.kt)("inlineCode",{parentName:"p"},"code_id"),"\uac00 110\uc778 \ucee8\ud2b8\ub799\ud2b8\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dezswap/dezswap-contracts/tree/main/contracts/dezswap_token"},"dezswap_token Contract"),"\uc785\ub2c8\ub2e4(",(0,r.kt)("inlineCode",{parentName:"p"},"code_id"),"\ub294 Testnet\uae30\uc900\uc774\uba70, Mainnet\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"code_id"),"\ub294 \ub2e4\ub985\ub2c8\ub2e4.).\n\uc608\uc81c\uc5d0\uc11c dezswap_pair Contract\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/testnet/address/xpla1hzmcz38u28g6duy4gmur705e8qrdq7uvzsue4d8hdvclxz79uppsw3hfns#InitMsg"},"xpla1hzmcz38u28g6duy4gmur705e8qrdq7uvzsue4d8hdvclxz79uppsw3hfns"),", dezswap_token Contract\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/testnet/address/xpla1ntr800lgjg59d79tr9c78kxjv9v9wm04hjdyq945663juf23hvqq0xy057#InitMsg"},"xpla1ntr800lgjg59d79tr9c78kxjv9v9wm04hjdyq945663juf23hvqq0xy057"),"\uc785\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"increase-allowance"},"2. Increase Allowance"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/deep-understand-xpla/swap#provide-liquidity"},"3. \uc720\ub3d9\uc131 \uacf5\uae09")," \ub2e8\uacc4\uc5d0\uc11c CW20 \ud1a0\ud070\uacfc XPLA\ub97c dezswap_pair Contract\ub85c \uacf5\uae09\ud574\uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4.\n\uc774\ub54c ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dezswap/dezswap-contracts/blob/main/contracts/dezswap_pair/src/contract.rs#L366"},"dezpswap_pair Contract\ub294 CW20 \ud1a0\ud070\uc758 transfer \ud568\uc218\ub97c Execute"),"\ud558\uc5ec, \ud1a0\ud070\uc744 \uacf5\uae09\ud558\ub294 \uc9c0\uac11\uc73c\ub85c\ubd80\ud130 CW20 \ud1a0\ud070\uc744 \uac00\uc838\uc635\ub2c8\ub2e4.\n\uc720\ub3d9\uc131 \uacf5\uae09\uc774 \uc798 \uc774\ub8e8\uc5b4\uc9c0\uae30 \uc704\ud574, dezswap_pair Contract\uac00 CW20 \ud1a0\ud070\uc744 \uac00\uc838\uac08 \uc218 \uc788\ub3c4\ub85d \ud5c8\uc6a9\ud574\uc8fc\uc5b4\uc57c \ud569\ub2c8\ub2e4.\n\ub530\ub77c\uc11c CW20 \ud1a0\ud070 Contract\uc758 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/blob/main/packages/cw20/README.md#messages-1"},"IncreaseAllowance")," \ud568\uc218\ub97c \uc2e4\ud589\ud574\uc8fc\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{16,23,24}","{16,23,24}":!0},'const { LCDClient, MnemonicKey, MsgExecuteContract } = require("@xpla/xpla.js");\n\nconst lcd = new LCDClient({\n    chainID: \'cube_47-5\',\n    URL: \'https://cube-lcd.xpla.dev\'\n});\n\nconst main = async () => {\n    const mk = new MnemonicKey({\n        mnemonic: \'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle\'\n    })\n\n    const wallet = lcd.wallet(mk);\n    const myWalletAddress = wallet.key.accAddress;\n\n    const cw20_contract_address = "xpla13mxqv7yqedcpm67fw7yz7p4s32rlsdkaae3ecmc0tram72ewefts2uu3ax"; // Your CW20 Contract Address\n\n    const increaseAllowanceMsg = new MsgExecuteContract(\n        myWalletAddress,\n        cw20_contract_address,\n        {\n            "increase_allowance": {\n              "amount": "10000000000",\n              "spender": "xpla1hzmcz38u28g6duy4gmur705e8qrdq7uvzsue4d8hdvclxz79uppsw3hfns" // dezswap_pair Contract Address\n            }\n          }\n    );\n\n    const signedTx = await lcd.wallet(mk).createAndSignTx({\n        msgs: [increaseAllowanceMsg]\n    });\n\n    const txResult = await lcd.tx.broadcastSync(signedTx);\n    console.log(txResult.txhash);\n}\nmain()\n')),(0,r.kt)("p",null,"\uc704 \ucf54\ub4dc\ub97c \uc2e4\ud589\ud55c \uacb0\uacfc\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/testnet/tx/0f19ff4c0d8592addd567c5eb7ae63d0869b6b2f8007b42a49b765bcca6189b7#Messages"},"XPLA Explorer"),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc5ec\ub7ec\ubd84\uc740 \uc2e4\ud589\ud558\uc2e4 \ub54c ",(0,r.kt)("inlineCode",{parentName:"p"},"cw20_contract_address")," \ubcc0\uc218\uc5d0 \uc5ec\ub7ec\ubd84\uc774 \ub9cc\ub4e0 CW20 \ud1a0\ud070 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub97c \uae30\uc785\ud574\uc57c \ud558\uace0, ",(0,r.kt)("inlineCode",{parentName:"p"},"spender")," \ud56d\ubaa9\uc5d0 \uc5ec\ub7ec\ubd84\uc774 \ub9cc\ub4e0 dezpswap_pair \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub97c \ub123\uc5b4\uc57c \ud569\ub2c8\ub2e4.\n\uc608\uc81c\uc5d0\uc11c\ub294 amount \uac12\uc744 ",(0,r.kt)("inlineCode",{parentName:"p"},"10000000000"),"\uc73c\ub85c \uc8fc\uc5c8\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("inlineCode",{parentName:"p"},"ACAD")," CW20\ud1a0\ud070\uc758 decimals \uac12\uc774 6\uc774\ubbc0\ub85c, \ucd5c\ub300 10,000\uac1c\uc758 ",(0,r.kt)("inlineCode",{parentName:"p"},"ACAD"),"\ub97c \uacf5\uae09\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"provide-liquidity"},"3. \uc720\ub3d9\uc131 \uacf5\uae09"),(0,r.kt)("p",null,"\uc774\uc81c \uc720\ub3d9\uc131 \uacf5\uae09\uc744 \uc704\ud574 dezswap_pair Contract\uc758 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dezswap/dezswap-contracts/tree/main/contracts/dezswap_pair#request-format"},"provide_liquidity \ud568\uc218"),"\ub97c \uc2e4\ud589\ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{16,30,38,43,44,45}","{16,30,38,43,44,45}":!0},'const { LCDClient, MnemonicKey, MsgExecuteContract, Coin } = require("@xpla/xpla.js");\n\nconst lcd = new LCDClient({\n    chainID: \'cube_47-5\',\n    URL: \'https://cube-lcd.xpla.dev\'\n});\n\nconst main = async () => {\n    const mk = new MnemonicKey({\n        mnemonic: \'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle\'\n    })\n\n    const wallet = lcd.wallet(mk);\n    const myWalletAddress = wallet.key.accAddress;\n\n    const dezswap_pair_contract_address = "xpla1hzmcz38u28g6duy4gmur705e8qrdq7uvzsue4d8hdvclxz79uppsw3hfns"; // dezswap_pair Contract Address\n\n    const provideLiquidityMsg = new MsgExecuteContract(\n        myWalletAddress,\n        dezswap_pair_contract_address,\n        {\n            "provide_liquidity": {\n                "assets": [\n                    {\n                        "info": {\n                            "native_token": {\n                                "denom": "axpla"\n                            }\n                        },\n                        "amount": "10000000000000000000"\n                    },\n                    {\n                        "info": {\n                            "token": {\n                                "contract_addr": "xpla13mxqv7yqedcpm67fw7yz7p4s32rlsdkaae3ecmc0tram72ewefts2uu3ax" // Your Contract Address\n                            }\n                        },\n                        "amount": "10000000000"\n                    }\n                ]\n            }\n        },\n        [new Coin(\n            "axpla",\n            "10000000000000000000"\n        )],\n    );\n\n    const signedTx = await lcd.wallet(mk).createAndSignTx({\n        msgs: [provideLiquidityMsg],\n    });\n\n    const txResult = await lcd.tx.broadcastSync(signedTx);\n    console.log(txResult.txhash);\n}\nmain()\n')),(0,r.kt)("p",null,"\uc704 \ucf54\ub4dc\ub97c \uc2e4\ud589\ud55c \uacb0\uacfc\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/testnet/tx/2e5c9c1e142599784df050437e3f97ca84d0dc082bd86d3ba82be6b3b5402e08#Messages"},"XPLA Explorer"),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nXPLA\uc640 CW20 \ud1a0\ud070 \uac01\uac01 amount \ud56d\ubaa9\uc5d0 \uacf5\uae09\ud558\uace0 \uc2f6\uc740 \uc218\ub7c9\uc744 \uae30\uc785\ud588\uc2b5\ub2c8\ub2e4.\n\ub530\ub77c\uc11c \ucd1d 10 XPLA\uc640 10,000 ",(0,r.kt)("inlineCode",{parentName:"p"},"ACAD"),"\ub97c \uacf5\uae09\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"provideLiquidityMsg \ubcc0\uc218\ub97c \ub9cc\ub4e4 \ub54c, \uc774\uc804\uacfc\ub294 \ub2ec\ub9ac \ub9c8\uc9c0\ub9c9 parameter\ub85c axpla \uac12\uc744 \uae30\uc785\ud574\uc8fc\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4.\n\uc774\ub97c \ud1b5\ud574 \ud2b8\ub79c\uc7ad\uc158 \uc2e4\ud589\uacfc \ub3d9\uc2dc\uc5d0 dezswap_pair Contract\uc5d0 XPLA\ub97c \uacf5\uae09\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\nCW20 \ud1a0\ud070 \uacf5\uae09\uc740 ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/deep-understand-xpla/swap#increase-allowance"},"2. Increase-allowance")," \ub2e8\uacc4\uc5d0\uc11c \uc54c\uc544\ubcf8 \ub300\ub85c, dezswap_pair \ucee8\ud2b8\ub799\ud2b8\uac00 CW20 \ud1a0\ud070\uc744 \uac00\uc838\uc654\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",{id:"execute-swap"},"4. Swap \uc9c4\ud589 (Execute Swap)"),(0,r.kt)("p",null,"\uc774\uc81c Swap\uc744 \uc9c4\ud589\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uc608\uc81c\uc5d0\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"ACAD")," \ud1a0\ud070 1\uac1c\ub97c XPLA\ub85c \uad50\ud658\ud560 \uac83\uc785\ub2c8\ub2e4. Contract Execute\ub97c \uc704\ud55c Msg \ud615\uc2dd\uc740 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dezswap/dezswap-contracts/tree/main/contracts/dezswap_pair#swap"},"dezswap Github"),"\uc744 \ucc38\uace0\ud588\uc2b5\ub2c8\ub2e4. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{16,23}","{16,23}":!0},'const { LCDClient, MnemonicKey, MsgExecuteContract } = require("@xpla/xpla.js");\n\nconst lcd = new LCDClient({\n    chainID: \'cube_47-5\',\n    URL: \'https://cube-lcd.xpla.dev\'\n});\n\nconst main = async () => {\n    const mk = new MnemonicKey({\n        mnemonic: \'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle\'\n    })\n\n    const wallet = lcd.wallet(mk);\n    const myWalletAddress = wallet.key.accAddress;\n\n    const token_contract_address = "xpla13mxqv7yqedcpm67fw7yz7p4s32rlsdkaae3ecmc0tram72ewefts2uu3ax"; // Your Contract Address\n    \n    const swapMsg = new MsgExecuteContract(\n        myWalletAddress,\n        token_contract_address,\n        {\n            "send": {\n                "contract": "xpla1hzmcz38u28g6duy4gmur705e8qrdq7uvzsue4d8hdvclxz79uppsw3hfns", // dezswap_pair Contract Address\n                "amount": "1000000",\n                "msg": btoa(JSON.stringify({\n                    "swap": {\n                        // "belief_price": Option<Decimal>,\n                        // "max_spread": Option<Decimal>,\n                        // "to": Option<HumanAddr>\n                    }\n                }))\n            }\n        }\n    );\n\n    const signedTx = await lcd.wallet(mk).createAndSignTx({\n        msgs: [swapMsg],\n    });\n\n    const txResult = await lcd.tx.broadcastSync(signedTx);\n    console.log(txResult.txhash);\n}\nmain()\n')),(0,r.kt)("p",null,"\uc704 \ucf54\ub4dc\ub97c \uc2e4\ud589\ud55c \uacb0\uacfc\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/testnet/tx/02f8495b6df3526dc5ce9d149129788ae1683d89167d14b5336e092e403bc31c#TokenTransfers"},"XPLA Explorer"),"\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n",(0,r.kt)("inlineCode",{parentName:"p"},"token_contract_address")," \ubcc0\uc218\uc5d0\ub294 CW20 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub97c, msg \ub0b4\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"contract")," \ud56d\ubaa9\uc5d0\ub294 dezswap_pair \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub97c \uae30\uc785\ud574\uc57c \ud569\ub2c8\ub2e4.\nXPLA\ub97c CW20 \ud1a0\ud070\uc73c\ub85c \uad50\ud658\ud560 \ub54c\ub294 \uc2e4\ud589\ud574\uc57c \ud558\ub294 \ucee8\ud2b8\ub799\ud2b8\uac00 \ub2e4\ub974\ub2c8 \uc720\uc758\ud558\uc154\uc57c \ud569\ub2c8\ub2e4.\n\uc790\uc138\ud55c \uc0ac\ud56d\uc740 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dezswap/dezswap-contracts/tree/main/contracts/dezswap_pair#swap"},"dezswap Github"),"\uc744 \uc0b4\ud3b4\ubcf4\uc138\uc694."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ACAD")," \ud1a0\ud070 1\uac1c\ub97c \ub123\uc5c8\ub294\ub370, \uc65c XPLA 0.000996900309969002\uac1c\ub97c \ubc1b\uc558\uc744\uae4c\uc694?\n",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/deep-understand-xpla/swap#provide-liquidity"},"3. \uc720\ub3d9\uc131 \uacf5\uae09")," \ub2e8\uacc4\uc5d0\uc11c Swap Pool\uc5d0 \ucd1d 10 XPLA\uc640 10,000 ACAD\ub97c \uacf5\uae09\ud558\uc600\uc2b5\ub2c8\ub2e4.\n\uc989, Swap Pool\uc758 \ud1a0\ud070 \uac1c\uc218\uc758 \uacf1\uc740 \ud56d\uc0c1 10 \xd7 10000 = 100,000 \ub9cc\ud07c \uc720\uc9c0\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4.\n",(0,r.kt)("inlineCode",{parentName:"p"},"ACAD")," \ud1a0\ud070 1\uac1c\ub97c \ub123\uc740 \uacbd\uc6b0, Swap Pool\uc758 \ud1a0\ud070 \uac1c\uc218 \uacf1\uc740 (10 - XPLA_out)  \xd7 (10000 + 1) = 100,000\uc774 \ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4.\n\uc704 \ubc29\uc815\uc2dd\uc744 \uacc4\uc0b0\ud558\uba74 XPLA_out\uc758 \uac12\uc740 0.000999900009999000\uac1c\uc785\ub2c8\ub2e4(XPLA\uc758 decimals\uac00 18\uc774\ubbc0\ub85c, \uc18c\uc218\uc810 18\uc790\ub9ac\uae4c\uc9c0 \uacc4\uc0b0).\n\uadf8\ub7ec\ub098 dezswap\uc5d0\uc11c\ub294 swap\uc744 \ud560 \ub54c ",(0,r.kt)("a",{parentName:"p",href:"https://docs.dezswap.io/docs/introduction/trading-fees/"},"\uc720\ub3d9\uc131 \uacf5\uae09\uc744 \ud574\uc900 \uc0ac\ub78c\uc5d0\uac8c LP Commission\uc744 0.3%\ub9cc\ud07c \uc9c0\uae09"),"\ud574\uc57c \ud569\ub2c8\ub2e4.\n\ub530\ub77c\uc11c 0.3%\ub9cc\ud07c \uc218\uc218\ub8cc\ub97c \ub0c8\uc744 \ub54c, \ub0a8\uc740 XPLA 0.000996900309969002\uac1c\ub97c \ubc1b\uac8c \ub429\ub2c8\ub2e4.\n\ub354 \uc790\uc138\ud55c \uc0ac\ud56d\uc740 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.dezswap.io/docs/introduction/mechanism/"},"dezswap Docs"),"\ub97c \ucc38\uace0\ud574\ubcf4\uc138\uc694."),(0,r.kt)("h2",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac"),(0,r.kt)("p",null,"\uc9c0\uae08\uae4c\uc9c0 Dezswap \ucee8\ud2b8\ub799\ud2b8\ub97c \uc774\uc6a9\ud558\uc5ec \uc720\uc800\ub4e4\uc774 \uc27d\uac8c Swap\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \ub3c4\uc640\uc8fc\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uc558\uc2b5\ub2c8\ub2e4.\n\uc5ec\ub7ec\ubd84\uc774 \uac1c\ubc1c\ud55c \uac8c\uc784\uc758 CW20 \ud1a0\ud070\uacfc XPLA\ub97c Swap \ucee8\ud2b8\ub799\ud2b8\ub97c \ud1b5\ud574 \uc5f0\uacb0\ud574\ubcf4\uc138\uc694."))}m.isMDXComponent=!0}}]);