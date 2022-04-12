"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[77495],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,s=e.originalType,o=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(n),d=l,h=p["".concat(o,".").concat(d)]||p[d]||f[d]||s;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=n.length,i=new Array(s);i[0]=p;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},86249:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return f}});var r=n(87462),l=n(63366),s=(n(67294),n(3905)),i=["components"],a={},o="\u5b57\u7b26\u4e32\u51fd\u6570",u={unversionedId:"zh/sql-reference/functions/string-functions",id:"zh/sql-reference/functions/string-functions",title:"\u5b57\u7b26\u4e32\u51fd\u6570",description:"zi-fu-chuan-han-shu}",source:"@site/docs/zh/sql-reference/functions/string-functions.md",sourceDirName:"zh/sql-reference/functions",slug:"/zh/sql-reference/functions/string-functions",permalink:"/zh/sql-reference/functions/string-functions",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/zh/sql-reference/functions/string-functions.md",tags:[],version:"current",frontMatter:{},sidebar:"chinese",previous:{title:"\u5b57\u7b26\u4e32\u62c6\u5206\u5408\u5e76\u51fd\u6570",permalink:"/zh/sql-reference/functions/splitting-merging-functions"},next:{title:"\u5b57\u7b26\u4e32\u66ff\u6362\u51fd\u6570",permalink:"/zh/sql-reference/functions/string-replace-functions"}},c={},f=[{value:"empty",id:"string-functions-empty",level:2},{value:"notEmpty",id:"notempty",level:2},{value:"length",id:"length",level:2},{value:"lengthUTF8",id:"lengthutf8",level:2},{value:"char_length,CHAR_LENGTH",id:"char-length-char-length",level:2},{value:"character_length,CHARACTER_LENGTH",id:"character-length-character-length",level:2},{value:"lower, lcase",id:"lower-lcase",level:2},{value:"upper, ucase",id:"upper-ucase",level:2},{value:"lowerUTF8",id:"lowerutf8",level:2},{value:"upperUTF8",id:"upperutf8",level:2},{value:"isValidUTF8",id:"isvalidutf8",level:2},{value:"toValidUTF8",id:"tovalidutf8",level:2},{value:"\u793a\u4f8b",id:"shi-li",level:3},{value:"reverse",id:"reverse",level:2},{value:"reverseUTF8",id:"reverseutf8",level:2},{value:"format(pattern, s0, s1, \u2026)",id:"formatpattern-s0-s1",level:2},{value:"concat(s1, s2, \u2026)",id:"concat-s1-s2",level:2},{value:"concatAssumeInjective(s1, s2, \u2026)",id:"concatassumeinjectives1-s2",level:2},{value:"substring(s,offset,length),mid(s,offset,length),substr(s,offset,length)",id:"substrings-offset-length-mids-offset-length-substrs-offset-length",level:2},{value:"substringUTF8(s,offset,length)",id:"substringutf8s-offset-length",level:2},{value:"appendTrailingCharIfAbsent(s,c)",id:"appendtrailingcharifabsents-c",level:2},{value:"convertCharset(s,from,to)",id:"convertcharsets-from-to",level:2},{value:"base64Encode(s)",id:"base64encodes",level:2},{value:"base64Decode(s)",id:"base64decodes",level:2},{value:"tryBase64Decode(s)",id:"trybase64decodes",level:2},{value:"endsWith(s,\u540e\u7f00)",id:"endswiths-suffix",level:2},{value:"startsWith\uff08s\uff0c\u524d\u7f00)",id:"startswiths-prefix",level:2},{value:"trimLeft(s)",id:"trimlefts",level:2},{value:"trimRight(s)",id:"trimrights",level:2},{value:"trimBoth(s)",id:"trimboths",level:2}],p={toc:f};function d(e){var t=e.components,n=(0,l.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"zi-fu-chuan-han-shu"},"\u5b57\u7b26\u4e32\u51fd\u6570"),(0,s.kt)("h2",{id:"string-functions-empty"},"empty"),(0,s.kt)("p",null,"\u5bf9\u4e8e\u7a7a\u5b57\u7b26\u4e32\u8fd4\u56de1\uff0c\u5bf9\u4e8e\u975e\u7a7a\u5b57\u7b26\u4e32\u8fd4\u56de0\u3002\n\u7ed3\u679c\u7c7b\u578b\u662fUInt8\u3002\n\u5982\u679c\u5b57\u7b26\u4e32\u5305\u542b\u81f3\u5c11\u4e00\u4e2a\u5b57\u8282\uff0c\u5219\u8be5\u5b57\u7b26\u4e32\u88ab\u89c6\u4e3a\u975e\u7a7a\u5b57\u7b26\u4e32\uff0c\u5373\u4f7f\u8fd9\u662f\u4e00\u4e2a\u7a7a\u683c\u6216\u7a7a\u5b57\u7b26\u3002\n\u8be5\u51fd\u6570\u4e5f\u9002\u7528\u4e8e\u6570\u7ec4\u3002"),(0,s.kt)("h2",{id:"notempty"},"notEmpty"),(0,s.kt)("p",null,"\u5bf9\u4e8e\u7a7a\u5b57\u7b26\u4e32\u8fd4\u56de0\uff0c\u5bf9\u4e8e\u975e\u7a7a\u5b57\u7b26\u4e32\u8fd4\u56de1\u3002\n\u7ed3\u679c\u7c7b\u578b\u662fUInt8\u3002\n\u8be5\u51fd\u6570\u4e5f\u9002\u7528\u4e8e\u6570\u7ec4\u3002"),(0,s.kt)("h2",{id:"length"},"length"),(0,s.kt)("p",null,"\u8fd4\u56de\u5b57\u7b26\u4e32\u7684\u5b57\u8282\u957f\u5ea6\u3002\n\u7ed3\u679c\u7c7b\u578b\u662fUInt64\u3002\n\u8be5\u51fd\u6570\u4e5f\u9002\u7528\u4e8e\u6570\u7ec4\u3002"),(0,s.kt)("h2",{id:"lengthutf8"},"lengthUTF8"),(0,s.kt)("p",null,"\u5047\u5b9a\u5b57\u7b26\u4e32\u4ee5UTF-8\u7f16\u7801\u7ec4\u6210\u7684\u6587\u672c\uff0c\u8fd4\u56de\u6b64\u5b57\u7b26\u4e32\u7684Unicode\u5b57\u7b26\u957f\u5ea6\u3002\u5982\u679c\u4f20\u5165\u7684\u5b57\u7b26\u4e32\u4e0d\u662fUTF-8\u7f16\u7801\uff0c\u5219\u51fd\u6570\u53ef\u80fd\u8fd4\u56de\u4e00\u4e2a\u9884\u671f\u5916\u7684\u503c\uff08\u4e0d\u4f1a\u629b\u51fa\u5f02\u5e38\uff09\u3002\n\u7ed3\u679c\u7c7b\u578b\u662fUInt64\u3002"),(0,s.kt)("h2",{id:"char-length-char-length"},"char_length,CHAR_LENGTH"),(0,s.kt)("p",null,"\u5047\u5b9a\u5b57\u7b26\u4e32\u4ee5UTF-8\u7f16\u7801\u7ec4\u6210\u7684\u6587\u672c\uff0c\u8fd4\u56de\u6b64\u5b57\u7b26\u4e32\u7684Unicode\u5b57\u7b26\u957f\u5ea6\u3002\u5982\u679c\u4f20\u5165\u7684\u5b57\u7b26\u4e32\u4e0d\u662fUTF-8\u7f16\u7801\uff0c\u5219\u51fd\u6570\u53ef\u80fd\u8fd4\u56de\u4e00\u4e2a\u9884\u671f\u5916\u7684\u503c\uff08\u4e0d\u4f1a\u629b\u51fa\u5f02\u5e38\uff09\u3002\n\u7ed3\u679c\u7c7b\u578b\u662fUInt64\u3002"),(0,s.kt)("h2",{id:"character-length-character-length"},"character_length,CHARACTER_LENGTH"),(0,s.kt)("p",null,"\u5047\u5b9a\u5b57\u7b26\u4e32\u4ee5UTF-8\u7f16\u7801\u7ec4\u6210\u7684\u6587\u672c\uff0c\u8fd4\u56de\u6b64\u5b57\u7b26\u4e32\u7684Unicode\u5b57\u7b26\u957f\u5ea6\u3002\u5982\u679c\u4f20\u5165\u7684\u5b57\u7b26\u4e32\u4e0d\u662fUTF-8\u7f16\u7801\uff0c\u5219\u51fd\u6570\u53ef\u80fd\u8fd4\u56de\u4e00\u4e2a\u9884\u671f\u5916\u7684\u503c\uff08\u4e0d\u4f1a\u629b\u51fa\u5f02\u5e38\uff09\u3002\n\u7ed3\u679c\u7c7b\u578b\u662fUInt64\u3002"),(0,s.kt)("h2",{id:"lower-lcase"},"lower, lcase"),(0,s.kt)("p",null,"\u5c06\u5b57\u7b26\u4e32\u4e2d\u7684ASCII\u8f6c\u6362\u4e3a\u5c0f\u5199\u3002"),(0,s.kt)("h2",{id:"upper-ucase"},"upper, ucase"),(0,s.kt)("p",null,"\u5c06\u5b57\u7b26\u4e32\u4e2d\u7684ASCII\u8f6c\u6362\u4e3a\u5927\u5199\u3002"),(0,s.kt)("h2",{id:"lowerutf8"},"lowerUTF8"),(0,s.kt)("p",null,"\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u5c0f\u5199\uff0c\u51fd\u6570\u5047\u8bbe\u5b57\u7b26\u4e32\u662f\u4ee5UTF-8\u7f16\u7801\u6587\u672c\u7684\u5b57\u7b26\u96c6\u3002\n\u540c\u65f6\u51fd\u6570\u4e0d\u68c0\u6d4b\u8bed\u8a00\u3002\u56e0\u6b64\u5bf9\u571f\u8033\u5176\u4eba\u6765\u8bf4\uff0c\u7ed3\u679c\u53ef\u80fd\u4e0d\u5b8c\u5168\u6b63\u786e\u3002\n\u5982\u679cUTF-8\u5b57\u8282\u5e8f\u5217\u7684\u957f\u5ea6\u5bf9\u4e8e\u4ee3\u7801\u70b9\u7684\u5927\u5199\u548c\u5c0f\u5199\u4e0d\u540c\uff0c\u5219\u8be5\u4ee3\u7801\u70b9\u7684\u7ed3\u679c\u53ef\u80fd\u4e0d\u6b63\u786e\u3002\n\u5982\u679c\u5b57\u7b26\u4e32\u5305\u542b\u4e00\u7ec4\u975eUTF-8\u7684\u5b57\u8282\uff0c\u5219\u5c06\u5f15\u53d1\u672a\u5b9a\u4e49\u884c\u4e3a\u3002"),(0,s.kt)("h2",{id:"upperutf8"},"upperUTF8"),(0,s.kt)("p",null,"\u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u5927\u5199\uff0c\u51fd\u6570\u5047\u8bbe\u5b57\u7b26\u4e32\u662f\u4ee5UTF-8\u7f16\u7801\u6587\u672c\u7684\u5b57\u7b26\u96c6\u3002\n\u540c\u65f6\u51fd\u6570\u4e0d\u68c0\u6d4b\u8bed\u8a00\u3002\u56e0\u6b64\u5bf9\u571f\u8033\u5176\u4eba\u6765\u8bf4\uff0c\u7ed3\u679c\u53ef\u80fd\u4e0d\u5b8c\u5168\u6b63\u786e\u3002\n\u5982\u679cUTF-8\u5b57\u8282\u5e8f\u5217\u7684\u957f\u5ea6\u5bf9\u4e8e\u4ee3\u7801\u70b9\u7684\u5927\u5199\u548c\u5c0f\u5199\u4e0d\u540c\uff0c\u5219\u8be5\u4ee3\u7801\u70b9\u7684\u7ed3\u679c\u53ef\u80fd\u4e0d\u6b63\u786e\u3002\n\u5982\u679c\u5b57\u7b26\u4e32\u5305\u542b\u4e00\u7ec4\u975eUTF-8\u7684\u5b57\u8282\uff0c\u5219\u5c06\u5f15\u53d1\u672a\u5b9a\u4e49\u884c\u4e3a\u3002"),(0,s.kt)("h2",{id:"isvalidutf8"},"isValidUTF8"),(0,s.kt)("p",null,"\u68c0\u67e5\u5b57\u7b26\u4e32\u662f\u5426\u4e3a\u6709\u6548\u7684UTF-8\u7f16\u7801\uff0c\u662f\u5219\u8fd4\u56de1\uff0c\u5426\u5219\u8fd4\u56de0\u3002"),(0,s.kt)("h2",{id:"tovalidutf8"},"toValidUTF8"),(0,s.kt)("p",null,"\u7528",(0,s.kt)("inlineCode",{parentName:"p"},"\ufffd"),"\uff08U+FFFD\uff09\u5b57\u7b26\u66ff\u6362\u65e0\u6548\u7684UTF-8\u5b57\u7b26\u3002\u6240\u6709\u8fde\u7eed\u7684\u65e0\u6548\u5b57\u7b26\u90fd\u4f1a\u88ab\u66ff\u6362\u4e3a\u4e00\u4e2a\u66ff\u6362\u5b57\u7b26\u3002"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"toValidUTF8( input_string )\n")),(0,s.kt)("p",null,"\u53c2\u6570\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"input_string \u2014 \u4efb\u4f55\u4e00\u4e2a",(0,s.kt)("a",{parentName:"li",href:"/zh/sql-reference/functions/string-functions"},"\u5b57\u7b26\u4e32"),"\u7c7b\u578b\u7684\u5bf9\u8c61\u3002")),(0,s.kt)("p",null,"\u8fd4\u56de\u503c\uff1a \u6709\u6548\u7684UTF-8\u5b57\u7b26\u4e32\u3002"),(0,s.kt)("h3",{id:"shi-li"},"\u793a\u4f8b"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT toValidUTF8('\\x61\\xF0\\x80\\x80\\x80b')\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500toValidUTF8('a\ufffd\ufffd\ufffd\ufffdb')\u2500\u2510\n\u2502 a\ufffdb                   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("h2",{id:"reverse"},"reverse"),(0,s.kt)("p",null,"\u53cd\u8f6c\u5b57\u7b26\u4e32\u3002"),(0,s.kt)("h2",{id:"reverseutf8"},"reverseUTF8"),(0,s.kt)("p",null,"\u4ee5Unicode\u5b57\u7b26\u4e3a\u5355\u4f4d\u53cd\u8f6cUTF-8\u7f16\u7801\u7684\u5b57\u7b26\u4e32\u3002\u5982\u679c\u5b57\u7b26\u4e32\u4e0d\u662fUTF-8\u7f16\u7801\uff0c\u5219\u53ef\u80fd\u83b7\u53d6\u5230\u4e00\u4e2a\u975e\u9884\u671f\u7684\u7ed3\u679c\uff08\u4e0d\u4f1a\u629b\u51fa\u5f02\u5e38\uff09\u3002"),(0,s.kt)("h2",{id:"formatpattern-s0-s1"},"format(pattern, s0, s1, \u2026)"),(0,s.kt)("p",null,"\u4f7f\u7528\u5e38\u91cf\u5b57\u7b26\u4e32",(0,s.kt)("inlineCode",{parentName:"p"},"pattern"),"\u683c\u5f0f\u5316\u5176\u4ed6\u53c2\u6570\u3002",(0,s.kt)("inlineCode",{parentName:"p"},"pattern"),"\u5b57\u7b26\u4e32\u4e2d\u5305\u542b\u7531\u5927\u62ec\u53f7",(0,s.kt)("inlineCode",{parentName:"p"},"{}"),"\u5305\u56f4\u7684\xab\u66ff\u6362\u5b57\u6bb5\xbb\u3002 \u672a\u88ab\u5305\u542b\u5728\u5927\u62ec\u53f7\u4e2d\u7684\u4efb\u4f55\u5185\u5bb9\u90fd\u88ab\u89c6\u4e3a\u6587\u672c\u5185\u5bb9\uff0c\u5b83\u5c06\u539f\u6837\u4fdd\u7559\u5728\u8fd4\u56de\u503c\u4e2d\u3002 \u5982\u679c\u4f60\u9700\u8981\u5728\u6587\u672c\u5185\u5bb9\u4e2d\u5305\u542b\u4e00\u4e2a\u5927\u62ec\u53f7\u5b57\u7b26\uff0c\u5b83\u53ef\u4ee5\u901a\u8fc7\u52a0\u500d\u6765\u8f6c\u4e49\uff1a",(0,s.kt)("inlineCode",{parentName:"p"},"{{ '{{' }}"),"\u548c",(0,s.kt)("inlineCode",{parentName:"p"},"{{ '{{' }} '}}' }}"),"\u3002 \u5b57\u6bb5\u540d\u79f0\u53ef\u4ee5\u662f\u6570\u5b57\uff08\u4ece\u96f6\u5f00\u59cb\uff09\u6216\u7a7a\uff08\u7136\u540e\u5c06\u5b83\u4eec\u89c6\u4e3a\u8fde\u7eed\u6570\u5b57\uff09"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT format('{1} {0} {1}', 'World', 'Hello')\n\n\u250c\u2500format('{1} {0} {1}', 'World', 'Hello')\u2500\u2510\n\u2502 Hello World Hello                       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nSELECT format('{} {}', 'Hello', 'World')\n\n\u250c\u2500format('{} {}', 'Hello', 'World')\u2500\u2510\n\u2502 Hello World                       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,s.kt)("h2",{id:"concat-s1-s2"},"concat(s1, s2, \u2026)"),(0,s.kt)("p",null,"\u5c06\u53c2\u6570\u4e2d\u7684\u591a\u4e2a\u5b57\u7b26\u4e32\u62fc\u63a5\uff0c\u4e0d\u5e26\u5206\u9694\u7b26\u3002"),(0,s.kt)("h2",{id:"concatassumeinjectives1-s2"},"concatAssumeInjective(s1, s2, \u2026)"),(0,s.kt)("p",null,"\u4e0e",(0,s.kt)("a",{parentName:"p",href:"#concat-s1-s2"},"concat"),"\u76f8\u540c\uff0c\u533a\u522b\u5728\u4e8e\uff0c\u4f60\u9700\u8981\u4fdd\u8bc1concat(s1, s2, s3) -",">"," s4\u662f\u5355\u5c04\u7684\uff0c\u5b83\u5c06\u7528\u4e8eGROUP BY\u7684\u4f18\u5316\u3002"),(0,s.kt)("h2",{id:"substrings-offset-length-mids-offset-length-substrs-offset-length"},"substring(s,offset,length),mid(s,offset,length),substr(s,offset,length)"),(0,s.kt)("p",null,"\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\u622a\u53d6\u6307\u5b9a\u4f4d\u7f6e\u5b57\u7b26\u4e32\uff0c\u8fd4\u56de\u4ee5\u2019offset\u2019\u4f4d\u7f6e\u4e3a\u5f00\u5934\uff0c\u957f\u5ea6\u4e3a\u2019length\u2019\u7684\u5b50\u4e32\u3002\u2019offset\u2019\u4ece1\u5f00\u59cb\uff08\u4e0e\u6807\u51c6SQL\u76f8\u540c\uff09\u3002\u2019offset\u2019\u548c\u2019length\u2019\u53c2\u6570\u5fc5\u987b\u662f\u5e38\u91cf\u3002"),(0,s.kt)("h2",{id:"substringutf8s-offset-length"},"substringUTF8(s,offset,length)"),(0,s.kt)("p",null,"\u4e0e\u2019substring\u2019\u76f8\u540c\uff0c\u4f46\u5176\u64cd\u4f5c\u5355\u4f4d\u4e3aUnicode\u5b57\u7b26\uff0c\u51fd\u6570\u5047\u8bbe\u5b57\u7b26\u4e32\u662f\u4ee5UTF-8\u8fdb\u884c\u7f16\u7801\u7684\u6587\u672c\u3002\u5982\u679c\u4e0d\u662f\u5219\u53ef\u80fd\u8fd4\u56de\u4e00\u4e2a\u9884\u671f\u5916\u7684\u7ed3\u679c\uff08\u4e0d\u4f1a\u629b\u51fa\u5f02\u5e38\uff09\u3002"),(0,s.kt)("h2",{id:"appendtrailingcharifabsents-c"},"appendTrailingCharIfAbsent(s,c)"),(0,s.kt)("p",null,"\u5982\u679c\u2019s\u2019\u5b57\u7b26\u4e32\u975e\u7a7a\u5e76\u4e14\u672b\u5c3e\u4e0d\u5305\u542b\u2019c\u2019\u5b57\u7b26\uff0c\u5219\u5c06\u2019c\u2019\u5b57\u7b26\u9644\u52a0\u5230\u672b\u5c3e\u3002"),(0,s.kt)("h2",{id:"convertcharsets-from-to"},"convertCharset(s,from,to)"),(0,s.kt)("p",null,"\u8fd4\u56de\u4ece\u2019from\u2019\u4e2d\u7684\u7f16\u7801\u8f6c\u6362\u4e3a\u2019to\u2019\u4e2d\u7684\u7f16\u7801\u7684\u5b57\u7b26\u4e32\u2019s\u2019\u3002"),(0,s.kt)("h2",{id:"base64encodes"},"base64Encode(s)"),(0,s.kt)("p",null,"\u5c06\u5b57\u7b26\u4e32\u2019s\u2019\u7f16\u7801\u6210base64"),(0,s.kt)("h2",{id:"base64decodes"},"base64Decode(s)"),(0,s.kt)("p",null,"\u4f7f\u7528base64\u5c06\u5b57\u7b26\u4e32\u89e3\u7801\u6210\u539f\u59cb\u5b57\u7b26\u4e32\u3002\u5982\u679c\u5931\u8d25\u5219\u629b\u51fa\u5f02\u5e38\u3002"),(0,s.kt)("h2",{id:"trybase64decodes"},"tryBase64Decode(s)"),(0,s.kt)("p",null,"\u4f7f\u7528base64\u5c06\u5b57\u7b26\u4e32\u89e3\u7801\u6210\u539f\u59cb\u5b57\u7b26\u4e32\u3002\u4f46\u5982\u679c\u51fa\u73b0\u9519\u8bef\uff0c\u5c06\u8fd4\u56de\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,s.kt)("h2",{id:"endswiths-suffix"},"endsWith(s,\u540e\u7f00)"),(0,s.kt)("p",null,"\u8fd4\u56de\u662f\u5426\u4ee5\u6307\u5b9a\u7684\u540e\u7f00\u7ed3\u5c3e\u3002\u5982\u679c\u5b57\u7b26\u4e32\u4ee5\u6307\u5b9a\u7684\u540e\u7f00\u7ed3\u675f\uff0c\u5219\u8fd4\u56de1\uff0c\u5426\u5219\u8fd4\u56de0\u3002"),(0,s.kt)("h2",{id:"startswiths-prefix"},"startsWith\uff08s\uff0c\u524d\u7f00)"),(0,s.kt)("p",null,"\u8fd4\u56de\u662f\u5426\u4ee5\u6307\u5b9a\u7684\u524d\u7f00\u5f00\u5934\u3002\u5982\u679c\u5b57\u7b26\u4e32\u4ee5\u6307\u5b9a\u7684\u524d\u7f00\u5f00\u5934\uff0c\u5219\u8fd4\u56de1\uff0c\u5426\u5219\u8fd4\u56de0\u3002"),(0,s.kt)("h2",{id:"trimlefts"},"trimLeft(s)"),(0,s.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u5220\u9664\u5de6\u4fa7\u7684\u7a7a\u767d\u5b57\u7b26\u3002"),(0,s.kt)("h2",{id:"trimrights"},"trimRight(s)"),(0,s.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u5220\u9664\u53f3\u4fa7\u7684\u7a7a\u767d\u5b57\u7b26\u3002"),(0,s.kt)("h2",{id:"trimboths"},"trimBoth(s)"),(0,s.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u7528\u4e8e\u5220\u9664\u4efb\u4e00\u4fa7\u7684\u7a7a\u767d\u5b57\u7b26\u3002"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/query_language/functions/string_functions/"},"\u6765\u6e90\u6587\u7ae0")," "))}d.isMDXComponent=!0}}]);