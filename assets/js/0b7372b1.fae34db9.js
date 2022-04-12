"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[28209],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57363:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],s={sidebar_position:50,sidebar_label:"cluster"},o="cluster, clusterAllReplicas",c={unversionedId:"en/sql-reference/table-functions/cluster",id:"en/sql-reference/table-functions/cluster",title:"cluster, clusterAllReplicas",description:"cluster-clusterallreplicas}",source:"@site/docs/en/sql-reference/table-functions/cluster.md",sourceDirName:"en/sql-reference/table-functions",slug:"/en/sql-reference/table-functions/cluster",permalink:"/en/sql-reference/table-functions/cluster",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/sql-reference/table-functions/cluster.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,sidebar_label:"cluster"},sidebar:"english",previous:{title:"generateRandom",permalink:"/en/sql-reference/table-functions/generate"},next:{title:"view",permalink:"/en/sql-reference/table-functions/view"}},u={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cluster-clusterallreplicas"},"cluster, clusterAllReplicas"),(0,l.kt)("p",null,"Allows to access all shards in an existing cluster which configured in ",(0,l.kt)("inlineCode",{parentName:"p"},"remote_servers")," section without creating a ",(0,l.kt)("a",{parentName:"p",href:"/en/engines/table-engines/special/distributed"},"Distributed")," table. One replica of each shard is queried."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"clusterAllReplicas")," function \u2014 same as ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster"),", but all replicas are queried. Each replica in a cluster is used as a separate shard/connection."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"All available clusters are listed in the ",(0,l.kt)("a",{parentName:"p",href:"/en/operations/system-tables/clusters"},"system.clusters")," table."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Syntax")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"cluster('cluster_name', db.table[, sharding_key])\ncluster('cluster_name', db, table[, sharding_key])\nclusterAllReplicas('cluster_name', db.table[, sharding_key])\nclusterAllReplicas('cluster_name', db, table[, sharding_key])\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cluster_name")," \u2013 Name of a cluster that is used to build a set of addresses and connection parameters to remote and local servers. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"db.table")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"db"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," - Name of a database and a table.  "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sharding_key")," -  A sharding key. Optional. Needs to be specified if the cluster has more than one shard. ")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returned value")),(0,l.kt)("p",null,"The dataset from clusters."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Using Macros")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"cluster_name")," can contain macros \u2014 substitution in curly brackets. The substituted value is taken from the ",(0,l.kt)("a",{parentName:"p",href:"/en/operations/server-configuration-parameters/settings#macros"},"macros")," section of the server configuration file."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM cluster('{cluster}', default.example_table);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage and Recommendations")),(0,l.kt)("p",null,"Using the ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"clusterAllReplicas")," table functions are less efficient than creating a ",(0,l.kt)("inlineCode",{parentName:"p"},"Distributed")," table because in this case, the server connection is re-established for every request. When processing a large number of queries, please always create the ",(0,l.kt)("inlineCode",{parentName:"p"},"Distributed")," table ahead of time, and do not use the ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"clusterAllReplicas")," table functions."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"cluster")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"clusterAllReplicas")," table functions can be useful in the following cases:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Accessing a specific cluster for data comparison, debugging, and testing."),(0,l.kt)("li",{parentName:"ul"},"Queries to various ClickHouse clusters and replicas for research purposes."),(0,l.kt)("li",{parentName:"ul"},"Infrequent distributed requests that are made manually.")),(0,l.kt)("p",null,"Connection settings like ",(0,l.kt)("inlineCode",{parentName:"p"},"host"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"port"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"user"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"password"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"compression"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"secure")," are taken from ",(0,l.kt)("inlineCode",{parentName:"p"},"<remote_servers>")," config section. See details in ",(0,l.kt)("a",{parentName:"p",href:"/en/engines/table-engines/special/distributed"},"Distributed engine"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"See Also")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/operations/settings/#settings-skip_unavailable_shards"},"skip_unavailable_shards")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/en/operations/settings/#settings-load_balancing"},"load_balancing"))))}m.isMDXComponent=!0}}]);