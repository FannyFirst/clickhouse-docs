"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[99675],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,y=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(y,s(s({ref:t},c),{},{components:r})):n.createElement(y,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92731:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],l={},i="system.errors",p={unversionedId:"zh/operations/system-tables/errors",id:"zh/operations/system-tables/errors",title:"system.errors",description:"system_tables-errors}",source:"@site/docs/zh/operations/system-tables/errors.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/errors",permalink:"/zh/operations/system-tables/errors",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/operations/system-tables/errors.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"system.enabled_roles",permalink:"/zh/operations/system-tables/enabled-roles"},next:{title:"\u7cfb\u7edf\u3002\u6d3b\u52a8",permalink:"/zh/operations/system-tables/events"}},c={},u=[],m={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"system_tables-errors"},"system.errors"),(0,o.kt)("p",null,"\u5305\u542b\u9519\u8bef\u4ee3\u7801\u548c\u5b83\u4eec\u88ab\u89e6\u53d1\u7684\u6b21\u6570."),(0,o.kt)("p",null,"\u5217\u4fe1\u606f:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"name")," (",(0,o.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/string"},"String"),") \u2014 \u9519\u8bef\u540d\u79f0 (",(0,o.kt)("inlineCode",{parentName:"li"},"errorCodeToName"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"code")," (",(0,o.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/int-uint"},"Int32"),") \u2014 \u9519\u8bef\u7801."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"value")," (",(0,o.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u53d1\u751f\u6b64\u9519\u8bef\u7684\u6b21\u6570."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"last_error_time")," (",(0,o.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/datetime"},"DateTime"),") \u2014 \u4e0a\u4e00\u6b21\u9519\u8bef\u53d1\u751f\u7684\u65f6\u95f4."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"last_error_message")," (",(0,o.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/string"},"String"),") \u2014 \u6700\u540e\u4e00\u4e2a\u9519\u8bef\u7684\u6d88\u606f."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"last_error_trace")," (",(0,o.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/array"},"Array(UInt64)"),") \u2014 \u4e00\u4e2a",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Stack_trace"},"\u5806\u6808\u8ddf\u8e2a"),", \u5b83\u8868\u793a\u5b58\u50a8\u88ab\u8c03\u7528\u65b9\u6cd5\u7684\u7269\u7406\u5730\u5740\u5217\u8868."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"remote")," (",(0,o.kt)("a",{parentName:"li",href:"/zh/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 \u8fdc\u7a0b\u5f02\u5e38(\u5373\u5728\u4e00\u4e2a\u5206\u5e03\u5f0f\u67e5\u8be2\u671f\u95f4\u63a5\u6536\u7684).")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT name, code, value\nFROM system.errors\nWHERE value > 0\nORDER BY code ASC\nLIMIT 1\n\n\u250c\u2500name\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500code\u2500\u252c\u2500value\u2500\u2510\n\u2502 CANNOT_OPEN_FILE \u2502   76 \u2502     1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"WITH arrayMap(x -> demangle(addressToSymbol(x)), last_error_trace) AS all\nSELECT name, arrayStringConcat(all, '\\n') AS res\nFROM system.errors\nLIMIT 1\nSETTINGS allow_introspection_functions=1\\G\n")))}f.isMDXComponent=!0}}]);