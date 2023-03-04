"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(3117),r=(n(7294),n(3905));const i={sidebar_position:1},s="Getting Started",o={unversionedId:"intro",id:"intro",title:"Getting Started",description:"SpaRTaNS is a software package for solving the linearized steady state Boltzmann Transport Equation with spatial and state resolution.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/spartans-website/docs/intro",draft:!1,editUrl:"https://github.com/narang-lab/spartans/edit/main/website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Installation Instructions",permalink:"/spartans-website/docs/installation"}},l={},p=[{value:"Useful Links",id:"useful-links",level:2},{value:"Developers and Maintainers",id:"developers-and-maintainers",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"SpaRTaNS is a software package for solving the linearized steady state ",(0,r.kt)("a",{parentName:"p",href:"/spartans-website/docs/formalism/boltzmann-transport-theory"},"Boltzmann Transport Equation")," with spatial and state resolution.\nSpaRTaNS can be run on anything from a laptop to high-performance computing systems, and provides a flexible API for specifying custom boundary conditions, collision operators, geometries, state spaces, and more."),(0,r.kt)("p",null,"SpaRTaNS was designed with use cases in condensed matter physics and materials science in mind, which informs the language in these pages, but it should generalize to other domains (e.g. radiative transfer) without issue."),(0,r.kt)("h2",{id:"useful-links"},"Useful Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SpaRTaNS homepage: ",(0,r.kt)("a",{parentName:"li",href:"https://gvarnavides.com/spartans-website/"},"https://gvarnavides.com/spartans-website/")),(0,r.kt)("li",{parentName:"ul"},"SpaRTaNS documentation: ",(0,r.kt)("a",{parentName:"li",href:"https://gvarnavides.com/spartans-website/docs/intro"},"https://gvarnavides.com/spartans-website/docs/intro")),(0,r.kt)("li",{parentName:"ul"},"Code repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gvarnavi/spartans-website"},"https://github.com/gvarnavi/spartans-website"))),(0,r.kt)("h2",{id:"developers-and-maintainers"},"Developers and Maintainers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gvarnavides.com/"},"Georgios Varnavides")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://adamjermyn.com/"},"Adam S Jermyn")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://naranglab.ucla.edu/"},"Prineha Narang"))))}d.isMDXComponent=!0}}]);