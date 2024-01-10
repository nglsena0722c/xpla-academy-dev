(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[3237],{45111:(e,t,a)=>{"use strict";var l=a(64836);t.Z=void 0;var n=l(a(64938)),s=a(85893),r=(0,n.default)((0,s.jsx)("path",{d:"m7 10 5 5 5-5z"}),"ArrowDropDown");t.Z=r},13379:(e,t,a)=>{"use strict";var l=a(64836);t.Z=void 0;var n=l(a(64938)),s=a(85893),r=(0,n.default)((0,s.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");t.Z=r},91649:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var l=a(67294);function n(){return l.createElement("div",{className:"max-[920px]:hidden",style:{width:900,height:750,zIndex:10},dangerouslySetInnerHTML:{__html:'<iframe src="/xpla-academy-dev/img/web-desktop/index.html" width="100%" height="100%" scrolling ="no" ></iframe>'}})}},74584:(e,t,a)=>{"use strict";a.d(t,{v:()=>i,Z:()=>E});var l=a(87462),n=a(86010),s=a(67294);const r={features:"features_GNmN",devResourceButton:"devResourceButton_XBH6",endpointShadow:"endpointShadow_vthC",endpointMainnet:"endpointMainnet_rQEI",endpointTestnet:"endpointTestnet_ChlA",endpointURL:"endpointURL_jLlG",dropdownRotate:"dropdownRotate_HZz1",fadeOut:"fadeOut_zEfV",fadeout:"fadeout_BAoT",fadeIn:"fadeIn__JkO",fadein:"fadein_O_L3"};var c=a(39960),m=a(45111),o=a(13379);async function i(e){return void 0!==e&&(navigator.clipboard&&window.isSecureContext&&await navigator.clipboard.writeText(e.toString()),!0)}const x=[{title:"Github",link:"https://github.com/xpladev",color:"#00B2FC"},{title:"Vault",link:"https://vault.xpla.io/",color:"#1277FF"},{title:"Explorer",link:"https://explorer.xpla.io/",color:"#00B2FC"},{title:"API Swagger",link:"https://dimension-lcd.xpla.dev/swagger/#/",color:"#1277FF"},{title:"XPLA.js",link:"https://www.npmjs.com/package/@xpla/xpla.js",color:"#00B2FC"},{title:"Faucet",link:"https://faucet.xpla.io/",color:"#1277FF"}];function p(e){let{title:t,link:a,color:l}=e;return s.createElement(c.Z,{to:a,className:(0,n.Z)("flex flex-col p-5 gap-5",r.devResourceButton),style:{backgroundColor:l,textDecoration:"none"}},s.createElement("div",{className:"font-bold text-[20px] text-[#ffffff]"},t),s.createElement("div",{className:"flex justify-end"},s.createElement(o.Z,{sx:{color:"white"}})))}const d=[{title:"LCD",link:"https://dimension-lcd.xpla.dev"},{title:"RPC",link:"https://dimension-rpc.xpla.dev"},{title:"FCD",link:"https://dimension-fcd.xpla.dev"},{title:"GRPC",link:"dimension-grpc.xpla.dev:9090"},{title:"Websocket",link:"wss://dimension-rpc.xpla.dev/websocket"}],f=[{title:"LCD",link:"https://cube-lcd.xpla.dev"},{title:"RPC",link:"https://cube-rpc.xpla.dev"},{title:"FCD",link:"https://cube-fcd.xpla.dev"},{title:"GRPC",link:"cube-grpc.xpla.dev:9090"},{title:"Websocket",link:"wss://cube-rpc.xpla.dev/websocket"}];function u(e){let{title:t,link:a}=e;const[l,c]=(0,s.useState)(!0),[m,o]=(0,s.useState)(!1),x=(0,s.useCallback)((()=>{c(!0),o(!0),setTimeout((()=>{c(!1)}),1e3),setTimeout((()=>{o(!1)}),1500),i(a)}),[]);return s.createElement("div",{className:"flex justify-between"},s.createElement("div",{className:"flex"},s.createElement("span",{className:"text-[18px] font-bold w-[175px]"},t),s.createElement("span",{className:"text-[18px] font-medium"},a)),s.createElement("div",{className:"relative w-[100px] flex justify-end"},m&&s.createElement("img",{src:"/xpla-academy-dev/img/DevResource/copied.svg",className:(0,n.Z)("absolute left-[64px] bottom-[37px] w-[60px] ",l?r.fadeIn:r.fadeOut)}),s.createElement("img",{onClick:x,src:"/xpla-academy-dev/img/DevResource/CopyButton.svg",className:"hover:cursor-pointer hover:opacity-60"})))}function E(e){let{moveToElement:t}=e;const[a,c]=(0,s.useState)(!1),[o,i]=(0,s.useState)(!1);return s.createElement("section",{ref:t,className:"bg-[#F5F4F4] px-[16px] pt-[117px] pb-[147px] flex flex-col gap-[55px] items-center"},s.createElement("div",{className:"#333333 font-bold text-[50px]"},"Tap into the DEV Resources"),s.createElement("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 max-w-[1180px] w-[100%]"},x.map(((e,t)=>s.createElement(p,(0,l.Z)({key:t},e))))),s.createElement("div",{className:(0,n.Z)("max-w-[1180px] w-[100%]",r.endpointShadow)},s.createElement("div",{onClick:()=>c(!a),className:(0,n.Z)("hover:cursor-pointer bg-[#C9FF00]","text-[20px] flex justify-between items-center",r.endpointMainnet)},s.createElement("span",null,"ENDPOINT",s.createElement("span",{className:"font-bold"},"(MAINNET)")),s.createElement(m.Z,{sx:{color:"black",fontSize:60},className:(0,n.Z)(a?r.dropdownRotate:"")})),a&&s.createElement("div",{className:r.endpointURL},s.createElement("div",{className:"flex flex-col w-[100%] gap-5"},d.map(((e,t)=>s.createElement(u,(0,l.Z)({key:t},e)))))),s.createElement("div",{onClick:()=>i(!o),className:(0,n.Z)("hover:cursor-pointer bg-[#004FFF]","text-[#ffffff] text-[20px] flex justify-between items-center",r.endpointTestnet)},s.createElement("span",null,"ENDPOINT",s.createElement("span",{className:"font-bold"},"(TESTNET)")),s.createElement(m.Z,{sx:{color:"white",fontSize:60},className:(0,n.Z)(o?r.dropdownRotate:"")})),o&&s.createElement("div",{className:r.endpointURL},s.createElement("div",{className:"flex flex-col w-[100%] gap-5"},f.map(((e,t)=>s.createElement(u,(0,l.Z)({key:t},e))))))))}},72335:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>S});var l=a(67294),n=a(39960),s=a(52263),r=a(69466);function c(){return l.createElement("section",{className:"min-[997px]:h-[920px] max-[996px]:py-[20px] px-[20px] bg-[#004FFF] flex justify-center items-center"},l.createElement("div",{className:"max-w-[1180px] w-full flex flex-col justify-center items-start"},l.createElement("div",{className:"font-bold text-[50px] leading-[60px] text-white mb-[18px]"},"About XPLA ACADEMY"),l.createElement("div",{className:"font-normal text-[28px] leading-[36px] text-[#46E9FC] mb-[105px]"},l.createElement("span",null,"Education hub for building XPLA-linked Web3 projects."),l.createElement("br",null),l.createElement("span",null,"Easy to follow guides and free source codes.")),l.createElement("div",{className:"w-full flex max-[996px]:flex-col gap-[80px] items-center "},l.createElement("img",{src:"/xpla-academy-dev/img/AboutXPLAAcademy/venn_diagram.svg",alt:"venn_diagram"}),l.createElement("div",null,l.createElement("div",{className:"text-[40px] leading-[48px] text-[#C9FF00] font-bold mb-[16px]"},"Start Learning"),l.createElement("div",{className:"text-[29px] leading-[38px] font-semibold text-white mb-[4px]"},"Connect XPLA to your project."),l.createElement("div",{className:"font-normal text-[29px] leading-[38px] text-white mb-[70px]"},"Add Web3 features by following the Code Along Guide."),l.createElement("div",{className:"text-[#46E9FC] text-[40px] leading-[48px] font-bold"},"Try Demo"),l.createElement("div",{className:"text-white text-[29px] leading-[38px] font-semibold"},"Interact with the Demo projects."),l.createElement("div",{className:"text-white text-[29px] leading-[34px] font-normal"},"Everything built from Start Learning content!"),l.createElement("div",{className:"relative text-white text-[29px] leading-[34px] font-normal "},"From Web3 Game Project to"," ",l.createElement("span",{className:"font-bold text-[#FAED00] inline-flex items-start"},"Web3 Gaming Ops",l.createElement("span",{className:"mt-[3px] font-normal text-[16px] leading-[16px]"},"*\xa0")),l.createElement("span",{className:"min-[1676px]:absolute text-[#FAED00] min-[1676px]:mt-[3px] whitespace-nowrap font-normal text-[16px] leading-[34px]"},"(A tool for managing Web3 assets) "))))))}var m=a(87462);const o={features:"features_NgA9",featureSvg:"featureSvg_x_KM",ellipsis:"ellipsis_aa1a",square:"square_wf7P",card:"card_QzAh",mobileImg:"mobileImg_yskk",rightBorder:"rightBorder_BSkQ"};var i=a(86010);const x=[{Svg:"/xpla-academy-dev/img/DiveInto/easy-to-follow.svg",title:l.createElement(l.Fragment,null,"Try the easy tutorials"),description:l.createElement(l.Fragment,null,"A step-by-step curriculum for understanding",l.createElement("br",null),"and applying Web3 \u2014 for everyone."),rightBorder:!0,sizes:"(max-width: 768px) 100px, 150px"},{Svg:"/xpla-academy-dev/img/DiveInto/freely-moddable.svg",title:l.createElement(l.Fragment,null,"Use the free codes"),description:l.createElement(l.Fragment,null,"Feel free to use the example code for anything!",l.createElement("br",null),"Check final output examples in Try Demo menu."),rightBorder:!0,sizes:"(max-width: 768px) 121px"},{Svg:"/xpla-academy-dev/img/DiveInto/game-developer-friendly.svg",title:l.createElement(l.Fragment,null,"We want to help you"),description:l.createElement(l.Fragment,null,"Building Web3 games can be tough.",l.createElement("br",null),"Share questions in the comments for help any time!"),rightBorder:!1,sizes:"(max-width: 768px) 158px"}];function p(e){let{Svg:t,title:a,description:n,rightBorder:s,sizes:r}=e;return l.createElement("div",{className:(0,i.Z)("flex flex-1 justify-center items-center",o.card,s&&[o.rightBorder])},l.createElement("div",{className:"flex flex-1 gap-[27px] items-center flex-row md:flex-col p-4 justify-between"},l.createElement("div",{className:(0,i.Z)("flex flex-1 justify-between ")},l.createElement("img",{src:t,className:o.mobileImg,alt:"featureimg",sizes:r})),l.createElement("div",null,l.createElement("div",{className:"font-bold text-[26px] leading-[31px] text-black text-center md:mb-[16px]"},a),l.createElement("div",{className:"font-medium text-[14px] leading-[24px] text-black text-center"},n))))}function d(){return l.createElement("section",{className:"h-[900px] md:h-[684px] bg-[#00B2FF] relative flex justify-center items-center px-[16px]"},l.createElement("img",{className:o.ellipsis,src:"/xpla-academy-dev/img/DiveInto/ellipsis.svg",alt:"ellipsis",sizes:"(min-width: 1780px) 303px"}),l.createElement("img",{className:o.square,src:"/xpla-academy-dev/img/DiveInto/square.svg",alt:"square",sizes:"(min-width: 1780px) 308px"}),l.createElement("div",{className:"max-w-[1180px] h-full flex flex-1 justify-center items-center z-10"},l.createElement("div",{className:"flex flex-col max-[500px]:h-full flex-1 md:gap-[57px]"},l.createElement("span",{className:"text-[#000000] flex md:flex-1 justify-center font-bold text-[50px] leading-[60px]"},"Dive into XPLA ACADEMY"),l.createElement("div",{className:"flex-col md:flex-row flex flex-1 gap-[20px]"},x.map(((e,t)=>l.createElement(p,(0,m.Z)({key:t},e))))))))}const f={heroBanner:"heroBanner_qdFl",earth:"earth_bHu0"};var u=a(91649);function E(e){let{moveToElement:t}=e;return l.createElement("section",{ref:t,className:(0,i.Z)("relative h-[1000px] md:h-[1392px] flex flex-col bg-[#CBF0FF] justify-center items-center px-4")},l.createElement("img",{src:"/xpla-academy-dev/img/PlayGame/bgassets-left.svg",alt:"bgassets-left",className:"max-[800px]:hidden absolute mix-blend-luminosity bottom-[103px] left-[116px]"}),l.createElement("img",{src:"/xpla-academy-dev/img/PlayGame/bgassets-right.svg",alt:"bgassets-right",className:"max-[800px]:hidden absolute mix-blend-luminosity bottom-0 right-0"}),l.createElement("div",{className:"flex flex-col items-center z-10"},l.createElement("img",{width:"780px",height:"66px",src:"/xpla-academy-dev/img/PlayGame/gametitle.svg",alt:"gametitle",className:"mb-[20px]"}),l.createElement("div",{className:"text-[#004FFF] font-semibold text-[50px] leading-[60px] mb-[56px]"},"Play Demo Game"),l.createElement("div",{className:"mb-[51px]"},l.createElement("img",{className:"min-[921px]:hidden",src:"/xpla-academy-dev/img/PlayGame/comingsoon.svg"}),l.createElement(u.Z,null)),l.createElement("div",{className:"mb-[42px] text-center text-[29px] leading-[39px] font-medium"},"Play ",l.createElement("span",{className:"font-bold"},"XPLA ACADEMY"),"'s Demo Game"," ",l.createElement("br",null),"Experience Game Building within XPLA"),l.createElement("div",{className:"flex justify-center items-center gap-[84px]"},l.createElement(n.Z,{to:"https://github.com/xpladev/academy",className:"font-medium text-[20px] leading-[24px] text-black hover:text-[#004FFF] flex flex-col justify-between items-center text-center hover:text-[#004FFF] hover:no-underline"},l.createElement("img",{src:"/xpla-academy-dev/img/PlayGame/githubwhite.svg",alt:"githubwhite",width:"40px",height:"40px"}),"Game code on",l.createElement("br",null)," GitHub! \u2794"),l.createElement("div",{className:"h-full border-solid border-[0px] border-r-[1.5px]"}),l.createElement(n.Z,{to:"/playgame#aboutGame",className:"font-medium text-[20px] leading-[24px] text-black hover:text-[#004FFF] flex flex-col justify-between items-center text-center hover:text-[#004FFF] hover:no-underline"},l.createElement("img",{src:"/xpla-academy-dev/img/PlayGame/game-asset.svg",alt:"gameAsset",width:"114px",height:"40px"}),"About",l.createElement("br",null),"Break The Bricks \u2794"))))}var g=a(74584);const b={features:"features_IUEL",slickSet:"slickSet_dWMu",dotsCustom:"dotsCustom_vxkO",card:"card_RYvz",quotationMark:"quotationMark_N9Y_"};var v=a(46066),h=a(98396);function N(){const e=(0,l.useRef)(null),t=(0,l.useRef)(),a=(0,h.Z)("(max-width:768px)"),n=[{title:["Get to know Web3","with XPLA!"],color:"#F93AC3",contents:[{link:"/startlearning/category/lets-get-your-wallet-ready",description:a?l.createElement("span",{className:"font-semibold text-[20px]"},"Experience the TESTNET! ",l.createElement("br",null),"Create a WALLET, Make your first",l.createElement("span",{className:"font-bold text-[20px]"}," TRANSACTIONS!")):l.createElement("div",{className:"font-semibold text-[24px] h-[197px]"},"Experience the",l.createElement("br",null),"TESTNET!",l.createElement("br",null),"Create a WALLET",l.createElement("br",null),"Make your first",l.createElement("br",null),l.createElement("span",{className:"font-bold text-[24px]"},"TRANSACTIONS!"))},{link:"/startlearning/category/utilize-tokens-cw20",description:a?l.createElement("span",{className:"font-semibold text-[20px]"},"Play with your Creation!",l.createElement("br",null),"Issue ",l.createElement("span",{className:"font-bold text-[20px]"},"TOKENS")):l.createElement("div",{className:"font-semibold text-[24px] h-[197px]"},"Play with your Creation!",l.createElement("br",null),"Issue ",l.createElement("span",{className:"font-bold text-[24px]"},"TOKENS"))},{link:"/startlearning/category/utilize-nftcw721",description:a?l.createElement("span",{className:"font-semibold text-[20px]"},"Play with your Creation!",l.createElement("br",null),"Issue ",l.createElement("span",{className:"font-bold text-[20px]"},"NFT")):l.createElement("div",{className:"font-semibold text-[24px] h-[197px]"},"Play with your",l.createElement("br",null),"Creation!",l.createElement("br",null),"Issue ",l.createElement("span",{className:"font-bold text-[24px]"},"NFT"))}]},{title:["Be a pro with","ADVANCED COURSES!"],color:"#C9FF00",contents:[{link:"/startlearning/tutorial/deep-understand-xpla/local-network",description:a?l.createElement("span",{className:"font-semibold text-[20px]"},"Make your own space!",l.createElement("br",null),l.createElement("span",{className:"font-bold text-[20px]"}," XPLA Local Network")):l.createElement("div",{className:"font-semibold text-[24px] h-[197px]"},"Make your own ",l.createElement("br",null),"space!",l.createElement("br",null),l.createElement("span",{className:"font-bold text-[24px]"},"XPLA "),"Local Network")},{link:"/startlearning/tutorial/deep-understand-xpla/account-sequence",description:a?l.createElement("span",{className:"font-semibold text-[20px]"},"Learn about",l.createElement("br",null),l.createElement("span",{className:"font-bold text-[20px]"},"Account number ",l.createElement("span",{className:"font-semibold"},"and")," Sequence!")):l.createElement("div",{className:"font-semibold text-[24px] h-[197px]"},"Learn about",l.createElement("br",null),l.createElement("span",{className:"font-bold text-[24px]"},"Account number ",l.createElement("span",{className:"font-semibold"},"and")),l.createElement("br",null),l.createElement("span",{className:"font-bold text-[24px]"},"Sequence!"))},{link:"/startlearning/tutorial/deep-understand-xpla/walletprovider",description:a?l.createElement("span",{className:"font-semibold text-[20px]"},"Integrate",l.createElement("br",null),l.createElement("span",{className:"font-bold text-[20px]"},"WALLET CONNECT!")):l.createElement("div",{className:"font-semibold text-[24px] h-[197px]"},"Integrate",l.createElement("br",null),l.createElement("span",{className:"font-bold text-[24px]"},"WALLET"),l.createElement("br",null),l.createElement("span",{className:"font-bold text-[24px]"},"CONNECT!"))}]},{title:["Add Web3 to your project","with XPLA!"],color:"#FFE200",contents:[{link:"/startlearning/tutorial/deep-understand-xpla/write-contract",description:a?l.createElement("span",{className:"font-semibold text-[20px]"},"Deploy your own",l.createElement("br",null),l.createElement("span",{className:"font-bold text-[20px]"},"CONTRACT on XPLA")):l.createElement("div",{className:"font-semibold text-[24px] h-[197px]"},"Deploy your own",l.createElement("br",null),l.createElement("span",{className:"font-bold text-[24px]"},"CONTRACT "),"on",l.createElement("br",null),l.createElement("span",{className:"font-bold text-[24px]"},"XPLA"))},{description:a?l.createElement("span",{className:"font-semibold text-[20px]"},"Exchange Tokens with",l.createElement("br",null),l.createElement("span",{className:"font-bold text-[20px]"},"CONVERT! ")):l.createElement("div",{className:"font-semibold text-[24px] h-[197px]"},"Exchange",l.createElement("br",null),"Tokens with",l.createElement("br",null),l.createElement("span",{className:"font-bold text-[24px]"},"CONVERT!"))},{link:"/startlearning/tutorial/deep-understand-xpla/swap",description:a?l.createElement("span",{className:"font-semibold text-[20px]"},"Exchange Tokens",l.createElement("br",null),l.createElement("span",{className:" text-[20px]"},"to $XPLA with ",l.createElement("span",{className:"font-bold"},"SWAP!"))):l.createElement("div",{className:"font-semibold text-[24px] h-[197px]"},"Exchange",l.createElement("br",null),l.createElement("span",{className:"text-[24px]"},"Tokens to $XPLA with"),l.createElement("br",null),l.createElement("span",{className:"font-bold text-[24px]"},"SWAP!"))}]}];return l.createElement("section",{className:"h-[833px]",ref:e},l.createElement("div",{className:(0,i.Z)("w-full h-full",b.slickSet,b.dotsCustom)},l.createElement(v.Z,(0,m.Z)({ref:t},{dots:!0,autoplay:!0,autoplaySpeed:5e3,arrows:!1,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1}),n.map((e=>l.createElement(l.Fragment,{key:e.title},l.createElement(w,e)))))))}const w=e=>{let{title:t,color:a,contents:s}=e;return l.createElement("div",{className:"flex justify-center items-center w-[100%] h-[100%] px-[16px]",style:{backgroundColor:a}},l.createElement("div",{className:"w-[1180px] flex flex-col items-center justify-center gap-[58px] mb-[60px]"},l.createElement("div",{className:"font-bold text-[30px] md:text-[50px] text-center leading-tight"},t.map(((e,t)=>l.createElement("div",{key:t},e)))),l.createElement("div",{className:"flex flex-col md:flex-row gap-5 w-[100%]"},s.map(((e,t)=>l.createElement(n.Z,{to:e.link,key:t,className:(0,i.Z)("flex flex-col justify-center text-[#000000] hover:text-[#000000]",b.card),style:{textDecoration:"none"},"aria-label":"content-link"+e.link},l.createElement("img",{className:(0,i.Z)("w-12 md:mb-[30px]",b.quotationMark),src:"/xpla-academy-dev/img/IntroduceTutorial/quotationMark.svg",alt:"questionMark",width:"48px",height:"36px"}),e.description,l.createElement("div",{className:"flex justify-end"},l.createElement("img",{className:(0,i.Z)("w-[51px]",b.quotationMark),src:"/xpla-academy-dev/img/IntroduceTutorial/right-arrow.svg",alt:"right-arrow",width:"51px",height:"20px"}))))))))},y={star:"star_HSHN",earth:"earth_jUqh",heart:"heart_I1_O",contactButton:"contactButton_zQiy"};function k(){return l.createElement("section",{className:"h-[276px] bg-[#F5F4F4] relative flex justify-center items-center px-[16px]"},l.createElement("img",{className:y.star,src:"/xpla-academy-dev/img/ContactUs/star.svg"}),l.createElement("img",{className:y.earth,src:"/xpla-academy-dev/img/ContactUs/earth.svg"}),l.createElement("div",{className:"z-10 relative"},l.createElement("div",{className:"flex flex-col items-center gap-[20px]"},l.createElement("span",{className:"text-[#000000] font-semibold text-[42px]"},"Interested in Collaborating?"),l.createElement("a",{href:"mailto:xpla_official@xpla.io",className:(0,i.Z)("w-fit bg-[#00B2FC] flex items-center justify-center py-[5px] px-[36px] text-[#000000] hover:text-[#000000] hover:no-underline",y.contactButton)},l.createElement("span",{className:"font-medium text-[28px]"},"Contact Us"))),l.createElement("img",{className:y.heart,src:"/xpla-academy-dev/img/ContactUs/heart.svg"})))}const F={registerNow:"registerNow_WeWb",trailblazer:"trailblazer__1vM",bannerMaxWidth:"bannerMaxWidth_lYrx",devEvents:"devEvents_fOoS"};function C(){const e=(0,h.Z)("(max-width:768px)");return l.createElement("section",{className:"h-[832px] flex flex-col justify-center items-center px-[16px]"},l.createElement("div",{className:"font-bold text-[50px] mb-[53px]"},"Join the XPLA DEV Network"),l.createElement("div",{className:(0,i.Z)("justify-center px-[20px] md:px-[100px] md:py-[60px] flex flex-col gap-4 w-[100%] max-w-[1180px] mb-8",F.trailblazer)},l.createElement("span",{className:"font-semibold text-[38px] text-[#ffffff]"},"XPLA Trailblazer"),l.createElement(n.Z,{to:"https://6tpnthyk0ch.typeform.com/XPLATrailBlazer",className:"w-fit",style:{textDecoration:"none"},"aria-label":"xpla-trailblazer-link"},l.createElement("span",{className:F.registerNow},"Register Now"))),e?l.createElement("div",{className:(0,i.Z)("justify-center px-[20px] md:px-[100px] md:py-[60px] flex flex-col gap-4 w-[100%] max-w-[1180px] mb-8",F.trailblazer)},l.createElement("span",{className:"font-semibold text-[38px] text-[#ffffff]"},"Dev Events")):l.createElement("div",{className:(0,i.Z)("px-[100px] py-[60px] flex flex-col gap-4 w-[100%] max-w-[1180px] mb-20",F.devEvents)},l.createElement("span",{className:"font-semibold text-[38px] text-[#ffffff]"},"Dev Events")))}var A=a(52252);function T(e){let{onMoveToElement:t}=e;const{siteConfig:a}=(0,s.Z)();return l.createElement("header",{className:"h-[800px] flex justify-center px-[16px] bg-[#F5F4F4]"},l.createElement("div",{className:"max-w-[1180px] flex flex-1 justify-between items-center relative"},l.createElement("div",{className:"flex flex-col max-w-[638px] pb-[5px]"},l.createElement("img",{className:"mb-[30px]",src:"/xpla-academy-dev/img/Homepage/xpla-academy.svg",alt:"xpla-academy",width:"564px",height:"55px"}),l.createElement("span",{className:"text-[29px] font-semibold leading-[36px] mb-[10px]"},a.tagline),l.createElement("span",{className:"text-[24px] font-normal leading-[29px]"},"Educational content related to blockchain development,"),l.createElement("span",{className:"text-[24px] font-normal leading-[29px]"},"smart contracts, and game tokenomic systems all provided!"),l.createElement("div",{className:"mt-[56px] font-medium text-[24px] leading-[29px] text-[#004FFF]"},"Your projects are just a click away!"),l.createElement("div",{className:"flex gap-[20px] mt-[19px]"},l.createElement(n.Z,{"aria-label":"open-tutorial",to:"/startlearning/overview/intro",className:"bg-[#C9FF00] buttonShadow flex items-center justify-center py-[10px] px-[30px] border-[1px] text-[#000000] hover:text-[#000000] hover:no-underline"},l.createElement("span",{className:"font-medium text-[20px] "},"Start Learning")),l.createElement(n.Z,{"aria-label":"open-tutorial",to:"/playgame",className:"bg-[#fff] buttonShadow flex items-center justify-center py-[10px] px-[30px] border-[1px] text-[#000000] hover:text-[#000000] hover:no-underline"},l.createElement("span",{className:"font-medium text-[20px]"},"Play Game")))),l.createElement("img",{className:"hidden lg:block max-[1536px]:w-[50%] lg:static 2xl:top-[71px] 2xl:left-[634px] 2xl:absolute",src:"/xpla-academy-dev/img/Homepage/explorer-play.svg",alt:"explorer-play",sizes:"(min-width: 1024px) 674px"}),l.createElement("img",{className:f.earth,src:"/xpla-academy-dev/img/Homepage/earth.svg",alt:"earth",sizes:"(min-width: 900px) 185px"})))}function S(){const e=(0,l.useRef)(null),t=(0,l.useRef)(null);(0,l.useEffect)((()=>{var e;"#playgame"===window.location.hash&&(e=t.current.getBoundingClientRect().top+window.pageYOffset-80,window.scrollTo({top:e,behavior:"smooth"}))}),[]);const[a,n]=(0,l.useState)();return(0,l.useEffect)((()=>{(0,A.c3)().then((e=>n(e))).catch((e=>{}))}),[]),l.createElement(r.Z,{title:"XPLA ACADEMY",description:"Tutorials & Guides for Integrating XPLA into your project! Master the world of XPLA step by step."},l.createElement(T,{onMoveToElement:()=>{var t=e.current.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:t,behavior:"smooth"})}}),l.createElement("main",null,l.createElement(c,null),l.createElement(d,null),l.createElement(E,{moveToElement:t}),l.createElement(N,null),l.createElement(g.Z,{moveToElement:e}),l.createElement(C,null),l.createElement(k,null)))}},36563:()=>{},46601:()=>{},89214:()=>{},85568:()=>{},34845:()=>{},52361:()=>{},94616:()=>{},33370:()=>{}}]);