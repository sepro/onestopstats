"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[726],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2093:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const o={sidebar_position:3},r="Principal Component Analysis (PCA)",s={unversionedId:"dimensionality_reduction/principal-component-analysis",id:"dimensionality_reduction/principal-component-analysis",title:"Principal Component Analysis (PCA)",description:"PCA, or Principal Component Analysis, is a statistical technique used to reduce the dimensionality of a dataset with many variables, while retaining as much of the original variation in the data as possible.",source:"@site/docs/dimensionality_reduction/principal-component-analysis.md",sourceDirName:"dimensionality_reduction",slug:"/dimensionality_reduction/principal-component-analysis",permalink:"/onestopstats/docs/dimensionality_reduction/principal-component-analysis",draft:!1,editUrl:"https://github.com/sepro/onestopstats/blob/main/docs/dimensionality_reduction/principal-component-analysis.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Dimensionality Reduction",permalink:"/onestopstats/docs/category/dimensionality-reduction"},next:{title:"Principle Coordinate Analysis (PCoA)",permalink:"/onestopstats/docs/dimensionality_reduction/principal-coordinate-analysis"}},l={},p=[{value:"Use Cases",id:"use-cases",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Potential Issues",id:"potential-issues",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"principal-component-analysis-pca"},"Principal Component Analysis (PCA)"),(0,i.kt)("p",null,"PCA, or Principal Component Analysis, is a statistical technique used to reduce the dimensionality of a dataset with many variables, while retaining as much of the original variation in the data as possible. "),(0,i.kt)("h2",{id:"use-cases"},"Use Cases"),(0,i.kt)("p",null,'Let\'s say we have a dataset of customer purchases at a grocery store, with variables such as number of apples, bananas, oranges, milk cartons, etc. PCA can help us identify which combinations of these variables are most important in explaining the variation in the data. We may find that most of the variation in the data can be explained by a combination of "fruit purchases" and "dairy purchases", and we can reduce the dimensionality of the data by only using these two "principal components". '),(0,i.kt)("h2",{id:"assumptions"},"Assumptions"),(0,i.kt)("p",null,"PCA makes several assumptions about the data, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Linearity: PCA assumes that the relationships between variables are linear. If the relationships are non-linear, PCA may not work well.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Normality: PCA assumes that the variables in the dataset are normally distributed. If the variables are not normally distributed, PCA may not be appropriate.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Independence: PCA assumes that the variables in the dataset are independent of each other. If there are strong correlations between variables, the results of PCA may be biased."))),(0,i.kt)("h2",{id:"potential-issues"},"Potential Issues"),(0,i.kt)("p",null,"When using PCA, it's important to be aware of these assumptions and check whether they are violated in the data. Additionally, there are some practical considerations to keep in mind:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Scaling: PCA is sensitive to the scaling of the variables. It's important to standardize the variables before running PCA to ensure that each variable has equal weight.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Number of components: PCA can produce as many principal components as there are variables in the dataset, but it's important to consider how many components are needed to capture most of the variation in the data. Choosing too few components may lead to loss of important information, while choosing too many components may result in overfitting.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Interpretation: While PCA can help identify patterns and relationships in the data, it can be difficult to interpret the meaning of the principal components. It's important to carefully examine the loadings of each component to understand which variables are most strongly associated with each component.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Outliers: PCA can be sensitive to outliers in the data. It's important to examine the data for outliers and consider whether they should be removed or handled in some other way.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Data quality: PCA assumes that the data is of good quality and free of errors. It's important to carefully clean and prepare the data before running PCA to ensure accurate results."))),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Overall, while PCA can be a powerful tool for dimensionality reduction and data analysis, it's important to be aware of its assumptions and limitations, and carefully evaluate the results to ensure they are appropriate for the specific dataset and research question at hand."))}d.isMDXComponent=!0}}]);