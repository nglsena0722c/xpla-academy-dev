"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[8595],{61928:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294);function n(){return r.createElement("div",{style:{width:1e3,height:800},dangerouslySetInnerHTML:{__html:'<iframe src="/xpla-academy-dev/img/web-desktop-hard/index.html" width="100%" height="100%"></iframe>'}})}},980:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294);function n(){return r.createElement("div",{style:{width:1e3,height:800},dangerouslySetInnerHTML:{__html:'<iframe src="/xpla-academy-dev/img/web-desktop-latest/index.html" width="100%" height="100%"></iframe>'}})}},37054:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(52252),n=a(30826),l=a(6154),s=a(86010),o=a(67294),c=a(87536),m=a(32624),u=a(48764).Buffer;const d=e=>{let{className:t,title:a,children:d}=e;const[i,g]=(0,o.useState)(null),[b,h]=(0,o.useState)(null),[x,w]=(0,o.useState)(null),[p,f]=(0,o.useState)(!1),y=(0,c.cI)({mode:"onChange"}),E=(0,r.Yk)(),{status:k,wallets:v}=(0,r.Os)(),{register:N,watch:S,setValue:C,handleSubmit:T,resetField:_,reset:Z,clearErrors:M}=y,{formState:L}=y,{errors:q}=L,{...I}=S(),R="https://gw-qa-gcl.c2xstation.net:40202";async function A(e){try{const t=`${R}/wallet/txinfo?txhash=${e}`,a=await l.Z.get(t);"500"===a.data.returnCode?setTimeout(A,1e3,e):"0"===a.data.returnCode&&(f(!1),g(a.data.returnMsg),"success"===a.data.returnMsg&&w(e))}catch(t){h(`Unknown Error: ${t instanceof Error?t.message:String(t)}`)}}return o.createElement("div",{className:(0,s.Z)("px-8 flex flex-row items-center max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",t)},o.createElement("div",{className:"p-5"},o.createElement("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},a),k===r.PR.WALLET_NOT_CONNECTED?o.createElement(o.Fragment,null,"Connect Wallet"):0==v.length?"Loading...":o.createElement("form",{className:"mb-3 font-normal text-gray-700 dark:text-gray-400 flex flex-col gap-3",onSubmit:T((async e=>{let{...t}=e;try{const{amount:e}=t,a=new n.LCDClient({chainID:"cube_47-5",URL:"https://cube-lcd.xpla.dev"}),r=v[0].xplaAddress,s=await a.auth.accountInfo(r),o={wallet:r,amount:e,userPubKey:s.getPublicKey().key,userSeq:s.getSequenceNumber()},c=`${R}/wallet/wallet-coin-to-gamecurrency-unsigned`,m=await l.Z.post(c,o),d=m.data.unsignedTx;if(void 0===d)throw new Error(m.data.returnMsg);const i=n.Tx.fromBuffer(u.from(d,"base64")),{result:g,success:b}=await E.sign({msgs:i.body.messages,fee:i.auth_info.fee,signMode:n.SignMode.SIGN_MODE_DIRECT});if(!b)throw new Error("Vault Sign Error");const h=u.from(g.toBytes()).toString("base64"),x={wallet:r,tid:m.data.tid,userTx:h},w=`${R}/wallet/wallet-coin-to-gamecurrency`;let p=await l.Z.post(w,x);f(!0),setTimeout(A,1e3,p.data.txhash)}catch(a){h(`Unknown Error: ${a instanceof Error?a.message:String(a)}`)}}))},o.createElement("div",{className:"flex gap-2"},o.createElement("div",{className:"min-w-[100px]"},"Amount :"),o.createElement("input",N("amount"))),o.createElement("button",{type:"submit",className:" cursor-pointer py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"},"Submit \xa0",p&&o.createElement(m.Z,{size:12}))),i&&o.createElement(o.Fragment,null,o.createElement("div",{className:"mt-4 block rounded-lg border bg-white p-6 shadow dark:border-neutral-700 dark:bg-neutral-800 "},o.createElement("div",{className:"flex items-center justify-between gap-4"},"Request Result",x?o.createElement("a",{href:`https://explorer.xpla.io/testnet/tx/${x}`,target:"_blank"},x):o.createElement("span",null,"Error!")))),b&&o.createElement(o.Fragment,null,o.createElement("div",{className:"mt-4 block rounded-lg border bg-white p-6 shadow dark:border-neutral-700 dark:bg-neutral-800 "},o.createElement("div",{className:"flex items-center justify-between gap-4"},"Request Error",o.createElement("span",null,b))))))}},57332:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(52252),n=a(30826),l=a(6154),s=a(86010),o=a(67294),c=a(87536),m=a(32624),u=a(48764).Buffer;const d=e=>{let{className:t,title:a,children:d}=e;const[i,g]=(0,o.useState)(null),[b,h]=(0,o.useState)(null),[x,w]=(0,o.useState)(null),[p,f]=(0,o.useState)(!1),[y,E]=(0,o.useState)(null),k=(0,c.cI)({mode:"onChange"}),v=(0,r.Yk)(),{status:N,wallets:S}=(0,r.Os)(),{register:C,watch:T,setValue:_,handleSubmit:Z,resetField:M,reset:L,clearErrors:q}=k,{formState:I}=k,{errors:R}=I,{...A}=T(),$="https://gw-qa-gcl.c2xstation.net:40202",O=new n.LCDClient({chainID:"cube_47-5",URL:"https://cube-lcd.xpla.dev"});async function D(e){try{const t=`${$}/wallet/txinfo?txhash=${e}`,a=await l.Z.get(t);"500"===a.data.returnCode?setTimeout(D,1e3,e):"0"===a.data.returnCode&&(f(!1),g(a.data.returnMsg),"success"===a.data.returnMsg&&w(e))}catch(t){h(`Unknown Error: ${t instanceof Error?t.message:String(t)}`)}}return o.createElement("div",{className:(0,s.Z)("px-8 flex flex-row items-center max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",t)},o.createElement("div",{className:"p-5"},o.createElement("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},a),N===r.PR.WALLET_NOT_CONNECTED?o.createElement(o.Fragment,null,"Connect Wallet"):0==S.length?"Loading...":o.createElement("form",{className:"mb-3 font-normal text-gray-700 dark:text-gray-400 flex flex-col gap-3",onSubmit:Z((async e=>{let{...t}=e;try{const{amount:e}=t,a=S[0].xplaAddress,r=await O.auth.accountInfo(a),s={wallet:a,amount:e,userPubKey:r.getPublicKey().key,userSeq:r.getSequenceNumber()},o=`${$}/wallet/wallet-gamecurrency-to-coin-unsigned`,c=await l.Z.post(o,s),m=c.data.unsignedTx;if(void 0===m)throw new Error(c.data.returnMsg);const d=n.Tx.fromBuffer(u.from(m,"base64")),{result:i,success:g}=await v.sign({msgs:d.body.messages,fee:d.auth_info.fee,signMode:n.SignMode.SIGN_MODE_LEGACY_AMINO_JSON});if(!g)throw new Error("Vault Sign Error");const b=u.from(i.toBytes()).toString("base64"),h={wallet:a,tid:c.data.tid,userTx:b},x=`${$}/wallet/wallet-gamecurrency-to-coin`;let w=await l.Z.post(x,h);f(!0),setTimeout(D,1e3,w.data.txhash)}catch(a){h(`Unknown Error: ${a instanceof Error?a.message:String(a)}`)}}))},o.createElement("div",{className:"flex gap-2"},o.createElement("div",{className:"min-w-[100px]"},"Amount :"),o.createElement("input",C("amount",{onBlur:async()=>{const e="xpla16rckux27qz5rv4etjk0rdm675ct26v9w8uk286",t=await O.auth.accountInfo(e),a=S[0].xplaAddress,r=new n.MsgExecuteContract(e,"xpla1shxdwyus9u6tgvu6kl5tdgem4d4at9vhanq0hxyqnm4ly3wd8awqkwlcj3",{transfer:{recipient:a,amount:String(A.amount)+"000000"}}),l=t.getPublicKey(),s=new n.TxAPI(O),o=await s.estimateFee([{sequenceNumber:t.getSequenceNumber(),publicKey:l}],{msgs:[r],gasAdjustment:1.5});E(o.amount.toString())}}))),y&&o.createElement("div",null,y),o.createElement("button",{type:"submit",className:" cursor-pointer py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"},"Submit \xa0",p&&o.createElement(m.Z,{size:12}))),i&&o.createElement(o.Fragment,null,o.createElement("div",{className:"mt-4 block rounded-lg border bg-white p-6 shadow dark:border-neutral-700 dark:bg-neutral-800 "},o.createElement("div",{className:"flex items-center justify-between gap-4"},"Request Result",x?o.createElement("a",{href:`https://explorer.xpla.io/testnet/tx/${x}`,target:"_blank"},x):o.createElement("span",null,"Error!")))),b&&o.createElement(o.Fragment,null,o.createElement("div",{className:"mt-4 block rounded-lg border bg-white p-6 shadow dark:border-neutral-700 dark:bg-neutral-800 "},o.createElement("div",{className:"flex items-center justify-between gap-4"},"Request Error",o.createElement("span",null,b))))))}},72452:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(52252),n=a(30826),l=a(6154),s=a(86010),o=a(67294),c=a(87536),m=a(32624),u=a(48764).Buffer;const d=e=>{let{className:t,title:a,children:d}=e;const[i,g]=(0,o.useState)(null),[b,h]=(0,o.useState)(null),[x,w]=(0,o.useState)(null),[p,f]=(0,o.useState)(!1),y=(0,c.cI)({mode:"onChange"}),E=(0,r.Yk)(),{status:k,wallets:v}=(0,r.Os)(),{register:N,watch:S,setValue:C,handleSubmit:T,resetField:_,reset:Z,clearErrors:M}=y,{formState:L}=y,{errors:q}=L,{...I}=S(),R="https://gw-qa-gcl.c2xstation.net:40202";async function A(e){try{const t=`${R}/wallet/txinfo?txhash=${e}`,a=await l.Z.get(t);"500"===a.data.returnCode?setTimeout(A,1e3,e):"0"===a.data.returnCode&&(f(!1),g(a.data.returnMsg),"success"===a.data.returnMsg&&w(e))}catch(t){h(`Unknown Error: ${t instanceof Error?t.message:String(t)}`)}}return o.createElement("div",{className:(0,s.Z)("px-8 flex flex-row items-center max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",t)},o.createElement("div",{className:"p-5"},o.createElement("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},a),k===r.PR.WALLET_NOT_CONNECTED?o.createElement(o.Fragment,null,"Connect Wallet"):0==v.length?"Loading...":o.createElement("form",{className:"mb-3 font-normal text-gray-700 dark:text-gray-400 flex flex-col gap-3",onSubmit:T((async e=>{let{...t}=e;try{const{amount:e,width:a,count:r,start_has_ball:s}=t,o=new n.LCDClient({chainID:"cube_47-5",URL:"https://cube-lcd.xpla.dev"}),c=v[0].xplaAddress,m=await o.auth.accountInfo(c),d={wallet:c,payAmount:e,width:a,count:r,start_has_ball:s,userPubKey:m.getPublicKey().key,userSeq:m.getSequenceNumber()},i=`${R}/wallet/wallet-minting-unsigned`,g=await l.Z.post(i,d),b=g.data.unsignedTx;if(void 0===b)throw new Error(g.data.returnMsg);const h=n.Tx.fromBuffer(u.from(b,"base64")),{result:x,success:w}=await E.sign({msgs:h.body.messages,fee:h.auth_info.fee,signMode:n.SignMode.SIGN_MODE_LEGACY_AMINO_JSON});if(!w)throw new Error("Vault Sign Error");const p=u.from(x.toBytes()).toString("base64"),y={wallet:c,tid:g.data.tid,userTx:p},k=`${R}/wallet/wallet-minting`;let N=await l.Z.post(k,y);f(!0),setTimeout(A,1e3,N.data.txhash)}catch(a){h(`Unknown Error: ${a instanceof Error?a.message:String(a)}`)}}))},o.createElement("div",{className:"flex gap-2"},o.createElement("div",{className:"min-w-[100px]"},"Pay Amount :"),o.createElement("input",N("amount"))),o.createElement("div",{className:"flex gap-2"},o.createElement("div",{className:"min-w-[100px]"},"Width :"),o.createElement("input",N("width"))),o.createElement("div",{className:"flex gap-2"},o.createElement("div",{className:"min-w-[100px]"},"Count :"),o.createElement("input",N("count"))),o.createElement("div",{className:"flex gap-2"},o.createElement("div",{className:"min-w-[100px]"},"Start Has Ball :"),o.createElement("input",N("start_has_ball"))),o.createElement("button",{type:"submit",className:" cursor-pointer py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"},"Submit \xa0",p&&o.createElement(m.Z,{size:12}))),i&&o.createElement(o.Fragment,null,o.createElement("div",{className:"mt-4 block rounded-lg border bg-white p-6 shadow dark:border-neutral-700 dark:bg-neutral-800 "},o.createElement("div",{className:"flex items-center justify-between gap-4"},"Request Result",x?o.createElement("a",{href:`https://explorer.xpla.io/testnet/tx/${x}`,target:"_blank"},x):o.createElement("span",null,"Error!")))),b&&o.createElement(o.Fragment,null,o.createElement("div",{className:"mt-4 block rounded-lg border bg-white p-6 shadow dark:border-neutral-700 dark:bg-neutral-800 "},o.createElement("div",{className:"flex items-center justify-between gap-4"},"Request Error",o.createElement("span",null,b))))))}},38230:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(86010),n=a(67294),l=a(87536),s=a(52252),o=a(6154),c=a(25108);const m=e=>{let{className:t,title:a,children:m}=e;const u=(0,l.cI)({mode:"onChange"}),{register:d,handleSubmit:i}=u,[g,b]=(0,n.useState)(null),[h,x]=(0,n.useState)(null),{status:w,wallets:p}=(0,s.Os)();return n.createElement("div",{className:(0,r.Z)("px-8 flex flex-row items-center max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",t)},n.createElement("div",{className:"p-5"},n.createElement("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"},a),w===s.PR.WALLET_NOT_CONNECTED?n.createElement(n.Fragment,null,"Connect Wallet"):0==p.length?"Loading...":n.createElement("form",{className:"mb-3 font-normal text-gray-700 dark:text-gray-400 flex flex-col gap-3",onSubmit:i((async e=>{let{id:t,pw:a}=e;try{if(p.length<1)throw new Error("Connect Wallet!");const e=await o.Z.post("https://gw-qa-gcl.c2xstation.net:40202/wallet/wallet-connect",{wallet:p[0].xplaAddress,id:t,password:a});c.log(e),b(e.data.returnMsg)}catch(r){x(`Unknown Error: ${r instanceof Error?r.message:String(r)}`)}c.log(t,a)}))},n.createElement("div",{className:"flex gap-2"},n.createElement("div",{className:"min-w-[100px]"},"Your Id :"),n.createElement("input",d("id"))),n.createElement("div",{className:"flex gap-2"},n.createElement("div",{className:"min-w-[100px]"},"Your Pw :"),n.createElement("input",d("pw"))),n.createElement("button",{type:"submit",className:" cursor-pointer py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"},"Register Your Account")),g&&n.createElement(n.Fragment,null,n.createElement("div",{className:"mt-4 block rounded-lg border bg-white p-6 shadow dark:border-neutral-700 dark:bg-neutral-800 "},n.createElement("div",{className:"flex items-center justify-between gap-4"},"Request Result",n.createElement("span",null,g)))),h&&n.createElement(n.Fragment,null,n.createElement("div",{className:"mt-4 block rounded-lg border bg-white p-6 shadow dark:border-neutral-700 dark:bg-neutral-800 "},n.createElement("div",{className:"flex items-center justify-between gap-4"},"Request Error",n.createElement("span",null,h))))))}},70475:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>f,frontMatter:()=>i,metadata:()=>b,toc:()=>x});var r=a(87462),n=(a(67294),a(3905)),l=a(980),s=a(61928),o=a(38230),c=a(85405),m=a(57332),u=a(37054),d=a(72452);const i={slug:"play-game",title:"Play Game!",authors:["slorber"],tags:["docusaurus"]},g=void 0,b={permalink:"/xpla-academy-dev/blog/play-game",source:"@site/blog/2021-08-01-play-game.mdx",title:"Play Game!",description:"",date:"2021-08-01T00:00:00.000Z",formattedDate:"August 1, 2021",tags:[{label:"docusaurus",permalink:"/xpla-academy-dev/blog/tags/docusaurus"}],readingTime:.32,hasTruncateMarker:!1,authors:[{name:"S\xe9bastien Lorber",title:"Docusaurus maintainer",url:"https://sebastienlorber.com",imageURL:"https://github.com/slorber.png",key:"slorber"}],frontMatter:{slug:"play-game",title:"Play Game!",authors:["slorber"],tags:["docusaurus"]},prevItem:{title:"Welcome",permalink:"/xpla-academy-dev/blog/welcome"},nextItem:{title:"Long Blog Post",permalink:"/xpla-academy-dev/blog/long-blog-post"}},h={authorsImageUrls:[void 0]},x=[],w={toc:x},p="wrapper";function f(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(l.Z,{mdxType:"Cocosgame3"}),(0,n.kt)(c.Z,{mdxType:"WalletWrap"},(0,n.kt)(o.Z,{title:"Register Your Address",mdxType:"RegisterCard"}),(0,n.kt)("br",null),(0,n.kt)(m.Z,{title:"Game Currency to Coin",mdxType:"ConvertGCtoC"}),(0,n.kt)("br",null),(0,n.kt)(u.Z,{title:"Coin to Game Currency",mdxType:"ConvertCtoGC"}),(0,n.kt)("br",null),(0,n.kt)(d.Z,{title:"Mint NFT",mdxType:"ConvertNFT"})),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(s.Z,{mdxType:"Cocosgame2"}))}f.isMDXComponent=!0}}]);