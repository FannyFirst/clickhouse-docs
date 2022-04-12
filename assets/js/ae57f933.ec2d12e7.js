"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[76706],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46233:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),s=["components"],l={},o="data_skipping_indices",p={unversionedId:"en/operations/system-tables/data_skipping_indices",id:"en/operations/system-tables/data_skipping_indices",title:"data_skipping_indices",description:"system-data-skipping-indices}",source:"@site/docs/en/operations/system-tables/data_skipping_indices.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/data_skipping_indices",permalink:"/en/operations/system-tables/data_skipping_indices",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/operations/system-tables/data_skipping_indices.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"current_roles",permalink:"/en/operations/system-tables/current-roles"},next:{title:"data_type_families",permalink:"/en/operations/system-tables/data_type_families"}},c={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system-data-skipping-indices"},"data_skipping_indices"),(0,i.kt)("p",null,"Contains information about existing data skipping indices in all the tables."),(0,i.kt)("p",null,"Columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"database")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Database name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Table name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Index name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Index type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expr")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Expression for the index calculation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"granularity")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The number of granules in the block."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data_compressed_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The size of compressed data, in bytes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"data_uncompressed_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The size of decompressed data, in bytes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"marks_bytes")," (",(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 The size of marks, in bytes.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.data_skipping_indices LIMIT 2 FORMAT Vertical;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:    default\ntable:       user_actions\nname:        clicks_idx\ntype:        minmax\nexpr:        clicks\ngranularity: 1\ndata_compressed_bytes:   58\ndata_uncompressed_bytes: 6\nmarks:                   48\n\nRow 2:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:    default\ntable:       users\nname:        contacts_null_idx\ntype:        minmax\nexpr:        assumeNotNull(contacts_null)\ngranularity: 1\ndata_compressed_bytes:   58\ndata_uncompressed_bytes: 6\nmarks:                   48\n")))}d.isMDXComponent=!0}}]);