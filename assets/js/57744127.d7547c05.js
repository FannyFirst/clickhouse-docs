"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[99627],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),f=s(n),p=i,m=f["".concat(l,".").concat(p)]||f[p]||d[p]||a;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13187:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),c=["components"],o={machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:40,sidebar_label:"\u914d\u7f6e\u5916\u90e8\u5b57\u5178"},l="\u914d\u7f6e\u5916\u90e8\u5b57\u5178",s={unversionedId:"zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",id:"zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",title:"\u914d\u7f6e\u5916\u90e8\u5b57\u5178",description:"dicts-external-dicts-dict}",source:"@site/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict.md",sourceDirName:"zh/sql-reference/dictionaries/external-dictionaries",slug:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",permalink:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:40,sidebar_label:"\u914d\u7f6e\u5916\u90e8\u5b57\u5178"},sidebar:"chinese",previous:{title:"\u6982\u8ff0",permalink:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts"},next:{title:"\u5728\u5185\u5b58\u4e2d\u5b58\u50a8\u5b57\u5178",permalink:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"}},u={},d=[],f={toc:d};function p(e){var t=e.components,n=(0,i.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dicts-external-dicts-dict"},"\u914d\u7f6e\u5916\u90e8\u5b57\u5178"),(0,a.kt)("p",null,"\u5982\u679c\u4f7f\u7528xml\u6587\u4ef6\u914d\u7f6e\u5b57\u5178\uff0c\u5219\u6bd4\u5b57\u5178\u914d\u7f6e\u5177\u6709\u4ee5\u4e0b\u7ed3\u6784:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionary>\n    <name>dict_name</name>\n\n    <structure>\n      \x3c!-- Complex key configuration --\x3e\n    </structure>\n\n    <source>\n      \x3c!-- Source configuration --\x3e\n    </source>\n\n    <layout>\n      \x3c!-- Memory layout configuration --\x3e\n    </layout>\n\n    <lifetime>\n      \x3c!-- Lifetime of dictionary in memory --\x3e\n    </lifetime>\n</dictionary>\n")),(0,a.kt)("p",null,"\u76f8\u5e94\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/zh/sql-reference/statements/create#create-dictionary-query"},"DDL-\u67e5\u8be2")," \u5177\u6709\u4ee5\u4e0b\u7ed3\u6784:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DICTIONARY dict_name\n(\n    ... -- attributes\n)\nPRIMARY KEY ... -- complex or single key configuration\nSOURCE(...) -- Source configuration\nLAYOUT(...) -- Memory layout configuration\nLIFETIME(...) -- Lifetime of dictionary in memory\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," \u2013 The identifier that can be used to access the dictionary. Use the characters ",(0,a.kt)("inlineCode",{parentName:"li"},"[a-zA-Z0-9_\\-]"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-sources"},"\u6765\u6e90")," \u2014 Source of the dictionary."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-layout"},"\u5e03\u5c40")," \u2014 Dictionary layout in memory."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"\u7ed3\u6784")," \u2014 Structure of the dictionary . A key and attributes that can be retrieved by this key."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-lifetime"},"\u4f7f\u7528\u5bff\u547d")," \u2014 Frequency of dictionary updates.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/dicts/external_dicts_dict/"},"\u539f\u59cb\u6587\u7ae0")," "))}p.isMDXComponent=!0}}]);