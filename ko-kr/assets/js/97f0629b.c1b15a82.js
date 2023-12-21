"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[9703],{34673:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(87462),s=t(67294),l=t(86010),r=t(72389),o=t(86043);const i={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function c(e){return!!e&&("SUMMARY"===e.tagName||c(e.parentElement))}function d(e,n){return!!e&&(e===n||d(e.parentElement,n))}function p(e){let{summary:n,children:t,...p}=e;const m=(0,r.Z)(),u=(0,s.useRef)(null),{collapsed:k,setCollapsed:g}=(0,o.u)({initialState:!p.open}),[w,y]=(0,s.useState)(p.open),x=s.isValidElement(n)?n:s.createElement("summary",null,n??"Details");return s.createElement("details",(0,a.Z)({},p,{ref:u,open:w,"data-collapsed":k,className:(0,l.Z)(i.details,m&&i.isBrowser,p.className),onMouseDown:e=>{c(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;c(n)&&d(n,u.current)&&(e.preventDefault(),k?(g(!1),y(!0)):g(!0))}}),x,s.createElement(o.z,{lazy:!1,collapsed:k,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{g(e),y(!e)}},s.createElement("div",{className:i.collapsibleContent},t)))}const m={details:"details_b_Ee"},u="alert alert--info";function k(e){let{...n}=e;return s.createElement(p,(0,a.Z)({},n,{className:(0,l.Z)(u,m.details,n.className)}))}},22805:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>w,frontMatter:()=>c,metadata:()=>p,toc:()=>u});var a=t(87462),s=t(67294),l=t(3905),r=t(34673),o=t(18947);const i=()=>s.createElement(o.xR,{customSetup:{dependencies:{"@xpla/xpla.js":"^0.3.1","crypto-browserify":"latest"},entry:"index.js"},files:{"/index.js":"const { LCDClient, MnemonicKey, MsgExecuteContract } = require(\"@xpla/xpla.js\");\n\nconst lcd = new LCDClient({\n    chainID: 'cube_47-5',\n    URL: 'https://cube-lcd.xpla.dev'\n});\n\nconst main = async () => {\n    const mk = new MnemonicKey({\n        mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle' // Replace with your mnemonic words\n    })\n\n    const wallet = lcd.wallet(mk);\n    const myWalletAddress = wallet.key.accAddress;\n    const myContractAddress = \"xpla10r58td65tgvpaqngg7802rtpg5l6as8my2unnlnpa8en894qqstshxq0u0\"; // Input your Contract Address\n    const myTokenId = 'token_id_1703034376454'; // Input your token_id\n\n    const transferMsg = new MsgExecuteContract(\n        myWalletAddress,\n        myContractAddress,\n        {\n            transfer_nft: {\n            token_id: myTokenId,\n            recipient: 'xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk'\n          }\n        }\n    );\n\n    const signedTx = await lcd.wallet(mk).createAndSignTx({ // Creating and signing the transaction\n        msgs: [transferMsg]\n    });\n\n    const txResult = await lcd.tx.broadcastSync(signedTx);\n    console.log(txResult.txhash);\n}\nmain()"},options:{layout:"console",showLineNumbers:!0,editorHeight:600}}),c={sidebar_position:4},d="Send CW721 NFT (Javascript)",p={unversionedId:"tutorial/make-cw721/send-cw721",id:"tutorial/make-cw721/send-cw721",title:"Send CW721 NFT (Javascript)",description:"CW721 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc774\uc6a9\ud574\uc11c NFT\ub97c \ub2e4\ub978 \uc9c0\uac11\uc73c\ub85c \uc804\uc1a1\ud574\ubd05\uc2dc\ub2e4.",source:"@site/docs/3-tutorial/2-make-cw721/4-send-cw721.mdx",sourceDirName:"3-tutorial/2-make-cw721",slug:"/tutorial/make-cw721/send-cw721",permalink:"/xpla-academy-dev/ko-kr/docs/tutorial/make-cw721/send-cw721",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"CW721 \ub370\uc774\ud130 \uc0ac\uc6a9\ud558\uae30",permalink:"/xpla-academy-dev/ko-kr/docs/tutorial/make-cw721/query-cw721"},next:{title:"\uc2ec\ud654 - XPLA \ube14\ub85d\uccb4\uc778 \uae4a\uac8c \uc774\ud574\ud558\uae30",permalink:"/xpla-academy-dev/ko-kr/docs/category/\uc2ec\ud654---xpla-\ube14\ub85d\uccb4\uc778-\uae4a\uac8c-\uc774\ud574\ud558\uae30"}},m={},u=[{value:"Preview",id:"preview",level:2},{value:"Javascript\ub85c NFT \uc804\uc1a1\ud558\uae30",id:"run-js",level:2},{value:"\ucf54\ub4dc \uc2e4\ud589",id:"runcode",level:3},{value:"\uc124\uba85",id:"explaination",level:2},{value:"\ub9c8\ubb34\ub9ac",id:"conclusion",level:2}],k={toc:u},g="wrapper";function w(e){let{components:n,...t}=e;return(0,l.kt)(g,(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"send-cw721-nft-javascript"},"Send CW721 NFT (Javascript)"),(0,l.kt)("p",null,"CW721 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc774\uc6a9\ud574\uc11c NFT\ub97c \ub2e4\ub978 \uc9c0\uac11\uc73c\ub85c \uc804\uc1a1\ud574\ubd05\uc2dc\ub2e4."),(0,l.kt)("h2",{id:"preview"},"Preview"),(0,l.kt)("p",null,"Javascript\ub85c NFT\ub97c \uc804\uc1a1\ud558\ub294 \ucf54\ub4dc\ub294 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4.\n10\ubc88\uc9f8 \uc904\uc5d0 \uc5ec\ub7ec\ubd84\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub97c \ub123\uace0, 15, 16\ubc88\uc9f8 \uc904\uc5d0\ub294 \uac01\uac01 \uc774\uc804 \ub2e8\uacc4\uc5d0\uc11c \ub9cc\ub4e0 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\uc640 token_id \uac12\uc744 \ub300\uc785\ud574\uc8fc\uc138\uc694.\n\ucf54\ub4dc\ub97c \uc218\uc815\ud558\uace0 \uc870\uae08\ub9cc \uae30\ub2e4\ub9ac\uc2dc\uba74 \uc6b0\uce21\uc5d0\uc11c \uc2e4\ud589 \uacb0\uacfc\ub97c \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,l.kt)(i,{mdxType:"Ex11"}),(0,l.kt)("br",null),(0,l.kt)("p",null,"Preview Code\ub97c \uc774\ud574\ud558\uc168\ub2e4\uba74, ",(0,l.kt)("a",{parentName:"p",href:"/docs/tutorial/make-cw721/send-cw721#run-js"},"\uc544\ub798 \ub0b4\uc6a9"),"\uc744 \uc77d\uc9c0 \uc54a\uace0 \ubc14\ub85c ",(0,l.kt)("a",{parentName:"p",href:"/docs/tutorial/deep-understand-xpla/local-network"},"\ub2e4\uc74c \ub2e8\uacc4"),"\ub85c \ub118\uc5b4\uac00\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4."),(0,l.kt)("h2",{id:"run-js"},"Javascript\ub85c NFT \uc804\uc1a1\ud558\uae30"),(0,l.kt)("p",null,"Javascript \ucf54\ub4dc\ub85c NFT\ub97c \ub2e4\ub978 \uc9c0\uac11\uc73c\ub85c \uc804\uc1a1\ud574\ubd05\uc2dc\ub2e4."),(0,l.kt)("h3",{id:"runcode"},"\ucf54\ub4dc \uc2e4\ud589"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"example-send-cw721.js \ud30c\uc77c\uc744 \uc0dd\uc131\ud574\uc8fc\uc138\uc694.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\uc544\ub798 \ucf54\ub4dc\ub97c \ubcf5\uc0ac\ud558\uc5ec example-send-cw721.js \ud30c\uc77c\uc5d0 \ubd99\uc5ec\ub123\uace0 \uc800\uc7a5\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:"{10,15,16}","{10,15,16}":!0},"const { LCDClient, MnemonicKey, MsgExecuteContract } = require(\"@xpla/xpla.js\");\n\nconst lcd = new LCDClient({\n    chainID: 'cube_47-5',\n    URL: 'https://cube-lcd.xpla.dev'\n});\n\nconst main = async () => {\n    const mk = new MnemonicKey({\n        mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle' // Replace with your mnemonic words\n    })\n\n    const wallet = lcd.wallet(mk);\n    const myWalletAddress = wallet.key.accAddress;\n    const myContractAddress = \"xpla10r58td65tgvpaqngg7802rtpg5l6as8my2unnlnpa8en894qqstshxq0u0\"; // Input your Contract Address\n    const myTokenId = 'token_id_1703034376454'; // Input your token_id\n\n    const transferMsg = new MsgExecuteContract(\n        myWalletAddress,\n        myContractAddress,\n        {\n            transfer_nft: {\n                token_id: myTokenId,\n                recipient: 'xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk'\n            }\n        }\n    );\n\n    const signedTx = await lcd.wallet(mk).createAndSignTx({ // Creating and signing the transaction\n        msgs: [transferMsg]\n    });\n\n    const txResult = await lcd.tx.broadcastSync(signedTx);\n    console.log(txResult.txhash);\n}\nmain()\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"10\ubc88\uc9f8 \uc904\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub4e4\uc744 \uc5ec\ub7ec\ubd84\uc758 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub85c \uc218\uc815\ud574\uc8fc\uc138\uc694. 15\ubc88\uc9f8 \uc904 ",(0,l.kt)("inlineCode",{parentName:"p"},"myContractAddress"),"\uc5d0 \uc5ec\ub7ec\ubd84\uc774 \ub9cc\ub4e0 CW721 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\ub97c, 16\ubc88\uc9f8 \uc904 ",(0,l.kt)("inlineCode",{parentName:"p"},"myTokenId")," \ubcc0\uc218\uc5d0\ub294 \uc804\uc1a1\ud558\uace0 \uc2f6\uc740 NFT token_id \uac12\uc744 \ub300\uc785\ud574\uc8fc\uc138\uc694. ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"VSCode Terminal\uc5d0\uc11c \uc544\ub798 \uba85\ub839\uc5b4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"node example-send-cw721.js\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Terminal\uc5d0\uc11c \uacb0\uacfc\ub97c \ud655\uc778\ud569\ub2c8\ub2e4. NFT\ub97c \uc804\uc1a1\ud558\ub294 \ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc\uac12\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,l.kt)("h2",{id:"explaination"},"\uc124\uba85"),(0,l.kt)("p",null,"\uba3c\uc800 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub85c \uc9c0\uac11\uc744 \ubd88\ub7ec\uc654\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc740 \ub2e4\ub978 \ub2c8\ubaa8\ub2c9 \ub2e8\uc5b4\ub97c \uc774\uc6a9\ud558\uc5ec \uc5ec\ub7ec\ubd84\uc758 \uc9c0\uac11\uc744 \ubd88\ub7ec\uc624\uc168\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const mk = new MnemonicKey({\n    mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle',\n})\n\nconst wallet = lcd.wallet(mk);\nconst myWalletAddress = wallet.key.accAddress;\n")),(0,l.kt)("br",null),(0,l.kt)("p",null,"NFT\ub97c \uc804\uc1a1\ud558\ub824\uba74 CW721 \ucee8\ud2b8\ub799\ud2b8\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"transfer_nft")," \ud568\uc218\ub97c \uc2e4\ud589(MsgExecuteContract)\ud574\uc57c \ud569\ub2c8\ub2e4.\n\ub530\ub77c\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"transfer_nft")," \ud568\uc218\uc5d0 \ud544\uc694\ud55c \ubcc0\uc218\ub4e4\uc744 \uc785\ub825\ud558\uc600\uc2b5\ub2c8\ub2e4.\n\uc5ec\ub7ec\ubd84\uc740 \uc9c1\uc811 \ub9cc\ub4e0 CW721 \ucee8\ud2b8\ub799\ud2b8 \uc8fc\uc18c\uc640 token_id\ub97c \uac01\uac01 ",(0,l.kt)("inlineCode",{parentName:"p"},"myContractAddress"),"\uc640 ",(0,l.kt)("inlineCode",{parentName:"p"},"myTokenId")," \ubcc0\uc218\uc5d0 \ub300\uc785\ud558\uc168\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const myContractAddress = \"xpla10r58td65tgvpaqngg7802rtpg5l6as8my2unnlnpa8en894qqstshxq0u0\"; // Input your Contract Address\nconst myTokenId = 'token_id_1703034376454'; // Input your token_id\n\nconst transferMsg = new MsgExecuteContract(\n    myWalletAddress,\n    myContractAddress,\n    {\n        transfer_nft: {\n            token_id: myTokenId,\n            recipient: 'xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk'\n        }\n    }\n);\n")),(0,l.kt)(r.Z,{summary:"transfer_nft \ud568\uc218 \uc2e4\ud589\uc5d0 \ud544\uc694\ud55c \ub370\uc774\ud130\ub294 \uc5b4\ub514\uc11c \ud655\uc778\ud560 \uc218 \uc788\ub098\uc694?",mdxType:"Details"},(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-nfts/blob/main/packages/cw721/README.md"},"CW721 github"),"\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"p"},"transfer_nft")," \ud568\uc218 \uc2e4\ud589\uc744 \uc704\ud574 \ud544\uc694\ud55c \ub370\uc774\ud130\uac00 \ubb34\uc5c7\uc778\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub610, CW721 \ucee8\ud2b8\ub799\ud2b8\ub85c \uc2e4\ud589\ud560 \uc218 \uc788\ub294 \ub2e4\ub978 \ud568\uc218\ub4e4(Approve, Revoke \ub4f1) \uc815\ubcf4\ub3c4 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"createAndSignTx")," \ud568\uc218\ub97c \uc774\uc6a9\ud558\uc5ec \ud2b8\ub79c\uc7ad\uc158\uc744 \uc0dd\uc131\ud558\uace0, \uc11c\uba85\uae4c\uc9c0 \uc9c4\ud589\ud569\ub2c8\ub2e4. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const signedTx = await lcd.wallet(mk).createAndSignTx({ // Creating and signing the transaction\n    msgs: [transferMsg]\n});\n")),(0,l.kt)("br",null),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"broadcastSync")," \ud568\uc218\ub97c \uc774\uc6a9\ud558\uc5ec \uc0dd\uc131\ud55c \ud2b8\ub79c\uc7ad\uc158\uc744 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc1a1\uc2e0\ud569\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158\uc774 XPLA \ube14\ub85d\uccb4\uc778\uc5d0 \uc798 \uc0dd\uc131\ub418\uc5c8\ub2e4\uba74, \ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc\uac12\uc744 \uacb0\uacfc\ub85c \ud655\uc778\ud560 \uc218 \uc788\uc744 \uac83\uc785\ub2c8\ub2e4."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const txResult = await lcd.tx.broadcastSync(signedTx);\nconsole.log(txResult.txhash);\n")),(0,l.kt)("br",null),(0,l.kt)("p",null,"\ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc\uac12\uc774 \uc798 \ub098\uc654\ub098\uc694? ",(0,l.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/testnet/tx/53617a3baa568b3fd05528e0cea7f6c994ee9d32ab9c4b0fc94fb2acadbffcaf"},"XPLA Explorer"),"\ub97c \uc774\uc6a9\ud558\uc5ec NFT \uc804\uc1a1 \uacb0\uacfc\ub97c \ud655\uc778\ud574\ubcf4\uc138\uc694."),(0,l.kt)("h2",{id:"conclusion"},"\ub9c8\ubb34\ub9ac"),(0,l.kt)("p",null,"\uc9c0\uae08\uae4c\uc9c0 CW721 \ucee8\ud2b8\ub799\ud2b8\ub85c NFT \uc804\uc1a1\uc744 \uc54c\uc544\ubcf4\uc558\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec\ubd84\uc758 \uac8c\uc784\uc5d0 \ub9de\uac8c CW721 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0ac\uc6a9\ud558\uace0, \uc720\uc800\ub4e4\uc774 NFT\ub85c \uac8c\uc784\uc744 \ub354 \uc990\uae38 \uc218 \uc788\uac8c \ub9cc\ub4e4\uc5b4\ubd05\uc2dc\ub2e4."))}w.isMDXComponent=!0}}]);