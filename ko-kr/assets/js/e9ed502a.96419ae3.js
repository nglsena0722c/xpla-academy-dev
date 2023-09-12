"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[8595],{91649:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294);function n(){return r.createElement("div",{style:{width:1e3,height:800},dangerouslySetInnerHTML:{__html:'<iframe src="/xpla-academy-dev/img/web-desktop/index.html" width="100%" height="100%"></iframe>'}})}},37054:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(52252),n=a(30826),l=a(6154),s=a(86010),o=a(67294),c=a(87536),m=a(32624),d=a(48764).Buffer;const i=e=>{let{className:t,title:a,children:i}=e;const[u,g]=(0,o.useState)(null),[b,h]=(0,o.useState)(null),[x,f]=(0,o.useState)(null),[w,p]=(0,o.useState)(!1),E=(0,c.cI)({mode:"onChange"}),y=(0,r.Yk)(),{status:k,wallets:N}=(0,r.Os)(),{register:v,watch:S,setValue:C,handleSubmit:T,resetField:_,reset:Z,clearErrors:M}=E,{formState:L}=E,{errors:R}=L,{...$}=S(),I="https://gw-qa-gcl.c2xstation.net:40202";async function O(e){try{const t=`${I}/wallet/txinfo?txhash=${e}`,a=await l.Z.get(t);"500"===a.data.returnCode?setTimeout(O,1e3,e):"0"===a.data.returnCode&&(p(!1),g(a.data.returnMsg),"success"===a.data.returnMsg&&f(e))}catch(t){h(`Unknown Error: ${t instanceof Error?t.message:String(t)}`)}}return o.createElement("div",{className:(0,s.Z)("px-8 flex flex-row items-center max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",t)},o.createElement("div",{className:"p-5"},o.createElement("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},a),k===r.PR.WALLET_NOT_CONNECTED?o.createElement(o.Fragment,null,"Connect Wallet"):0==N.length?"Loading...":o.createElement("form",{className:"mb-3 font-normal text-gray-700 dark:text-gray-400 flex flex-col gap-3",onSubmit:T((async e=>{let{...t}=e;try{const{amount:e}=t,a=new n.LCDClient({chainID:"cube_47-5",URL:"https://cube-lcd.xpla.dev"}),r=N[0].xplaAddress,s=await a.auth.accountInfo(r),o={wallet:r,amount:e,userPubKey:s.getPublicKey().key,userSeq:s.getSequenceNumber()},c=`${I}/wallet/wallet-coin-to-gamecurrency-unsigned`,m=await l.Z.post(c,o),i=m.data.unsignedTx;if(void 0===i)throw new Error(m.data.returnMsg);const u=n.Tx.fromBuffer(d.from(i,"base64")),{result:g,success:b}=await y.sign({msgs:u.body.messages,fee:u.auth_info.fee,signMode:n.SignMode.SIGN_MODE_LEGACY_AMINO_JSON});if(!b)throw new Error("Vault Sign Error");const h=d.from(g.toBytes()).toString("base64"),x={wallet:r,tid:m.data.tid,userTx:h},f=`${I}/wallet/wallet-coin-to-gamecurrency`;let w=await l.Z.post(f,x);p(!0),setTimeout(O,1e3,w.data.txhash)}catch(a){h(`Unknown Error: ${a instanceof Error?a.message:String(a)}`)}}))},o.createElement("div",{className:"flex gap-2"},o.createElement("div",{className:"min-w-[100px]"},"Amount :"),o.createElement("input",v("amount"))),o.createElement("button",{type:"submit",className:" cursor-pointer py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"},"Submit \xa0",w&&o.createElement(m.Z,{size:12}))),u&&o.createElement(o.Fragment,null,o.createElement("div",{className:"mt-4 block rounded-lg border bg-white p-6 shadow dark:border-neutral-700 dark:bg-neutral-800 "},o.createElement("div",{className:"flex items-center justify-between gap-4"},"Request Result",x?o.createElement("a",{href:`https://explorer.xpla.io/testnet/tx/${x}`,target:"_blank"},x):o.createElement("span",null,"Error!")))),b&&o.createElement(o.Fragment,null,o.createElement("div",{className:"mt-4 block rounded-lg border bg-white p-6 shadow dark:border-neutral-700 dark:bg-neutral-800 "},o.createElement("div",{className:"flex items-center justify-between gap-4"},"Request Error",o.createElement("span",null,b))))))}},57332:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(52252),n=a(30826),l=a(6154),s=a(86010),o=a(67294),c=a(87536),m=a(32624),d=a(48764).Buffer;const i=e=>{let{className:t,title:a,children:i}=e;const[u,g]=(0,o.useState)(null),[b,h]=(0,o.useState)(null),[x,f]=(0,o.useState)(null),[w,p]=(0,o.useState)(!1),E=(0,c.cI)({mode:"onChange"}),y=(0,r.Yk)(),{status:k,wallets:N}=(0,r.Os)(),{register:v,watch:S,setValue:C,handleSubmit:T,resetField:_,reset:Z,clearErrors:M}=E,{formState:L}=E,{errors:R}=L,{...$}=S(),I="https://gw-qa-gcl.c2xstation.net:40202";async function O(e){try{const t=`${I}/wallet/txinfo?txhash=${e}`,a=await l.Z.get(t);"500"===a.data.returnCode?setTimeout(O,1e3,e):"0"===a.data.returnCode&&(p(!1),g(a.data.returnMsg),"success"===a.data.returnMsg&&f(e))}catch(t){h(`Unknown Error: ${t instanceof Error?t.message:String(t)}`)}}return o.createElement("div",{className:(0,s.Z)("px-8 flex flex-row items-center max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",t)},o.createElement("div",{className:"p-5"},o.createElement("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},a),k===r.PR.WALLET_NOT_CONNECTED?o.createElement(o.Fragment,null,"Connect Wallet"):0==N.length?"Loading...":o.createElement("form",{className:"mb-3 font-normal text-gray-700 dark:text-gray-400 flex flex-col gap-3",onSubmit:T((async e=>{let{...t}=e;try{const{amount:e}=t,a=new n.LCDClient({chainID:"cube_47-5",URL:"https://cube-lcd.xpla.dev"}),r=N[0].xplaAddress,s=await a.auth.accountInfo(r),o={wallet:r,amount:e,userPubKey:s.getPublicKey().key,userSeq:s.getSequenceNumber()},c=`${I}/wallet/wallet-gamecurrency-to-coin-unsigned`,m=await l.Z.post(c,o),i=m.data.unsignedTx;if(void 0===i)throw new Error(m.data.returnMsg);const u=n.Tx.fromBuffer(d.from(i,"base64")),{result:g,success:b}=await y.sign({msgs:u.body.messages,fee:u.auth_info.fee,signMode:n.SignMode.SIGN_MODE_LEGACY_AMINO_JSON});if(!b)throw new Error("Vault Sign Error");const h=d.from(g.toBytes()).toString("base64"),x={wallet:r,tid:m.data.tid,userTx:h},f=`${I}/wallet/wallet-gamecurrency-to-coin`;let w=await l.Z.post(f,x);p(!0),setTimeout(O,1e3,w.data.txhash)}catch(a){h(`Unknown Error: ${a instanceof Error?a.message:String(a)}`)}}))},o.createElement("div",{className:"flex gap-2"},o.createElement("div",{className:"min-w-[100px]"},"Amount :"),o.createElement("input",v("amount"))),o.createElement("button",{type:"submit",className:" cursor-pointer py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"},"Submit \xa0",w&&o.createElement(m.Z,{size:12}))),u&&o.createElement(o.Fragment,null,o.createElement("div",{className:"mt-4 block rounded-lg border bg-white p-6 shadow dark:border-neutral-700 dark:bg-neutral-800 "},o.createElement("div",{className:"flex items-center justify-between gap-4"},"Request Result",x?o.createElement("a",{href:`https://explorer.xpla.io/testnet/tx/${x}`,target:"_blank"},x):o.createElement("span",null,"Error!")))),b&&o.createElement(o.Fragment,null,o.createElement("div",{className:"mt-4 block rounded-lg border bg-white p-6 shadow dark:border-neutral-700 dark:bg-neutral-800 "},o.createElement("div",{className:"flex items-center justify-between gap-4"},"Request Error",o.createElement("span",null,b))))))}},72452:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(52252),n=a(30826),l=a(6154),s=a(86010),o=a(67294),c=a(87536),m=a(32624),d=a(48764).Buffer;const i=e=>{let{className:t,title:a,children:i}=e;const[u,g]=(0,o.useState)(null),[b,h]=(0,o.useState)(null),[x,f]=(0,o.useState)(null),[w,p]=(0,o.useState)(!1),E=(0,c.cI)({mode:"onChange"}),y=(0,r.Yk)(),{status:k,wallets:N}=(0,r.Os)(),{register:v,watch:S,setValue:C,handleSubmit:T,resetField:_,reset:Z,clearErrors:M}=E,{formState:L}=E,{errors:R}=L,{...$}=S(),I="https://gw-qa-gcl.c2xstation.net:40202";async function O(e){try{const t=`${I}/wallet/txinfo?txhash=${e}`,a=await l.Z.get(t);"500"===a.data.returnCode?setTimeout(O,1e3,e):"0"===a.data.returnCode&&(p(!1),g(a.data.returnMsg),"success"===a.data.returnMsg&&f(e))}catch(t){h(`Unknown Error: ${t instanceof Error?t.message:String(t)}`)}}return o.createElement("div",{className:(0,s.Z)("px-8 flex flex-row items-center max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",t)},o.createElement("div",{className:"p-5"},o.createElement("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},a),k===r.PR.WALLET_NOT_CONNECTED?o.createElement(o.Fragment,null,"Connect Wallet"):0==N.length?"Loading...":o.createElement("form",{className:"mb-3 font-normal text-gray-700 dark:text-gray-400 flex flex-col gap-3",onSubmit:T((async e=>{let{...t}=e;try{const{amount:e,width:a,count:r,start_has_ball:s}=t,o=new n.LCDClient({chainID:"cube_47-5",URL:"https://cube-lcd.xpla.dev"}),c=N[0].xplaAddress,m=await o.auth.accountInfo(c),i={wallet:c,payAmount:e,width:a,count:r,start_has_ball:s,userPubKey:m.getPublicKey().key,userSeq:m.getSequenceNumber()},u=`${I}/wallet/wallet-minting-unsigned`,g=await l.Z.post(u,i),b=g.data.unsignedTx;if(void 0===b)throw new Error(g.data.returnMsg);const h=n.Tx.fromBuffer(d.from(b,"base64")),{result:x,success:f}=await y.sign({msgs:h.body.messages,fee:h.auth_info.fee,signMode:n.SignMode.SIGN_MODE_LEGACY_AMINO_JSON});if(!f)throw new Error("Vault Sign Error");const w=d.from(x.toBytes()).toString("base64"),E={wallet:c,tid:g.data.tid,userTx:w},k=`${I}/wallet/wallet-minting`;let v=await l.Z.post(k,E);p(!0),setTimeout(O,1e3,v.data.txhash)}catch(a){h(`Unknown Error: ${a instanceof Error?a.message:String(a)}`)}}))},o.createElement("div",{className:"flex gap-2"},o.createElement("div",{className:"min-w-[100px]"},"Pay Amount :"),o.createElement("input",v("amount"))),o.createElement("div",{className:"flex gap-2"},o.createElement("div",{className:"min-w-[100px]"},"Width :"),o.createElement("input",v("width"))),o.createElement("div",{className:"flex gap-2"},o.createElement("div",{className:"min-w-[100px]"},"Count :"),o.createElement("input",v("count"))),o.createElement("div",{className:"flex gap-2"},o.createElement("div",{className:"min-w-[100px]"},"Start Has Ball :"),o.createElement("input",v("start_has_ball"))),o.createElement("button",{type:"submit",className:" cursor-pointer py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"},"Submit \xa0",w&&o.createElement(m.Z,{size:12}))),u&&o.createElement(o.Fragment,null,o.createElement("div",{className:"mt-4 block rounded-lg border bg-white p-6 shadow dark:border-neutral-700 dark:bg-neutral-800 "},o.createElement("div",{className:"flex items-center justify-between gap-4"},"Request Result",x?o.createElement("a",{href:`https://explorer.xpla.io/testnet/tx/${x}`,target:"_blank"},x):o.createElement("span",null,"Error!")))),b&&o.createElement(o.Fragment,null,o.createElement("div",{className:"mt-4 block rounded-lg border bg-white p-6 shadow dark:border-neutral-700 dark:bg-neutral-800 "},o.createElement("div",{className:"flex items-center justify-between gap-4"},"Request Error",o.createElement("span",null,b))))))}},38230:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(86010),n=a(67294),l=a(87536),s=a(52252),o=a(6154),c=a(25108);const m=e=>{let{className:t,title:a,children:m}=e;const d=(0,l.cI)({mode:"onChange"}),{register:i,handleSubmit:u}=d,[g,b]=(0,n.useState)(null),[h,x]=(0,n.useState)(null),{status:f,wallets:w}=(0,s.Os)();return n.createElement("div",{className:(0,r.Z)("px-8 flex flex-row items-center max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",t)},n.createElement("div",{className:"p-5"},n.createElement("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},a),f===s.PR.WALLET_NOT_CONNECTED?n.createElement(n.Fragment,null,"Connect Wallet"):0==w.length?"Loading...":n.createElement("form",{className:"mb-3 font-normal text-gray-700 dark:text-gray-400 flex flex-col gap-3",onSubmit:u((async e=>{let{id:t,pw:a}=e;try{if(w.length<1)throw new Error("Connect Wallet!");const e=await o.Z.post("https://gw-qa-gcl.c2xstation.net:40202/wallet/wallet-connect",{wallet:w[0].xplaAddress,id:t,password:a});c.log(e),b(e.data.returnMsg)}catch(r){x(`Unknown Error: ${r instanceof Error?r.message:String(r)}`)}c.log(t,a)}))},n.createElement("div",{className:"flex gap-2"},n.createElement("div",{className:"min-w-[100px]"},"Your Id :"),n.createElement("input",i("id"))),n.createElement("div",{className:"flex gap-2"},n.createElement("div",{className:"min-w-[100px]"},"Your Pw :"),n.createElement("input",i("pw"))),n.createElement("button",{type:"submit",className:" cursor-pointer py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"},"Register Your Account")),g&&n.createElement(n.Fragment,null,n.createElement("div",{className:"mt-4 block rounded-lg border bg-white p-6 shadow dark:border-neutral-700 dark:bg-neutral-800 "},n.createElement("div",{className:"flex items-center justify-between gap-4"},"Request Result",n.createElement("span",null,g)))),h&&n.createElement(n.Fragment,null,n.createElement("div",{className:"mt-4 block rounded-lg border bg-white p-6 shadow dark:border-neutral-700 dark:bg-neutral-800 "},n.createElement("div",{className:"flex items-center justify-between gap-4"},"Request Error",n.createElement("span",null,h))))))}},70475:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>u,default:()=>w,frontMatter:()=>i,metadata:()=>g,toc:()=>h});var r=a(87462),n=(a(67294),a(3905)),l=a(91649),s=a(38230),o=a(85405),c=a(57332),m=a(37054),d=a(72452);const i={slug:"play-game",title:"Play Game!",authors:["slorber"],tags:["docusaurus"]},u=void 0,g={permalink:"/xpla-academy-dev/ko-kr/blog/play-game",source:"@site/blog/2021-08-01-play-game.mdx",title:"Play Game!",description:"",date:"2021-08-01T00:00:00.000Z",formattedDate:"2021\ub144 8\uc6d4 1\uc77c",tags:[{label:"docusaurus",permalink:"/xpla-academy-dev/ko-kr/blog/tags/docusaurus"}],readingTime:.26,hasTruncateMarker:!1,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",imageURL:"https://github.com/slorber.png",key:"slorber"}],frontMatter:{slug:"play-game",title:"Play Game!",authors:["slorber"],tags:["docusaurus"]},prevItem:{title:"Welcome",permalink:"/xpla-academy-dev/ko-kr/blog/welcome"},nextItem:{title:"Long Blog Post",permalink:"/xpla-academy-dev/ko-kr/blog/long-blog-post"}},b={authorsImageUrls:[void 0]},h=[],x={toc:h},f="wrapper";function w(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,r.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{mdxType:"Cocosgame"}),(0,n.kt)(o.Z,{mdxType:"WalletWrap"},(0,n.kt)(s.Z,{title:"Register Your Address",mdxType:"RegisterCard"}),(0,n.kt)("br",null),(0,n.kt)(c.Z,{title:"Game Currency to Coin",mdxType:"ConvertGCtoC"}),(0,n.kt)("br",null),(0,n.kt)(m.Z,{title:"Coin to Game Currency",mdxType:"ConvertCtoGC"}),(0,n.kt)("br",null),(0,n.kt)(d.Z,{title:"Mint NFT",mdxType:"ConvertNFT"})))}w.isMDXComponent=!0}}]);