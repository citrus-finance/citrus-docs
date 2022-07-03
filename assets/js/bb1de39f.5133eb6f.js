"use strict";(self.webpackChunkcitrus_docs=self.webpackChunkcitrus_docs||[]).push([[296],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,b=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return r?n.createElement(b,i(i({ref:t},d),{},{components:r})):n.createElement(b,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4015:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:3},i="Staking",s={unversionedId:"products/staking",id:"products/staking",title:"Staking",description:"You can stake your Franchise tokens against a lending pool. You will collect fees from this pool but your staked tokens can be seized to cover bad debts. To prevent users from withdrawing their staked tokens before a bad debt is cleared, users can only withdraw their staked tokens after initialising 7 days earlier, dividends can be collected at any time.",source:"@site/docs/products/staking.md",sourceDirName:"products",slug:"/products/staking",permalink:"/docs/products/staking",draft:!1,editUrl:"https://github.com/citrus-finance/citrus-docs/tree/main/packages/create-docusaurus/templates/shared/docs/products/staking.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Lending",permalink:"/docs/products/lending"},next:{title:"Dollar Cost Averaging",permalink:"/docs/products/dca"}},c={},l=[],d={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"staking"},"Staking"),(0,o.kt)("p",null,"You can stake your Franchise tokens against a lending pool. You will collect fees from this pool but your staked tokens can be seized to cover bad debts. To prevent users from withdrawing their staked tokens before a bad debt is cleared, users can only withdraw their staked tokens after initialising 7 days earlier, dividends can be collected at any time."),(0,o.kt)("p",null,"Upon receiving fees collected from each markets of the pool, the staking contract will try to exchange those tokens to the franchise token for the users to then claim. (Similar to Sushi Bar)."),(0,o.kt)("p",null,"For the first iteration, user won't have the choice of dividend tokens, but the plan is for users to select which tokens they want as dividends."))}u.isMDXComponent=!0}}]);