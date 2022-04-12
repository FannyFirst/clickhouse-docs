"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[82459],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=l.createContext({}),m=function(e){var t=l.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return l.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=m(a),d=n,k=s["".concat(o,".").concat(d)]||s[d]||p[d]||r;return a?l.createElement(k,i(i({ref:t},u),{},{components:a})):l.createElement(k,i({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var m=2;m<r;m++)i[m]=a[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}s.displayName="MDXCreateElement"},57566:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return p}});var l=a(87462),n=a(63366),r=(a(67294),a(3905)),i=["components"],c={sidebar_position:42,sidebar_label:"Decimal"},o="Decimal(P, S), Decimal32(S), Decimal64(S), Decimal128(S), Decimal256(S)",m={unversionedId:"ru/sql-reference/data-types/decimal",id:"ru/sql-reference/data-types/decimal",title:"Decimal(P, S), Decimal32(S), Decimal64(S), Decimal128(S), Decimal256(S)",description:"decimalp-s-decimal32s-decimal64s-decimal128s}",source:"@site/docs/ru/sql-reference/data-types/decimal.md",sourceDirName:"ru/sql-reference/data-types",slug:"/ru/sql-reference/data-types/decimal",permalink:"/ru/sql-reference/data-types/decimal",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/sql-reference/data-types/decimal.md",tags:[],version:"current",sidebarPosition:42,frontMatter:{sidebar_position:42,sidebar_label:"Decimal"},sidebar:"russia",previous:{title:"Float32, Float64",permalink:"/ru/sql-reference/data-types/float"},next:{title:"\u0411\u0443\u043b\u0435\u0432\u044b \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f",permalink:"/ru/sql-reference/data-types/boolean"}},u={},p=[{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"parametry",level:2},{value:"\u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u044b Decimal",id:"diapazony-decimal",level:2},{value:"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435",id:"vnutrennee-predstavlenie",level:2},{value:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0438 \u0442\u0438\u043f\u044b \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430",id:"operatsii-i-tipy-rezultata",level:2},{value:"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043f\u0435\u0440\u0435\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0439",id:"proverka-perepolnenii",level:2}],s={toc:p};function d(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"decimalp-s-decimal32s-decimal64s-decimal128s"},"Decimal(P, S), Decimal32(S), Decimal64(S), Decimal128(S), Decimal256(S)"),(0,r.kt)("p",null,"\u0417\u043d\u0430\u043a\u043e\u0432\u044b\u0435 \u0434\u0440\u043e\u0431\u043d\u044b\u0435 \u0447\u0438\u0441\u043b\u0430 \u0441 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435\u043c \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u0441\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0443\u043c\u043d\u043e\u0436\u0435\u043d\u0438\u044f \u0438 \u0432\u044b\u0447\u0438\u0442\u0430\u043d\u0438\u044f. \u0414\u043b\u044f \u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0442\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u043d\u0438\u0435 (\u043d\u0435 \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u0438\u0435) \u0437\u043d\u0430\u043a\u043e\u0432, \u043d\u0435 \u043f\u043e\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0445 \u0432 \u043c\u043b\u0430\u0434\u0448\u0438\u0439 \u0434\u0435\u0441\u044f\u0442\u0438\u0447\u043d\u044b\u0439 \u0440\u0430\u0437\u0440\u044f\u0434."),(0,r.kt)("h2",{id:"parametry"},"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"P - precision. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u0437 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430 ","["," 1 : 76 ","]",". \u041e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u0435\u0441\u044f\u0442\u0438\u0447\u043d\u044b\u0445 \u0437\u043d\u0430\u043a\u043e\u0432 (\u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u0434\u0440\u043e\u0431\u043d\u043e\u0439 \u0447\u0430\u0441\u0442\u0438) \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0447\u0438\u0441\u043b\u043e."),(0,r.kt)("li",{parentName:"ul"},"S - scale. \u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0438\u0437 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430 ","["," 0 : P ","]",". \u041e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u0435\u0441\u044f\u0442\u0438\u0447\u043d\u044b\u0445 \u0437\u043d\u0430\u043a\u043e\u0432 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044f \u0432 \u0434\u0440\u043e\u0431\u043d\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 \u0447\u0438\u0441\u043b\u0430.")),(0,r.kt)("p",null,"\u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 P Decimal(P, S) \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0438\u043d\u043e\u043d\u0438\u043c\u043e\u043c:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"P \u0438\u0437 ","["," 1 : 9 ","]"," - \u0434\u043b\u044f Decimal32(S)"),(0,r.kt)("li",{parentName:"ul"},"P \u0438\u0437 ","["," 10 : 18 ","]"," - \u0434\u043b\u044f Decimal64(S)"),(0,r.kt)("li",{parentName:"ul"},"P \u0438\u0437 ","["," 19 : 38 ","]"," - \u0434\u043b\u044f Decimal128(S)"),(0,r.kt)("li",{parentName:"ul"},"P \u0438\u0437 ","["," 39 : 76 ","]"," - \u0434\u043b\u044f Decimal256(S)")),(0,r.kt)("h2",{id:"diapazony-decimal"},"\u0414\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u044b Decimal"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Decimal32(S) - ( -1 ","*"," 10^(9 - S), 1 ","*"," 10^(9 - S) )"),(0,r.kt)("li",{parentName:"ul"},"Decimal64(S) - ( -1 ","*"," 10^(18 - S), 1 ","*"," 10^(18 - S) )"),(0,r.kt)("li",{parentName:"ul"},"Decimal128(S) - ( -1 ","*"," 10^(38 - S), 1 ","*"," 10^(38 - S) )"),(0,r.kt)("li",{parentName:"ul"},"Decimal256(S) - ( -1 ","*"," 10^(76 - S), 1 ","*"," 10^(76 - S) )")),(0,r.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, Decimal32(4) \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0447\u0438\u0441\u043b\u0430 \u043e\u0442 -99999.9999 \u0434\u043e 99999.9999 c \u0448\u0430\u0433\u043e\u043c 0.0001."),(0,r.kt)("h2",{id:"vnutrennee-predstavlenie"},"\u0412\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0435\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435"),(0,r.kt)("p",null,"\u0412\u043d\u0443\u0442\u0440\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043a\u0430\u043a \u0437\u043d\u0430\u043a\u043e\u0432\u044b\u0435 \u0446\u0435\u043b\u044b\u0435 \u0447\u0438\u0441\u043b\u0430, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0432\u0443\u044e\u0449\u0435\u0439 \u0440\u0430\u0437\u0440\u044f\u0434\u043d\u043e\u0441\u0442\u0438. \u0420\u0435\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u044b, \u0445\u0440\u0430\u043d\u044f\u0449\u0438\u0435\u0441\u044f \u0432 \u044f\u0447\u0435\u0439\u043a\u0430\u0445 \u043f\u0430\u043c\u044f\u0442\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0431\u043e\u043b\u044c\u0448\u0435 \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u043d\u044b\u0445. \u0417\u0430\u044f\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u044b Decimal \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u0432\u0432\u043e\u0434\u0435 \u0447\u0438\u0441\u043b\u0430 \u0438\u0437 \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f.\n\u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 CPU \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 128-\u0431\u0438\u0442\u043d\u044b\u0435 \u0447\u0438\u0441\u043b\u0430, \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043d\u0430\u0434 Decimal128 \u044d\u043c\u0443\u043b\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e. Decimal128 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0432 \u0440\u0430\u0437\u044b \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u0435\u0439 \u0447\u0435\u043c Decimal32/Decimal64."),(0,r.kt)("h2",{id:"operatsii-i-tipy-rezultata"},"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0438 \u0442\u0438\u043f\u044b \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430"),(0,r.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043c\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u043c\u044f Decimal \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u0442\u0441\u044f \u0434\u043e \u0431\u043e\u043b\u044c\u0448\u0435\u0433\u043e \u0442\u0438\u043f\u0430 (\u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e \u043e\u0442 \u043f\u043e\u0440\u044f\u0434\u043a\u0430 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Decimal64(S1) <op> Decimal32(S2) -> Decimal64(S)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Decimal128(S1) <op> Decimal32(S2) -> Decimal128(S)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Decimal128(S1) <op> Decimal64(S2) -> Decimal128(S)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Decimal256(S1) <op> Decimal<32|64|128>(S2) -> Decimal256(S)"))),(0,r.kt)("p",null,"\u0414\u043b\u044f \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u0434\u0440\u043e\u0431\u043d\u043e\u0439 \u0447\u0430\u0441\u0442\u0438 (scale) \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0442 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u0441\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0432\u044b\u0447\u0438\u0442\u0430\u043d\u0438\u0435: S = max(S1, S2)."),(0,r.kt)("li",{parentName:"ul"},"\u0443\u043c\u043d\u043e\u0436\u0435\u043d\u0438\u0435: S = S1 + S2."),(0,r.kt)("li",{parentName:"ul"},"\u0434\u0435\u043b\u0435\u043d\u0438\u0435: S = S1.")),(0,r.kt)("p",null,"\u041f\u0440\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f\u0445 \u043c\u0435\u0436\u0434\u0443 Decimal \u0438 \u0446\u0435\u043b\u044b\u043c\u0438 \u0447\u0438\u0441\u043b\u0430\u043c\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f Decimal, \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b\u0439 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0443."),(0,r.kt)("p",null,"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043c\u0435\u0436\u0434\u0443 Decimal \u0438 Float32/64 \u043d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u044b. \u0414\u043b\u044f \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u0435\u043d\u0438\u044f \u0442\u0430\u043a\u0438\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u043d\u0443\u0436\u043d\u043e \u044f\u0432\u043d\u043e \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043e\u0434\u0438\u043d \u0438\u0437 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c\u0438: toDecimal32, toDecimal64, toDecimal128, \u0438\u043b\u0438 toFloat32, toFloat64. \u042d\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u043d\u043e \u0438\u0437 \u0434\u0432\u0443\u0445 \u0441\u043e\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439. \u0412\u043e-\u043f\u0435\u0440\u0432\u044b\u0445, \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0431\u0443\u0434\u0435\u0442 \u0441 \u043f\u043e\u0442\u0435\u0440\u0435\u0439 \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438. \u0412\u043e-\u0432\u0442\u043e\u0440\u044b\u0445, \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0438\u043f\u0430 - \u0434\u043e\u0440\u043e\u0433\u0430\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f, \u0438\u0437-\u0437\u0430 \u0435\u0435 \u043d\u0430\u043b\u0438\u0447\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u043c\u043e\u0436\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0432 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437 \u0434\u043e\u043b\u044c\u0448\u0435."),(0,r.kt)("p",null,"\u0427\u0430\u0441\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u043d\u0430\u0434 Decimal \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u044e\u0442 Float64 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, var, stddev). \u0414\u043b\u044f \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0438\u0437 \u043d\u0438\u0445 \u043f\u0440\u043e\u043c\u0435\u0436\u0443\u0442\u043e\u0447\u043d\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0445\u043e\u0434\u044f\u0442 \u0432 Decimal.\n\u0414\u043b\u044f \u0442\u0430\u043a\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043d\u0430\u0434 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0432\u043e Float64 \u0438 Decimal \u043c\u043e\u0436\u0435\u0442 \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f, \u043d\u0435\u0441\u043c\u043e\u0442\u0440\u044f \u043d\u0430 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u0439 \u0442\u0438\u043f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430."),(0,r.kt)("h2",{id:"proverka-perepolnenii"},"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043f\u0435\u0440\u0435\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0439"),(0,r.kt)("p",null,"\u041f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u043d\u0430\u0434 \u0442\u0438\u043f\u043e\u043c Decimal \u043c\u043e\u0433\u0443\u0442 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442\u044c \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f. \u041b\u0438\u0448\u043d\u044f\u044f \u0434\u0440\u043e\u0431\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u043e\u0442\u0431\u0440\u0430\u0441\u044b\u0432\u0430\u0435\u0442\u0441\u044f (\u043d\u0435 \u043e\u043a\u0440\u0443\u0433\u043b\u044f\u0435\u0442\u0441\u044f). \u041b\u0438\u0448\u043d\u044f\u044f \u0446\u0435\u043b\u043e\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u0430\u044f \u0447\u0430\u0441\u0442\u044c \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043a \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044e."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toDecimal32(2, 4) AS x, x / 3\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500x\u2500\u252c\u2500divide(toDecimal32(2, 4), 3)\u2500\u2510\n\u2502 2.0000 \u2502                       0.6666 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toDecimal32(4.2, 8) AS x, x * x\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"DB::Exception: Scale is out of bounds.\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toDecimal32(4.2, 8) AS x, 6 * x\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"DB::Exception: Decimal math overflow.\n")),(0,r.kt)("p",null,"\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043f\u0435\u0440\u0435\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442 \u043a \u0437\u0430\u043c\u0435\u0434\u043b\u0435\u043d\u0438\u044e \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439. \u041f\u0440\u0438 \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u043e\u0441\u0442\u0438, \u0447\u0442\u043e \u0442\u0438\u043f\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0445\u0432\u0430\u0442\u0438\u0442 \u0434\u043b\u044f \u0435\u0433\u043e \u0437\u0430\u043f\u0438\u0441\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u043f\u0435\u0440\u0435\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043c\u043e\u0436\u043d\u043e \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u043e\u0439 decimal_check_overflow. \u0412 \u044d\u0442\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0432\u0435\u0440\u043d\u0435\u0442\u0441\u044f \u043d\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SET decimal_check_overflow = 0;\nSELECT toDecimal32(4.2, 8) AS x, 6 * x\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500x\u2500\u252c\u2500multiply(6, toDecimal32(4.2, 8))\u2500\u2510\n\u2502 4.20000000 \u2502                     -17.74967296 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,r.kt)("p",null,"\u041f\u0435\u0440\u0435\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u044f\u0442 \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u0430\u0440\u0438\u0444\u043c\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f\u0445, \u043d\u043e \u0438 \u043d\u0430 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044f\u0445 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f. \u041e\u0442\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u0441\u0442\u043e\u0438\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u043f\u043e\u043b\u043d\u043e\u0439 \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0432 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toDecimal32(1, 8) < 100\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"DB::Exception: Can't compare.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0442\u0430\u043a\u0436\u0435")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru/sql-reference/functions/other-functions#is-decimal-overflow"},"isDecimalOverflow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ru/sql-reference/functions/other-functions#count-digits"},"countDigits"))))}d.isMDXComponent=!0}}]);