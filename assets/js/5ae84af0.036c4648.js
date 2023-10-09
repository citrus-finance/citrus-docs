"use strict";(self.webpackChunkcitrus_docs=self.webpackChunkcitrus_docs||[]).push([[536],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>p});var l=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=l.createContext({}),s=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=s(t.components);return l.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,k=o(t,["components","mdxType","originalType","parentName"]),c=s(n),p=r,m=c["".concat(u,".").concat(p)]||c[p]||d[p]||a;return n?l.createElement(m,i(i({ref:e},k),{},{components:n})):l.createElement(m,i({ref:e},k))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9094:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var l=n(7462),r=(n(7294),n(3905));const a={sidebar_position:3,slug:"/tokenomics"},i="Tokenomics",o={unversionedId:"tokenomics",id:"tokenomics",title:"Tokenomics",description:"Token details",source:"@site/docs/tokenomics.md",sourceDirName:".",slug:"/tokenomics",permalink:"/docs/tokenomics",draft:!1,editUrl:"https://github.com/citrus-finance/citrus-docs/tree/main/packages/create-docusaurus/templates/shared/docs/tokenomics.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,slug:"/tokenomics"},sidebar:"tutorialSidebar",previous:{title:"Vaults",permalink:"/docs/products/vaults"},next:{title:"Governance",permalink:"/docs/governance"}},u={},s=[{value:"Token details",id:"token-details",level:2},{value:"Initial distribution",id:"initial-distribution",level:2},{value:"Treasury",id:"treasury",level:2},{value:"Stablecoins",id:"stablecoins",level:4},{value:"Blue chip tokens",id:"blue-chip-tokens",level:4},{value:"Other tokens",id:"other-tokens",level:4},{value:"Sink and Faucet",id:"sink-and-faucet",level:2},{value:"Sink",id:"sink",level:3},{value:"Faucet",id:"faucet",level:3}],k={toc:s};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tokenomics"},"Tokenomics"),(0,r.kt)("h2",{id:"token-details"},"Token details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name: Citrus"),(0,r.kt)("li",{parentName:"ul"},"Symbol: CTRS"),(0,r.kt)("li",{parentName:"ul"},"Decimals: 18"),(0,r.kt)("li",{parentName:"ul"},"Fully diluted supply: 10,000,000 CTRS"),(0,r.kt)("li",{parentName:"ul"},"Chains: Gnosis chain, Base, Optimism, Arbitrum, BSC, Polygon and more soon")),(0,r.kt)("h2",{id:"initial-distribution"},"Initial distribution"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Who"),(0,r.kt)("th",{parentName:"tr",align:null},"Percentage"),(0,r.kt)("th",{parentName:"tr",align:null},"Vesting"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Devs"),(0,r.kt)("td",{parentName:"tr",align:null},"20%"),(0,r.kt)("td",{parentName:"tr",align:null},"linearly over 4 years with full voting power")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Seed"),(0,r.kt)("td",{parentName:"tr",align:null},"10%"),(0,r.kt)("td",{parentName:"tr",align:null},"first $1000 per investor not vested, rest linearly over 4 years with full voting power")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Advisors"),(0,r.kt)("td",{parentName:"tr",align:null},"1%"),(0,r.kt)("td",{parentName:"tr",align:null},"linearly over 4 years with full voting power")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Airdrop"),(0,r.kt)("td",{parentName:"tr",align:null},"10% ",(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"COMP"),(0,r.kt)("td",null,"4%")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"RGT"),(0,r.kt)("td",null,"2%")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"UMA"),(0,r.kt)("td",null,"2%")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Midas protocol"),(0,r.kt)("td",null,"1%")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"DefiLlama"),(0,r.kt)("td",null,"1%")))),(0,r.kt)("td",{parentName:"tr",align:null},"no vesting")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Users"),(0,r.kt)("td",{parentName:"tr",align:null},"45%"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"year 1"),(0,r.kt)("td",null,"14.5%")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"year 2"),(0,r.kt)("td",null,"7.3%")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"year 3 -> 8"),(0,r.kt)("td",null,"3.6%"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Referrals"),(0,r.kt)("td",{parentName:"tr",align:null},"5%"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"year 1"),(0,r.kt)("td",null,"1.6%")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"year 2"),(0,r.kt)("td",null,"0.8%")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"year 3 -> 8"),(0,r.kt)("td",null,"0.4%"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Treasury"),(0,r.kt)("td",{parentName:"tr",align:null},"9%"),(0,r.kt)("td",{parentName:"tr",align:null},"TBD by token holders")))),(0,r.kt)("h2",{id:"treasury"},"Treasury"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This section can be updated following a vote.")),(0,r.kt)("p",null,"We collect fees from our various products. Those fees can be categorised into three type of assets and how they will be used"),(0,r.kt)("h4",{id:"stablecoins"},"Stablecoins"),(0,r.kt)("p",null,"usage:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"50% to Immunefi vault for security, up to 10% of TLV"),(0,r.kt)("li",{parentName:"ul"},"25% for operational expenses, up to $240.000/y, then 10% after"),(0,r.kt)("li",{parentName:"ul"},"Up to $6.000/y for infrastructure"),(0,r.kt)("li",{parentName:"ul"},"Remaing left in treasury up to $1M, then to buyback $CTRS")),(0,r.kt)("h4",{id:"blue-chip-tokens"},"Blue chip tokens"),(0,r.kt)("p",null,"Blue chip tokens:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ETH")),(0,r.kt)("p",null,"usage:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"50% to buyback $CTRS"),(0,r.kt)("li",{parentName:"ul"},"50% deposited into yield generating protocol")),(0,r.kt)("h4",{id:"other-tokens"},"Other tokens"),(0,r.kt)("p",null,"usage:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"100% to buyback $CTRS")),(0,r.kt)("h2",{id:"sink-and-faucet"},"Sink and Faucet"),(0,r.kt)("p",null,"Because our plan is to support as many chains as possible, managing the buyback and redistribution of CTRS ourself would be inneficient. We decided to go with a Sink and Faucet solution. This will allow use to collect fees and allow user to stake their CTRS on every chains"),(0,r.kt)("h3",{id:"sink"},"Sink"),(0,r.kt)("p",null,"Every CTRS we buyback following the plan above are going to get burned. They are going to be removed from the circulation on each chain but we are going to keep track of every burned CTRS."),(0,r.kt)("h3",{id:"faucet"},"Faucet"),(0,r.kt)("p",null,"Every CTRS we buyback and burn, will be re-emited to CTRS stakers. Every quarter, we calculate the total number of burned CTRS and calculate a staking rate."),(0,r.kt)("p",null,"APR = (total CTRS burned - total CTRS re-emited) x 400 / (circulating supply at end of quarter)"))}d.isMDXComponent=!0}}]);