"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[602],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>f});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(i),d=n,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return i?r.createElement(f,o(o({ref:t},u),{},{components:i})):r.createElement(f,o({ref:t},u))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<a;l++)o[l]=i[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},710:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=i(7462),n=(i(7294),i(3905));const a={sidebar_position:3},o="UNIFRAC",s={unversionedId:"distance/unifrac",id:"distance/unifrac",title:"UNIFRAC",description:"The UNIFRAC distance is a mathematical measure that is used to compare the diversity of microbial communities. It is a way of comparing the similarity or dissimilarity of different microbial communities based on the presence or absence of specific microbial taxa (species or groups of species), taking their taxonomy into account.",source:"@site/docs/distance/unifrac.md",sourceDirName:"distance",slug:"/distance/unifrac",permalink:"/onestopstats/docs/distance/unifrac",draft:!1,editUrl:"https://github.com/sepro/onestopstats/blob/main/docs/distance/unifrac.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Euclidian distance",permalink:"/onestopstats/docs/distance/euclidean"},next:{title:"Diversity",permalink:"/onestopstats/docs/category/diversity"}},c={},l=[{value:"Use Cases",id:"use-cases",level:2},{value:"Notes",id:"notes",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"unifrac"},"UNIFRAC"),(0,n.kt)("p",null,"The UNIFRAC distance is a mathematical measure that is used to compare the diversity of microbial communities. It is a way of comparing the similarity or dissimilarity of different microbial communities based on the presence or absence of specific microbial taxa (species or groups of species), taking their taxonomy into account."),(0,n.kt)("h2",{id:"use-cases"},"Use Cases"),(0,n.kt)("p",null,"Researchers can use UNIFRAC distance to investigate how microbial communities change in response to environmental factors such as temperature, pH, or nutrient availability. This metric can also be used to compare the microbial communities in healthy and diseased individuals, or to study the effects of different treatments or interventions on microbial diversity."),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"UNIFRAC distance ",(0,n.kt)("strong",{parentName:"li"},"requires a phylogenetic tree")," of the microbial taxa being compared, which can be time-consuming and computationally intensive to generate."),(0,n.kt)("li",{parentName:"ul"},"UNIFRAC distance can be sensitive to the choice of distance metric or clustering algorithm used to generate the phylogenetic tree, which can affect the results of the analysis.")))}m.isMDXComponent=!0}}]);