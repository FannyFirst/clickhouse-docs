"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[57999],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=i(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,u(u({ref:t},s),{},{components:n})):r.createElement(d,u({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,u=new Array(o);u[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var i=2;i<o;i++)u[i]=n[i];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},19136:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),u=["components"],l={sidebar_position:38,sidebar_label:"FUNCTION"},c="CREATE FUNCTION",i={unversionedId:"ru/sql-reference/statements/create/function",id:"ru/sql-reference/statements/create/function",title:"CREATE FUNCTION",description:"create-function}",source:"@site/docs/ru/sql-reference/statements/create/function.md",sourceDirName:"ru/sql-reference/statements/create",slug:"/ru/sql-reference/statements/create/function",permalink:"/ru/sql-reference/statements/create/function",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/ru/sql-reference/statements/create/function.md",tags:[],version:"current",sidebarPosition:38,frontMatter:{sidebar_position:38,sidebar_label:"FUNCTION"},sidebar:"russia",previous:{title:"\u0421\u043b\u043e\u0432\u0430\u0440\u044c",permalink:"/ru/sql-reference/statements/create/dictionary"},next:{title:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c",permalink:"/ru/sql-reference/statements/create/user"}},s={},p=[],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-function"},"CREATE FUNCTION"),(0,o.kt)("p",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0438\u0437 \u043b\u044f\u043c\u0431\u0434\u0430-\u0432\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u044f. \u0412\u044b\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u043a\u043e\u043d\u0441\u0442\u0430\u043d\u0442, \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043e\u0432 \u0438 \u0432\u044b\u0437\u043e\u0432\u043e\u0432 \u0434\u0440\u0443\u0433\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION name AS (parameter0, ...) -> expression\n")),(0,o.kt)("p",null,"\u0423 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432."),(0,o.kt)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439 \u043d\u0430 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0418\u043c\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u0441\u0440\u0435\u0434\u0438 \u0432\u0441\u0435\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439."),(0,o.kt)("li",{parentName:"ul"},"\u0420\u0435\u043a\u0443\u0440\u0441\u0438\u0432\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u044b."),(0,o.kt)("li",{parentName:"ul"},"\u0412\u0441\u0435 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0435\u0439, \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u044b \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0435\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432.")),(0,o.kt)("p",null,"\u0415\u0441\u043b\u0438 \u043a\u0430\u043a\u043e\u0435-\u043d\u0438\u0431\u0443\u0434\u044c \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0435 \u043d\u0430\u0440\u0443\u0448\u0430\u0435\u0442\u0441\u044f, \u0442\u043e \u043f\u0440\u0438 \u043f\u043e\u043f\u044b\u0442\u043a\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0432\u043e\u0437\u043d\u0438\u043a\u0430\u0435\u0442 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u041f\u0440\u0438\u043c\u0435\u0440")),(0,o.kt)("p",null,"\u0417\u0430\u043f\u0440\u043e\u0441:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION linear_equation AS (x, k, b) -> k*x + b;\nSELECT number, linear_equation(number, 2, 1) FROM numbers(3);\n")),(0,o.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500number\u2500\u252c\u2500plus(multiply(2, number), 1)\u2500\u2510\n\u2502      0 \u2502                            1 \u2502\n\u2502      1 \u2502                            3 \u2502\n\u2502      2 \u2502                            5 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,"\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442 ",(0,o.kt)("a",{parentName:"p",href:"/ru/sql-reference/functions/conditional-functions"},"\u0443\u0441\u043b\u043e\u0432\u043d\u0443\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u044e"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE FUNCTION parity_str AS (n) -> if(n % 2, 'odd', 'even');\nSELECT number, parity_str(number) FROM numbers(3);\n")),(0,o.kt)("p",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500number\u2500\u252c\u2500if(modulo(number, 2), 'odd', 'even')\u2500\u2510\n\u2502      0 \u2502 even                                 \u2502\n\u2502      1 \u2502 odd                                  \u2502\n\u2502      2 \u2502 even                                 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")))}m.isMDXComponent=!0}}]);