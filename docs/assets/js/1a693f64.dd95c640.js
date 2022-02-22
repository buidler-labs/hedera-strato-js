"use strict";(self.webpackChunk_buidlerlabs_hedera_strato_js=self.webpackChunk_buidlerlabs_hedera_strato_js||[]).push([[961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=o,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},72956:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>p,default:()=>m});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=["components"],s={id:"contract",title:"Contract"},l=void 0,c={unversionedId:"markdown/guides/entities/contract",id:"markdown/guides/entities/contract",title:"Contract",description:"Loading contract code",source:"@site/markdown/guides/entities/contract.md",sourceDirName:"markdown/guides/entities",slug:"/markdown/guides/entities/contract",permalink:"/markdown/guides/entities/contract",editUrl:"https://github.com/buidler-labs/hedera-strato-js/edit/main/markdown/guides/entities/contract.md",tags:[],version:"current",lastUpdatedBy:"Victor ADASCALITEI",lastUpdatedAt:1645465246,formattedLastUpdatedAt:"2/21/2022",frontMatter:{id:"contract",title:"Contract"},sidebar:"docs",previous:{title:"Account",permalink:"/markdown/guides/entities/account"},next:{title:"Json",permalink:"/markdown/guides/entities/json"}},p=[{value:"Loading contract code",id:"loading-contract-code",children:[],level:3},{value:"Deploying contracts",id:"deploying-contracts",children:[{value:"Transaction meta-arguments",id:"transaction-meta-arguments",children:[],level:4},{value:"Constructor parameters",id:"constructor-parameters",children:[],level:4}],level:3},{value:"Interacting with deployed contracts",id:"interacting-with-deployed-contracts",children:[{value:"Calling methods",id:"calling-methods",children:[],level:4},{value:"Dealing with events",id:"dealing-with-events",children:[],level:4},{value:"Transaction meta-arguments",id:"transaction-meta-arguments-1",children:[],level:4}],level:3},{value:"Retrieving deployed contracts",id:"retrieving-deployed-contracts",children:[],level:3}],d={toc:p};function m(e){var t=e.components,a=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"loading-contract-code"},"Loading contract code"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is different then ",(0,i.kt)("a",{parentName:"p",href:"#deploying-contracts"},"deploying contracts")," on the network. Think of loading a contract as preparing its content to act as a blueprint for when we chose to make it live (hence its associated online type name, ",(0,i.kt)("inlineCode",{parentName:"p"},"LiveContract"),"). "))),(0,i.kt)("p",null,"A contract can be loaded from 2 sources: either referencing a local file or by giving the contract's code directly. To load a contract one of the following methods can be used:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Contract.newFrom")," - given either the ",(0,i.kt)("inlineCode",{parentName:"li"},"path")," of the ",(0,i.kt)("inlineCode",{parentName:"li"},".sol")," file or the actual ",(0,i.kt)("inlineCode",{parentName:"li"},"code")," of it, retrieves a single ",(0,i.kt)("inlineCode",{parentName:"li"},"Contract")," instance. If there are multiple contracts defined, by default, the first one is retrieved. This can be overwritten to retrieve either the n-th ",(0,i.kt)("inlineCode",{parentName:"li"},"index")," contract (by default ",(0,i.kt)("inlineCode",{parentName:"li"},"index=0"),") or a contract by ",(0,i.kt)("inlineCode",{parentName:"li"},"name"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Contract.allFrom")," - same as ",(0,i.kt)("inlineCode",{parentName:"li"},"Contract.name")," in all regards except for the fact that it does not take in an ",(0,i.kt)("inlineCode",{parentName:"li"},"index")," nor a contract ",(0,i.kt)("inlineCode",{parentName:"li"},"name")," and retrieves an array of all the available contracts.\nWhen bulding a ",(0,i.kt)("inlineCode",{parentName:"li"},"Contract")," instance, there's also a ",(0,i.kt)("inlineCode",{parentName:"li"},"ignoreWarnings")," property which is, by default, set to ",(0,i.kt)("inlineCode",{parentName:"li"},"false")," that allows to bypass solidity's warnings when building the contract's code.")),(0,i.kt)("p",null,"A thing to keep in mind here is the fact that, once a ",(0,i.kt)("inlineCode",{parentName:"p"},"Contract")," instance has been constructed, this is also a guarantee that the provided code was accepted by the solidity compiler. This is the reason why ",(0,i.kt)("inlineCode",{parentName:"p"},"Contract"),"s have ",(0,i.kt)("inlineCode",{parentName:"p"},"byteCode")," property defined on it."),(0,i.kt)("h3",{id:"deploying-contracts"},"Deploying contracts"),(0,i.kt)("p",null,"Once an ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiSession")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"Contract")," is available, deploying the code on the network is as simple as doing an ",(0,i.kt)("inlineCode",{parentName:"p"},"session.upload(contract)")," method call. This returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<LiveContract>")," so you might want ",(0,i.kt)("em",{parentName:"p"},"await"),"-ing for the result."),(0,i.kt)("h4",{id:"transaction-meta-arguments"},"Transaction meta-arguments"),(0,i.kt)("p",null,"Going into more depth with this method, if one wants to tweak the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.hedera.com/guides/docs/sdks/file-storage/create-a-file"},"Hedera File Service - Create File Transaction")," step with extra-arguments, just pass in a second param to the ",(0,i.kt)("inlineCode",{parentName:"p"},"upload")," call which is a object of the form ",(0,i.kt)("inlineCode",{parentName:"p"},"{_file: {...}}"),' containing any required options. For example, to attach a "Hello Strato" memo to the uploaded contract code, the resulting call would end up being: ',(0,i.kt)("inlineCode",{parentName:"p"},'session.upload(contract, {_file: {fileMemo: "Hello Strato"}})'),". "),(0,i.kt)("p",null,"To pass ",(0,i.kt)("a",{parentName:"p",href:"https://docs.hedera.com/guides/docs/sdks/smart-contracts/create-a-smart-contract"},"Create Smart Contract Transaction")," parameters, have the second object parameter contain a property called ",(0,i.kt)("inlineCode",{parentName:"p"},"_contract")," with the same rationale in mind: set values that you wish to send to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ContractCreateTransaction")," constructor. For instance, if you would like to set a ",(0,i.kt)("inlineCode",{parentName:"p"},"gas")," contract-creation limit to 100000\u210f, your end ",(0,i.kt)("inlineCode",{parentName:"p"},"upload")," call would be: ",(0,i.kt)("inlineCode",{parentName:"p"},"session.upload(contract, {_contract: {gas: 100_000}})"),". By the way, the default ",(0,i.kt)("inlineCode",{parentName:"p"},"gas")," set for contract-creation transaction ",(0,i.kt)("a",{parentName:"p",href:"/markdown/configuration"},"can be tweaked by the ",(0,i.kt)("inlineCode",{parentName:"a"},"HEDERAS_DEFAULT_CONTRACT_TRANSACTION_GAS")," environment variable")," and is currently set to ",(0,i.kt)("inlineCode",{parentName:"p"},"169_000"),"."),(0,i.kt)("p",null,"You can, of course, pass in both ",(0,i.kt)("inlineCode",{parentName:"p"},"_file")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"_contract")," options. Merging the above 2 examples, ",(0,i.kt)("inlineCode",{parentName:"p"},'session.upload(contract, {_contract: {gas: 100_000}, _file: {fileMemo: "Hello Strato"}})')," would end up uploading a ",(0,i.kt)("inlineCode",{parentName:"p"},"Contract.byteCode"),' to Hedera and have a memo attached to the resulting file called "Hello Strato". It would then set a ',(0,i.kt)("inlineCode",{parentName:"p"},"gas")," limit of 100000\u210f to create the contract. A working example of this, could look as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"live=true containerKey=contract_and_file_options",live:"true",containerKey:"contract_and_file_options"},'const { session } = await ApiSession.default();\nconst helloWorldContract = await Contract.newFrom({ path: "./hello_world.sol" });\nconst liveContract = await session.upload(helloWorldContract, {\n    _contract: {gas: 100000}, \n    _file: {fileMemo: "Hello Strato"}\n});\n\nconsole.log(await liveContract.greet());\n')),(0,i.kt)("h4",{id:"constructor-parameters"},"Constructor parameters"),(0,i.kt)("p",null,"Passing in constructor parameters is easy, just add them when ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiSession.upload"),"-ing like so: ",(0,i.kt)("inlineCode",{parentName:"p"},"session.upload(contract, arg1, arg2, ... argn)"),". If you're going to have meta-arguments (see above) as well as constructor-args passed in, add the meta-args object first and then add whatever constructor arguments are desired."),(0,i.kt)("p",null,"Example: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"live=true containerKey=contructor_parameters",live:"true",containerKey:"contructor_parameters"},'const code = `// SPDX-License-Identifier: MIT\npragma solidity ^0.8.9;\n\ncontract MessageHolder {\n    string public message;\n\n    constructor(string memory _message) payable {\n        message = _message;\n    }\n}`;\nconst { session } = await ApiSession.default();\nconst contract = await Contract.newFrom({ code });\nconst liveContract = await session.upload(contract , {_contract: {gas: 100000}}, \n    "Strato is amazing!"\n);\n\nconsole.log(await liveContract.message());\n')),(0,i.kt)("p",null,"This uploads a ",(0,i.kt)("inlineCode",{parentName:"p"},"contract")," with a ",(0,i.kt)("inlineCode",{parentName:"p"},"gas")," create-contract transaction set to 100000\u210f and calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"contract"),"'s constructor passing in the string ",(0,i.kt)("inlineCode",{parentName:"p"},"Strato is amazing!"),"."),(0,i.kt)("h3",{id:"interacting-with-deployed-contracts"},"Interacting with deployed contracts"),(0,i.kt)("h4",{id:"calling-methods"},"Calling methods"),(0,i.kt)("p",null,"As you've probably seen so many times now, following a succesfull deployment, ",(0,i.kt)("em",{parentName:"p"},"await"),"-ing a ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiSession.upload")," call returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"LiveContract")," instance which has the solidity's contract functions dinamically attached to it and available for calling. This means that if a contract ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," has a method ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," on it, the resulting ",(0,i.kt)("inlineCode",{parentName:"p"},"LiveContract")," will also have a function ",(0,i.kt)("inlineCode",{parentName:"p"},"foo")," defined on it."),(0,i.kt)("p",null,"So if, for example, we were to upload ",(0,i.kt)("a",{parentName:"p",href:"https://solidity-by-example.org/"},"solidity-by-example"),"'s ",(0,i.kt)("a",{parentName:"p",href:"https://solidity-by-example.org/first-app/"},"First App")," Contract via a ",(0,i.kt)("inlineCode",{parentName:"p"},"session.upload")," call, that will eventually resolve to a ",(0,i.kt)("inlineCode",{parentName:"p"},"LiveContract")," instance which would have a ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),", an ",(0,i.kt)("inlineCode",{parentName:"p"},"inc")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"dec")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buidler-labs/hedera-strato-js/blob/90bc1075892844bc46bf6e3fd191817622ee675d/test/LiveContract.spec.ts#L87"},"defined on it as one might expect"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"live=true containerKey=call_deployed_contract_methods",live:"true",containerKey:"call_deployed_contract_methods"},"const { session } = await ApiSession.default();\nconst contract = await Contract.newFrom({ path: './counter.sol' });\nconst liveContract = await session.upload(contract);\n\nawait liveContract.inc();\nawait liveContract.inc();\nconsole.log(await liveContract.get());\n")),(0,i.kt)("p",null,"Of course, function arguments are also supported so if we have such a live-contract function (",(0,i.kt)("a",{parentName:"p",href:"https://solidity-by-example.org/state-variables/"},"solidity-by-example's State Variable")," code, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buidler-labs/hedera-strato-js/blob/90bc1075892844bc46bf6e3fd191817622ee675d/test/LiveContract.spec.ts#L111"},"for instance"),"), you can call into these methods, passing in the expected values as expected."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"live=true containerKey=function_arguments",live:"true",containerKey:"function_arguments"},"const { session } = await ApiSession.default();\nconst contract = await Contract.newFrom({ path: './state-variables.sol' });\nconst liveContract = await session.upload(contract);\n\nawait liveContract.set(42);\nconsole.log(await liveContract.get());\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When dealing with ",(0,i.kt)("em",{parentName:"p"},"big numbers"),", the library uses the same one used by the Hedera SDK: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MikeMcl/bignumber.js/"},"bignumber.js")," . This is intentional since one of the core design principles of Strato's API is to try to mimic as close as possible Hedera's own SDK return types."))),(0,i.kt)("h4",{id:"dealing-with-events"},"Dealing with events"),(0,i.kt)("p",null,"Contract ",(0,i.kt)("em",{parentName:"p"},"events")," are propagated upwards from ",(0,i.kt)("inlineCode",{parentName:"p"},"LiveContract")," through the ",(0,i.kt)("inlineCode",{parentName:"p"},"EventEmitter"),"-inspired methods. As such one can ",(0,i.kt)("em",{parentName:"p"},"listen")," to an event by simply calling a ",(0,i.kt)("inlineCode",{parentName:"p"},'.onEvent("event_name", () => { ... })')," on the live-contract instance. Our test cases include ",(0,i.kt)("a",{parentName:"p",href:"https://solidity-by-example.org/events/"},"solidity-by-example's Events code")," to make sure this works. ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buidler-labs/hedera-strato-js/blob/12300217a7d19abb5edc118e01295fdb18774d85/test/LiveContract.spec.ts#L210"},"Have a look for yourself"),", if interested, or check it out right now:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"live=true containerKey=dealing_with_events",live:"true",containerKey:"dealing_with_events"},"const { session } = await ApiSession.default();\nconst contract = await Contract.newFrom({ path: './events.sol' });\nconst liveContract = await session.upload(contract);\n\nliveContract.onEvent(\"Log\", ({ sender, message }) => {\n    console.log(`Log event received: ${message}`);\n});\n\nawait liveContract.test();\n")),(0,i.kt)("h4",{id:"transaction-meta-arguments-1"},"Transaction meta-arguments"),(0,i.kt)("p",null,"Similar to when uploading a ",(0,i.kt)("em",{parentName:"p"},"Smart Contract"),", calling any of its methods follows the same meta-arguments passing logic: if the first argument is a JS object which has certain properties of interest, those properties are unpacked and used inside the transaction. One such property is the ",(0,i.kt)("inlineCode",{parentName:"p"},"maxQueryPayment")," which makes for a good example: lets say that we would like to set a maximum query payment of 0.001\u210f for calling the ",(0,i.kt)("a",{parentName:"p",href:"https://solidity-by-example.org/state-variables/"},"solidity-by-example's State Variable > get method"),". In this case, you would simply do a ",(0,i.kt)("inlineCode",{parentName:"p"},"liveContract.get({maxQueryPayment: 100000})")," and it would suffice."),(0,i.kt)("p",null,'Of course, similar to the "upload contract operation" detailed above, any argument following the the meta-arguments object would be passed to the method itself. In this regards, using the same ',(0,i.kt)("em",{parentName:"p"},"State Variable")," contract, doing a ",(0,i.kt)("inlineCode",{parentName:"p"},"liveContract.set({maxTransactionFee: 100000}, 42)")," would call the ",(0,i.kt)("inlineCode",{parentName:"p"},"set")," method passing in integer ",(0,i.kt)("inlineCode",{parentName:"p"},"42")," as parameter and setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"maxTransactionFee")," for the transaction to 100000 which is 0.001\u210f."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"live=true containerKey=transaction_meta_arguments",live:"true",containerKey:"transaction_meta_arguments"},"const { session } = await ApiSession.default();\nconst contract = await Contract.newFrom({ path: './state-variables.sol' });\nconst liveContract = await session.upload(contract);\n\nawait liveContract.set({maxTransactionFee: 100000}, \n    42\n);\nconsole.log(await liveContract.get());\n")),(0,i.kt)("h3",{id:"retrieving-deployed-contracts"},"Retrieving deployed contracts"),(0,i.kt)("p",null,"Uploading a ",(0,i.kt)("inlineCode",{parentName:"p"},"Contract")," is not the only way to get a hold on a deployed, ",(0,i.kt)("inlineCode",{parentName:"p"},"LiveContract")," instance. ",(0,i.kt)("inlineCode",{parentName:"p"},"ApiSession")," also exposes a ",(0,i.kt)("inlineCode",{parentName:"p"},"getLiveContract")," method which takes in a ",(0,i.kt)("inlineCode",{parentName:"p"},"ContractId")," as it's ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," object param and the contract's ABI as its ",(0,i.kt)("inlineCode",{parentName:"p"},"abi")," parameter to lock onto a deployed version of that code on the network. "),(0,i.kt)("p",null,"Want to find out more? ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/buidler-labs/hedera-strato-js/blob/90bc1075892844bc46bf6e3fd191817622ee675d/test/LiveContract.spec.ts#L31"},"Have a look at our test-case")," for an example on how one might go about doing just that or check it out yourself with a pre-uploaded testnet ",(0,i.kt)("a",{parentName:"p",href:"https://solidity-by-example.org/state-variables/"},(0,i.kt)("inlineCode",{parentName:"a"},"SimpleStorage")," contract")," just for the sake of example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"live=true containerKey=retreive_deployed_contracts",live:"true",containerKey:"retreive_deployed_contracts"},"const { session } = await ApiSession.default();\nconst liveContract = await session.getLiveContract({ \n    id: '0.0.30771282', \n    abi: [ \n        'function get() view returns (uint256)',\n        'function num() view returns (uint256)',\n        'function set(uint256 _num)' \n    ] \n});\nconst bigNumberGetResult = await liveContract.get();\n\nconsole.log(bigNumberGetResult.toNumber());\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"abi")," type required for the ",(0,i.kt)("inlineCode",{parentName:"p"},"getLiveContract")," property can be a ",(0,i.kt)("inlineCode",{parentName:"p"},"ethers")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Interface")," object or anything that ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ethers.io/v5/api/utils/abi/interface/#Interface--creating"},"can be parsed into one"),". For our above example we used a more human readable approach."))))}m.isMDXComponent=!0}}]);