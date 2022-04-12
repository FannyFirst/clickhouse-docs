"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[10221],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40823:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=n(87462),i=n(63366),l=(n(67294),n(3905)),r=["components"],o={sidebar_position:60,sidebar_label:"clickhouse-local"},s="clickhouse-local",u={unversionedId:"en/operations/utilities/clickhouse-local",id:"en/operations/utilities/clickhouse-local",title:"clickhouse-local",description:"The clickhouse-local program enables you to perform fast processing on local files, without having to deploy and configure the ClickHouse server.",source:"@site/docs/en/operations/utilities/clickhouse-local.md",sourceDirName:"en/operations/utilities",slug:"/en/operations/utilities/clickhouse-local",permalink:"/en/operations/utilities/clickhouse-local",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/operations/utilities/clickhouse-local.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60,sidebar_label:"clickhouse-local"},sidebar:"english",previous:{title:"clickhouse-copier",permalink:"/en/operations/utilities/clickhouse-copier"},next:{title:"clickhouse-benchmark",permalink:"/en/operations/utilities/clickhouse-benchmark"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"clickhouse-local"},"clickhouse-local"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-local")," program enables you to perform fast processing on local files, without having to deploy and configure the ClickHouse server."),(0,l.kt)("p",null,"Accepts data that represent tables and queries them using ",(0,l.kt)("a",{parentName:"p",href:"../../sql-reference/"},"ClickHouse SQL dialect"),"."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-local")," uses the same core as ClickHouse server, so it supports most of the features and the same set of formats and table engines."),(0,l.kt)("p",null,"By default ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-local")," does not have access to data on the same host, but it supports loading server configuration using ",(0,l.kt)("inlineCode",{parentName:"p"},"--config-file")," argument."),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"It is not recommended to load production server configuration into ",(0,l.kt)("inlineCode",{parentName:"p"},"clickhouse-local")," because data can be damaged in case of human error."))),(0,l.kt)("p",null,"For temporary data, a unique temporary data directory is created by default."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"Basic usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ clickhouse-local --structure "table_structure" --input-format "format_of_incoming_data" \\\n    --query "query"\n')),(0,l.kt)("p",null,"Arguments:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-S"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--structure")," \u2014 table structure for input data."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-if"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--input-format")," \u2014 input format, ",(0,l.kt)("inlineCode",{parentName:"li"},"TSV")," by default."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-f"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--file")," \u2014 path to data, ",(0,l.kt)("inlineCode",{parentName:"li"},"stdin")," by default."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-q"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--query")," \u2014 queries to execute with ",(0,l.kt)("inlineCode",{parentName:"li"},";")," as delimeter. You must specify either ",(0,l.kt)("inlineCode",{parentName:"li"},"query")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"queries-file")," option."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-qf"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--queries-file")," - file path with queries to execute. You must specify either ",(0,l.kt)("inlineCode",{parentName:"li"},"query")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"queries-file")," option."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-N"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--table")," \u2014 table name where to put output data, ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," by default."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-of"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--format"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--output-format")," \u2014 output format, ",(0,l.kt)("inlineCode",{parentName:"li"},"TSV")," by default."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-d"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--database")," \u2014 default database, ",(0,l.kt)("inlineCode",{parentName:"li"},"_local")," by default."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--stacktrace")," \u2014 whether to dump debug output in case of exception."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--echo")," \u2014 print query before execution."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--verbose")," \u2014 more details on query execution."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--logger.console")," \u2014 Log to console."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--logger.log")," \u2014 Log file name."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--logger.level")," \u2014 Log level."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--ignore-error")," \u2014 do not stop processing if a query failed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-c"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--config-file")," \u2014 path to configuration file in same format as for ClickHouse server, by default the configuration empty."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--no-system-tables")," \u2014 do not attach system tables."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--help")," \u2014 arguments references for ",(0,l.kt)("inlineCode",{parentName:"li"},"clickhouse-local"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"-V"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"--version")," \u2014 print version information and exit.")),(0,l.kt)("p",null,"Also there are arguments for each ClickHouse configuration variable which are more commonly used instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"--config-file"),"."),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo -e "1,2\\n3,4" | clickhouse-local --structure "a Int64, b Int64" \\\n    --input-format "CSV" --query "SELECT * FROM table"\nRead 2 rows, 32.00 B in 0.000 sec., 5182 rows/sec., 80.97 KiB/sec.\n1   2\n3   4\n')),(0,l.kt)("p",null,"Previous example is the same as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo -e "1,2\\n3,4" | clickhouse-local --query "\n    CREATE TABLE table (a Int64, b Int64) ENGINE = File(CSV, stdin);\n    SELECT a, b FROM table;\n    DROP TABLE table"\nRead 2 rows, 32.00 B in 0.000 sec., 4987 rows/sec., 77.93 KiB/sec.\n1   2\n3   4\n')),(0,l.kt)("p",null,"You don't have to use ",(0,l.kt)("inlineCode",{parentName:"p"},"stdin")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--file")," argument, and can open any number of files using the ",(0,l.kt)("a",{parentName:"p",href:"/en/sql-reference/table-functions/file"},(0,l.kt)("inlineCode",{parentName:"a"},"file")," table function"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ echo 1 | tee 1.tsv\n1\n\n$ echo 2 | tee 2.tsv\n2\n\n$ clickhouse-local --query \"\n    select * from file('1.tsv', TSV, 'a int') t1\n    cross join file('2.tsv', TSV, 'b int') t2\"\n1   2\n")),(0,l.kt)("p",null,"Now let\u2019s output memory user for each Unix user:"),(0,l.kt)("p",null,"Query:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ ps aux | tail -n +2 | awk \'{ printf("%s\\t%s\\n", $1, $4) }\' \\\n    | clickhouse-local --structure "user String, mem Float64" \\\n        --query "SELECT user, round(sum(mem), 2) as memTotal\n            FROM table GROUP BY user ORDER BY memTotal DESC FORMAT Pretty"\n')),(0,l.kt)("p",null,"Result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"Read 186 rows, 4.15 KiB in 0.035 sec., 5302 rows/sec., 118.34 KiB/sec.\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 user     \u2503 memTotal \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 bayonet  \u2502    113.5 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 root     \u2502      8.8 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n...\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/operations/utils/clickhouse-local/"},"Original article")," "))}d.isMDXComponent=!0}}]);