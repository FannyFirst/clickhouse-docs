"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[87126],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(r),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43491:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var n=r(87462),i=r(63366),a=(r(67294),r(3905)),s=["components"],o={},l="system.clusters",u={unversionedId:"zh/operations/system-tables/clusters",id:"zh/operations/system-tables/clusters",title:"system.clusters",description:"system-clusters}",source:"@site/docs/zh/operations/system-tables/clusters.md",sourceDirName:"zh/operations/system-tables",slug:"/zh/operations/system-tables/clusters",permalink:"/zh/operations/system-tables/clusters",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/operations/system-tables/clusters.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"system.asynchronous_metrics",permalink:"/zh/operations/system-tables/asynchronous_metrics"},next:{title:"system.columns",permalink:"/zh/operations/system-tables/columns"}},c={},p=[],m={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"system-clusters"},"system.clusters"),(0,a.kt)("p",null,"\u5305\u542b\u6709\u5173\u914d\u7f6e\u6587\u4ef6\u4e2d\u53ef\u7528\u7684\u96c6\u7fa4\u53ca\u5176\u4e2d\u7684\u670d\u52a1\u5668\u7684\u4fe1\u606f\u3002"),(0,a.kt)("p",null,"\u5217:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cluster")," (String) \u2014 \u96c6\u7fa4\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shard_num")," (UInt32) \u2014 \u96c6\u7fa4\u4e2d\u7684\u5206\u7247\u6570\uff0c\u4ece1\u5f00\u59cb\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shard_weight")," (UInt32) \u2014 \u5199\u6570\u636e\u65f6\u8be5\u5206\u7247\u7684\u76f8\u5bf9\u6743\u91cd\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"replica_num")," (UInt32) \u2014 \u5206\u7247\u7684\u526f\u672c\u6570\u91cf\uff0c\u4ece1\u5f00\u59cb\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"host_name")," (String) \u2014 \u914d\u7f6e\u4e2d\u6307\u5b9a\u7684\u4e3b\u673a\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"host_address")," (String) \u2014 \u4eceDNS\u83b7\u53d6\u7684\u4e3b\u673aIP\u5730\u5740\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"port")," (UInt16) \u2014 \u8fde\u63a5\u5230\u670d\u52a1\u5668\u7684\u7aef\u53e3\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user")," (String) \u2014 \u8fde\u63a5\u5230\u670d\u52a1\u5668\u7684\u7528\u6237\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"errors_count")," (UInt32) - \u6b64\u4e3b\u673a\u65e0\u6cd5\u8bbf\u95ee\u526f\u672c\u7684\u6b21\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"slowdowns_count")," (UInt32) - \u4e0e\u5bf9\u51b2\u8bf7\u6c42\u5efa\u7acb\u8fde\u63a5\u65f6\u5bfc\u81f4\u66f4\u6539\u526f\u672c\u7684\u51cf\u901f\u6b21\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"estimated_recovery_time")," (UInt32) - \u5269\u4e0b\u7684\u79d2\u6570\uff0c\u76f4\u5230\u526f\u672c\u9519\u8bef\u8ba1\u6570\u5f52\u96f6\u5e76\u88ab\u89c6\u4e3a\u6062\u590d\u6b63\u5e38\u3002")),(0,a.kt)("p",null,"\u8bf7\u6ce8\u610f ",(0,a.kt)("inlineCode",{parentName:"p"},"errors_count")," \u6bcf\u4e2a\u67e5\u8be2\u96c6\u7fa4\u66f4\u65b0\u4e00\u6b21\uff0c\u4f46 ",(0,a.kt)("inlineCode",{parentName:"p"},"estimated_recovery_time")," \u6309\u9700\u91cd\u65b0\u8ba1\u7b97\u3002 \u6240\u4ee5\u6709\u53ef\u80fd\u662f\u975e\u96f6\u7684\u60c5\u51b5 ",(0,a.kt)("inlineCode",{parentName:"p"},"errors_count")," \u548c\u96f6 ",(0,a.kt)("inlineCode",{parentName:"p"},"estimated_recovery_time"),"\uff0c\u4e0b\u4e00\u4e2a\u67e5\u8be2\u5c06\u4e3a\u96f6 ",(0,a.kt)("inlineCode",{parentName:"p"},"errors_count")," \u5e76\u5c1d\u8bd5\u4f7f\u7528\u526f\u672c\uff0c\u5c31\u597d\u50cf\u5b83\u6ca1\u6709\u9519\u8bef\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u53e6\u8bf7\u53c2\u9605")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/engines/table-engines/special/distributed"},"\u8868\u5f15\u64ce\u5206\u5e03\u5f0f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/operations/settings/#settings-distributed_replica_error_cap"},"distributed_replica_error_cap\u8bbe\u7f6e")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/operations/settings/#settings-distributed_replica_error_half_life"},"distributed_replica_error_half_life\u8bbe\u7f6e"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/operations/system-tables/clusters"},"\u539f\u6587")," "))}d.isMDXComponent=!0}}]);