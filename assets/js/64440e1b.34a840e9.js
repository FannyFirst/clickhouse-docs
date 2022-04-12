"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[97121],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return p}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=u(r),p=o,m=g["".concat(l,".").concat(p)]||g[p]||f[p]||a;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},16678:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return f}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={sidebar_position:250},l="categoricalInformationValue",u={unversionedId:"zh/sql-reference/aggregate-functions/reference/categoricalinformationvalue",id:"zh/sql-reference/aggregate-functions/reference/categoricalinformationvalue",title:"categoricalInformationValue",description:"categoricalinformationvalue}",source:"@site/docs/zh/sql-reference/aggregate-functions/reference/categoricalinformationvalue.md",sourceDirName:"zh/sql-reference/aggregate-functions/reference",slug:"/zh/sql-reference/aggregate-functions/reference/categoricalinformationvalue",permalink:"/zh/sql-reference/aggregate-functions/reference/categoricalinformationvalue",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/sql-reference/aggregate-functions/reference/categoricalinformationvalue.md",tags:[],version:"current",sidebarPosition:250,frontMatter:{sidebar_position:250},sidebar:"chinese",previous:{title:"stochasticLogisticRegression",permalink:"/zh/sql-reference/aggregate-functions/reference/stochasticlogisticregression"},next:{title:"studentTTest",permalink:"/zh/sql-reference/aggregate-functions/reference/studentttest"}},s={},f=[],g={toc:f};function p(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"categoricalinformationvalue"},"categoricalInformationValue"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u6bcf\u4e2a\u7c7b\u522b\u8ba1\u7b97 ",(0,a.kt)("inlineCode",{parentName:"p"},"(P(tag = 1) - P(tag = 0))(log(P(tag = 1)) - log(P(tag = 0)))")," \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"categoricalInformationValue(category1, category2, ..., tag)\n")),(0,a.kt)("p",null,"\u7ed3\u679c\u6307\u793a\u79bb\u6563\uff08\u5206\u7c7b\uff09\u8981\u7d20\u5982\u4f55\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"[category1, category2, ...]")," \u6709\u52a9\u4e8e\u4f7f\u7528\u5b66\u4e60\u6a21\u578b\u9884\u6d4b",(0,a.kt)("inlineCode",{parentName:"p"},"tag"),"\u7684\u503c\u3002"))}p.isMDXComponent=!0}}]);