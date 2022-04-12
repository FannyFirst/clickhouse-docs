"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[99589],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return f}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=l(o),f=r,m=h["".concat(u,".").concat(f)]||h[f]||p[f]||a;return o?n.createElement(m,s(s({ref:t},c),{},{components:o})):n.createElement(m,s({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=o[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},361:function(e,t,o){o.r(t),o.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=o(87462),r=o(63366),a=(o(67294),o(3905)),s=["components"],i={title:"Who is using ClickHouse?",toc_hidden:!0,toc_priority:9},u="Who Is Using ClickHouse?",l={unversionedId:"en/faq/general/who-is-using-clickhouse",id:"en/faq/general/who-is-using-clickhouse",title:"Who is using ClickHouse?",description:"who-is-using-clickhouse}",source:"@site/docs/en/faq/general/who-is-using-clickhouse.md",sourceDirName:"en/faq/general",slug:"/en/faq/general/who-is-using-clickhouse",permalink:"/en/faq/general/who-is-using-clickhouse",editUrl:"https://github.com/ClickHouse/clickhouse-docs/tree/staging/docs/en/faq/general/who-is-using-clickhouse.md",tags:[],version:"current",frontMatter:{title:"Who is using ClickHouse?",toc_hidden:!0,toc_priority:9},sidebar:"english",previous:{title:"What is OLAP?",permalink:"/en/faq/general/olap"},next:{title:"Why ClickHouse is so fast?",permalink:"/en/faq/general/why-clickhouse-is-so-fast"}},c={},p=[],h={toc:p};function f(e){var t=e.components,o=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"who-is-using-clickhouse"},"Who Is Using ClickHouse?"),(0,a.kt)("p",null,"Being an open-source product makes this question not so straightforward to answer. You do not have to tell anyone if you want to start using ClickHouse, you just go grab source code or pre-compiled packages. There\u2019s no contract to sign and the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ClickHouse/ClickHouse/blob/master/LICENSE"},"Apache 2.0 license")," allows for unconstrained software distribution."),(0,a.kt)("p",null,"Also, the technology stack is often in a grey zone of what\u2019s covered by an NDA. Some companies consider technologies they use as a competitive advantage even if they are open-source and do not allow employees to share any details publicly. Some see some PR risks and allow employees to share implementation details only with their PR department approval."),(0,a.kt)("p",null,"So how to tell who is using ClickHouse?"),(0,a.kt)("p",null,"One way is to ",(0,a.kt)("strong",{parentName:"p"},"ask around"),". If it\u2019s not in writing, people are much more willing to share what technologies are used in their companies, what the use cases are, what kind of hardware is used, data volumes, etc. We\u2019re talking with users regularly on ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/channel/UChtmrD-dsdpspr42P_PyRAw/playlists"},"ClickHouse Meetups")," all over the world and have heard stories about 1000+ companies that use ClickHouse. Unfortunately, that\u2019s not reproducible and we try to treat such stories as if they were told under NDA to avoid any potential troubles. But you can come to any of our future meetups and talk with other users on your own. There are multiple ways how meetups are announced, for example, you can subscribe to ",(0,a.kt)("a",{parentName:"p",href:"http://twitter.com/ClickHouseDB/"},"our Twitter"),"."),(0,a.kt)("p",null,"The second way is to look for companies ",(0,a.kt)("strong",{parentName:"p"},"publicly saying")," that they use ClickHouse. It\u2019s more substantial because there\u2019s usually some hard evidence like a blog post, talk video recording, slide deck, etc. We collect the collection of links to such evidence on our ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"/en/about-us/adopters"},"Adopters"))," page. Feel free to contribute the story of your employer or just some links you\u2019ve stumbled upon (but try not to violate your NDA in the process)."),(0,a.kt)("p",null,"You can find names of very large companies in the adopters list, like Bloomberg, Cisco, China Telecom, Tencent, or Uber, but with the first approach, we found that there are many more. For example, if you take ",(0,a.kt)("a",{parentName:"p",href:"https://www.forbes.com/sites/hanktucker/2020/05/13/worlds-largest-technology-companies-2020-apple-stays-on-top-zoom-and-uber-debut/"},"the list of largest IT companies by Forbes (2020)")," over half of them are using ClickHouse in some way. Also, it would be unfair not to mention ",(0,a.kt)("a",{parentName:"p",href:"/en/about-us/history"},"Yandex"),", the company which initially open-sourced ClickHouse in 2016 and happens to be one of the largest IT companies in Europe."))}f.isMDXComponent=!0}}]);