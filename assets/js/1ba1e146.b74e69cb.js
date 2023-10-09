"use strict";(self.webpackChunkcitrus_docs=self.webpackChunkcitrus_docs||[]).push([[18],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,g=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return n?r.createElement(g,c(c({ref:t},d),{},{components:n})):r.createElement(g,c({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8381:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:4,slug:"/governance"},c="Governance",i={unversionedId:"governance",id:"governance",title:"Governance",description:"Citrus Finance is a decentralized protocol that is governed by CTRS holders. Votes are performated on Snapshot and handled on chain by the Authority contract.",source:"@site/docs/governance.md",sourceDirName:".",slug:"/governance",permalink:"/docs/governance",draft:!1,editUrl:"https://github.com/citrus-finance/citrus-docs/tree/main/packages/create-docusaurus/templates/shared/docs/governance.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/governance"},sidebar:"tutorialSidebar",previous:{title:"Tokenomics",permalink:"/docs/tokenomics"},next:{title:"Fund raising",permalink:"/docs/fund-raising"}},s={},l=[{value:"Islanded governance",id:"islanded-governance",level:2},{value:"Connected governance",id:"connected-governance",level:2}],d={toc:l};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"governance"},"Governance"),(0,o.kt)("p",null,"Citrus Finance is a decentralized protocol that is governed by CTRS holders. Votes are performated on Snapshot and handled on chain by the Authority contract."),(0,o.kt)("p",null,"The Authority contract role is to forward vote from Snapshot to the destination chain. Because anybody can deploy Citrus protocol on any chains and AMBs might not be present and configured differently, we cannot let the Authority be setup by anyone. By default the Authority is controlled by a deterministic multisig, which can forward transactions to the Authority or setup AMBs."),(0,o.kt)("h2",{id:"islanded-governance"},"Islanded governance"),(0,o.kt)("p",null,"This is the default state when the protocol is deployed, only a multisig is capabal of performing actions."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Citrus ecosystem",src:n(6930).Z,width:"2080",height:"1880"})),(0,o.kt)("h2",{id:"connected-governance"},"Connected governance"),(0,o.kt)("p",null,"The multisig can setup AMB so that connection betwen chains is possible"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Citrus ecosystem",src:n(1636).Z,width:"4400",height:"1999"})))}u.isMDXComponent=!0},1636:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/connected-governance-08b01651fa31d6357e280aaadd5e41ee.png"},6930:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/islanded-governance-58f70e8eb48d31b07812019896901223.png"}}]);