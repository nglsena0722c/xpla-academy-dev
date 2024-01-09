"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[2841],{34673:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),s=n(67294),r=n(86010),i=n(72389),o=n(86043);const l={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function c(e){return!!e&&("SUMMARY"===e.tagName||c(e.parentElement))}function d(e,t){return!!e&&(e===t||d(e.parentElement,t))}function p(e){let{summary:t,children:n,...p}=e;const h=(0,i.Z)(),u=(0,s.useRef)(null),{collapsed:m,setCollapsed:k}=(0,o.u)({initialState:!p.open}),[w,g]=(0,s.useState)(p.open),f=s.isValidElement(t)?t:s.createElement("summary",null,t??"Details");return s.createElement("details",(0,a.Z)({},p,{ref:u,open:w,"data-collapsed":m,className:(0,r.Z)(l.details,h&&l.isBrowser,p.className),onMouseDown:e=>{c(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;c(t)&&d(t,u.current)&&(e.preventDefault(),m?(k(!1),g(!0)):k(!0))}}),f,s.createElement(o.z,{lazy:!1,collapsed:m,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{k(e),g(!e)}},s.createElement("div",{className:l.collapsibleContent},n)))}const h={details:"details_b_Ee"},u="alert alert--info";function m(e){let{...t}=e;return s.createElement(p,(0,a.Z)({},t,{className:(0,r.Z)(u,h.details,t.className)}))}},51007:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),s=n(86010);const r={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function i(e){let{children:t,minHeight:n,url:i="http://localhost:3000",style:o,bodyStyle:l}=e;return a.createElement("div",{className:r.browserWindow,style:{...o,minHeight:n}},a.createElement("div",{className:r.browserWindowHeader},a.createElement("div",{className:r.buttons},a.createElement("span",{className:r.dot,style:{background:"#f25f58"}}),a.createElement("span",{className:r.dot,style:{background:"#fbbe3c"}}),a.createElement("span",{className:r.dot,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,s.Z)(r.browserWindowAddressBar,"text--truncate")},i),a.createElement("div",{className:r.browserWindowMenuIcon},a.createElement("div",null,a.createElement("span",{className:r.bar}),a.createElement("span",{className:r.bar}),a.createElement("span",{className:r.bar})))),a.createElement("div",{className:r.browserWindowBody,style:l},t))}},61497:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(67294);const s=e=>{let{imgSrc:t,style:n}=e;return a.createElement("img",{className:"max-w-sm",style:n,src:t,alt:""})}},68547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>f,frontMatter:()=>p,metadata:()=>u,toc:()=>k});var a=n(87462),s=n(67294),r=n(3905),i=n(34673),o=n(18947);const l=()=>s.createElement(o.xR,{customSetup:{dependencies:{"@xpla/xpla.js":"^0.3.1","crypto-browserify":"latest"},entry:"index.js"},files:{"/index.js":"const { LCDClient, MsgSend, MnemonicKey } = require(\"@xpla/xpla.js\");\n\nconst lcd = new LCDClient({\n  chainID: 'cube_47-5',\n  URL: 'https://cube-lcd.xpla.dev'\n});\n\nasync function main() {\n  const mk = new MnemonicKey({\n    mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle',\n  })\n\n  const from = lcd.wallet(mk).key.accAddress;\n  const to = \"xpla1a8f3wnn7qwvwdzxkc9w849kfzhrr6gdvy4c8wv\"; // faucet \uc9c0\uac11 \uc8fc\uc18c\n  const token = { axpla: 25 };\n\n  const signedTx = await lcd.wallet(mk).createAndSignTx({ // \ud2b8\ub79c\uc7ad\uc158 \uc0dd\uc131 \ubc0f \uc0ac\uc774\ub2dd, \ud2b8\ub79c\uc7ad\uc158 fee \uc124\uc815\n    msgs: [new MsgSend(from, to, token)]\n  });\n\n  const txResult = await lcd.tx.broadcastSync(signedTx); // \ud2b8\ub79c\uc7ad\uc158\uc744 \ube14\ub85d\uccb4\uc778\uc5d0 \uc804\uc1a1\n  console.log(\"Your Transaction Hash: \" + txResult.txhash);\n}\nmain()"},options:{layout:"console",showLineNumbers:!0,editorHeight:600}});var c=n(61497),d=n(51007);const p={sidebar_position:1},h="Creating $XPLA Transfer Transactions",u={unversionedId:"settings/create-testnet-transaction/send-tx",id:"settings/create-testnet-transaction/send-tx",title:"Creating $XPLA Transfer Transactions",description:"The data recorded on the blockchain is referred to as transactions. For instance, creating a transaction where Alice sends 1 XPLA to Bob can be recorded on the blockchain.",source:"@site/startlearning/2-settings/2-create-testnet-transaction/1-send-tx.mdx",sourceDirName:"2-settings/2-create-testnet-transaction",slug:"/settings/create-testnet-transaction/send-tx",permalink:"/xpla-academy-dev/startlearning/settings/create-testnet-transaction/send-tx",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Time to Make Transactions!",permalink:"/xpla-academy-dev/startlearning/category/time-to-make-transactions"},next:{title:"Check Transactions (Explorer)",permalink:"/xpla-academy-dev/startlearning/settings/create-testnet-transaction/check-tx-in-explorer"}},m={},k=[{value:"Preview",id:"preview",level:2},{value:"Creating Transactions with JavaScript",id:"runjs",level:2},{value:"Running the Code",id:"runcode",level:3},{value:"Wallet Check",id:"checkvault",level:2},{value:"Explanation",id:"explaination",level:2},{value:"Wrapping Up",id:"conclusion",level:2}],w={toc:k},g="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-xpla-transfer-transactions"},"Creating $XPLA Transfer Transactions"),(0,r.kt)("p",null,"The data recorded on the blockchain is referred to as transactions. For instance, creating a transaction where ",(0,r.kt)("inlineCode",{parentName:"p"},"Alice sends 1 XPLA to Bob")," can be recorded on the blockchain."),(0,r.kt)("p",null,"When creating a transaction on the XPLA blockchain, you need to pay fees in $XPLA coins.\nSince you received testnet $XPLA coins in the ",(0,r.kt)("a",{parentName:"p",href:"/startlearning/settings/create-wallet/get-testnet-xpla"},"previous step"),", there's no need to worry about fees!."),(0,r.kt)(i.Z,{summary:"Why do we need to pay fees to create transactions on the blockchain?",mdxType:"Details"},(0,r.kt)("p",null,"Let's take a look at an example of how transactions are created and processed on the network. When Alice creates a transaction to send 1 XPLA to Bob, the network is notified (broadcasted) of this transaction. The network needs to verify details like whether Alice has more than 1 XPLA and whether Alice actually initiated the transaction."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.xpla.io/full-node/full-node/manage-a-validator/validator-faq/"},"Validators")," play the role of verifying transactions. They check all blockchain data and validate the transactions that will be included in new blocks."),(0,r.kt)("p",null,"Validators need significant computing resources to continually ",(0,r.kt)("a",{parentName:"p",href:"https://docs.xpla.io/full-node/full-node/run-a-full-node/overview/"},"receive and verify transactions against the entire history of the blockchain"),". Instead of using computing resources, we request validators to create transactions by paying fees. This is known as the Proof of Stake (PoS) approach."),(0,r.kt)("p",null,"Furthermore, fees prevent malicious attackers from generating an excessive number of transactions and overwhelming the blockchain network. ")),(0,r.kt)("h2",{id:"preview"},"Preview"),(0,r.kt)("p",null,"Below is the JavaScript code to create a transaction. Modify the code with your mnemonic words and run it. You'll see the execution result on the right side after a little while. "),(0,r.kt)(l,{mdxType:"Ex02"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"If you've mastered the Preview Code, you may move on to the ",(0,r.kt)("a",{parentName:"p",href:"/startlearning/settings/create-testnet-transaction/check-tx-in-explorer"},"next step")," with out reading ",(0,r.kt)("a",{parentName:"p",href:"/startlearning/settings/create-testnet-transaction/send-tx#runjs"},"the below"),"."),(0,r.kt)("h2",{id:"runjs"},"Creating Transactions with JavaScript"),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"/startlearning/settings/create-wallet/get-testnet-xpla"},"previous step"),", you received $XPLA coins from the Faucet wallet. This time, let's create a transaction to send $XPLA coins from our wallet to the Faucet wallet. The amount being sent is 25aXPLA (0.000000000000000025XPLA). Let's run the code."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"10",(0,r.kt)("sup",null,"18")," ",(0,r.kt)("inlineCode",{parentName:"p"},"aXPLA")," is equivalent to 1 ",(0,r.kt)("inlineCode",{parentName:"p"},"XPLA"),".")),(0,r.kt)("h3",{id:"runcode"},"Running the Code"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Just like you created the example-1.js file ",(0,r.kt)("a",{parentName:"p",href:"/startlearning/settings/create-wallet/create-wallet-with-js#runjs"},"earlier"),", create a new file called example-2.js. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy and paste the code below into the example-2.js file and save it."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { LCDClient, MsgSend, MnemonicKey } = require(\"@xpla/xpla.js\");\n\nconst lcd = new LCDClient({\n    chainID: 'cube_47-5',\n    URL: 'https://cube-lcd.xpla.dev'\n});\n\nasync function main() {\n    const mk = new MnemonicKey({\n        mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle',\n    })\n\n    const from = lcd.wallet(mk).key.accAddress;\n    const to = \"xpla1a8f3wnn7qwvwdzxkc9w849kfzhrr6gdvy4c8wv\"; // Faucet wallet address\n    const token = { axpla: 25 };\n\n    const signedTx = await lcd.wallet(mk).createAndSignTx({ // Creating and signing the transaction\n        msgs: [new MsgSend(from, to, token)]\n    });\n\n    const txResult = await lcd.tx.broadcastSync(signedTx); // Sending transactions to blockchain\n    console.log(\"Your Transaction Hash: \" + txResult.txhash);\n}\nmain()\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure to replace the mnemonic words on line 10 with your own mnemonic words.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following command in the VSCode Terminal."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node example-2.js\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the results in the Terminal. You should be able to see the hash value of the transaction. "))),(0,r.kt)(i.Z,{summary:"What is a hash value?",mdxType:"Details"},(0,r.kt)("p",null,"A hash value is ",(0,r.kt)("inlineCode",{parentName:"p"},"a value obtained by transforming data of various lengths into a fixed-length value"),". The method of transformation depends on the applied algorithm."),(0,r.kt)("p",null,"Let's examine an example using the well-known ",(0,r.kt)("inlineCode",{parentName:"p"},"SHA256")," algorithm. Even though the lengths of the two input values are different, the hash values are all 64 characters long."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Input : ",(0,r.kt)("inlineCode",{parentName:"p"},"helloworld")),(0,r.kt)("p",{parentName:"li"},"Hash value : ",(0,r.kt)("inlineCode",{parentName:"p"},"936A185CAAA266BB9CBE981E9E05CB78CD732B0B3280EB944412BB6F8F8F07AF"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Input : ",(0,r.kt)("inlineCode",{parentName:"p"},"xpla")),(0,r.kt)("p",{parentName:"li"},"Hash value : ",(0,r.kt)("inlineCode",{parentName:"p"},"2AA54B6285BB3FCF0A69452991C15DB65B76313950C4D6EF74E584AA5F0E3286")))),(0,r.kt)("p",null,"Hash values have characteristics such as changing significantly with a small change in input, and it's difficult to determine the original input from the hash value."),(0,r.kt)("p",null,"The transaction we created contains various data such as ",(0,r.kt)("inlineCode",{parentName:"p"},"the height of the block containing the transaction"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"the time the transaction occurred"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"the transaction fee"),". This data determines the hash value of the transaction. ")),(0,r.kt)("h2",{id:"checkvault"},"Wallet Check"),(0,r.kt)("p",null,"If you successfully created the transaction, check your balance in the Vault. You'll see a lower amount than the 100 XPLA you received from the Faucet."),(0,r.kt)("p",null,"This is because you sent 25aXPLA to another wallet and paid a transaction fee."),(0,r.kt)("p",null,"By seeing that $XPLA coins were spent, you can indirectly confirm that the transaction was successfully created. "),(0,r.kt)(d.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,r.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,r.kt)("img",{style:{height:"100%"},src:"/img/2-settings/1-create-wallet/google.png"})),(0,r.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,r.kt)(c.Z,{imgSrc:"/img/2-settings/2-create-testnet-transaction/send-tx/sendtx-checkfee.png",mdxType:"VaultImgCard"}))),(0,r.kt)("h2",{id:"explaination"},"Explanation"),(0,r.kt)("p",null,"First, you loaded the wallet using the mnemonic words. You might have used your own mnemonic words to load your wallet. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const mk = new MnemonicKey({\n    mnemonic: 'myth snow ski simple century dad gun dolphin sail lawsuit fringe image toast betray frown keep harbor flash table prevent isolate panic tag vehicle',\n})\n")),(0,r.kt)("br",null),(0,r.kt)("p",null,"Specify the sending wallet address, receiving wallet address, and token information. We're sending 25aXPLA from our wallet to the Faucet wallet address ",(0,r.kt)("inlineCode",{parentName:"p"},"xpla1a8f3wnn7qwvwdzxkc9w849kfzhrr6gdvy4c8wv"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const from = lcd.wallet(mk).key.accAddress;\nconst to = "xpla1a8f3wnn7qwvwdzxkc9w849kfzhrr6gdvy4c8wv"; // Faucet wallet address\nconst token = { axpla: 25 };\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"We'll use the ",(0,r.kt)("inlineCode",{parentName:"p"},"createAndSignTx")," function to create a transaction and complete the signing process. You can perform this with the code if you know your mnemonic phrase."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const signedTx = await lcd.wallet(mk).createAndSignTx({ // Creating and signing the transaction\n    msgs: [new MsgSend(from, to, token)]\n});\n")),(0,r.kt)(i.Z,{summary:"What is a signature?",mdxType:"Details"},(0,r.kt)("p",null,"A signature is a way for ",(0,r.kt)("inlineCode",{parentName:"p"},"the owner of a wallet to prove that they created a transaction"),"."),(0,r.kt)("p",null,"In this step, we created a transaction to send XPLA from our wallet to another wallet. However, it wouldn't be safe if malicious individuals could transfer XPLA from my wallet to another without permission."),(0,r.kt)("p",null,"This is where a signature comes in. A signature ensures that only the wallet's owner, who knows the mnemonic phrase or private key, can proceed with the transaction. So, it's crucial to securely store your mnemonic phrase, as knowing it would allow others to create signatures and potentially steal funds."),(0,r.kt)("p",null,"Moreover, a signature carries more significance. It's generated using the transaction's data, and if the transaction's data is changed, the original signature becomes invalid. Therefore, you would need to create a new signature. This prevents unauthorized modification of transaction data."),(0,r.kt)("p",null,"It's important to note that validators, as mentioned earlier, are the ones that verify whether a transaction's signature is valid.")),(0,r.kt)("br",null),(0,r.kt)("p",null,"When we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"broadcastSync")," function to send the transaction we created to the network, validators will verify the transaction. After verification, if the transaction is added to the blockchain, we can receive the result."),(0,r.kt)("p",null,"The result is stored in the ",(0,r.kt)("inlineCode",{parentName:"p"},"txResult")," variable, and from there, we can obtain the hash value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const txResult = await lcd.tx.broadcastSync(signedTx); // Sending transactions to blockchain\nconsole.log("Your Transaction Hash: " + txResult.txhash);\n')),(0,r.kt)("h2",{id:"conclusion"},"Wrapping Up"),(0,r.kt)("p",null,"But how can we examine transaction data in more detail? One way is to use the ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),", where you can look at all the transaction records of $XPLA. Another method is to directly fetch transaction data values using code."),(0,r.kt)("p",null,"We will explore each step in the ",(0,r.kt)("a",{parentName:"p",href:"/startlearning/settings/create-testnet-transaction/check-tx-in-explorer"},"next section"),"."))}f.isMDXComponent=!0}}]);