"use strict";(self.webpackChunkxpla_academy=self.webpackChunkxpla_academy||[]).push([[9785],{51007:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),l=t(86010);const r={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function o(e){let{children:n,minHeight:t,url:o="http://localhost:3000",style:s,bodyStyle:i}=e;return a.createElement("div",{className:r.browserWindow,style:{...s,minHeight:t}},a.createElement("div",{className:r.browserWindowHeader},a.createElement("div",{className:r.buttons},a.createElement("span",{className:r.dot,style:{background:"#f25f58"}}),a.createElement("span",{className:r.dot,style:{background:"#fbbe3c"}}),a.createElement("span",{className:r.dot,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,l.Z)(r.browserWindowAddressBar,"text--truncate")},o),a.createElement("div",{className:r.browserWindowMenuIcon},a.createElement("div",null,a.createElement("span",{className:r.bar}),a.createElement("span",{className:r.bar}),a.createElement("span",{className:r.bar})))),a.createElement("div",{className:r.browserWindowBody,style:i},n))}},61497:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(67294);const l=e=>{let{imgSrc:n,style:t}=e;return a.createElement("img",{className:"max-w-sm",style:t,src:n,alt:""})}},64581:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>v,default:()=>C,frontMatter:()=>N,metadata:()=>h,toc:()=>b});var a=t(87462),l=t(67294),r=t(3905),o=t(18947),s=t(60614);const i='import {\n    useConnectedWallet,\n    UserDenied,\n    useWallet,\n    WalletStatus,\n} from "@xpla/wallet-provider";\nimport React, { useState, useEffect } from "react";\nimport { LCDClient, MsgSend } from "@xpla/xpla.js";\n\nexport default function App() {\n    const lcd = new LCDClient({\n        chainID: \'cube_47-5\',\n        URL: \'https://cube-lcd.xpla.dev\'\n    });\n\n    const {\n        status,\n        network,\n        wallets,\n        connect,\n        disconnect\n    } = useWallet();\n\n    const connectedWallet = useConnectedWallet();\n\n    const [amount, setAmount] = useState("");\n    const [recipient, setRecipient] = useState("");\n\n    const [loading, setLoading] = useState(1);\n    const [txResult, setTxResult] = useState(null);\n    const [txError, setTxError] = useState(null);\n\n    const handleSend = async () => {\n        try {\n            const transactionMsg = {\n                msgs: [\n                    new MsgSend(connectedWallet.walletAddress, recipient, {\n                        axpla: amount\n                    }),\n                ],\n            };\n            const tx = await connectedWallet.post(transactionMsg);\n            if (tx.success) {\n                setLoading(true);\n                setTxResult(tx);\n            }\n            else setTxError("Please Retry Send!");\n        } catch (error) {\n            if (error instanceof UserDenied) {\n                setTxError("User Denied");\n            } else {\n                setTxError("Unknown Error: " + error instanceof Error ? error.message : String(error));\n            }\n        }\n    };\n\n    useEffect(() => {\n        if (txResult && loading !== 0) {\n            const timer = setTimeout(async () => {\n                try {\n                    const txInfo = await lcd.tx.txInfo(txResult.result.txhash);\n                    if (txInfo.txhash) setLoading(0);\n                } catch (err) {\n                    setLoading(loading + 1);\n                }\n            }, 1000);\n            return () => clearTimeout(timer);\n        }\n    }, [loading]);\n\n    return <div className="example-container">\n        {status === WalletStatus.WALLET_NOT_CONNECTED ? (\n            <>\n                <button\n                    className="button-css width-full"\n                    type="button"\n                    onClick={() => connect()}\n                >\n                    Connect Wallet\n                </button>\n                <p className="warning">If there is no change even after clicking the button, please press the refresh button in the bottom right corner of the screen.</p>\n            </>\n        ) : (\n            <>\n                <div className="info-container">\n                    <div className="info-title">Connected Address</div>\n                    <div className="info-content">\n                        {wallets.length === 0 ? "Loading..." : wallets[0].xplaAddress}\n                    </div>\n                </div>\n                <div className="info-container">\n                    <label className="info-title" for="recipient">\n                        Recipient\n                    </label>\n                    <input\n                        className="info-content"\n                        id="recipient"\n                        autoComplete="off"\n                        type="text"\n                        placeholder="xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk"\n                        onChange={(e) => setRecipient(e.target.value)}\n                    />\n                </div>\n                <div className="info-container">\n                    <label className="info-title" for="amount">\n                        Amount (aXPLA)\n                    </label>\n                    <input\n                        className="info-content"\n                        autoComplete="off"\n                        id="Amount"\n                        placeholder="1"\n                        onChange={(e) => setAmount(e.target.value)}\n                    />\n                </div>\n                <div className="bottom-button-container">\n                    <button className="button-css" type="button" onClick={handleSend}>\n                        Send Tx\n                    </button>\n                    <button className="button-css" type="button" onClick={disconnect}>\n                        Disconnect\n                    </button>\n                </div>\n                {txResult && (\n                    <div style={{ marginTop: 20 }}>\n                        <div className="info-title">Send Transaction Hash</div>\n                        <div className="info-content">\n                            {\n                                loading !== 0 ?\n                                    <span>Loading...</span>\n                                    :\n                                    <a\n                                        className="link"\n                                        href={"https://explorer.xpla.io/" + network.name + "/tx/" + txResult.result.txhash}\n                                        target="_blank"\n                                        rel="noreferrer"\n                                    >\n                                        {txResult.result.txhash}\n                                    </a>\n                            }\n                        </div>\n                    </div>\n                )}\n                {txError && (\n                    <div style={{ marginTop: 20 }}>\n                        <div className="info-title">Tx Error</div>\n                        <div className="info-content">\n                            <span>\n                                {txError}\n                            </span>\n                        </div>\n                    </div>\n                )}\n            </>\n        )}\n    </div>\n}';function p(){return l.createElement(s.Z,{className:"text-[12px]",language:"jsx",title:"src/App.js",showLineNumbers:!0},i)}const c='import React from "react";\nimport { createRoot } from "react-dom/client";\nimport "./index.css";\nimport {\n    getChainOptions,\n    WalletProvider,\n} from "@xpla/wallet-provider";\nimport App from "./App";\n\nconst root = createRoot(document.getElementById(\'root\'));\ngetChainOptions().then((chainOptions) => {\n    root.render(\n        <WalletProvider {...chainOptions}>\n            <App />\n        </WalletProvider>\n    );\n});';function d(){return l.createElement(s.Z,{className:"text-[12px]",language:"jsx",title:"src/index.js",showLineNumbers:!0},c)}const u=".example-container {\n    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n    border-radius: 4px;\n    padding: 24px 32px 24px 32px;\n    margin-bottom: 32px;\n}\n\n.width-full {\n    width: 100%;\n}\n\n.button-css {\n    background-color: #00B1FF;\n    color: white;\n    font-weight: 600;\n    padding: 8px 16px 8px 16px;\n    font-size: 16px;\n    border: 0px;\n    border-radius: 8px;\n}\n\n.button-css:hover {\n    cursor: pointer;\n    opacity: 0.9;\n}\n\n.info-container {\n    margin-bottom: 32px;\n}\n\n.info-title {\n    display: block;\n    color: #16161A;\n    font-size: 16px;\n    font-weight: 600;\n    margin-bottom: 8px;\n}\n\n.info-content {\n    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n    border-radius: 4px;\n    width: calc(100% - 24px);\n    padding: 8px 12px 8px 12px;\n    font-size: 14px;\n}\n\n.bottom-button-container {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.link {\n    color: #00B1FF;\n    word-break: break-all;\n}\n\n.link:hover {\n    color: #00B1FF;\n}\n\n.warning {\n    color: #FF335F;\n}";function m(){return l.createElement(s.Z,{className:"text-[12px]",language:"css",title:"src/index.css",showLineNumbers:!0},u)}const x=()=>{const e={"App.js":i,"index.js":c,"index.css":u};return l.createElement(o.xR,{theme:"light",template:"react",customSetup:{dependencies:{"@xpla/xpla.js":"^0.3.1","@xpla/wallet-provider":"^0.4.1","react-scripts":"^4.0.3"}},options:{visibleFiles:["App.js","/package.json","index.js","index.css"],editorHeight:600,showTabs:!0,showLineNumbers:!0},files:e})};var g=t(61497),k=t(51007);const N={sidebar_position:3},v="Wallet Provider\ub85c React\uc640 XPLA Vault \uc9c0\uac11 \uc5f0\uacb0\ud558\uae30",h={unversionedId:"tutorial/deep-understand-xpla/walletprovider",id:"tutorial/deep-understand-xpla/walletprovider",title:"Wallet Provider\ub85c React\uc640 XPLA Vault \uc9c0\uac11 \uc5f0\uacb0\ud558\uae30",description:"XPLA Wallet Provider\ub780 React\uc5d0\uc11c XPLA Vault \uc9c0\uac11\uc744 \uc774\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 \ub3c4\uad6c\uc785\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc720\uc800\ub4e4\uc774 React \uc6f9\uc5d0\uc11c \uc790\uc2e0\uc758 Vault \uc9c0\uac11\uc744 \ub354 \uc27d\uac8c \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc9c1\uc811 React \uc6f9\uc5d0\uc11c Wallet Provider\ub97c \uc0ac\uc6a9\ud574\ubd05\uc2dc\ub2e4.",source:"@site/docs/3-tutorial/3-deep-understand-xpla/3-walletprovider.mdx",sourceDirName:"3-tutorial/3-deep-understand-xpla",slug:"/tutorial/deep-understand-xpla/walletprovider",permalink:"/xpla-academy-dev/ko-kr/docs/tutorial/deep-understand-xpla/walletprovider",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\ud2b8\ub79c\uc7ad\uc158\uc5d0\uc11c AccountNumber\uc640 Sequence \ud56d\ubaa9 \uc774\ud574\ud558\uae30",permalink:"/xpla-academy-dev/ko-kr/docs/tutorial/deep-understand-xpla/account-sequence"},next:{title:"Cosmwasm \ucee8\ud2b8\ub799\ud2b8 \uc791\uc131 \ubc0f \ube4c\ub4dc\ud558\uae30",permalink:"/xpla-academy-dev/ko-kr/docs/tutorial/deep-understand-xpla/write-contract"}},f={},b=[{value:"Preview",id:"preview",level:2},{value:"React Code Along",id:"react-code-along",level:2},{value:"App.js \ucf54\ub4dc \ubd84\uc11d",id:"appjs-\ucf54\ub4dc-\ubd84\uc11d",level:2},{value:"Line 16~24",id:"line16-24",level:3},{value:"Line 72~83",id:"line72-83",level:3},{value:"Line 91~123",id:"line91-123",level:3},{value:"Line 33~55",id:"line33-55",level:3},{value:"Line 57~69",id:"line57-69",level:3},{value:"Line 124~143",id:"line124-143",level:3}],w={toc:b},y="wrapper";function C(e){let{components:n,...t}=e;return(0,r.kt)(y,(0,a.Z)({},w,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wallet-provider\ub85c-react\uc640-xpla-vault-\uc9c0\uac11-\uc5f0\uacb0\ud558\uae30"},"Wallet Provider\ub85c React\uc640 XPLA Vault \uc9c0\uac11 \uc5f0\uacb0\ud558\uae30"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/xpladev/wallet-provider"},"XPLA Wallet Provider"),"\ub780 React\uc5d0\uc11c XPLA Vault \uc9c0\uac11\uc744 \uc774\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ub3c4\uc640\uc8fc\ub294 \ub3c4\uad6c\uc785\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \uc720\uc800\ub4e4\uc774 React \uc6f9\uc5d0\uc11c \uc790\uc2e0\uc758 Vault \uc9c0\uac11\uc744 \ub354 \uc27d\uac8c \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc9c1\uc811 React \uc6f9\uc5d0\uc11c Wallet Provider\ub97c \uc0ac\uc6a9\ud574\ubd05\uc2dc\ub2e4."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"XPLA Wallet Provider\uc5d0 \uad00\ud55c \uc815\ubcf4\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.xpla.io/docs/develop/tools/wallet-provider/"},"XPLA Docs"),"\uc5d0\uc11c\ub3c4 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Edge \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c\ub294 Wallet Provider\ub97c \uc774\uc6a9\ud558\uc5ec Vault Chrome Extension\uacfc \uc5f0\uacb0\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub300\uc2e0 \ubaa8\ubc14\uc77c \uc560\ud50c\ub9ac\ucf00\uc774\uc158 Vault\ub97c \uc124\uce58\ud558\uc5ec, ",(0,r.kt)("a",{parentName:"p",href:"https://walletconnect.com/"},"Wallet Connect")," \ubc29\uc2dd\uc73c\ub85c \uc5f0\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),(0,r.kt)("h2",{id:"preview"},"Preview"),(0,r.kt)("p",null,"React\uc5d0\uc11c Wallet Provider\ub97c \uc774\uc6a9\ud558\uc5ec Vault \uc9c0\uac11\uc744 \uc5f0\uacb0\ud558\ub294 \ucf54\ub4dc\uc785\ub2c8\ub2e4. \uc544\ub798 Connect Button\uc744 \ub204\ub974\uace0, \ud14c\uc2a4\ud2b8\ub137 XPLA \uc804\uc1a1\uae4c\uc9c0 \uc9c4\ud589\ud574\ubcf4\uc138\uc694."),(0,r.kt)(x,{mdxType:"WalletProvider"}),(0,r.kt)("br",null),(0,r.kt)("p",null,"Wallet Provider\ub85c \uc720\uc800\uc758 Vault \uc9c0\uac11 \uc815\ubcf4\ub97c \ubc1b\uc544, \ud14c\uc2a4\ud2b8\ub137 XPLA \uc804\uc1a1\uae4c\uc9c0 \uc9c4\ud589\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. Preview Code\ub97c \uc774\ud574\ud558\uc168\ub2e4\uba74 ",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorial/deep-understand-xpla/write-contract"},"\ub2e4\uc74c \ub2e8\uacc4"),"\ub85c \ub118\uc5b4\uac00\uc154\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",{id:"react-code-along"},"React Code Along"),(0,r.kt)("p",null,"\uc544\ub798 \uacfc\uc815\uc744 \ub530\ub77c\ud558\uba74\uc11c Preview Code\ub97c \uc774\ud574\ud574\ubd05\uc2dc\ub2e4."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\uba3c\uc800 React\ub97c CRA\ub85c \uc124\uce58\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-react-app xpla-app\ncd xpla-app\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wallet Provider\ub97c \uc774\uc6a9\ud558\uae30 \uc704\ud574 \ud544\uc694\ud55c \ubaa8\ub4c8\uc744 \uc124\uce58\ud569\ub2c8\ub2e4. Wallet Provider\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Polyfill"},"Polyfill"),"\uc744 \uc774\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0, ",(0,r.kt)("inlineCode",{parentName:"p"},"react-scripts@4.0.3"),"\ub97c \ud568\uaed8 \uc124\uce58\ud574\uc90d\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install react-scripts@4.0.3\nnpm install @xpla/wallet-provider @xpla/xpla.js\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"CRA\ub85c \uc124\uce58\ud55c React \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c, src/index.js \ud30c\uc77c\uc744 \uc608\uc81c\uc640 \uac19\uc774 \uc218\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)(d,{mdxType:"CodeWPIndex"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"src/App.js \ud30c\uc77c\uc744 \uc218\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)(p,{mdxType:"CodeWPApp"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"src/index.css \ud30c\uc77c\uc744 \uc218\uc815\ud569\ub2c8\ub2e4."),(0,r.kt)(m,{mdxType:"CodeWPCss"})),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\ub85c\uceec\uc5d0\uc11c React\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")))),(0,r.kt)("p",null,"\uc774\ud6c4 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:3000"),"\ub85c \uc811\uc18d\ud558\uc5ec Preview \ud654\uba74\ucc98\ub7fc Vault \uc9c0\uac11\uc744 \uc5f0\uacb0\ud574\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc9c1\uc811 \ud14c\uc2a4\ud2b8\ub137 XPLA\ub97c \uc804\uc1a1\ud574\ubcf4\uc138\uc694."),(0,r.kt)("h2",{id:"appjs-\ucf54\ub4dc-\ubd84\uc11d"},"App.js \ucf54\ub4dc \ubd84\uc11d"),(0,r.kt)("p",null,"Wallet Provider\ub97c \uc9c1\uc811\uc801\uc73c\ub85c \uc774\uc6a9\ud558\ub294 App.js \ud30c\uc77c\uc758 \ucf54\ub4dc\ub97c \ubd84\uc11d\ud574\ubd05\uc2dc\ub2e4. "),(0,r.kt)("h3",{id:"line16-24"},"Line 16~24"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@xpla/wallet-provider")," \ubaa8\ub4c8\uc758 ",(0,r.kt)("strong",{parentName:"p"},"useWallet"),"\uacfc ",(0,r.kt)("strong",{parentName:"p"},"useConnectedWallet")," \ud568\uc218\ub97c \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4. ",(0,r.kt)("strong",{parentName:"p"},"status")," \ubcc0\uc218\ub294 \ud604\uc7ac \uc720\uc800\uac00 Vault Chrome Extension\uacfc \uc5f0\uacb0\ud588\ub294\uc9c0 \uc0c1\ud0dc\ub97c \ub098\ud0c0\ub0b4\ub294 \ubcc0\uc218\uac12\uc785\ub2c8\ub2e4. \uc720\uc800\uc758 \uc9c0\uac11\uc774 \uc5f0\uacb0\ub418\uc9c0 \uc54a\uc558\ub2e4\uba74, ",(0,r.kt)("strong",{parentName:"p"},"connectedWallet")," \ubcc0\uc218\uc5d0\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," \uac12\uc774 \ub2f4\uaca8 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{2}","{2}":!0},"const {\n    status,\n    network,\n    wallets,\n    connect,\n    disconnect\n} = useWallet();\n\nconst connectedWallet = useConnectedWallet();\n")),(0,r.kt)("h3",{id:"line72-83"},"Line 72~83"),(0,r.kt)("p",null,"\uc720\uc800\uac00 \uc544\uc9c1 Vault \uc9c0\uac11\uc744 \uc5f0\uacb0\ud558\uc9c0 \uc54a\uc558\uc744 \uacbd\uc6b0(",(0,r.kt)("strong",{parentName:"p"},"status === WalletStatus.WALLET_NOT_CONNECTED"),"), ",(0,r.kt)("inlineCode",{parentName:"p"},"Connect Wallet")," \ubc84\ud2bc\uc744 \ubcf4\uc5ec\uc8fc\ub3c4\ub85d \ud588\uc2b5\ub2c8\ub2e4. \uc720\uc800\uac00 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 ",(0,r.kt)("strong",{parentName:"p"},"connect")," \ud568\uc218\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4. ",(0,r.kt)("strong",{parentName:"p"},"connect")," \ud568\uc218\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"@xpla/wallet-provider")," \ubaa8\ub4c8\uc758 \ub0b4\uc7a5 \ud568\uc218\ub85c, Vault\uc5d0 \uc5f0\uacb0\ud560 \uc218 \uc788\ub294 Modal \ucc3d\uc744 \ub744\uc6cc\uc90d\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{1,6}","{1,6}":!0},'{status === WalletStatus.WALLET_NOT_CONNECTED ? (\n    <>\n        <button\n            className="button-css width-full"\n            type="button"\n            onClick={() => connect()}\n        >\n            Connect Wallet\n        </button>\n        <p className="warning">If there is no change even after clicking the button, please press the refresh button in the bottom right corner of the screen.</p>\n    </>\n) : (\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,"\uc720\uc800\uac00 \uc9c0\uac11\uc744 \uc5f0\uacb0\ud558\uba74, \ud604\uc7ac \uc720\uc800\uac00 Vault\uc5d0\uc11c \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \uc8fc\uc18c \uc815\ubcf4\uac00 ",(0,r.kt)("strong",{parentName:"p"},"connectedWallet")," \ubcc0\uc218\uc5d0 \ub2f4\uae41\ub2c8\ub2e4. \uc720\uc800\ub294 Vault\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"Switch wallet")," \ubc84\ud2bc\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \uc9c0\uac11 \uc8fc\uc18c\ub97c \ubc14\uafc0 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(k.Z,{url:"google.com",bodyStyle:{padding:"0px 0px 16px 0px",position:"relative"},mdxType:"BrowserWindow"},(0,r.kt)("div",{className:"flex justify-center",style:{width:"100%",height:"100%",top:0,zIndex:0,position:"absolute"}},(0,r.kt)("img",{style:{height:"100%"},src:"/xpla-academy-dev/img/2-settings/1-create-wallet/google.png"})),(0,r.kt)("div",{className:"flex justify-end",style:{zIndex:1,position:"relative"}},(0,r.kt)(g.Z,{imgSrc:"/xpla-academy-dev/img/3-tutorial/3-deep-understand-xpla/vault-switch-wallet.png",mdxType:"VaultImgCard"}))),(0,r.kt)("h3",{id:"line91-123"},"Line 91~123"),(0,r.kt)("p",null,"\uc608\uc81c React \ud654\uba74\uc5d0\uc11c Recipient \uac12\uacfc Amount \uac12\uc744 input\uc73c\ub85c \uc785\ub825 \ubc1b\uc558\uc2b5\ub2c8\ub2e4. \uc774\ud6c4 ",(0,r.kt)("inlineCode",{parentName:"p"},"Send Tx")," \ubc84\ud2bc\uc744 \ud074\ub9ad\ud560 \uacbd\uc6b0 ",(0,r.kt)("strong",{parentName:"p"},"handleSend")," \ud568\uc218\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3,16,27}","{3,16,27}":!0},'<div className="info-container">\n    <label className="info-title" for="recipient">\n        Recipient\n    </label>\n    <input\n        className="info-content"\n        id="recipient"\n        autoComplete="off"\n        type="text"\n        placeholder="xpla1cwduqw0z8y66mnfpev2mvrzzzu98tuexepmwrk"\n        onChange={(e) => setRecipient(e.target.value)}\n    />\n</div>\n<div className="info-container">\n    <label className="info-title" for="amount">\n        Amount (aXPLA)\n    </label>\n    <input\n        className="info-content"\n        autoComplete="off"\n        id="Amount"\n        placeholder="1"\n        onChange={(e) => setAmount(e.target.value)}\n    />\n</div>\n<div className="bottom-button-container">\n    <button className="button-css" type="button" onClick={handleSend}>\n        Send Tx\n    </button>\n    <button className="button-css" type="button" onClick={disconnect}>\n        Disconnect\n    </button>\n</div>\n')),(0,r.kt)("h3",{id:"line33-55"},"Line 33~55"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"handleSend")," \ud568\uc218\ub294 \uc720\uc800\uac00 \uc5f0\uacb0\ud55c \uc9c0\uac11\uc73c\ub85c\ubd80\ud130, Recipient \uc9c0\uac11\uc73c\ub85c \uc785\ub825\ud55c \uae08\uc561(aXPLA)\ub9cc\ud07c \ud14c\uc2a4\ud2b8\ub137 XPLA\ub97c \uc804\uc1a1\ud569\ub2c8\ub2e4. line 35\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158 \uba54\uc2dc\uc9c0\ub97c \ub9cc\ub4e4\uace0, line 42\uc5d0\uc11c \ube14\ub85d\uccb4\uc778 \ub124\ud2b8\uc6cc\ud06c\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc744 \uc804\ud30c\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3,10}","{3,10}":!0},'const handleSend = async () => {\n    try {\n        const transactionMsg = {\n            msgs: [\n                new MsgSend(connectedWallet.walletAddress, recipient, {\n                    axpla: amount\n                }),\n            ],\n        };\n        const tx = await connectedWallet.post(transactionMsg);\n        if (tx.success) {\n            setLoading(true);\n            setTxResult(tx);\n        }\n        else setTxError("Please Retry Send!");\n    } catch (error) {\n        if (error instanceof UserDenied) {\n            setTxError("User Denied");\n        } else {\n            setTxError("Unknown Error: " + error instanceof Error ? error.message : String(error));\n        }\n    }\n};\n')),(0,r.kt)("h3",{id:"line57-69"},"Line 57~69"),(0,r.kt)("p",null,"XPLA \ube14\ub85d\uccb4\uc778\uc5d0\uc11c \ube14\ub85d \uc0dd\uc131\uc740 \uc57d 6\ucd08\ub9c8\ub2e4 \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4. \ub530\ub77c\uc11c \ud2b8\ub79c\uc7ad\uc158\uc744 \uc804\ud30c\ud55c \ud6c4, \ud2b8\ub79c\uc7ad\uc158\uc774 \ube14\ub85d\uccb4\uc778\uc5d0 \uae30\ub85d\ub418\uae30\uae4c\uc9c0\ub294 \uc2dc\uac04\uc774 \uc870\uae08 \uac78\ub9bd\ub2c8\ub2e4. \ube14\ub85d\uccb4\uc778\uc5d0 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc798 \uae30\ub85d\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud574, \uc608\uc81c\uc5d0\uc11c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"LCDClient"),"\ub97c \uc774\uc6a9\ud558\uc5ec \ud574\uc2dc\uac12\uc5d0 \ud574\ub2f9\ud558\ub294 \ud2b8\ub79c\uc7ad\uc158\uc774 \uc788\ub294\uc9c0 \uc870\uc0ac\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"handleSend")," \ud568\uc218\uc5d0\uc11c \ud2b8\ub79c\uc7ad\uc158\uc774 \uc804\ud30c\ub418\uc5c8\ub2e4\uba74, React State \uc911 ",(0,r.kt)("strong",{parentName:"p"},"loading")," \ubcc0\uc218\uac12\uc774 ",(0,r.kt)("strong",{parentName:"p"},"true"),"\ub85c \ubc14\ub00c\uac8c \ub429\ub2c8\ub2e4(line 44). \uc774\ub54c ",(0,r.kt)("strong",{parentName:"p"},"useEffect")," \ud568\uc218\uc758 ",(0,r.kt)("strong",{parentName:"p"},"dependency array")," \ud56d\ubaa9\uc5d0 ",(0,r.kt)("strong",{parentName:"p"},"loading")," \ubcc0\uc218\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc5d0 ",(0,r.kt)("strong",{parentName:"p"},"useEffect"),"\uc758 callback \ud568\uc218\uac00 \uc2e4\ud589\ub429\ub2c8\ub2e4. callback \ud568\uc218\ub294 LCDClient\uc5d0\uac8c \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130\ub97c \ubc1b\uc744 \ub54c\uae4c\uc9c0, ",(0,r.kt)("strong",{parentName:"p"},"setTimeout")," \ud568\uc218\ub85c 1\ucd08\uc5d0 \ud55c\ubc88\uc529 \uacc4\uc18d \ucffc\ub9ac\ub97c \ubcf4\ub0c5\ub2c8\ub2e4. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{3,5,13}","{3,5,13}":!0},"useEffect(() => {\n    if (txResult && loading !== 0) {\n        const timer = setTimeout(async () => {\n            try {\n                const txInfo = await lcd.tx.txInfo(txResult.result.txhash);\n                if (txInfo.txhash) setLoading(0);\n            } catch (err) {\n                setLoading(loading + 1);\n            }\n        }, 1000);\n        return () => clearTimeout(timer);\n    }\n}, [loading]);\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"LCDClient\ub97c \uc774\uc6a9\ud558\uc5ec \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\ub294 \ubc29\ubc95\uc740 ",(0,r.kt)("a",{parentName:"p",href:"/docs/settings/create-testnet-transaction/send-query"},"\uc774\uc804 \ub2e8\uacc4"),"\uc5d0\uc11c \ud559\uc2b5\ud55c \ub0b4\uc6a9\uc744 \uc751\uc6a9\ud55c \uac83\uc785\ub2c8\ub2e4.")),(0,r.kt)("h3",{id:"line124-143"},"Line 124~143"),(0,r.kt)("p",null,"\uc774\ud6c4 \ud2b8\ub79c\uc7ad\uc158 \ub370\uc774\ud130\ub97c \ubc1b\uc544 ",(0,r.kt)("strong",{parentName:"p"},"loading")," \ubcc0\uc218\uac12\uc774 0\uc774 \ub41c\ub2e4\uba74, React \ud654\uba74\uc5d0\uc11c \uc720\uc800\uc5d0\uac8c \ud2b8\ub79c\uc7ad\uc158 \ud574\uc2dc\uac12\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \uc608\uc81c\uc5d0\uc11c\ub294 \ud574\uc2dc\uac12\uc744 \ud074\ub9ad\ud558\uba74 ",(0,r.kt)("a",{parentName:"p",href:"https://explorer.xpla.io/"},"XPLA Explorer"),"\ub85c \uc774\ub3d9\ud558\ub3c4\ub85d \uc5f0\uacb0\ud574\uc8fc\uc5c8\uc2b5\ub2c8\ub2e4.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"{11}","{11}":!0},'{txResult && (\n    <div style={{ marginTop: 20 }}>\n        <div className="info-title">Send Transaction Hash</div>\n        <div className="info-content">\n            {\n                loading !== 0 ?\n                    <span>Loading...</span>\n                    :\n                    <a\n                        className="link"\n                        href={"https://explorer.xpla.io/" + network.name + "/tx/" + txResult.result.txhash}\n                        target="_blank"\n                        rel="noreferrer"\n                    >\n                        {txResult.result.txhash}\n                    </a>\n            }\n        </div>\n    </div>\n)}\n')),(0,r.kt)("p",null,"\uc9c0\uae08\uae4c\uc9c0 React\uc5d0\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"@xpla/wallet-provider")," \ubaa8\ub4c8\uc744 \uc774\uc6a9\ud574\ubd24\uc2b5\ub2c8\ub2e4. \uc720\uc800\uc758 Vault \uc9c0\uac11 \uc815\ubcf4\ub97c React\uc5d0 \uc5f0\uacb0\ud558\uace0, \ud14c\uc2a4\ud2b8\ub137 XPLA\uae4c\uc9c0 \uc804\uc1a1\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \uc608\uc81c \ucf54\ub4dc\ub97c \uc5ec\ub7ec\ubd84\uc758 \uac8c\uc784\uc5d0 \ub9de\uac8c \uc218\uc815\ud558\uc5ec, \uc720\uc800\ub4e4\uc774 \uc27d\uac8c \ube14\ub85d\uccb4\uc778\uc744 \uc774\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ub9cc\ub4e4\uc5b4\ubd05\uc2dc\ub2e4."))}C.isMDXComponent=!0}}]);