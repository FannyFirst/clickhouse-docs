"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[62320],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,y=m["".concat(c,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(y,s(s({ref:t},u),{},{components:n})):r.createElement(y,s({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46208:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),s=["components"],i={},c="system.time_zones",l={unversionedId:"zh/operations/system-tables/time_zones",id:"zh/operations/system-tables/time_zones",title:"system.time_zones",description:"system-time_zones}",source:"@site/docs/zh/operations/system-tables/time_zones.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/time_zones",permalink:"/zh/operations/system-tables/time_zones",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/operations/system-tables/time_zones.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u7cfb\u7edf\u3002text_log",permalink:"/zh/operations/system-tables/text_log"},next:{title:"\u7cfb\u7edf\u3002trace_log",permalink:"/zh/operations/system-tables/trace_log"}},u={},p=[],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system-time_zones"},"system.time_zones"),(0,a.kt)("p",null,"\u5305\u542b ClickHouse \u670d\u52a1\u5668\u652f\u6301\u7684\u65f6\u533a\u5217\u8868. \u6b64\u65f6\u533a\u5217\u8868\u53ef\u80fd\u56e0 ClickHouse \u7684\u7248\u672c\u800c\u5f02"),(0,a.kt)("p",null,"\u5217\u4fe1\u606f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"time_zone")," (String) \u2014 List of supported time zones.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.time_zones LIMIT 10\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500time_zone\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Africa/Abidjan     \u2502\n\u2502 Africa/Accra       \u2502\n\u2502 Africa/Addis_Ababa \u2502\n\u2502 Africa/Algiers     \u2502\n\u2502 Africa/Asmara      \u2502\n\u2502 Africa/Asmera      \u2502\n\u2502 Africa/Bamako      \u2502\n\u2502 Africa/Bangui      \u2502\n\u2502 Africa/Banjul      \u2502\n\u2502 Africa/Bissau      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system-tables/time_zones"},"\u539f\u59cb\u6587\u7ae0")," "))}f.isMDXComponent=!0}}]);