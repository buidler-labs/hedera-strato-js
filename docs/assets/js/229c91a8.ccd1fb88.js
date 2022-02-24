"use strict";(self.webpackChunk_buidlerlabs_hedera_strato_js=self.webpackChunk_buidlerlabs_hedera_strato_js||[]).push([[907],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(h,r(r({ref:t},p),{},{components:n})):i.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38918:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>u});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],s={id:"session",title:"The Session"},l=void 0,c={unversionedId:"markdown/guides/session",id:"markdown/guides/session",title:"The Session",description:"Sessions are the life-blood of the library. Virutally, you can't do anything meaningful without one.",source:"@site/markdown/guides/session.md",sourceDirName:"markdown/guides",slug:"/markdown/guides/session",permalink:"/markdown/guides/session",editUrl:"https://github.com/buidler-labs/hedera-strato-js/edit/main/markdown/guides/session.md",tags:[],version:"current",lastUpdatedBy:"Victor ADASCALITEI",lastUpdatedAt:1645465246,formattedLastUpdatedAt:"2/21/2022",frontMatter:{id:"session",title:"The Session"},sidebar:"docs",previous:{title:"Configuring",permalink:"/markdown/configuration"},next:{title:"Account",permalink:"/markdown/guides/entities/account"}},p=[{value:"Creating a session",id:"creating-a-session",children:[],level:2},{value:"What can it do?",id:"what-can-it-do",children:[],level:2},{value:"Subscribing to receipts",id:"subscribing-to-receipts",children:[],level:2}],d={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sessions are the life-blood of the library. Virutally, you can't do anything meaningful without one."),(0,o.kt)("h2",{id:"creating-a-session"},"Creating a session"),(0,o.kt)("p",null,"Head over to the ",(0,o.kt)("a",{parentName:"p",href:"/markdown/configuration#introduction"},"Configuration page")," to find out what are the session creating options available."),(0,o.kt)("h2",{id:"what-can-it-do"},"What can it do?"),(0,o.kt)("p",null,"... a couple of things spread into 2 categories:"),(0,o.kt)("p",null,"Creational operations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"create")," a ",(0,o.kt)("inlineCode",{parentName:"li"},"Token")," or an ",(0,o.kt)("inlineCode",{parentName:"li"},"Account")," via the ",(0,o.kt)("inlineCode",{parentName:"li"},"create(what)")," method with ",(0,o.kt)("inlineCode",{parentName:"li"},"what")," being a ",(0,o.kt)("inlineCode",{parentName:"li"},"CreatableEntity")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"upload")," a ",(0,o.kt)("inlineCode",{parentName:"li"},"Contract")," or a ",(0,o.kt)("inlineCode",{parentName:"li"},"Json")," object via the conveniently named method, ",(0,o.kt)("inlineCode",{parentName:"li"},"upload(what, ...args)"),", with ",(0,o.kt)("inlineCode",{parentName:"li"},"what")," being a ",(0,o.kt)("inlineCode",{parentName:"li"},"UploadableEntity")," in this case. ",(0,o.kt)("inlineCode",{parentName:"li"},"...args")," are any additional info required to tweak the process (such as meta-arguments to control the parameters of the hedera transactions with) and/or any constructor arguments that might be required.")),(0,o.kt)("p",null,"Retrieval operations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getLiveContract({ id, abi = [] })")," - retrieves a ",(0,o.kt)("inlineCode",{parentName:"li"},"LiveContract")," given its id and ABI info"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"getLiveJson({ id })")," - retrieves a ",(0,o.kt)("inlineCode",{parentName:"li"},"LiveJson")," object that was previously stored on-graph")),(0,o.kt)("h2",{id:"subscribing-to-receipts"},"Subscribing to receipts"),(0,o.kt)("p",null,"The session also allows to get notified of transaction receipts via the ",(0,o.kt)("inlineCode",{parentName:"p"},"subscribeToReceiptsWith")," method. You pass it a callback, do some contract transactions and wait to get called like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"live=true containerKey=subscribe_to_recipts",live:"true",containerKey:"subscribe_to_recipts"},"const code = `\n// SPDX-License-Identifier: MIT\npragma solidity ^0.8.9;\n\ncontract Counter {\n    uint public count;\n\n    function inc() public { count += 1; }\n}`;\nconst { session } = await ApiSession.default();\nconst contract = await Contract.newFrom({ code });\nconst receiptsSubscription = session.subscribeToReceiptsWith(({ transaction, receipt }) => {\n    console.log(`Transaction ${transaction.transactionId.toString()} receipt reported finishing with status ${receipt.status}`);\n});\nconst liveContract = await session.upload(contract);\n\nawait liveContract.inc({ emitReceipt: true });\nreceiptsSubscription.unsubscribe();\n")),(0,o.kt)("p",null,"The above example also shows how you can cancel such a subscription via the ",(0,o.kt)("inlineCode",{parentName:"p"},"Subscription.unsubscribe()")," method."),(0,o.kt)("p",null,"Also, if you were to ",(0,o.kt)("inlineCode",{parentName:"p"},"Run")," the example, you could see multiple transaction receipts being logged. What gives? Well, only the last one is reflecting our ",(0,o.kt)("inlineCode",{parentName:"p"},"liveContract.inc")," operation, the rest are due to the transactions being carried out under the hood for uploading the actual ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter")," contract (both with the file service and with hedera's contract service)."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Emitting receipts by default, across the entire session, for all ",(0,o.kt)("code",null,"LiveContract")," interactions"),(0,o.kt)("p",null,"In the above snippet we saw how one could emit an on-demand receipt (via the live-contract meta-arguments property of ",(0,o.kt)("inlineCode",{parentName:"p"},"emitReceipt")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"liveContract.inc({ emitReceipt: true })"),") per individual contract method calls. That's great for controlling and keeping costs down, but what if we would like to have this behavior as default across the session usage?"),(0,o.kt)("p",null,"To do that, you could either ",(0,o.kt)("a",{parentName:"p",href:"/markdown/configuration#big-table-o-parameters"},"set the ",(0,o.kt)("inlineCode",{parentName:"a"},"HEDERAS_DEFAULT_EMIT_LIVE_CONTRACT_RECEIPTS")," environment option to ",(0,o.kt)("inlineCode",{parentName:"a"},"true"))," or have its runtime counter-part, ",(0,o.kt)("inlineCode",{parentName:"p"},"session.defaults.emitLiveContractReceipts"),", to the same value."),(0,o.kt)("p",null,"The runtime variant will look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"const { session } = await ApiSession.default({\n  session: { defaults: { emitLiveContractReceipts: true } }\n});\n")),(0,o.kt)("p",null,"Following this, you could get rid of the ",(0,o.kt)("inlineCode",{parentName:"p"},"{ emitReceipt: true }")," meta-argument and just end up with a clean and more easily readable, ",(0,o.kt)("inlineCode",{parentName:"p"},"await liveContract.greet()")," call.")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Setting ",(0,o.kt)("inlineCode",{parentName:"p"},"emitReceipt")," meta-argument to true on contract functions that do not modify state will not have any effect. "),(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"pure"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"view")," solidity functions resolve to a ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractCallQuery")," that is being executed in Strato, which returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractFunctionResult"),". The result of the contract call does not contain receipts or records as the call runs on a single node."))))}u.isMDXComponent=!0}}]);