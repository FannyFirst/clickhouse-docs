"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[38105],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=i(r),m=o,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||c;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,s=new Array(c);s[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var i=2;i<c;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},82692:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return p}});var n=r(87462),o=r(63366),c=(r(67294),r(3905)),s=["components"],a={sidebar_position:52,sidebar_label:"USE"},u="USE",i={unversionedId:"ru/sql-reference/statements/use",id:"ru/sql-reference/statements/use",title:"USE",description:"use}",source:"@site/docs/ru/sql-reference/statements/use.md",sourceDirName:"ru/sql-reference/statements",slug:"/ru/sql-reference/statements/use",permalink:"/ru/sql-reference/statements/use",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/sql-reference/statements/use.md",tags:[],version:"current",sidebarPosition:52,frontMatter:{sidebar_position:52,sidebar_label:"USE"},sidebar:"russia",previous:{title:"TRUNCATE",permalink:"/ru/sql-reference/statements/truncate"},next:{title:"WATCH",permalink:"/ru/sql-reference/statements/watch"}},l={},p=[],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,c.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"use"},"USE"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sql"},"USE db\n")),(0,c.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u0431\u0430\u0437\u0443 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0441\u0435\u0441\u0441\u0438\u0438.\n\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u0442\u0430\u0431\u043b\u0438\u0446, \u0435\u0441\u043b\u0438 \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u0430 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u044f\u0432\u043d\u043e \u0447\u0435\u0440\u0435\u0437 \u0442\u043e\u0447\u043a\u0443 \u043f\u0435\u0440\u0435\u0434 \u0438\u043c\u0435\u043d\u0435\u043c \u0442\u0430\u0431\u043b\u0438\u0446\u044b.\n\u041f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 HTTP \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 \u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d, \u0442\u0430\u043a \u043a\u0430\u043a \u043f\u043e\u043d\u044f\u0442\u0438\u044f \u0441\u0435\u0441\u0441\u0438\u0438 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442."))}m.isMDXComponent=!0}}]);