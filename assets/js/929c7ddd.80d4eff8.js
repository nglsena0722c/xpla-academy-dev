"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[513],{34673:(e,a,t)=>{t.d(a,{Z:()=>k});var n=t(87462),r=t(67294),s=t(86010),l=t(72389),o=t(86043);const p={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function c(e){return!!e&&("SUMMARY"===e.tagName||c(e.parentElement))}function d(e,a){return!!e&&(e===a||d(e.parentElement,a))}function i(e){let{summary:a,children:t,...i}=e;const m=(0,l.Z)(),u=(0,r.useRef)(null),{collapsed:k,setCollapsed:y}=(0,o.u)({initialState:!i.open}),[w,C]=(0,r.useState)(i.open),g=r.isValidElement(a)?a:r.createElement("summary",null,a??"Details");return r.createElement("details",(0,n.Z)({},i,{ref:u,open:w,"data-collapsed":k,className:(0,s.Z)(p.details,m&&p.isBrowser,i.className),onMouseDown:e=>{c(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const a=e.target;c(a)&&d(a,u.current)&&(e.preventDefault(),k?(y(!1),C(!0)):y(!0))}}),g,r.createElement(o.z,{lazy:!1,collapsed:k,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{y(e),C(!e)}},r.createElement("div",{className:p.collapsibleContent},t)))}const m={details:"details_b_Ee"},u="alert alert--info";function k(e){let{...a}=e;return r.createElement(i,(0,n.Z)({},a,{className:(0,s.Z)(u,m.details,a.className)}))}},51007:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(67294),r=t(86010);const s={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function l(e){let{children:a,minHeight:t,url:l="http://localhost:3000",style:o,bodyStyle:p}=e;return n.createElement("div",{className:s.browserWindow,style:{...o,minHeight:t}},n.createElement("div",{className:s.browserWindowHeader},n.createElement("div",{className:s.buttons},n.createElement("span",{className:s.dot,style:{background:"#f25f58"}}),n.createElement("span",{className:s.dot,style:{background:"#fbbe3c"}}),n.createElement("span",{className:s.dot,style:{background:"#58cb42"}})),n.createElement("div",{className:(0,r.Z)(s.browserWindowAddressBar,"text--truncate")},l),n.createElement("div",{className:s.browserWindowMenuIcon},n.createElement("div",null,n.createElement("span",{className:s.bar}),n.createElement("span",{className:s.bar}),n.createElement("span",{className:s.bar})))),n.createElement("div",{className:s.browserWindowBody,style:p},a))}},61497:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(67294);const r=e=>{let{imgSrc:a,style:t}=e;return n.createElement("img",{className:"max-w-sm",style:t,src:a,alt:""})}},84451:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>k,contentTitle:()=>m,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>y});var n=t(87462),r=t(67294),s=t(3905),l=t(34673),o=t(18947);const p=()=>r.createElement(o.xR,{customSetup:{dependencies:{"@xpla/xpla.js":"^0.3.1","crypto-browserify":"latest"},entry:"index.js"},files:{"/index.js":'const { LCDClient } = require("@xpla/xpla.js");\n\nconst lcd = new LCDClient({\n  chainID: \'cube_47-5\',\n  URL: \'https://cube-lcd.xpla.dev\'\n});\n\nasync function main() {\n    const contractAddress = "xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc";\n    const userAddress = "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk";\n    const msg = {\n        balance : {\n            address : userAddress\n        }\n    };\n\n    const balance = await lcd.wasm.contractQuery(contractAddress, msg);\n    console.log(balance);\n}\nmain()'},options:{layout:"console",showLineNumbers:!0,editorHeight:500}});var c=t(61497),d=t(51007);const i={sidebar_position:3},m="CW20 \ub370\uc774\ud130 \uc0ac\uc6a9\ud558\uae30",u={unversionedId:"tutorial/make-cw20/query-cw20",id:"tutorial/make-cw20/query-cw20",title:"CW20 \ub370\uc774\ud130 \uc0ac\uc6a9\ud558\uae30",description:"\uc720\uc800\ub4e4\uc740 \uac8c\uc784 \ubcf4\uc0c1\uc73c\ub85c CW20 \ud1a0\ud070\uc744 \uc5bb\uac8c \ub429\ub2c8\ub2e4. \uac01 \uc720\uc800\ub4e4\uc774 CW20 \ud1a0\ud070\uc744 \uc5bc\ub9c8\ub098 \ubcf4\uc720\ud558\uace0 \uc788\ub294\uc9c0 \uc5b4\ub5bb\uac8c \uc54c \uc218 \uc788\uc744\uae4c\uc694? LCDClient\ub97c \uc774\uc6a9\ud558\uc5ec Query\ub97c \ubcf4\ub0b4\uc11c CW20 \ud1a0\ud070 \ub370\uc774\ud130\ub97c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc804 \ub2e8\uacc4\uc5d0\uc11c \uc9c1\uc811 \ub9cc\ub4e0 CW20 \ud1a0\ud070\uc758 \uc815\ubcf4\ub97c \uac00\uc838\uc640\ubd05\uc2dc\ub2e4. \uc608\uc81c\uc5d0\uc11c \uc0ac\uc6a9\ud55c MCT \ud1a0\ud070\uc758 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub294 xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc \uc785\ub2c8\ub2e4.",source:"@site/docs/3-tutorial/1-make-cw20/3-query-cw20.mdx",sourceDirName:"3-tutorial/1-make-cw20",slug:"/tutorial/make-cw20/query-cw20",permalink:"/xpla-academy-dev/docs/tutorial/make-cw20/query-cw20",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Javascript\ub85c \uac8c\uc784 \ud1a0\ud070(CW20) \ubc1c\ud589 \ubc0f \uc804\uc1a1\ud558\uae30",permalink:"/xpla-academy-dev/docs/tutorial/make-cw20/make-cw20-with-js"},next:{title:"NFT(CW721) \ub2e4\ub8e8\uae30",permalink:"/xpla-academy-dev/docs/category/nftcw721-\ub2e4\ub8e8\uae30"}},k={},y=[{value:"Preview",id:"preview",level:2},{value:"Javascript\ub85c CW20 \ub370\uc774\ud130 \uac00\uc838\uc624\uae30",id:"runjs",level:2},{value:"\ucf54\ub4dc \uc2e4\ud589",id:"runcode",level:3},{value:"\uc124\uba85",id:"explaination",level:2},{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",level:2}],w={toc:y},C="wrapper";function g(e){let{components:a,...t}=e;return(0,s.kt)(C,(0,n.Z)({},w,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"cw20-\ub370\uc774\ud130-\uc0ac\uc6a9\ud558\uae30"},"CW20 \ub370\uc774\ud130 \uc0ac\uc6a9\ud558\uae30"),(0,s.kt)("p",null,"\uc720\uc800\ub4e4\uc740 \uac8c\uc784 \ubcf4\uc0c1\uc73c\ub85c CW20 \ud1a0\ud070\uc744 \uc5bb\uac8c \ub429\ub2c8\ub2e4. \uac01 \uc720\uc800\ub4e4\uc774 CW20 \ud1a0\ud070\uc744 \uc5bc\ub9c8\ub098 \ubcf4\uc720\ud558\uace0 \uc788\ub294\uc9c0 \uc5b4\ub5bb\uac8c \uc54c \uc218 \uc788\uc744\uae4c\uc694? LCDClient\ub97c \uc774\uc6a9\ud558\uc5ec Query\ub97c \ubcf4\ub0b4\uc11c CW20 \ud1a0\ud070 \ub370\uc774\ud130\ub97c \uac00\uc838\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,s.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/make-cw20-with-js"},"\uc774\uc804 \ub2e8\uacc4"),"\uc5d0\uc11c \uc9c1\uc811 \ub9cc\ub4e0 CW20 \ud1a0\ud070\uc758 \uc815\ubcf4\ub97c \uac00\uc838\uc640\ubd05\uc2dc\ub2e4. \uc608\uc81c\uc5d0\uc11c \uc0ac\uc6a9\ud55c MCT \ud1a0\ud070\uc758 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc")," \uc785\ub2c8\ub2e4."),(0,s.kt)("h2",{id:"preview"},"Preview"),(0,s.kt)("p",null,"Javascript\ub85c CW20 \ud1a0\ud070 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \ucf54\ub4dc\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4. 9\ubc88\uc9f8 \uc904\uc5d0 \uc5ec\ub7ec\ubd84\uc774 \ub9cc\ub4e0 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub97c, 10\ubc88\uc9f8 \uc904\uc5d0 CW20 \ud1a0\ud070\uc744 \ubcf4\uc720\ud558\uace0 \uc788\ub294 \uc9c0\uac11 \uc8fc\uc18c\ub85c \uc218\uc815\ud558\uc5ec \uc2e4\ud589\ud574\ubcf4\uc138\uc694. \uc870\uae08\ub9cc \uae30\ub2e4\ub9ac\uc2dc\uba74 \uc6b0\uce21\uc5d0\uc11c \uc2e4\ud589 \uacb0\uacfc\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)(p,{mdxType:"Ex09"}),(0,s.kt)("br",null),(0,s.kt)("p",null,"LCDClient\ub85c Query\ub97c \ubcf4\ub0b4\uc11c \ud2b9\uc815 \uc9c0\uac11 \uc8fc\uc18c\uac00 CW20 \ud1a0\ud070\uc744 \uc5bc\ub9c8\ub098 \uac00\uc838\uc624\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \ub530\ub77c\uc11c \uac8c\uc784 \uc720\uc800\ub4e4\uc774 CW20 \ud1a0\ud070\uc744 \uc5bc\ub9c8\ub098 \uac00\uc9c0\uace0 \uc788\ub294\uc9c0 \uc54c\uc544\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),"\uc5d0\uc11c\ub3c4 \ucee8\ud2b8\ub799\ud2b8\uc5d0 Query\ub97c \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4. XPLA Explorer\uc5d0\uc11c CW20 \ud1a0\ud070 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub97c \uac80\uc0c9\ud558\uace0, ",(0,s.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/testnet/address/xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc#InitMsg"},"Init Msg \ud0ed"),"\uc73c\ub85c \uc811\uc18d\ud574\ubd05\uc2dc\ub2e4. "),(0,s.kt)(d.Z,{url:"https://explorer.xpla.io/testnet/address/xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc#InitMsg",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,s.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,s.kt)(c.Z,{style:{zIndex:1,maxWidth:"100%"},imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/query-cw20/explorer-initmsg.png",mdxType:"VaultImgCard"}))),(0,s.kt)("br",null),(0,s.kt)("p",null,"\uc774\ud6c4 \uc6b0\uce21\uc5d0 Query \ubc84\ud2bc\uc744 \ub20c\ub7ec\ubcf4\uba74 Query \uba54\uc2dc\uc9c0\ub97c \uc791\uc131\ud558\ub294 \ud31d\uc5c5\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ucee8\ud2b8\ub799\ud2b8\uc5d0 Query\ub97c \uc27d\uac8c \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,s.kt)(d.Z,{url:"https://explorer.xpla.io/testnet/address/xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc#InitMsg",bodyStyle:{padding:0},mdxType:"BrowserWindow"},(0,s.kt)("div",{className:"flex justify-center",style:{backgroundColor:"hsl(240, 20%, 97%)",position:"relative"}},(0,s.kt)(c.Z,{style:{zIndex:1,maxWidth:"100%"},imgSrc:"/xpla-academy-dev/img/3-tutorial/1-make-cw20/query-cw20/query.png",mdxType:"VaultImgCard"}))),(0,s.kt)("br",null),(0,s.kt)("admonition",{title:"JSON \ud615\ud0dc\ub85c \uc791\uc131\ud574\uc8fc\uc138\uc694.",type:"danger"},(0,s.kt)("p",{parentName:"admonition"},"\uc8fc\uc758\ud560 \uc810\uc740 Javascript \ucf54\ub4dc\uc5d0\uc11c \uba54\uc2dc\uc9c0\ub97c \uc791\uc131\ud560 \ub54c\uc640\ub294 \ub2ec\ub9ac, \uc544\ub798\uc640 \uac19\uc774 JSON \ud615\ud0dc\ub85c \uc791\uc131\ud574\uc57c \ud569\ub2c8\ub2e4. "),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "balance" : {\n        "address" : "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk"\n    }\n}\n'))),(0,s.kt)(l.Z,{summary:"\ucee8\ud2b8\ub799\ud2b8 Query \uba54\uc2dc\uc9c0\ub294 \uc5b4\ub5a4 \ud615\uc2dd\uc73c\ub85c \uc791\uc131\ud574\uc57c \ud558\ub098\uc694?",mdxType:"Details"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/blob/main/packages/cw20/src/query.rs#L12"},"CW20 Github"),"\uc5d0\uc11c CW20 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc5b4\ub5a4 Query\ub97c \ubcf4\ub0bc \uc218 \uc788\ub294\uc9c0 \uc0b4\ud3b4\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc8fc\uc758\ud560 \uc810\uc740 QueryMsg\uc5d0\uc11c \uba54\uc2dc\uc9c0 \uc774\ub984\uc774 ",(0,s.kt)("inlineCode",{parentName:"p"},"Camel Case"),"\ub85c \uc801\ud600 \uc788\uc73c\ub098, \uc2e4\uc81c Query\ub97c \ubcf4\ub0bc \ub54c\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"Snake Case"),"\ub85c \ubcf4\ub0b4\uc57c \ud569\ub2c8\ub2e4. parameter \ud56d\ubaa9\uc740 \ucf54\ub4dc \ud615\uc2dd \uadf8\ub300\ub85c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,s.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/blob/main/packages/cw20/src/query.rs#L12"},"CW20 Github"),"\uc5d0\uc11c ",(0,s.kt)("strong",{parentName:"p"},"Balance"),"\uc640 ",(0,s.kt)("strong",{parentName:"p"},"TokenInfo")," \uba54\uc2dc\uc9c0\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"{4,7}","{4,7}":!0},"pub enum Cw20QueryMsg {\n    /// Returns the current balance of the given address, 0 if unset.\n    /// Return type: BalanceResponse.\n    Balance { address: String },\n    /// Returns metadata on the contract - name, decimals, supply, etc.\n    /// Return type: TokenInfoResponse.\n    TokenInfo {},\n")),(0,s.kt)("p",null,"Balance Query\ub97c \ubcf4\ub0bc \ub54c\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"Camel Case"),"\ub85c \uc801\ud600 \uc788\ub294 ",(0,s.kt)("strong",{parentName:"p"},"Balance"),"\ub97c ",(0,s.kt)("inlineCode",{parentName:"p"},"Snake Case"),"\ub85c \ubc14\uafb8\uc5b4 ",(0,s.kt)("strong",{parentName:"p"},"balance"),"\ub85c \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4. parameter \ud56d\ubaa9\uc740 ",(0,s.kt)("strong",{parentName:"p"},"{ address: String }")," \uc774\ubbc0\ub85c, \uc794\uc561\uc744 \uc54c\uace0 \uc2f6\uc740 \uc9c0\uac11 \uc8fc\uc18c\ub97c String Type\uc73c\ub85c \uc785\ub825\ud558\uba74 \ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \ucd5c\uc885 Query \uba54\uc2dc\uc9c0 \ud615\ud0dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'{\n    balance : {\n        address : "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk"\n    }\n}\n')),(0,s.kt)("p",null,"TokenInfo Query\ub97c \ubcf4\ub0bc \ub54c\ub3c4 \ub9c8\ucc2c\uac00\uc9c0\uc785\ub2c8\ub2e4. ",(0,s.kt)("inlineCode",{parentName:"p"},"Camel Case"),"\ub85c \uc801\ud600 \uc788\ub294 ",(0,s.kt)("strong",{parentName:"p"},"TokenInfo"),"\ub97c ",(0,s.kt)("inlineCode",{parentName:"p"},"Snake Case"),"\ub85c \ubc14\uafb8\uc5b4 ",(0,s.kt)("strong",{parentName:"p"},"token_info"),"\ub85c \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\ub54c parameter\ub294 \uc5c6\uc73c\ubbc0\ub85c, \ucd5c\uc885 Query \uba54\uc2dc\uc9c0 \ud615\ud0dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"{\n    token_info : {}\n}\n")),(0,s.kt)("p",null,"\uc774\ub97c \ucc38\uace0\ud558\uc5ec \uc5ec\ub7ec\ubd84\uc758 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub2e4\uc591\ud55c Query\ub97c \ubcf4\ub0b4\ubcf4\uc138\uc694.")),(0,s.kt)("br",null),(0,s.kt)("p",null,"\uc774\ub807\uac8c \ucee8\ud2b8\ub799\ud2b8\uc5d0 Query\ub97c \ubcf4\ub0b4\ub294 \ubc29\ubc95\uacfc Query \uba54\uc2dc\uc9c0\ub97c \uc791\uc131\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uc558\uc2b5\ub2c8\ub2e4. \uc774\uc81c Preview Code\ub97c \ubd84\uc11d\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. Preview Code\ub97c \uc774\ud574\ud558\uc168\ub2e4\uba74, ",(0,s.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw20/query-cw20#runjs"},"\uc544\ub798 \ub0b4\uc6a9"),"\uc744 \uc77d\uc9c0 \uc54a\uace0 \ubc14\ub85c ",(0,s.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw721/make-nft-vault"},"\ub2e4\uc74c \ub2e8\uacc4"),"\ub85c \ub118\uc5b4\uac00\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4."),(0,s.kt)("h2",{id:"runjs"},"Javascript\ub85c CW20 \ub370\uc774\ud130 \uac00\uc838\uc624\uae30"),(0,s.kt)("p",null,"Javascript \ucf54\ub4dc\ub85c \ud2b9\uc815 \uc9c0\uac11 \uc8fc\uc18c\uac00 CW20 \ud1a0\ud070\uc744 \uc5bc\ub9c8\ub098 \ubcf4\uc720\ud558\uace0 \uc788\ub294\uc9c0 \uc54c\uc544\ubd05\uc2dc\ub2e4."),(0,s.kt)("h3",{id:"runcode"},"\ucf54\ub4dc \uc2e4\ud589"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"example-query-cw20.js \ud30c\uc77c\uc744 \uc0dd\uc131\ud574\uc8fc\uc138\uc694.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"\uc544\ub798 \ucf54\ub4dc\ub97c \ubcf5\uc0ac\ud558\uc5ec example-query-cw20.js \ud30c\uc77c\uc5d0 \ubd99\uc5ec\ub123\uace0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const { LCDClient } = require("@xpla/xpla.js");\n\nconst lcd = new LCDClient({\n    chainID: \'cube_47-5\',\n    URL: \'https://cube-lcd.xpla.dev\'\n});\n\nasync function main() {\n    const contractAddress = "xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc";\n    const userAddress = "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk";\n    const msg = {\n        balance : {\n            address : userAddress\n        }\n    };\n\n    const balance = await lcd.wasm.contractQuery(contractAddress, msg);\n    console.log(balance);\n}\nmain()\n'))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"9\ubc88\uc9f8 \uc904\uc758 ",(0,s.kt)("inlineCode",{parentName:"p"},"xpla1xljvdrtyn86kv7hrdhae4qxdy8krajah3w7xhtyrt0n69und9xdqdhrasc")," \ub300\uc2e0 \uc5ec\ub7ec\ubd84\uc774 \ub9cc\ub4e0 CW20 \ud1a0\ud070\uc758 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\uac12\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694. \ub610\ud55c, 10\ubc88\uc9f8 \uc904\uc5d0\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk")," \ub300\uc2e0 CW20 \ud1a0\ud070\uc744 \ubcf4\uc720\ud558\uace0 \uc788\ub294 \uc9c0\uac11 \uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"VSCode Terminal\uc5d0\uc11c \uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"node example-query-cw20.js\n"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Terminal\uc5d0\uc11c \uacb0\uacfc\ub97c \ud655\uc778\ud569\ub2c8\ub2e4. ",(0,s.kt)("inlineCode",{parentName:"p"},"userAddress"),"\uc5d0 \ud574\ub2f9\ud558\ub294 \uc9c0\uac11 \uc8fc\uc18c\uac00 CW20 \ud1a0\ud070\uc744 \uc5bc\ub9c8\ub098 \uac00\uc9c0\uace0 \uc788\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,s.kt)("h2",{id:"explaination"},"\uc124\uba85"),(0,s.kt)("p",null,"msg \ubcc0\uc218\uc5d0 \ubcf4\ub0b4\uace0 \uc2f6\uc740 Query \uba54\uc2dc\uc9c0\ub97c \ub2f4\uc544\uc8fc\uc5c8\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const msg = {\n    balance : {\n        address : userAddress\n    }\n};\n")),(0,s.kt)(l.Z,{summary:"\ucee8\ud2b8\ub799\ud2b8 Query \uba54\uc2dc\uc9c0\ub294 \uc5b4\ub5a4 \ud615\uc2dd\uc73c\ub85c \uc791\uc131\ud574\uc57c \ud558\ub098\uc694?",mdxType:"Details"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/blob/main/packages/cw20/src/query.rs#L12"},"CW20 Github"),"\uc5d0\uc11c CW20 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc5b4\ub5a4 Query\ub97c \ubcf4\ub0bc \uc218 \uc788\ub294\uc9c0 \uc0b4\ud3b4\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc8fc\uc758\ud560 \uc810\uc740 QueryMsg\uc5d0\uc11c \uba54\uc2dc\uc9c0 \uc774\ub984\uc774 ",(0,s.kt)("inlineCode",{parentName:"p"},"Camel Case"),"\ub85c \uc801\ud600 \uc788\uc73c\ub098, \uc2e4\uc81c Query\ub97c \ubcf4\ub0bc \ub54c\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"Snake Case"),"\ub85c \ubcf4\ub0b4\uc57c \ud569\ub2c8\ub2e4. parameter \ud56d\ubaa9\uc740 \ucf54\ub4dc \ud615\uc2dd \uadf8\ub300\ub85c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,s.kt)("p",null,"\uc608\ub97c \ub4e4\uc5b4 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/blob/main/packages/cw20/src/query.rs#L12"},"CW20 Github"),"\uc5d0\uc11c ",(0,s.kt)("strong",{parentName:"p"},"Balance"),"\uc640 ",(0,s.kt)("strong",{parentName:"p"},"TokenInfo")," \uba54\uc2dc\uc9c0\ub97c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:"{4,7}","{4,7}":!0},"pub enum Cw20QueryMsg {\n    /// Returns the current balance of the given address, 0 if unset.\n    /// Return type: BalanceResponse.\n    Balance { address: String },\n    /// Returns metadata on the contract - name, decimals, supply, etc.\n    /// Return type: TokenInfoResponse.\n    TokenInfo {},\n")),(0,s.kt)("p",null,"Balance Query\ub97c \ubcf4\ub0bc \ub54c\ub294 ",(0,s.kt)("inlineCode",{parentName:"p"},"Camel Case"),"\ub85c \uc801\ud600 \uc788\ub294 ",(0,s.kt)("strong",{parentName:"p"},"Balance"),"\ub97c ",(0,s.kt)("inlineCode",{parentName:"p"},"Snake Case"),"\ub85c \ubc14\uafb8\uc5b4 ",(0,s.kt)("strong",{parentName:"p"},"balance"),"\ub85c \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4. parameter \ud56d\ubaa9\uc740 ",(0,s.kt)("strong",{parentName:"p"},"{ address: String }")," \uc774\ubbc0\ub85c, \uc794\uc561\uc744 \uc54c\uace0 \uc2f6\uc740 \uc9c0\uac11 \uc8fc\uc18c\ub97c String Type\uc73c\ub85c \uc785\ub825\ud558\uba74 \ub429\ub2c8\ub2e4. \ub530\ub77c\uc11c \ucd5c\uc885 Query \uba54\uc2dc\uc9c0 \ud615\ud0dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'{\n    balance : {\n        address : "xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk"\n    }\n}\n')),(0,s.kt)("p",null,"TokenInfo Query\ub97c \ubcf4\ub0bc \ub54c\ub3c4 \ub9c8\ucc2c\uac00\uc9c0\uc785\ub2c8\ub2e4. ",(0,s.kt)("inlineCode",{parentName:"p"},"Camel Case"),"\ub85c \uc801\ud600 \uc788\ub294 ",(0,s.kt)("strong",{parentName:"p"},"TokenInfo"),"\ub97c ",(0,s.kt)("inlineCode",{parentName:"p"},"Snake Case"),"\ub85c \ubc14\uafb8\uc5b4 ",(0,s.kt)("strong",{parentName:"p"},"token_info"),"\ub85c \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\ub54c parameter\ub294 \uc5c6\uc73c\ubbc0\ub85c, \ucd5c\uc885 Query \uba54\uc2dc\uc9c0 \ud615\ud0dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"{\n    token_info : {}\n}\n")),(0,s.kt)("p",null,"\uc774\ub97c \ucc38\uace0\ud558\uc5ec \uc5ec\ub7ec\ubd84\uc758 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \ub2e4\uc591\ud55c Query\ub97c \ubcf4\ub0b4\ubcf4\uc138\uc694.")),(0,s.kt)("br",null),(0,s.kt)("p",null,"LCDClient\uc758 ",(0,s.kt)("inlineCode",{parentName:"p"},"contractQuery")," \ud568\uc218\ub97c \uc774\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\uc5d0 Query\ub97c \ubcf4\ub0c5\ub2c8\ub2e4. \uc785\ub825\ud55c Query \uba54\uc2dc\uc9c0\uc5d0 \ub9de\uac8c, \ucee8\ud2b8\ub799\ud2b8\uc5d0\uac8c \ub370\uc774\ud130\ub97c \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc720\uc800\uc758 \uc794\uc561(balance)\uc774 Log\ub85c \uc798 \ub098\uc624\ub294\uc9c0 \ud655\uc778\ud574\ubd05\uc2dc\ub2e4."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const balance = await lcd.wasm.contractQuery(contractAddress, msg);\nconsole.log(balance);\n")),(0,s.kt)("h2",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac"),(0,s.kt)("p",null,"\uc9c0\uae08\uae4c\uc9c0 CW20 \ucee8\ud2b8\ub799\ud2b8\uc5d0 Query\ub97c \ubcf4\ub0b4\ub294 \uacfc\uc815\uc744 \uc0b4\ud3b4\ubcf4\uc558\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ud2b9\uc815 \uc9c0\uac11 \uc8fc\uc18c\uac00 CW20 \ud1a0\ud070\uc744 \uc5bc\ub9c8\ub098 \ubcf4\uc720\ud558\uace0 \uc788\ub294\uc9c0\ub97c \uc54c \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/blob/main/packages/cw20/src/query.rs#L12"},"CW20 Github"),"\uc744 \ucc38\uace0\ud558\uba74 CW20 \ucee8\ud2b8\ub799\ud2b8\uc5d0 \uc5b4\ub5a4 Query\ub97c \ubcf4\ub0bc \uc218 \uc788\ub294\uc9c0 \ub354 \uc790\uc138\ud788 \uc0b4\ud3b4\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc758 \uac8c\uc784\uc5d0 \ub9de\uac8c \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c CW20 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uace0, \uc720\uc800\ub4e4\uc774 \uac8c\uc784\uc744 \ub354 \uc990\uae38 \uc218 \uc788\uac8c \ub9cc\ub4e4\uc5b4\ubd05\uc2dc\ub2e4."))}g.isMDXComponent=!0}}]);