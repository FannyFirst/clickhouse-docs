"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[75148],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var u=r.createContext({}),s=function(n){var e=r.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},p=function(n){var e=s(n.components);return r.createElement(u.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,u=n.parentName,p=o(n,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(f,l(l({ref:e},p),{},{components:t})):r.createElement(f,l({ref:e},p))}));function m(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=n,o.mdxType="string"==typeof n?n:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},36501:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),l=["components"],o={sidebar_position:51,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u0441\u0435\u0432\u0434\u043e\u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b"},u="\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u0441\u0435\u0432\u0434\u043e\u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b",s={unversionedId:"ru/sql-reference/functions/random-functions",id:"ru/sql-reference/functions/random-functions",title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u0441\u0435\u0432\u0434\u043e\u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b",description:"functions-for-generating-pseudo-random-numbers}",source:"@site/docs/ru/sql-reference/functions/random-functions.md",sourceDirName:"ru/sql-reference/functions",slug:"/ru/sql-reference/functions/random-functions",permalink:"/ru/sql-reference/functions/random-functions",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/sql-reference/functions/random-functions.md",tags:[],version:"current",sidebarPosition:51,frontMatter:{sidebar_position:51,sidebar_label:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u0441\u0435\u0432\u0434\u043e\u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b"},sidebar:"russia",previous:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0445\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",permalink:"/ru/sql-reference/functions/hash-functions"},next:{title:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u043a\u043e\u0434\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",permalink:"/ru/sql-reference/functions/encoding-functions"}},p={},c=[{value:"rand",id:"rand",level:2},{value:"rand64",id:"rand64",level:2},{value:"randConstant",id:"randconstant",level:2},{value:"randomString",id:"random-string",level:2},{value:"randomFixedString",id:"random-fixed-string",level:2},{value:"randomPrintableASCII",id:"random-printable-ascii",level:2},{value:"randomStringUTF8",id:"random-string-utf8",level:2},{value:"fuzzBits",id:"fuzzbits",level:2}],d={toc:c};function m(n){var e=n.components,t=(0,a.Z)(n,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"functions-for-generating-pseudo-random-numbers"},"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u0441\u0435\u0432\u0434\u043e\u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b"),(0,i.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u043d\u0435 \u043a\u0440\u0438\u043f\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u043f\u0441\u0435\u0432\u0434\u043e\u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b."),(0,i.kt)("p",null,"\u0412\u0441\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0442 \u043d\u043e\u043b\u044c \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u043b\u0438 \u043e\u0434\u0438\u043d \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442.\n\u0412 \u0441\u043b\u0443\u0447\u0430\u0435, \u0435\u0441\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 - \u043e\u043d \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043b\u044e\u0431\u043e\u0433\u043e \u0442\u0438\u043f\u0430, \u0438 \u0435\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0438\u043a\u0430\u043a \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f.\n\u042d\u0442\u043e\u0442 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442 \u043d\u0443\u0436\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0442\u0438\u0442\u044c \u0441\u043a\u043b\u0435\u0439\u043a\u0443 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0445 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439 - \u0447\u0442\u043e\u0431\u044b \u0434\u0432\u0435 \u0440\u0430\u0437\u043d\u044b\u0435 \u0437\u0430\u043f\u0438\u0441\u0438 \u043e\u0434\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u043b\u0438 \u0440\u0430\u0437\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b, \u0441 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u043c\u0438 \u0447\u0438\u0441\u043b\u0430\u043c\u0438."),(0,i.kt)("h2",{id:"rand"},"rand"),(0,i.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0441\u0435\u0432\u0434\u043e\u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0442\u0438\u043f\u0430 UInt32, \u0440\u0430\u0432\u043d\u043e\u043c\u0435\u0440\u043d\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0435 \u0441\u0440\u0435\u0434\u0438 \u0432\u0441\u0435\u0445 \u0447\u0438\u0441\u0435\u043b \u0442\u0438\u043f\u0430 UInt32.\n\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f linear congruential generator."),(0,i.kt)("h2",{id:"rand64"},"rand64"),(0,i.kt)("p",null,"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043f\u0441\u0435\u0432\u0434\u043e\u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0442\u0438\u043f\u0430 UInt64, \u0440\u0430\u0432\u043d\u043e\u043c\u0435\u0440\u043d\u043e \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u043e\u0435 \u0441\u0440\u0435\u0434\u0438 \u0432\u0441\u0435\u0445 \u0447\u0438\u0441\u0435\u043b \u0442\u0438\u043f\u0430 UInt64.\n\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f linear congruential generator."),(0,i.kt)("h2",{id:"randconstant"},"randConstant"),(0,i.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u0442 \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u043d\u044b\u0439 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0441 \u043f\u0441\u0435\u0432\u0434\u043e\u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"randConstant([x])\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x")," \u2014 ",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/syntax#syntax-expressions"},"\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435"),", \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0449\u0435\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u0437 ",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/data-types/#data_types"},"\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445"),". \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f, \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u0431\u0435\u0436\u0430\u0442\u044c ",(0,i.kt)("a",{parentName:"li",href:"/ru/sql-reference/functions/#common-subexpression-elimination"},"\u0441\u043a\u043b\u0435\u0439\u043a\u0438 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0445 \u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0439"),", \u0435\u0441\u043b\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437 \u0432 \u043e\u0434\u043d\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0435. \u041d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u041f\u0441\u0435\u0432\u0434\u043e\u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e.")),(0,i.kt)("p",null,"\u0422\u0438\u043f: ",(0,i.kt)("a",{parentName:"p",href:"/ru/sql-reference/data-types/int-uint"},"UInt32"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,i.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT rand(), rand(1), rand(number), randConstant(), randConstant(1), randConstant(number)\nFROM numbers(3)\n")),(0,i.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500rand()\u2500\u252c\u2500\u2500\u2500\u2500rand(1)\u2500\u252c\u2500rand(number)\u2500\u252c\u2500randConstant()\u2500\u252c\u2500randConstant(1)\u2500\u252c\u2500randConstant(number)\u2500\u2510\n\u2502 3047369878 \u2502 4132449925 \u2502   4044508545 \u2502     2740811946 \u2502      4229401477 \u2502           1924032898 \u2502\n\u2502 2938880146 \u2502 1267722397 \u2502   4154983056 \u2502     2740811946 \u2502      4229401477 \u2502           1924032898 \u2502\n\u2502  956619638 \u2502 4238287282 \u2502   1104342490 \u2502     2740811946 \u2502      4229401477 \u2502           1924032898 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("h1",{id:"random-functions-for-working-with-strings"},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441\u043e \u0441\u0442\u0440\u043e\u043a\u0430\u043c\u0438"),(0,i.kt)("h2",{id:"random-string"},"randomString"),(0,i.kt)("h2",{id:"random-fixed-string"},"randomFixedString"),(0,i.kt)("h2",{id:"random-printable-ascii"},"randomPrintableASCII"),(0,i.kt)("h2",{id:"random-string-utf8"},"randomStringUTF8"),(0,i.kt)("h2",{id:"fuzzbits"},"fuzzBits"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"fuzzBits([s], [prob])\n")),(0,i.kt)("p",null,"\u0418\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u0443\u0435\u0442 \u043a\u0430\u0436\u0434\u044b\u0439 \u0431\u0438\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," \u0441 \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c\u044e ",(0,i.kt)("inlineCode",{parentName:"p"},"prob"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0410\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"s")," \u2014 ",(0,i.kt)("inlineCode",{parentName:"li"},"String")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"FixedString")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prob")," \u2014 constant ",(0,i.kt)("inlineCode",{parentName:"li"},"Float32/64"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")),(0,i.kt)("p",null,"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u0430\u044f \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c \u0441\u0442\u0440\u043e\u043a\u0430 \u0441 \u0442\u0435\u043c \u0436\u0435 \u0442\u0438\u043f\u043e\u043c, \u0447\u0442\u043e \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"s"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,i.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT fuzzBits(materialize('abacaba'), 0.1)\nFROM numbers(3)\n")),(0,i.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500fuzzBits(materialize('abacaba'), 0.1)\u2500\u2510\n\u2502 abaaaja                               \u2502\n\u2502 a*cjab+                               \u2502\n\u2502 aeca2A                                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);