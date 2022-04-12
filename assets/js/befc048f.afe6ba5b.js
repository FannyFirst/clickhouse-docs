"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[81355],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),y=p(r),m=n,d=y["".concat(s,".").concat(m)]||y[m]||u[m]||l;return r?a.createElement(d,o(o({ref:t},c),{},{components:r})):a.createElement(d,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},16303:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),o=["components"],i={sidebar_position:52,sidebar_label:"Array(T)"},s="Array(t)",p={unversionedId:"en/sql-reference/data-types/array",id:"en/sql-reference/data-types/array",title:"Array(t)",description:"data-type-array}",source:"@site/docs/en/sql-reference/data-types/array.md",sourceDirName:"en/sql-reference/data-types",slug:"/en/sql-reference/data-types/array",permalink:"/en/sql-reference/data-types/array",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/sql-reference/data-types/array.md",tags:[],version:"current",sidebarPosition:52,frontMatter:{sidebar_position:52,sidebar_label:"Array(T)"},sidebar:"english",previous:{title:"LowCardinality",permalink:"/en/sql-reference/data-types/lowcardinality"},next:{title:"AggregateFunction",permalink:"/en/sql-reference/data-types/aggregatefunction"}},c={},u=[{value:"Creating an Array",id:"creating-an-array",level:2},{value:"Working with Data Types",id:"working-with-data-types",level:2},{value:"Array Size",id:"array-size",level:2}],y={toc:u};function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"data-type-array"},"Array(t)"),(0,l.kt)("p",null,"An array of ",(0,l.kt)("inlineCode",{parentName:"p"},"T"),"-type items, with the starting array index as 1. ",(0,l.kt)("inlineCode",{parentName:"p"},"T")," can be any data type, including an array."),(0,l.kt)("h2",{id:"creating-an-array"},"Creating an Array"),(0,l.kt)("p",null,"You can use a function to create an array:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"array(T)\n")),(0,l.kt)("p",null,"You can also use square brackets."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"[]\n")),(0,l.kt)("p",null,"Example of creating an array:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT array(1, 2) AS x, toTypeName(x)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(array(1, 2))\u2500\u2510\n\u2502 [1,2] \u2502 Array(UInt8)            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT [1, 2] AS x, toTypeName(x)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName([1, 2])\u2500\u2510\n\u2502 [1,2] \u2502 Array(UInt8)       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("h2",{id:"working-with-data-types"},"Working with Data Types"),(0,l.kt)("p",null,"The maximum size of an array is limited to one million elements."),(0,l.kt)("p",null,"When creating an array on the fly, ClickHouse automatically defines the argument type as the narrowest data type that can store all the listed arguments. If there are any ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/nullable#data_type-nullable"},"Nullable")," or literal ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/syntax#null-literal"},"NULL")," values, the type of an array element also becomes ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/nullable"},"Nullable"),"."),(0,l.kt)("p",null,"If ClickHouse couldn\u2019t determine the data type, it generates an exception. For instance, this happens when trying to create an array with strings and numbers simultaneously (",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT array(1, 'a')"),")."),(0,l.kt)("p",null,"Examples of automatic data type detection:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT array(1, 2, NULL) AS x, toTypeName(x)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500x\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500toTypeName(array(1, 2, NULL))\u2500\u2510\n\u2502 [1,2,NULL] \u2502 Array(Nullable(UInt8))        \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,l.kt)("p",null,"If you try to create an array of incompatible data types, ClickHouse throws an exception:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT array(1, 'a')\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Received exception from server (version 1.1.54388):\nCode: 386. DB::Exception: Received from localhost:9000, 127.0.0.1. DB::Exception: There is no supertype for types UInt8, String because some of them are String/FixedString and some of them are not.\n")),(0,l.kt)("h2",{id:"array-size"},"Array Size"),(0,l.kt)("p",null,"It is possible to find the size of an array by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"size0")," subcolumn without reading the whole column. For multi-dimensional arrays you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"sizeN-1"),", where ",(0,l.kt)("inlineCode",{parentName:"p"},"N")," is the wanted dimension."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Example")),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE t_arr (`arr` Array(Array(Array(UInt32)))) ENGINE = MergeTree ORDER BY tuple();\n\nINSERT INTO t_arr VALUES ([[[12, 13, 0, 1],[12]]]);\n\nSELECT arr.size0, arr.size1, arr.size2 FROM t_arr;\n")),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500arr.size0\u2500\u252c\u2500arr.size1\u2500\u252c\u2500arr.size2\u2500\u2510\n\u2502         1 \u2502 [2]       \u2502 [[4,1]]   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);