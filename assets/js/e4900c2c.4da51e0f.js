"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[2261],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,k=m["".concat(u,".").concat(f)]||m[f]||c[f]||l;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6025:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={sidebar_position:41,sidebar_label:"url"},u="url",p={unversionedId:"ru/sql-reference/table-functions/url",id:"ru/sql-reference/table-functions/url",title:"url",description:"url}",source:"@site/docs/ru/sql-reference/table-functions/url.md",sourceDirName:"ru/sql-reference/table-functions",slug:"/ru/sql-reference/table-functions/url",permalink:"/ru/sql-reference/table-functions/url",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/sql-reference/table-functions/url.md",tags:[],version:"current",sidebarPosition:41,frontMatter:{sidebar_position:41,sidebar_label:"url"},sidebar:"russia",previous:{title:"remote",permalink:"/ru/sql-reference/table-functions/remote"},next:{title:"mysql",permalink:"/ru/sql-reference/table-functions/mysql"}},s={},c=[{value:"\u0421\u0438\u043c\u0432\u043e\u043b\u044b \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432 URL {globs-in-url}",id:"\u0441\u0438\u043c\u0432\u043e\u043b\u044b-\u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u0432-url-globs-in-url",level:2}],m={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"url"},"url"),(0,l.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"url")," \u0431\u0435\u0440\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 ",(0,l.kt)("inlineCode",{parentName:"p"},"URL")," \u0438 \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0438\u0437 \u043d\u0438\u0445 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0441\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u043c\u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0430."),(0,l.kt)("p",null,"\u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,l.kt)("inlineCode",{parentName:"p"},"url")," \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0430 \u0432 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445 ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," \u0438 ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT")," \u0441 \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u043c\u0438 \u043d\u0430 \u0434\u0432\u0438\u0436\u043a\u0435 ",(0,l.kt)("a",{parentName:"p",href:"/ru/engines/table-engines/special/url"},"URL"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"url(URL, format, structure)\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"URL")," \u2014 HTTP \u0438\u043b\u0438 HTTPS-\u0430\u0434\u0440\u0435\u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u044b ",(0,l.kt)("inlineCode",{parentName:"li"},"GET")," \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"POST")," (\u0434\u043b\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,l.kt)("inlineCode",{parentName:"li"},"SELECT")," \u0438\u043b\u0438 ",(0,l.kt)("inlineCode",{parentName:"li"},"INSERT")," \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e). \u0422\u0438\u043f: ",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/string"},"String"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"format")," \u2014 ",(0,l.kt)("a",{parentName:"li",href:"/ru/interfaces/formats#formats"},"\u0444\u043e\u0440\u043c\u0430\u0442")," \u0434\u0430\u043d\u043d\u044b\u0445. \u0422\u0438\u043f: ",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/string"},"String"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"structure")," \u2014 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 ",(0,l.kt)("inlineCode",{parentName:"li"},"'UserID UInt64, Name String'"),". \u041e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0438\u043c\u0435\u043d\u0430 \u0438 \u0442\u0438\u043f\u044b \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432. \u0422\u0438\u043f: ",(0,l.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/string"},"String"),".")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,l.kt)("p",null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c\u0438 \u0444\u043e\u0440\u043c\u0430\u0442\u043e\u043c \u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043e\u0439, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438, \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u043c\u0438 \u0438\u0437 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0433\u043e \u0430\u0434\u0440\u0435\u0441\u0430 ",(0,l.kt)("inlineCode",{parentName:"p"},"URL"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440\u044b")),(0,l.kt)("p",null,"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0441 HTTP-\u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u0435\u0440\u0432\u044b\u0445 3 \u0441\u0442\u0440\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 ",(0,l.kt)("a",{parentName:"p",href:"/ru/interfaces/formats#csv"},"CSV"),", \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0435\u0439 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0442\u0438\u043f\u0430 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/string"},"String")," \u0438 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/int-uint"},"UInt32"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM url('http://127.0.0.1:12345/', CSV, 'column1 String, column2 UInt32') LIMIT 3;\n")),(0,l.kt)("p",null,"\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0443:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE test_table (column1 String, column2 UInt32) ENGINE=Memory;\nINSERT INTO FUNCTION url('http://127.0.0.1:8123/?query=INSERT+INTO+test_table+FORMAT+CSV', 'CSV', 'column1 String, column2 UInt32') VALUES ('http interface', 42);\nSELECT * FROM test_table;\n")),(0,l.kt)("h2",{id:"\u0441\u0438\u043c\u0432\u043e\u043b\u044b-\u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438-\u0432-url-globs-in-url"},"\u0421\u0438\u043c\u0432\u043e\u043b\u044b \u043f\u043e\u0434\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 \u0432 URL {globs-in-url}"),(0,l.kt)("p",null,"\u0428\u0430\u0431\u043b\u043e\u043d\u044b \u0432 \u0444\u0438\u0433\u0443\u0440\u043d\u044b\u0445 \u0441\u043a\u043e\u0431\u043a\u0430\u0445 ",(0,l.kt)("inlineCode",{parentName:"p"},"{ }")," \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f, \u0447\u0442\u043e\u0431\u044b \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0448\u0430\u0440\u0434\u043e\u0432 \u0438\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u0430\u0434\u0440\u0435\u0441\u0430 \u043d\u0430 \u0441\u043b\u0443\u0447\u0430\u0439 \u043e\u0442\u043a\u0430\u0437\u0430. \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0442\u0438\u043f\u044b \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432 \u0438 \u043f\u0440\u0438\u043c\u0435\u0440\u044b \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0432 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,l.kt)("a",{parentName:"p",href:"/ru/sql-reference/table-functions/remote#globs-in-addresses"},"remote"),".\n\u0421\u0438\u043c\u0432\u043e\u043b ",(0,l.kt)("inlineCode",{parentName:"p"},"|")," \u0432\u043d\u0443\u0442\u0440\u0438 \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0434\u0430\u0442\u044c \u0430\u0434\u0440\u0435\u0441\u0430, \u0435\u0441\u043b\u0438 \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0435 \u043e\u043a\u0430\u0437\u0430\u043b\u0438\u0441\u044c \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b. \u042d\u0442\u0438 \u0430\u0434\u0440\u0435\u0441\u0430 \u043f\u0435\u0440\u0435\u0431\u0438\u0440\u0430\u044e\u0442\u0441\u044f \u0432 \u0442\u043e\u043c \u0436\u0435 \u043f\u043e\u0440\u044f\u0434\u043a\u0435, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043e\u043d\u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u044b \u0432 \u0448\u0430\u0431\u043b\u043e\u043d\u0435. \u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0430\u0434\u0440\u0435\u0441\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b, \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u043e\u0439 ",(0,l.kt)("a",{parentName:"p",href:"/ru/operations/settings/#glob_expansion_max_elements"},"glob_expansion_max_elements"),"."))}f.isMDXComponent=!0}}]);