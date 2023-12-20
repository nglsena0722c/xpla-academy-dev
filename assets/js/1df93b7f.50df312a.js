"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[3237],{74584:(e,t,a)=>{a.d(t,{v:()=>i,Z:()=>E});var l=a(87462),n=a(86010),s=a(67294);const r={features:"features_GNmN",devResourceButton:"devResourceButton_XBH6",endpointShadow:"endpointShadow_vthC",endpointMainnet:"endpointMainnet_rQEI",endpointTestnet:"endpointTestnet_ChlA",endpointURL:"endpointURL_jLlG",dropdownRotate:"dropdownRotate_HZz1",fadeOut:"fadeOut_zEfV",fadeout:"fadeout_BAoT",fadeIn:"fadeIn__JkO",fadein:"fadein_O_L3"};var c=a(39960),o=a(45111),m=a(13379);async function i(e){return void 0!==e&&(navigator.clipboard&&window.isSecureContext&&await navigator.clipboard.writeText(e.toString()),!0)}const p=[{title:"Github",link:"https://github.com/xpladev",color:"#00B2FC"},{title:"Vault",link:"https://vault.xpla.io/",color:"#1277FF"},{title:"Explorer",link:"https://explorer.xpla.io/",color:"#00B2FC"},{title:"API Swagger",link:"https://dimension-lcd.xpla.dev/swagger/#/",color:"#1277FF"},{title:"XPLA.js",link:"https://www.npmjs.com/package/@xpla/xpla.js",color:"#00B2FC"},{title:"Faucet",link:"https://faucet.xpla.io/",color:"#1277FF"}];function x(e){let{title:t,link:a,color:l}=e;return s.createElement(c.Z,{to:a,className:(0,n.Z)("flex flex-col p-5 gap-5",r.devResourceButton),style:{backgroundColor:l,textDecoration:"none"}},s.createElement("div",{className:"font-bold text-[20px] text-[#ffffff]"},t),s.createElement("div",{className:"flex justify-end"},s.createElement(m.Z,{sx:{color:"white"}})))}const d=[{title:"LCD",link:"https://dimension-lcd.xpla.dev"},{title:"RPC",link:"https://dimension-rpc.xpla.dev"},{title:"FCD",link:"https://dimension-fcd.xpla.dev"},{title:"GRPC",link:"dimension-grpc.xpla.dev:9090"},{title:"Websocket",link:"wss://dimension-rpc.xpla.dev/websocket"}],f=[{title:"LCD",link:"https://cube-lcd.xpla.dev"},{title:"RPC",link:"https://cube-rpc.xpla.dev"},{title:"FCD",link:"https://cube-fcd.xpla.dev"},{title:"GRPC",link:"cube-grpc.xpla.dev:9090"},{title:"Websocket",link:"wss://cube-rpc.xpla.dev/websocket"}];function u(e){let{title:t,link:a}=e;const[l,c]=(0,s.useState)(!0),[o,m]=(0,s.useState)(!1),p=(0,s.useCallback)((()=>{c(!0),m(!0),setTimeout((()=>{c(!1)}),1e3),setTimeout((()=>{m(!1)}),1500),i(a)}),[]);return s.createElement("div",{className:"flex justify-between"},s.createElement("div",{className:"flex"},s.createElement("span",{className:"text-[18px] font-bold w-[175px]"},t),s.createElement("span",{className:"text-[18px] font-medium"},a)),s.createElement("div",{className:"relative w-[100px] flex justify-end"},o&&s.createElement("img",{src:"/xpla-academy-dev/img/DevResource/copied.svg",className:(0,n.Z)("absolute left-[64px] bottom-[37px] w-[60px] ",l?r.fadeIn:r.fadeOut)}),s.createElement("img",{onClick:p,src:"/xpla-academy-dev/img/DevResource/CopyButton.svg",className:"hover:cursor-pointer hover:opacity-60"})))}function E(e){let{moveToElement:t}=e;const[a,c]=(0,s.useState)(!1),[m,i]=(0,s.useState)(!1);return s.createElement("section",{ref:t,className:"bg-[#F5F4F4] px-[16px] pt-[117px] pb-[147px] flex flex-col gap-[55px] items-center"},s.createElement("div",{className:"#333333 font-bold text-[50px]"},"Tap into the DEV Resources"),s.createElement("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 max-w-[1180px] w-[100%]"},p.map(((e,t)=>s.createElement(x,(0,l.Z)({key:t},e))))),s.createElement("div",{className:(0,n.Z)("max-w-[1180px] w-[100%]",r.endpointShadow)},s.createElement("div",{onClick:()=>c(!a),className:(0,n.Z)("hover:cursor-pointer bg-[#C9FF00]","text-[20px] flex justify-between items-center",r.endpointMainnet)},s.createElement("span",null,"ENDPOINT",s.createElement("span",{className:"font-bold"},"(MAINNET)")),s.createElement(o.Z,{sx:{color:"black",fontSize:60},className:(0,n.Z)(a?r.dropdownRotate:"")})),a&&s.createElement("div",{className:r.endpointURL},s.createElement("div",{className:"flex flex-col w-[100%] gap-5"},d.map(((e,t)=>s.createElement(u,(0,l.Z)({key:t},e)))))),s.createElement("div",{onClick:()=>i(!m),className:(0,n.Z)("hover:cursor-pointer bg-[#004FFF]","text-[#ffffff] text-[20px] flex justify-between items-center",r.endpointTestnet)},s.createElement("span",null,"ENDPOINT",s.createElement("span",{className:"font-bold"},"(TESTNET)")),s.createElement(o.Z,{sx:{color:"white",fontSize:60},className:(0,n.Z)(m?r.dropdownRotate:"")})),m&&s.createElement("div",{className:r.endpointURL},s.createElement("div",{className:"flex flex-col w-[100%] gap-5"},f.map(((e,t)=>s.createElement(u,(0,l.Z)({key:t},e))))))))}},3233:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var l=a(67294),n=a(39960),s=a(52263),r=a(11239),c=a(87462);const o={features:"features_t9lD",featureSvg:"featureSvg_GfXr",ellipsis:"ellipsis_BwiO",square:"square_jCRj",card:"card_L8bV"};var m=a(86010);const i=[{Svg:"/xpla-academy-dev/img/HomepageFeatures/easy-to-follow.svg",description:l.createElement(l.Fragment,null,"Easy to follow tutorials")},{Svg:"/xpla-academy-dev/img/HomepageFeatures/freely-moddable.svg",description:l.createElement(l.Fragment,null,"Flexible Modularity")},{Svg:"/xpla-academy-dev/img/HomepageFeatures/game-developer-friendly.svg",description:l.createElement(l.Fragment,null,"Game DEV-friendly")}];function p(e){let{Svg:t,description:a}=e;return l.createElement("div",{className:(0,m.Z)("flex flex-1 justify-center items-center",o.card)},l.createElement("div",{className:"flex flex-col gap-[33px]"},l.createElement("div",{className:"flex flex-1 justify-center"},l.createElement("img",{src:t})),l.createElement("span",{className:"font-bold text-[26px] "},a)))}function x(){return l.createElement("section",{className:"h-[812px] bg-[#004FFF] relative flex justify-center items-center px-[16px]"},l.createElement("img",{className:o.ellipsis,src:"/xpla-academy-dev/img/HomepageFeatures/ellipsis.svg"}),l.createElement("img",{className:o.square,src:"/xpla-academy-dev/img/HomepageFeatures/square.svg"}),l.createElement("div",{className:"max-w-[1180px] flex flex-1 justify-center items-center z-10"},l.createElement("div",{className:"flex flex-col flex-1 gap-[77px]"},l.createElement("span",{className:"text-[#ffffff] flex flex-1 justify-center font-semibold text-[50px]"},"Dive into XPLA Academy"),l.createElement("div",{className:"flex flex-1 gap-[20px]"},i.map(((e,t)=>l.createElement(p,(0,c.Z)({key:t},e))))))))}const d={heroBanner:"heroBanner_qdFl",explorerPlay:"explorerPlay_EN2g",earth:"earth_bHu0"};function f(){return l.createElement("div",{style:{width:1e3,height:800},dangerouslySetInnerHTML:{__html:'<iframe src="/xpla-academy-dev/img/web-desktop/index.html" width="100%" height="100%"></iframe>'}})}var u=a(98396);function E(e){let{moveToElement:t}=e;const a=(0,u.Z)("(max-width:768px)");return l.createElement("section",{ref:t,className:"h-[1272px] flex flex-col justify-center items-center gap-[78px]"},l.createElement("div",{className:"flex flex-col items-center justify-center"},l.createElement("div",{className:"font-bold text-[50px] leading-[60px]"},"Explore & Play the demo"),l.createElement("div",{className:"font-bold text-[50px] leading-[60px]"},"Experience game building on XPLA")),a?l.createElement("img",{src:"/xpla-academy-dev/img/PlayGame/comingsoon.svg"}):l.createElement(f,null))}var g=a(74584);const v={features:"features_IUEL",slickSet:"slickSet_dWMu",dotsCustom:"dotsCustom_vxkO",card:"card_RYvz"};var N=a(46066);function h(){const e=(0,l.useRef)(null),t=(0,l.useRef)(),a=[{title:["Straightforward","Steps to Integrate XPLA!"],color:"#F93AC3",contents:[{link:"/docs/category/create-wallet",description:l.createElement("div",{className:"font-semibold text-[24px] h-[197px]"},"Experience the",l.createElement("br",null),"TESTNET!",l.createElement("br",null),"Create a WALLET",l.createElement("br",null),"Make your first",l.createElement("br",null),l.createElement("span",{className:"font-bold text-[24px]"},"TRANSACTIONS!"))},{link:"/docs/category/\ud1a0\ud070cw20-\ub2e4\ub8e8\uae30",description:l.createElement("div",{className:"font-semibold text-[24px] h-[197px]"},"Play with your Creation!",l.createElement("br",null),"Issue ",l.createElement("span",{className:"font-bold text-[24px]"},"TOKENS"))},{link:"/docs/category/nftcw721-\ub2e4\ub8e8\uae30",description:l.createElement("div",{className:"font-semibold text-[24px] h-[197px]"},"Play with your",l.createElement("br",null),"Creation!",l.createElement("br",null),"Issue  ",l.createElement("span",{className:"font-bold text-[24px]"},"NFT"))}]},{title:["Straightforward","Steps to Integrate XPLA!"],color:"#C9FF00",contents:[{link:"/docs/category/\uc2ec\ud654---xpla-\ube14\ub85d\uccb4\uc778-\uae4a\uac8c-\uc774\ud574\ud558\uae30",description:l.createElement("div",{className:"font-semibold text-[24px] h-[197px]"},"Stand out with ",l.createElement("br",null),l.createElement("span",{className:"font-bold text-[24px]"},"ADVANCED ",l.createElement("br",null),"COURSES!"))},{link:"/docs/tutorial/deep-understand-xpla/local-network",description:l.createElement("div",{className:"font-semibold text-[24px] h-[197px]"},"Make your own ",l.createElement("br",null),"space!",l.createElement("br",null),l.createElement("span",{className:"font-bold text-[24px]"},"XPLA "),"Local Network")},{link:"/docs/tutorial/deep-understand-xpla/account-sequence",description:l.createElement("div",{className:"font-semibold text-[24px] h-[197px]"},"Multi-Send",l.createElement("br",null),l.createElement("span",{className:"font-bold text-[24px]"},"$XPLA!"))}]},{title:["Straightforward","Steps to Integrate XPLA!"],color:"#FFE200",contents:[{link:"/docs/tutorial/deep-understand-xpla/walletprovider",description:l.createElement("div",{className:"font-semibold text-[24px] h-[197px]"},"Integrate",l.createElement("br",null),l.createElement("span",{className:"font-bold text-[24px]"},"WALLET"),l.createElement("br",null),l.createElement("span",{className:"font-bold text-[24px]"},"CONNECT!"))},{link:"/docs/tutorial/deep-understand-xpla/write-contract",description:l.createElement("div",{className:"font-semibold text-[24px] h-[197px]"},"Deploy your own",l.createElement("br",null),l.createElement("span",{className:"font-bold text-[24px]"},"CONTRACT "),"on",l.createElement("br",null),l.createElement("span",{className:"font-bold text-[24px]"},"XPLA"))},{description:l.createElement("div",{className:"font-semibold text-[24px] h-[197px]"},"Exchange",l.createElement("br",null),"Tokens with",l.createElement("br",null),l.createElement("span",{className:"font-bold text-[24px]"},"CONVERT!"),l.createElement("br",null),"(Coming Soon)")}]}];return l.createElement("section",{className:"h-[833px]",ref:e},l.createElement("div",{className:(0,m.Z)("w-full h-full",v.slickSet,v.dotsCustom)},l.createElement(N.Z,(0,c.Z)({ref:t},{dots:!0,autoplay:!0,autoplaySpeed:5e3,arrows:!1,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1}),a.map((e=>l.createElement(b,e))))))}const b=e=>{let{title:t,color:a,contents:s}=e;return l.createElement("div",{className:"flex justify-center items-center w-[100%] h-[100%] px-[16px]",style:{backgroundColor:a}},l.createElement("div",{className:"w-[1180px] flex flex-col items-center justify-center gap-[58px] mb-[60px]"},l.createElement("div",{className:"font-bold text-[50px] text-center leading-tight"},t.map(((e,t)=>l.createElement("div",{key:t},e)))),l.createElement("div",{className:"flex gap-5 w-[100%]"},s.map(((e,t)=>l.createElement(n.Z,{to:e.link,key:t,className:(0,m.Z)("flex flex-col justify-between text-[#000000] hover:text-[#000000]",v.card),style:{textDecoration:"none"}},l.createElement("img",{className:"w-12",src:"/xpla-academy-dev/img/IntroduceTutorial/quotationMark.svg"}),e.description,l.createElement("div",{className:"flex justify-end"},l.createElement("img",{className:"w-[51px]",src:"/xpla-academy-dev/img/IntroduceTutorial/right-arrow.svg"}))))))))},w={star:"star_HSHN",earth:"earth_jUqh",heart:"heart_I1_O",contactButton:"contactButton_zQiy"};function y(){return l.createElement("section",{className:"h-[276px] bg-[#F5F4F4] relative flex justify-center items-center px-[16px]"},l.createElement("img",{className:w.star,src:"/xpla-academy-dev/img/ContactUs/star.svg"}),l.createElement("img",{className:w.earth,src:"/xpla-academy-dev/img/ContactUs/earth.svg"}),l.createElement("div",{className:"z-10 relative"},l.createElement("div",{className:"flex flex-col items-center gap-[20px]"},l.createElement("span",{className:"text-[#000000] font-semibold text-[42px]"},"Interested in Collaborating?"),l.createElement("a",{href:"mailto:xpla_official@xpla.io",className:(0,m.Z)("w-fit bg-[#00B2FC] flex items-center justify-center py-[5px] px-[36px] text-[#000000] hover:text-[#000000] hover:no-underline",w.contactButton)},l.createElement("span",{className:"font-medium text-[28px]"},"Contact Us"))),l.createElement("img",{className:w.heart,src:"/xpla-academy-dev/img/ContactUs/heart.svg"})))}const k={registerNow:"registerNow_WeWb",trailblazer:"trailblazer__1vM",hackathon:"hackathon_mF0S",bannerMaxWidth:"bannerMaxWidth_lYrx"};function C(){return l.createElement("section",{className:"h-[832px] flex flex-col justify-center items-center px-[16px]"},l.createElement("div",{className:"font-bold text-[50px] mb-[53px]"},"Join the XPLA DEV Network"),l.createElement("div",{className:(0,m.Z)("px-[100px] py-[60px] flex flex-col gap-4 w-[100%] max-w-[1180px] mb-8",k.trailblazer)},l.createElement("span",{className:"font-semibold text-[38px] text-[#ffffff]"},"XPLA Trailblazer"),l.createElement(n.Z,{to:"https://6tpnthyk0ch.typeform.com/XPLATrailBlazer",className:"w-fit",style:{textDecoration:"none"}},l.createElement("span",{className:k.registerNow},"Register Now"))),l.createElement(n.Z,{to:"https://app.glitch-hack.com/",className:(0,m.Z)("hover:cursor-pointer px-[100px] py-[60px] flex flex-col gap-4 w-[100%] max-w-[1180px]",k.hackathon)}))}const F="bannerWord_hwmw",S=()=>l.createElement("div",{className:"h-[60px] w-full"},l.createElement(n.Z,{to:"https://app.glitch-hack.com/",className:"h-[60px] w-full flex justify-center items-center px-[16px] bg-[#004FFF] text-white hover:text-white",style:{textDecoration:"none"}},l.createElement("div",{className:"relative flex items-center max-w-[1180px] w-[100%]"},l.createElement("img",{className:"absolute left-0 mt-2",src:"/xpla-academy-dev/img/Banner/banner.svg"}),l.createElement("div",{className:(0,m.Z)("absolute right-0 flex items-center text-[16px] font-medium",F)},"Period\xa0",l.createElement("span",{className:"font-bold "},"Aug 18th-27th\xa0"),"| Demo Day\xa0",l.createElement("span",{className:"font-bold "},"Sep 3rd @Seoul")))));function T(e){let{onMoveToElement:t}=e;const{siteConfig:a}=(0,s.Z)();return l.createElement("header",{className:"h-[800px] flex justify-center px-[16px] bg-[#F5F4F4]"},l.createElement("div",{className:"max-w-[1180px] flex flex-1 justify-between items-center relative"},l.createElement("div",{className:"flex flex-col max-w-[576px] pb-[100px]"},l.createElement("img",{className:"mb-[30px]",src:"/xpla-academy-dev/img/Homepage/xpla-academy.svg"}),l.createElement("span",{className:"text-[29px] font-semibold leading-[36px] mb-[10px]"},a.tagline),l.createElement("span",{className:"text-[24px] font-normal leading-[29px]"},"Master the world of XPLA step by step."),l.createElement("span",{className:"text-[24px] font-normal leading-[29px]"},"Your projects are just a click away!"),l.createElement("div",{className:"flex gap-[20px] mt-[40px]"},l.createElement(n.Z,{to:"/docs/overview/intro",className:"bg-[#C9FF00] buttonShadow flex items-center justify-center py-[10px] px-[30px] border-[1px] text-[#000000] hover:text-[#000000] hover:no-underline"},l.createElement("span",{className:"font-medium text-[20px] "},"Start Now")),l.createElement("div",{className:"bg-[#fff] buttonShadow flex items-center justify-center py-[10px] px-[30px] border-[1px]",onClick:t},l.createElement("span",{className:"font-medium text-[20px]"},"Dev Resources")))),l.createElement("img",{className:d.explorerPlay,src:"/xpla-academy-dev/img/Homepage/explorer-play.svg"}),l.createElement("img",{className:d.earth,src:"/xpla-academy-dev/img/Homepage/earth.svg"})))}function _(){const e=(0,l.useRef)(null),t=(0,l.useRef)(null);return(0,l.useEffect)((()=>{var e;"#playgame"===window.location.hash&&(e=t.current.getBoundingClientRect().top+window.pageYOffset-80,window.scrollTo({top:e,behavior:"smooth"}))}),[]),l.createElement(r.Z,{title:"XPLA ACADEMY",description:"Tutorials & Guides for Integrating XPLA into your project! Master the world of XPLA step by step."},l.createElement(S,null),l.createElement(T,{onMoveToElement:()=>{var t=e.current.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:t,behavior:"smooth"})}}),l.createElement("main",null,l.createElement(x,null),l.createElement(E,{moveToElement:t}),l.createElement(h,null),l.createElement(g.Z,{moveToElement:e}),l.createElement(C,null),l.createElement(y,null)))}}}]);