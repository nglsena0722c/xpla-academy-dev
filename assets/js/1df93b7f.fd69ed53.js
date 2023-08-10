(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[3237],{98384:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>S});var l=a(67294),n=a(39960),s=a(52263),c=a(93728),r=a(87462);const o={features:"features_t9lD",featureSvg:"featureSvg_GfXr",ellipsis:"ellipsis_BwiO",square:"square_jCRj",card:"card_L8bV"};var i=a(86010);const m=[{Svg:"/xpla-academy-dev/img/HomepageFeatures/easy-to-follow.svg",description:l.createElement(l.Fragment,null,"Easy to follow tutorials")},{Svg:"/xpla-academy-dev/img/HomepageFeatures/freely-moddable.svg",description:l.createElement(l.Fragment,null,"Flexible Modularity")},{Svg:"/xpla-academy-dev/img/HomepageFeatures/game-developer-friendly.svg",description:l.createElement(l.Fragment,null,"Game DEV-friendly")}];function p(e){let{Svg:t,description:a}=e;return l.createElement("div",{className:(0,i.Z)("flex flex-1 justify-center items-center",o.card)},l.createElement("div",{className:"flex flex-col gap-[33px]"},l.createElement("div",{className:"flex flex-1 justify-center"},l.createElement("img",{src:t})),l.createElement("span",{className:"font-bold text-[26px] "},a)))}function x(){return l.createElement("section",{className:"h-[812px] bg-[#004FFF] relative flex justify-center items-center px-[16px]"},l.createElement("img",{className:o.ellipsis,src:"/xpla-academy-dev/img/HomepageFeatures/ellipsis.svg"}),l.createElement("img",{className:o.square,src:"/xpla-academy-dev/img/HomepageFeatures/square.svg"}),l.createElement("div",{className:"max-w-[1180px] flex flex-1 justify-center items-center z-10"},l.createElement("div",{className:"flex flex-col flex-1 gap-[77px]"},l.createElement("span",{className:"text-[#ffffff] flex flex-1 justify-center font-semibold text-[50px]"},"Dive into XPLA Academy"),l.createElement("div",{className:"flex flex-1 gap-[20px]"},m.map(((e,t)=>l.createElement(p,(0,r.Z)({key:t},e))))))))}const d={heroBanner:"heroBanner_qdFl",explorerPlay:"explorerPlay_EN2g",earth:"earth_bHu0"};function f(){return l.createElement("section",{className:"h-[1272px] flex flex-col justify-center items-center gap-[78px]"},l.createElement("div",{className:"flex flex-col items-center justify-center"},l.createElement("div",{className:"font-bold text-[50px] leading-[60px]"},"Explore & Play the demo"),l.createElement("div",{className:"font-bold text-[50px] leading-[60px]"},"Experience game building on XPLA")),l.createElement("img",{src:"/xpla-academy-dev/img/PlayGame/comingsoon.svg"}))}const u={features:"features_GNmN",devResourceButton:"devResourceButton_XBH6",endpointShadow:"endpointShadow_vthC",endpointMainnet:"endpointMainnet_rQEI",endpointTestnet:"endpointTestnet_ChlA",endpointURL:"endpointURL_jLlG",dropdownRotate:"dropdownRotate_HZz1"};var v=a(45111),E=a(13379);const g=[{title:"Github",link:"https://github.com/xpladev",color:"#00B2FC"},{title:"Vault",link:"https://vault.xpla.io/",color:"#1277FF"},{title:"Explorer",link:"https://explorer.xpla.io/",color:"#00B2FC"},{title:"API Swagger",link:"https://dimension-lcd.xpla.dev/swagger/#/",color:"#1277FF"},{title:"XPLA.js",link:"https://www.npmjs.com/package/@xpla/xpla.js",color:"#00B2FC"},{title:"Faucet",link:"https://faucet.xpla.io/",color:"#1277FF"}];function N(e){let{title:t,link:a,color:s}=e;return l.createElement(n.Z,{to:a,className:(0,i.Z)("flex flex-col p-5 gap-5",u.devResourceButton),style:{backgroundColor:s,textDecoration:"none"}},l.createElement("div",{className:"font-bold text-[20px] text-[#ffffff]"},t),l.createElement("div",{className:"flex justify-end"},l.createElement(E.Z,{sx:{color:"white"}})))}const b=[{title:"LCD",link:"https://dimension-lcd.xpla.dev"},{title:"RPC",link:"https://dimension-rpc.xpla.dev"},{title:"FCD",link:"https://dimension-fcd.xpla.dev"},{title:"GRPC",link:"dimension-grpc.xpla.dev:9090"},{title:"Websocket",link:"wss://dimension-rpc.xpla.dev/websocket"}],h=[{title:"LCD",link:"https://cube-lcd.xpla.dev"},{title:"RPC",link:"https://cube-rpc.xpla.dev"},{title:"FCD",link:"https://cube-fcd.xpla.dev"},{title:"GRPC",link:"cube-grpc.xpla.dev:9090"},{title:"Websocket",link:"wss://cube-rpc.xpla.dev/websocket"}];function y(e){let{title:t,link:a}=e;const n=(0,l.useCallback)((()=>{!async function(e){void 0!==e&&(navigator.clipboard&&window.isSecureContext&&await navigator.clipboard.writeText(e.toString()))}(a)}),[]);return l.createElement("div",{className:"flex justify-between"},l.createElement("div",{className:"flex"},l.createElement("span",{className:"text-[18px] font-bold w-[175px]"},t),l.createElement("span",{className:"text-[18px] font-medium"},a)),l.createElement("img",{onClick:n,src:"/xpla-academy-dev/img/DevResource/CopyButton.svg",className:"hover:cursor-pointer hover:opacity-60"}))}function w(e){let{moveToElement:t}=e;const[a,n]=(0,l.useState)(!1),[s,c]=(0,l.useState)(!1);return l.createElement("section",{ref:t,className:"bg-[#F5F4F4] px-[16px] pt-[117px] pb-[147px] flex flex-col gap-[55px] items-center"},l.createElement("div",{className:"#333333 font-bold text-[50px]"},"Tap into the DEV Resources"),l.createElement("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 max-w-[1180px] w-[100%]"},g.map(((e,t)=>l.createElement(N,(0,r.Z)({key:t},e))))),l.createElement("div",{className:(0,i.Z)("max-w-[1180px] w-[100%]",u.endpointShadow)},l.createElement("div",{onClick:()=>n(!a),className:(0,i.Z)("hover:cursor-pointer bg-[#C9FF00]","text-[20px] flex justify-between items-center",u.endpointMainnet)},l.createElement("span",null,"ENDPOINT",l.createElement("span",{className:"font-bold"},"(MAINNET)")),l.createElement(v.Z,{sx:{color:"black",fontSize:60},className:(0,i.Z)(a?u.dropdownRotate:"")})),a&&l.createElement("div",{className:u.endpointURL},l.createElement("div",{className:"flex flex-col w-[100%] gap-5"},b.map(((e,t)=>l.createElement(y,(0,r.Z)({key:t},e)))))),l.createElement("div",{onClick:()=>c(!s),className:(0,i.Z)("hover:cursor-pointer bg-[#004FFF]","text-[#ffffff] text-[20px] flex justify-between items-center",u.endpointTestnet)},l.createElement("span",null,"ENDPOINT",l.createElement("span",{className:"font-bold"},"(TESTNET)")),l.createElement(v.Z,{sx:{color:"white",fontSize:60},className:(0,i.Z)(a?u.dropdownRotate:"")})),s&&l.createElement("div",{className:u.endpointURL},l.createElement("div",{className:"flex flex-col w-[100%] gap-5"},h.map(((e,t)=>l.createElement(y,(0,r.Z)({key:t},e))))))))}const k={star:"star_HSHN",earth:"earth_jUqh",heart:"heart_I1_O",contactButton:"contactButton_zQiy"};function F(){return l.createElement("section",{className:"h-[276px] bg-[#F5F4F4] relative flex justify-center items-center px-[16px]"},l.createElement("img",{className:k.star,src:"/xpla-academy-dev/img/ContactUs/star.svg"}),l.createElement("img",{className:k.earth,src:"/xpla-academy-dev/img/ContactUs/earth.svg"}),l.createElement("div",{className:"z-10 relative"},l.createElement("div",{className:"flex flex-col items-center gap-[20px]"},l.createElement("span",{className:"text-[#000000] font-semibold text-[42px]"},"Interested in Collaborating?"),l.createElement(n.Z,{to:"/docs/overview/intro",className:(0,i.Z)("w-fit bg-[#00B2FC] flex items-center justify-center py-[5px] px-[36px] text-[#000000] hover:text-[#000000] hover:no-underline",k.contactButton)},l.createElement("span",{className:"font-medium text-[28px]"},"Contact Us"))),l.createElement("img",{className:k.heart,src:"/xpla-academy-dev/img/ContactUs/heart.svg"})))}const C={registerNow:"registerNow_WeWb",trailblazer:"trailblazer__1vM",devEvents:"devEvents_fOoS",bannerMaxWidth:"bannerMaxWidth_lYrx"};function j(){return l.createElement("section",{className:"h-[1008px] flex flex-col justify-center items-center px-[16px]"},l.createElement("div",{className:"font-bold text-[50px] mb-[53px]"},"Join the XPLA DEV Network"),l.createElement("div",{className:(0,i.Z)("px-[100px] py-[60px] flex flex-col gap-4 w-[100%] max-w-[1180px] mb-8",C.trailblazer)},l.createElement("span",{className:"font-semibold text-[38px] text-[#ffffff]"},"XPLA Trailblazer"),l.createElement(n.Z,{to:"https://6tpnthyk0ch.typeform.com/XPLATrailBlazer",style:{textDecoration:"none"}},l.createElement("span",{className:C.registerNow},"Register Now"))),l.createElement("div",{className:(0,i.Z)("px-[100px] py-[60px] flex flex-col gap-4 w-[100%] max-w-[1180px] mb-20",C.devEvents)},l.createElement("span",{className:"font-semibold text-[38px] text-[#ffffff]"},"Dev Events"),l.createElement(n.Z,{style:{textDecoration:"none"}},l.createElement("span",{className:C.registerNow},"Enter Now"))))}var _=a(59106);function Z(e){let{onMoveToElement:t}=e;const{siteConfig:a}=(0,s.Z)();return l.createElement("header",{className:"h-[800px] flex justify-center px-[16px] bg-[#F5F4F4]"},l.createElement("div",{className:"max-w-[1180px] flex flex-1 justify-start items-center relative"},l.createElement("div",{className:"flex flex-col max-w-[576px] pb-[100px]"},l.createElement("span",{className:"text-[70px] font-bold"},a.title),l.createElement("span",{className:"text-[29px] font-semibold leading-[36px] mb-[10px]"},a.tagline),l.createElement("span",{className:"text-[24px] font-normal leading-[29px]"},"Master the world of XPLA step by step."),l.createElement("span",{className:"text-[24px] font-normal leading-[29px]"},"Your projects are just a click away!"),l.createElement("div",{className:"flex gap-[20px] mt-[40px]"},l.createElement(n.Z,{to:"/docs/overview/intro",className:"bg-[#C9FF00] buttonShadow flex items-center justify-center py-[10px] px-[30px] border-[1px] text-[#000000] hover:text-[#000000] hover:no-underline"},l.createElement("span",{className:"font-medium text-[20px] "},"Start Now")),l.createElement("div",{className:"bg-[#fff] buttonShadow flex items-center justify-center py-[10px] px-[30px] border-[1px]",onClick:t},l.createElement("span",{className:"font-medium text-[20px]"},"Dev Resources")))),l.createElement("img",{className:d.explorerPlay,src:"/xpla-academy-dev/img/Homepage/explorer-play.svg"}),l.createElement("img",{className:d.earth,src:"/xpla-academy-dev/img/Homepage/earth.svg"})))}function S(){const{siteConfig:e}=(0,s.Z)(),t=(0,l.useRef)(null),[a,n]=(0,l.useState)();return(0,l.useEffect)((()=>{(0,_.c3)().then((e=>n(e))).catch((e=>{}))}),[]),l.createElement(c.Z,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />"},l.createElement(Z,{onMoveToElement:()=>{t.current?.scrollIntoView({behavior:"smooth",block:"start"})}}),l.createElement("main",null,l.createElement(x,null),l.createElement(f,null),l.createElement(w,{moveToElement:t}),l.createElement(j,null),l.createElement(F,null)))}},36563:()=>{},46601:()=>{},89214:()=>{},85568:()=>{},34845:()=>{},52361:()=>{},94616:()=>{},33370:()=>{}}]);