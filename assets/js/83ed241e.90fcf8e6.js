"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[86170],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=o(r),m=a,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=c;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var o=2;o<i;o++)s[o]=r[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1069:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return d}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),s=["components"],u={},l="system.distributed_ddl_queue",o={unversionedId:"ru/operations/system-tables/distributed_ddl_queue",id:"ru/operations/system-tables/distributed_ddl_queue",title:"system.distributed_ddl_queue",description:"systemtables-distributedddl_queue}",source:"@site/docs/ru/operations/system-tables/distributed_ddl_queue.md",sourceDirName:"ru/operations/system-tables",slug:"/ru/operations/system-tables/distributed_ddl_queue",permalink:"/ru/operations/system-tables/distributed_ddl_queue",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/operations/system-tables/distributed_ddl_queue.md",tags:[],version:"current",frontMatter:{},sidebar:"russia",previous:{title:"system.disks",permalink:"/ru/operations/system-tables/disks"},next:{title:"system.distribution_queue",permalink:"/ru/operations/system-tables/distribution_queue"}},p={},d=[],c={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system_tables-distributed_ddl_queue"},"system.distributed_ddl_queue"),(0,i.kt)("p",null,"\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e ",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/distributed-ddl"},"\u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 ddl \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445 (\u0441\u0435\u043a\u0446\u0438\u044f ON CLUSTER)"),", \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u044b\u043b\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u043d\u0430 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0435."),(0,i.kt)("p",null,"\u0421\u0442\u043e\u043b\u0431\u0446\u044b:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entry")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host_name")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u0445\u043e\u0441\u0442\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"host_address")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 IP-\u0430\u0434\u0440\u0435\u0441 \u0445\u043e\u0441\u0442\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"port")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"UInt16"),") \u2014 \u043f\u043e\u0440\u0442 \u0434\u043b\u044f \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/enum"},"Enum8"),") \u2014 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cluster")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0438\u043c\u044f \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initiator")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/string"},"String"),") \u2014 \u0443\u0437\u0435\u043b, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0432\u0448\u0438\u0439 \u0437\u0430\u043f\u0440\u043e\u0441."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query_start_time")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/datetime"},"DateTime"),") \u2014 \u0432\u0440\u0435\u043c\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query_finish_time")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/datetime"},"DateTime"),") \u2014 \u0432\u0440\u0435\u043c\u044f \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query_duration_ms")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/int-uint"},"UInt64"),") \u2014 \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u0430 (\u0432 \u043c\u0438\u043b\u043b\u0438\u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"exception_code")," (",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/enum"},"Enum8"),") \u2014 \u043a\u043e\u0434 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0438\u0437 ",(0,i.kt)("a",{parentName:"li",href:"/ru/operations/tips#zookeeper"},"ZooKeeper"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT *\nFROM system.distributed_ddl_queue\nWHERE cluster = 'test_cluster'\nLIMIT 2\nFORMAT Vertical\n\nQuery id: f544e72a-6641-43f1-836b-24baa1c9632a\n\nRow 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\nentry:             query-0000000000\nhost_name:         clickhouse01\nhost_address:      172.23.0.11\nport:              9000\nstatus:            Finished\ncluster:           test_cluster\nquery:             CREATE DATABASE test_db UUID '4a82697e-c85e-4e5b-a01e-a36f2a758456' ON CLUSTER test_cluster\ninitiator:         clickhouse01:9000\nquery_start_time:  2020-12-30 13:07:51\nquery_finish_time: 2020-12-30 13:07:51\nquery_duration_ms: 6\nexception_code:    ZOK\n\nRow 2:\n\u2500\u2500\u2500\u2500\u2500\u2500\nentry:             query-0000000000\nhost_name:         clickhouse02\nhost_address:      172.23.0.12\nport:              9000\nstatus:            Finished\ncluster:           test_cluster\nquery:             CREATE DATABASE test_db UUID '4a82697e-c85e-4e5b-a01e-a36f2a758456' ON CLUSTER test_cluster\ninitiator:         clickhouse01:9000\nquery_start_time:  2020-12-30 13:07:51\nquery_finish_time: 2020-12-30 13:07:51\nquery_duration_ms: 6\nexception_code:    ZOK\n\n2 rows in set. Elapsed: 0.025 sec.\n")))}m.isMDXComponent=!0}}]);