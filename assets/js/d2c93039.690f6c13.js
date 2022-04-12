"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[76751],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(n),f=r,k=c["".concat(o,".").concat(f)]||c[f]||u[f]||i;return n?a.createElement(k,p(p({ref:t},m),{},{components:n})):a.createElement(k,p({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var s=2;s<i;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6720:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),p=["components"],l={},o="replication_queue",s={unversionedId:"en/operations/system-tables/replication_queue",id:"en/operations/system-tables/replication_queue",title:"replication_queue",description:"systemtables-replicationqueue}",source:"@site/docs/en/operations/system-tables/replication_queue.md",sourceDirName:"en/operations/system-tables",slug:"/en/operations/system-tables/replication_queue",permalink:"/en/operations/system-tables/replication_queue",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/operations/system-tables/replication_queue.md",tags:[],version:"current",frontMatter:{},sidebar:"english",previous:{title:"replicated_fetches",permalink:"/en/operations/system-tables/replicated_fetches"},next:{title:"role_grants",permalink:"/en/operations/system-tables/role-grants"}},m={},u=[],c={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"system_tables-replication_queue"},"replication_queue"),(0,i.kt)("p",null,"Contains information about tasks from replication queues stored in ZooKeeper for tables in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ReplicatedMergeTree")," family."),(0,i.kt)("p",null,"Columns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"database")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the database.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"table")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the table.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"replica_name")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Replica name in ZooKeeper. Different replicas of the same table have different names.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"position")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 Position of the task in the queue.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"node_name")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Node name in ZooKeeper.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"type")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Type of the task in the queue, one of:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GET_PART")," \u2014 Get the part from another replica."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ATTACH_PART")," \u2014 Attach the part, possibly from our own replica (if found in the ",(0,i.kt)("inlineCode",{parentName:"li"},"detached")," folder). You may think of it as a ",(0,i.kt)("inlineCode",{parentName:"li"},"GET_PART")," with some optimizations as they're nearly identical."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MERGE_PARTS")," \u2014 Merge the parts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DROP_RANGE")," \u2014 Delete the parts in the specified partition in the specified number range."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CLEAR_COLUMN")," \u2014 NOTE: Deprecated. Drop specific column from specified partition."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CLEAR_INDEX")," \u2014 NOTE: Deprecated. Drop specific index from specified partition."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"REPLACE_RANGE")," \u2014 Drop a certain range of parts and replace them with new ones."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MUTATE_PART")," \u2014 Apply one or several mutations to the part."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ALTER_METADATA")," \u2014 Apply alter modification according to global /metadata and /columns paths."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"create_time")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/datetime"},"Datetime"),") \u2014 Date and time when the task was submitted for execution.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"required_quorum")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 The number of replicas waiting for the task to complete with confirmation of completion. This column is only relevant for the ",(0,i.kt)("inlineCode",{parentName:"p"},"GET_PARTS")," task.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"source_replica")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the source replica.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"new_part_name")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Name of the new part.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"parts_to_merge")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/array"},"Array")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),")) \u2014 Names of parts to merge or update.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"is_detach")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 The flag indicates whether the ",(0,i.kt)("inlineCode",{parentName:"p"},"DETACH_PARTS")," task is in the queue.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"is_currently_executing")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt8"),") \u2014 The flag indicates whether a specific task is being performed right now.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"num_tries")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 The number of failed attempts to complete the task.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"last_exception")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Text message about the last error that occurred (if any).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"last_attempt_time")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/datetime"},"Datetime"),") \u2014 Date and time when the task was last attempted.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"num_postponed")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/int-uint"},"UInt32"),") \u2014 The number of postponed tasks.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"postpone_reason")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 The reason why the task was postponed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"last_postpone_time")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/datetime"},"Datetime"),") \u2014 Date and time when the task was last postponed.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"merge_type")," (",(0,i.kt)("a",{parentName:"p",href:"/en/sql-reference/data-types/string"},"String"),") \u2014 Type of the current merge. Empty if it's a mutation."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM system.replication_queue LIMIT 1 FORMAT Vertical;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"Row 1:\n\u2500\u2500\u2500\u2500\u2500\u2500\ndatabase:               merge\ntable:                  visits_v2\nreplica_name:           mtgiga001-1t\nposition:               15\nnode_name:              queue-0009325559\ntype:                   MERGE_PARTS\ncreate_time:            2020-12-07 14:04:21\nrequired_quorum:        0\nsource_replica:         mtgiga001-1t\nnew_part_name:          20201130_121373_121384_2\nparts_to_merge:         ['20201130_121373_121378_1','20201130_121379_121379_0','20201130_121380_121380_0','20201130_121381_121381_0','20201130_121382_121382_0','20201130_121383_121383_0','20201130_121384_121384_0']\nis_detach:              0\nis_currently_executing: 0\nnum_tries:              36\nlast_exception:         Code: 226, e.displayText() = DB::Exception: Marks file '/opt/clickhouse/data/merge/visits_v2/tmp_fetch_20201130_121373_121384_2/CounterID.mrk' does not exist (version 20.8.7.15 (official build))\nlast_attempt_time:      2020-12-08 17:35:54\nnum_postponed:          0\npostpone_reason:\nlast_postpone_time:     1970-01-01 03:00:00\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See Also")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/en/sql-reference/statements/system#query-language-system-replicated"},"Managing ReplicatedMergeTree Tables"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/system_tables/replication_queue"},"Original article")," "))}f.isMDXComponent=!0}}]);