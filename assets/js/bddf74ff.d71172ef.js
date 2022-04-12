"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[58789],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||l[d]||s;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50904:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],i={},c="system.detached_parts",p={unversionedId:"ru/operations/system-tables/detached_parts",id:"ru/operations/system-tables/detached_parts",title:"system.detached_parts",description:"systemtables-detachedparts}",source:"@site/docs/ru/operations/system-tables/detached_parts.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/detached_parts",permalink:"/ru/operations/system-tables/detached_parts",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/operations/system-tables/detached_parts.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.databases",permalink:"/ru/operations/system-tables/databases"},next:{title:"system.dictionaries",permalink:"/ru/operations/system-tables/dictionaries"}},u={},l=[],m={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"system_tables-detached_parts"},"system.detached_parts"),(0,s.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e\u0431 \u043e\u0442\u0441\u043e\u0435\u0434\u0438\u043d\u0451\u043d\u043d\u044b\u0445 \u043a\u0443\u0441\u043a\u0430\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432\u0430 ",(0,s.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/mergetree-family/mergetree"},"MergeTree"),". \u0421\u0442\u043e\u043b\u0431\u0435\u0446 ",(0,s.kt)("inlineCode",{parentName:"p"},"reason")," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043f\u0440\u0438\u0447\u0438\u043d\u0443, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043a\u0443\u0441\u043e\u043a \u0431\u044b\u043b \u043e\u0442\u0441\u043e\u0435\u0434\u0438\u043d\u0451\u043d. \u0414\u043b\u044f \u043a\u0443\u0441\u043e\u0432, \u043e\u0442\u0441\u043e\u0435\u0434\u0438\u043d\u0451\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c, ",(0,s.kt)("inlineCode",{parentName:"p"},"reason")," \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043f\u0443\u0441\u0442\u0443\u044e \u0441\u0442\u0440\u043e\u043a\u0443.\n\u0422\u0430\u043a\u0438\u0435 \u043a\u0443\u0441\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,s.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/alter/#alter_attach-partition"},"ALTER TABLE ATTACH PARTITION|PART"),". \u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u043e\u043f\u0438\u0441\u0430\u043d\u044b \u0432 ",(0,s.kt)("a",{parentName:"p",href:"#system_tables-parts"},"system.parts"),".\n\u0415\u0441\u043b\u0438 \u0438\u043c\u044f \u043a\u0443\u0441\u043a\u0430 \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e, \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c ",(0,s.kt)("inlineCode",{parentName:"p"},"NULL"),". \u0422\u0430\u043a\u0438\u0435 \u043a\u0443\u0441\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0443\u0434\u0430\u043b\u0435\u043d\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,s.kt)("a",{parentName:"p",href:"/ru/sql-reference/statements/alter/#alter_drop-detached"},"ALTER TABLE DROP DETACHED PART"),"."))}d.isMDXComponent=!0}}]);