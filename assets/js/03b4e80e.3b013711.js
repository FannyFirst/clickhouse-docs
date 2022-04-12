"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[8395],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98580:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],c={machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:45,sidebar_label:"\u5206\u5c42\u5b57\u5178"},o="\u5206\u5c42\u5b57\u5178",u={unversionedId:"zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-hierarchical",id:"zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-hierarchical",title:"\u5206\u5c42\u5b57\u5178",description:"hierarchical-dictionaries}",source:"@site/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-hierarchical.md",sourceDirName:"zh/sql-reference/dictionaries/external-dictionaries",slug:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-hierarchical",permalink:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-hierarchical",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-hierarchical.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{machine_translated:!0,machine_translated_rev:"72537a2d527c63c07aa5d2361a8829f3895cf2bd",sidebar_position:45,sidebar_label:"\u5206\u5c42\u5b57\u5178"},sidebar:"chinese",previous:{title:"\u5b57\u5178\u952e\u548c\u5b57\u6bb5",permalink:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},next:{title:"Polygon Dictionaries With Grids",permalink:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-polygon"}},s={},d=[],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hierarchical-dictionaries"},"\u5206\u5c42\u5b57\u5178"),(0,i.kt)("p",null,"ClickHouse\u652f\u6301\u5206\u5c42\u5b57\u5178\u4e0e ",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure#ext_dict-numeric-key"},"\u6570\u5b57\u952e"),"."),(0,i.kt)("p",null,"\u770b\u770b\u4e0b\u9762\u7684\u5c42\u6b21\u7ed3\u6784:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"0 (Common parent)\n\u2502\n\u251c\u2500\u2500 1 (Russia)\n\u2502   \u2502\n\u2502   \u2514\u2500\u2500 2 (Moscow)\n\u2502       \u2502\n\u2502       \u2514\u2500\u2500 3 (Center)\n\u2502\n\u2514\u2500\u2500 4 (Great Britain)\n    \u2502\n    \u2514\u2500\u2500 5 (London)\n")),(0,i.kt)("p",null,"\u8fd9\u79cd\u5c42\u6b21\u7ed3\u6784\u53ef\u4ee5\u8868\u793a\u4e3a\u4e0b\u9762\u7684\u5b57\u5178\u8868\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"region_id"),(0,i.kt)("th",{parentName:"tr",align:null},"parent_region"),(0,i.kt)("th",{parentName:"tr",align:null},"region_name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4fc4\u7f57\u65af")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"\u83ab\u65af\u79d1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"3"),(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4e2d\u5fc3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"\u82f1\u56fd")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5"),(0,i.kt)("td",{parentName:"tr",align:null},"4"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4f26\u6566")))),(0,i.kt)("p",null,"\u6b64\u8868\u5305\u542b\u4e00\u5217 ",(0,i.kt)("inlineCode",{parentName:"p"},"parent_region")," \u5305\u542b\u8be5\u5143\u7d20\u7684\u6700\u8fd1\u7236\u9879\u7684\u952e\u3002"),(0,i.kt)("p",null,"ClickHouse\u652f\u6301 ",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure#hierarchical-dict-attr"},"\u7b49\u7ea7")," \u5c5e\u6027\u4e3a ",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/dictionaries/external-dictionaries/external-dicts-dict-structure"},"\u5916\u90e8\u5b57\u5178")," \u5c5e\u6027\u3002 \u6b64\u5c5e\u6027\u5141\u8bb8\u60a8\u914d\u7f6e\u7c7b\u4f3c\u4e8e\u4e0a\u8ff0\u7684\u5206\u5c42\u5b57\u5178\u3002"),(0,i.kt)("p",null,"\u8be5 ",(0,i.kt)("a",{parentName:"p",href:"/zh/sql-reference/functions/ext-dict-functions#dictgethierarchy"},"\u72ec\u88c1\u4e3b\u4e49")," \u51fd\u6570\u5141\u8bb8\u60a8\u83b7\u53d6\u5143\u7d20\u7684\u7236\u94fe\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u6211\u4eec\u7684\u4f8b\u5b50\uff0cdictionary\u7684\u7ed3\u6784\u53ef\u4ee5\u662f\u4ee5\u4e0b\u5185\u5bb9:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dictionary>\n    <structure>\n        <id>\n            <name>region_id</name>\n        </id>\n\n        <attribute>\n            <name>parent_region</name>\n            <type>UInt64</type>\n            <null_value>0</null_value>\n            <hierarchical>true</hierarchical>\n        </attribute>\n\n        <attribute>\n            <name>region_name</name>\n            <type>String</type>\n            <null_value></null_value>\n        </attribute>\n\n    </structure>\n</dictionary>\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/dicts/external_dicts_dict_hierarchical/"},"\u539f\u59cb\u6587\u7ae0")," "))}m.isMDXComponent=!0}}]);