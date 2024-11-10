"use strict";(self.webpackChunkcitrus_docs=self.webpackChunkcitrus_docs||[]).push([[284],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3557:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:3,title:"Stable"},l="Stable",s={unversionedId:"products/stable",id:"products/stable",title:"Stable",description:"The Citrus stablecoin is core to the ecosystem. It will be used to collect fees and distribute earnings. It's an over collaterised dollar-pegged stablecoin backed third-party stablecoins deposited into ERC4626 vaults.",source:"@site/docs/products/stable.md",sourceDirName:"products",slug:"/products/stable",permalink:"/docs/products/stable",draft:!1,editUrl:"https://github.com/citrus-finance/citrus-docs/tree/main/docs/products/stable.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Stable"},sidebar:"tutorialSidebar",previous:{title:"Vault",permalink:"/docs/products/vault"},next:{title:"Dex aggregator",permalink:"/docs/products/dex-aggregator"}},o={},u=[{value:"Status",id:"status",level:3},{value:"Features",id:"features",level:3},{value:"Current",id:"current",level:4},{value:"Roadmap",id:"roadmap",level:4},{value:"Ecosystem Integration",id:"ecosystem-integration",level:3},{value:"Current",id:"current-1",level:4},{value:"Future",id:"future",level:4}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"stable"},"Stable"),(0,n.kt)("p",null,"The Citrus stablecoin is core to the ecosystem. It will be used to collect fees and distribute earnings. It's an over collaterised dollar-pegged stablecoin backed third-party stablecoins deposited into ERC4626 vaults."),(0,n.kt)("p",null,"Whinin the ecosystem, its main goal is to be used to buyback tokens earned as fees from all the products. The reason we had to create our own token is so that we could make Citrus a multi-chain protocol as it will be burned as we earn fees and minted as we distribute earnings."),(0,n.kt)("p",null,"Outside the ecosystem it is a yield bearing stablecoin used to exchange goods and services."),(0,n.kt)("p",null,"Users will be able to mint the stablecoin on chains with highly trusted ERC4626 or swapped using the Citrus DEX when those vaults are not available. Once minted it is transferable to any chains we support."),(0,n.kt)("h3",{id:"status"},"Status"),(0,n.kt)("p",null,"The Stable is still work in progress. In it's first iteration we are going to use third-party ERC4626 vaults. Bridging will be done using LayerZero OFT."),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("h4",{id:"current"},"Current"),(0,n.kt)("p",null,"None"),(0,n.kt)("h4",{id:"roadmap"},"Roadmap"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"User mints Citrus Stable by depositing third-party stablecoins into ERC4626 vaults"),(0,n.kt)("li",{parentName:"ul"},"User bridges Stable to/from supported chains"),(0,n.kt)("li",{parentName:"ul"},"Citrus Governance sets up vault for native minting"),(0,n.kt)("li",{parentName:"ul"},"Citrus Manager changes native minting limits based on risks"),(0,n.kt)("li",{parentName:"ul"},"Citrus Manager sets Stable yield based on yield from Vault"),(0,n.kt)("li",{parentName:"ul"},"Citrus Governance sets up incentivised DEX pools"),(0,n.kt)("li",{parentName:"ul"},"Citrus Manager cancels incentivised DEX pools"),(0,n.kt)("li",{parentName:"ul"},"Citrus Governance allow Lending market to mint Stable"),(0,n.kt)("li",{parentName:"ul"},"User can borrow Stable after depositing collateral")),(0,n.kt)("h3",{id:"ecosystem-integration"},"Ecosystem Integration"),(0,n.kt)("h4",{id:"current-1"},"Current"),(0,n.kt)("p",null,"None"),(0,n.kt)("h4",{id:"future"},"Future"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Vault:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Backs Stable with third-party stablecoins"),(0,n.kt)("li",{parentName:"ul"},"Generate yields for Stable holders"))),(0,n.kt)("li",{parentName:"ul"},"Dex Aggregator:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Allow swap between Citrus stablecoin and third-party stablecoins"))),(0,n.kt)("li",{parentName:"ul"},"DEX:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Liquidity on chains with no native minting"))),(0,n.kt)("li",{parentName:"ul"},"Lending:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Stable can be borrowed by users")))))}d.isMDXComponent=!0}}]);