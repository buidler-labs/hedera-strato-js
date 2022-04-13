"use strict";(self.webpackChunk_buidlerlabs_hedera_strato_js=self.webpackChunk_buidlerlabs_hedera_strato_js||[]).push([[758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=["components"],l={id:"file",title:"File"},s=void 0,d={unversionedId:"markdown/guides/entities/file",id:"markdown/guides/entities/file",title:"File",description:"Why?",source:"@site/markdown/guides/entities/file.md",sourceDirName:"markdown/guides/entities",slug:"/markdown/guides/entities/file",permalink:"/markdown/guides/entities/file",editUrl:"https://github.com/buidler-labs/hedera-strato-js/edit/main/lib.docs/markdown/guides/entities/file.md",tags:[],version:"current",lastUpdatedBy:"Victor ADASCALITEI",lastUpdatedAt:1649703653,formattedLastUpdatedAt:"4/11/2022",frontMatter:{id:"file",title:"File"},sidebar:"docs",previous:{title:"Contract",permalink:"/markdown/guides/entities/contract"},next:{title:"Json",permalink:"/markdown/guides/entities/json"}},p={},c=[{value:"Why?",id:"why",level:3},{value:"Storing some text in a file",id:"storing-some-text-in-a-file",level:3},{value:"Retrieving a file from the network",id:"retrieving-a-file-from-the-network",level:3},{value:"Deleting an online file",id:"deleting-an-online-file",level:3},{value:"Updating a file object",id:"updating-a-file-object",level:3}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"why"},"Why?"),(0,r.kt)("p",null,"Strato can store generic-content files using Hedera's File Service. This can be anything: from ascii text to binary files. Anything you want to store and are willing to pay Hedera's storage fee, the network will host it."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"LiveFile")," is the basis of ",(0,r.kt)("a",{parentName:"p",href:"/markdown/guides/entities/json"},(0,r.kt)("inlineCode",{parentName:"a"},"LiveJson"))," which is another type of file-content stored on Hedera, one dealing with structured JSON data."))),(0,r.kt)("h3",{id:"storing-some-text-in-a-file"},"Storing some text in a file"),(0,r.kt)("p",null,"An ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiSession")," with this via it's ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiSession.upload")," method like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"live=true containerKey=store_a_file",live:"true",containerKey:"store_a_file"},'const { session } = await ApiSession.default();\nconst liveFile = await session.upload(new File("Strato is easy-peasy!"));\n\nconsole.log(`File is stored at ${liveFile.id}`);\nconsole.log(`The live file content is: ${liveFile.data}`);\n')),(0,r.kt)("p",null,"If you don't like the verbose ",(0,r.kt)("inlineCode",{parentName:"p"},"new File(...)")," notation, you can also go for the short-hand equivalent of just providing the string itself to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiSession.upload")," method like so: ",(0,r.kt)("inlineCode",{parentName:"p"},'ApiSession.upload("Strato is easy-peasy!")'),". These 2 means are equivalent. Of course, you can do the same for the other ",(0,r.kt)("inlineCode",{parentName:"p"},"Uint8Array")," argument type. "),(0,r.kt)("p",null,"If you need to tweak the underlying file-transaction options when storing the content, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"upload"),"s meta-arguments. For instance, if you want to add a memo, just pass it a ",(0,r.kt)("inlineCode",{parentName:"p"},'{ _file: { memo: "true facts" } }')," when ",(0,r.kt)("inlineCode",{parentName:"p"},"upload"),"ing, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const { session } = await ApiSession.default();\nconst liveFile = await session.upload("Strato is easy-peasy-er!", { _file: { memo: "true facts" } });\n\n//...\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"_file")," property is needed when ",(0,r.kt)("inlineCode",{parentName:"p"},"upload"),"ing a file to distinguish it from ",(0,r.kt)("inlineCode",{parentName:"p"},"upload"),"ing contract meta-arguments which also allow for fine-tweaking the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.hedera.com/guides/docs/sdks/smart-contracts/create-a-smart-contract"},(0,r.kt)("inlineCode",{parentName:"a"},"ContractCreateTransaction")," call")," parameters through their own ",(0,r.kt)("inlineCode",{parentName:"p"},"_contract")," property object."))),(0,r.kt)("p",null,"Besides setting a ",(0,r.kt)("inlineCode",{parentName:"p"},"memo")," you can pick and use any other fields that ",(0,r.kt)("a",{parentName:"p",href:"https://docs.hedera.com/guides/docs/sdks/file-storage/create-a-file"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},"FileCreateTransaction")," supports"),"."),(0,r.kt)("h3",{id:"retrieving-a-file-from-the-network"},"Retrieving a file from the network"),(0,r.kt)("p",null,"Although there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiSession.getLiveJson")," equivalent method available to retrieve a ",(0,r.kt)("inlineCode",{parentName:"p"},"LiveFile")," from Hedera (this will be supported ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/buidler-labs/hedera-strato-js/issues/58"},"once #58 gets implemented"),"), we do provide a workaround:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"having a ",(0,r.kt)("inlineCode",{parentName:"li"},"FileId")," at hand, manually create a ",(0,r.kt)("inlineCode",{parentName:"li"},"LiveFile")," via its constructor binding it to a working ",(0,r.kt)("inlineCode",{parentName:"li"},"ApiSession")),(0,r.kt)("li",{parentName:"ul"},"call ",(0,r.kt)("inlineCode",{parentName:"li"},"LiveFile.getContents()")," to retrieve it's raw ",(0,r.kt)("inlineCode",{parentName:"li"},"Uint8Array")," content")),(0,r.kt)("h3",{id:"deleting-an-online-file"},"Deleting an online file"),(0,r.kt)("p",null,"To delete a deployed ",(0,r.kt)("inlineCode",{parentName:"p"},"File"),", you have to have the wallet ",(0,r.kt)("inlineCode",{parentName:"p"},"ApiSession")," owner be the owner of the ",(0,r.kt)("inlineCode",{parentName:"p"},"LiveFile")," and then do a ",(0,r.kt)("inlineCode",{parentName:"p"},"LiveFile.deleteEntity()")," call."),(0,r.kt)("h3",{id:"updating-a-file-object"},"Updating a file object"),(0,r.kt)("p",null,"Updating is easy, just call ",(0,r.kt)("inlineCode",{parentName:"p"},"LiveFile.updateEntity(FileFeatures)")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"FileFeatures")," is an object type defined as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export type FileFeatures = {\n  keys?: KeyList | Key[],\n  expirationTime?: Date,\n  contents?: string | Uint8Array,\n  fileMemo?: string,\n}\n")),(0,r.kt)("p",null,"If you're familiar with Hedera's SDK documentation, this are basically ",(0,r.kt)("a",{parentName:"p",href:"https://docs.hedera.com/guides/docs/sdks/file-storage/update-a-file"},"the available SDK options for updating a file")," on HCS."))}u.isMDXComponent=!0}}]);