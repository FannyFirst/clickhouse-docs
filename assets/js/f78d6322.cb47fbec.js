"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[23434],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(t),c=a,f=m["".concat(l,".").concat(c)]||m[c]||d[c]||o;return t?r.createElement(f,u(u({ref:n},p),{},{components:t})):r.createElement(f,u({ref:n},p))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var s=2;s<o;s++)u[s]=t[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},80924:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),u=["components"],i={sidebar_position:45,sidebar_label:"Rounding"},l="Rounding Functions",s={unversionedId:"en/sql-reference/functions/rounding-functions",id:"en/sql-reference/functions/rounding-functions",title:"Rounding Functions",description:"rounding-functions}",source:"@site/docs/en/sql-reference/functions/rounding-functions.md",sourceDirName:"en/sql-reference/functions",slug:"/en/sql-reference/functions/rounding-functions",permalink:"/en/sql-reference/functions/rounding-functions",editUrl:"https://github.com/ClickHouse/ClickHouse/tree/docs-staging/docs/en/sql-reference/functions/rounding-functions.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{sidebar_position:45,sidebar_label:"Rounding"},sidebar:"english",previous:{title:"Mathematical",permalink:"/en/sql-reference/functions/math-functions"},next:{title:"Working with maps",permalink:"/en/sql-reference/functions/tuple-map-functions"}},p={},d=[{value:"floor(x[, N])",id:"floorx-n",level:2},{value:"ceil(x[, N]), ceiling(x[, N])",id:"ceilx-n-ceilingx-n",level:2},{value:"trunc(x[, N]), truncate(x[, N])",id:"truncx-n-truncatex-n",level:2},{value:"round(x[, N])",id:"rounding_functions-round",level:2},{value:"Examples",id:"examples",level:3},{value:"roundBankers",id:"roundbankers",level:2},{value:"Examples",id:"examples-1",level:3},{value:"roundToExp2(num)",id:"roundtoexp2num",level:2},{value:"roundDuration(num)",id:"rounddurationnum",level:2},{value:"roundAge(num)",id:"roundagenum",level:2},{value:"roundDown(num, arr)",id:"rounddownnum-arr",level:2}],m={toc:d};function c(e){var n=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rounding-functions"},"Rounding Functions"),(0,o.kt)("h2",{id:"floorx-n"},"floor(x","[",", N","]",")"),(0,o.kt)("p",null,"Returns the largest round number that is less than or equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"x"),". A round number is a multiple of 1/10N, or the nearest number of the appropriate data type if 1 / 10N isn\u2019t exact.\n\u2018N\u2019 is an integer constant, optional parameter. By default it is zero, which means to round to an integer.\n\u2018N\u2019 may be negative."),(0,o.kt)("p",null,"Examples: ",(0,o.kt)("inlineCode",{parentName:"p"},"floor(123.45, 1) = 123.4, floor(123.45, -1) = 120.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"x")," is any numeric type. The result is a number of the same type.\nFor integer arguments, it makes sense to round with a negative ",(0,o.kt)("inlineCode",{parentName:"p"},"N")," value (for non-negative ",(0,o.kt)("inlineCode",{parentName:"p"},"N"),", the function does not do anything).\nIf rounding causes overflow (for example, floor(-128, -1)), an implementation-specific result is returned."),(0,o.kt)("h2",{id:"ceilx-n-ceilingx-n"},"ceil(x","[",", N","]","), ceiling(x","[",", N","]",")"),(0,o.kt)("p",null,"Returns the smallest round number that is greater than or equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"x"),". In every other way, it is the same as the ",(0,o.kt)("inlineCode",{parentName:"p"},"floor")," function (see above)."),(0,o.kt)("h2",{id:"truncx-n-truncatex-n"},"trunc(x","[",", N","]","), truncate(x","[",", N","]",")"),(0,o.kt)("p",null,"Returns the round number with largest absolute value that has an absolute value less than or equal to ",(0,o.kt)("inlineCode",{parentName:"p"},"x"),"\u2018s. In every other way, it is the same as the \u2019floor\u2019 function (see above)."),(0,o.kt)("h2",{id:"rounding_functions-round"},"round(x","[",", N","]",")"),(0,o.kt)("p",null,"Rounds a value to a specified number of decimal places."),(0,o.kt)("p",null,"The function returns the nearest number of the specified order. In case when given number has equal distance to surrounding numbers, the function uses banker\u2019s rounding for float number types and rounds away from zero for the other number types (Decimal)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"round(expression [, decimal_places])\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expression")," \u2014 A number to be rounded. Can be any ",(0,o.kt)("a",{parentName:"li",href:"/en/sql-reference/syntax#syntax-expressions"},"expression")," returning the numeric ",(0,o.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/#data_types"},"data type"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"decimal-places")," \u2014 An integer value.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"decimal-places > 0")," then the function rounds the value to the right of the decimal point."),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"decimal-places < 0")," then the function rounds the value to the left of the decimal point."),(0,o.kt)("li",{parentName:"ul"},"If ",(0,o.kt)("inlineCode",{parentName:"li"},"decimal-places = 0")," then the function rounds the value to integer. In this case the argument can be omitted.")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returned value:")),(0,o.kt)("p",null,"The rounded number of the same type as the input number."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example of use with Float")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT number / 2 AS x, round(x) FROM system.numbers LIMIT 3\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500x\u2500\u252c\u2500round(divide(number, 2))\u2500\u2510\n\u2502   0 \u2502                        0 \u2502\n\u2502 0.5 \u2502                        0 \u2502\n\u2502   1 \u2502                        1 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example of use with Decimal")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT cast(number / 2 AS  Decimal(10,4)) AS x, round(x) FROM system.numbers LIMIT 3\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500\u2500\u2500\u2500x\u2500\u252c\u2500round(CAST(divide(number, 2), 'Decimal(10, 4)'))\u2500\u2510\n\u2502 0.0000 \u2502                                           0.0000 \u2502\n\u2502 0.5000 \u2502                                           1.0000 \u2502\n\u2502 1.0000 \u2502                                           1.0000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples of rounding")),(0,o.kt)("p",null,"Rounding to the nearest number."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"round(3.2, 0) = 3\nround(4.1267, 2) = 4.13\nround(22,-1) = 20\nround(467,-2) = 500\nround(-467,-2) = -500\n")),(0,o.kt)("p",null,"Banker\u2019s rounding."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"round(3.5) = 4\nround(4.5) = 4\nround(3.55, 1) = 3.6\nround(3.65, 1) = 3.6\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"See Also")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#roundbankers"},"roundBankers"))),(0,o.kt)("h2",{id:"roundbankers"},"roundBankers"),(0,o.kt)("p",null,"Rounds a number to a specified decimal position."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the rounding number is halfway between two numbers, the function uses banker\u2019s rounding."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"Banker's rounding is a method of rounding fractional numbers. When the rounding number is halfway between two numbers, it's rounded to the nearest even digit at the specified decimal position. For example: 3.5 rounds up to 4, 2.5 rounds down to 2.\n\nIt's the default rounding method for floating point numbers defined in [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754#Roundings_to_nearest). The [round](#rounding_functions-round) function performs the same rounding for floating point numbers. The `roundBankers` function also rounds integers the same way, for example, `roundBankers(45, -1) = 40`.\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In other cases, the function rounds numbers to the nearest integer."))),(0,o.kt)("p",null,"Using banker\u2019s rounding, you can reduce the effect that rounding numbers has on the results of summing or subtracting these numbers."),(0,o.kt)("p",null,"For example, sum numbers 1.5, 2.5, 3.5, 4.5 with different rounding:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No rounding: 1.5 + 2.5 + 3.5 + 4.5 = 12."),(0,o.kt)("li",{parentName:"ul"},"Banker\u2019s rounding: 2 + 2 + 4 + 4 = 12."),(0,o.kt)("li",{parentName:"ul"},"Rounding to the nearest integer: 2 + 3 + 4 + 5 = 14.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syntax")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"roundBankers(expression [, decimal_places])\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Arguments")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expression")," \u2014 A number to be rounded. Can be any ",(0,o.kt)("a",{parentName:"li",href:"/en/sql-reference/syntax#syntax-expressions"},"expression")," returning the numeric ",(0,o.kt)("a",{parentName:"li",href:"/en/sql-reference/data-types/#data_types"},"data type"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"decimal-places")," \u2014 Decimal places. An integer number.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"decimal-places > 0")," \u2014 The function rounds the number to the given position right of the decimal point. Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"roundBankers(3.55, 1) = 3.6"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"decimal-places < 0")," \u2014 The function rounds the number to the given position left of the decimal point. Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"roundBankers(24.55, -1) = 20"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"decimal-places = 0")," \u2014 The function rounds the number to an integer. In this case the argument can be omitted. Example: ",(0,o.kt)("inlineCode",{parentName:"li"},"roundBankers(2.5) = 2"),".")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returned value")),(0,o.kt)("p",null,"A value rounded by the banker\u2019s rounding method."),(0,o.kt)("h3",{id:"examples-1"},"Examples"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example of use")),(0,o.kt)("p",null,"Query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"}," SELECT number / 2 AS x, roundBankers(x, 0) AS b fROM system.numbers limit 10\n")),(0,o.kt)("p",null,"Result:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u250c\u2500\u2500\u2500x\u2500\u252c\u2500b\u2500\u2510\n\u2502   0 \u2502 0 \u2502\n\u2502 0.5 \u2502 0 \u2502\n\u2502   1 \u2502 1 \u2502\n\u2502 1.5 \u2502 2 \u2502\n\u2502   2 \u2502 2 \u2502\n\u2502 2.5 \u2502 2 \u2502\n\u2502   3 \u2502 3 \u2502\n\u2502 3.5 \u2502 4 \u2502\n\u2502   4 \u2502 4 \u2502\n\u2502 4.5 \u2502 4 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2518\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Examples of Banker\u2019s rounding")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"roundBankers(0.4) = 0\nroundBankers(-3.5) = -4\nroundBankers(4.5) = 4\nroundBankers(3.55, 1) = 3.6\nroundBankers(3.65, 1) = 3.6\nroundBankers(10.35, 1) = 10.4\nroundBankers(10.755, 2) = 10.76\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"See Also")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rounding_functions-round"},"round"))),(0,o.kt)("h2",{id:"roundtoexp2num"},"roundToExp2(num)"),(0,o.kt)("p",null,"Accepts a number. If the number is less than one, it returns 0. Otherwise, it rounds the number down to the nearest (whole non-negative) degree of two."),(0,o.kt)("h2",{id:"rounddurationnum"},"roundDuration(num)"),(0,o.kt)("p",null,"Accepts a number. If the number is less than one, it returns 0. Otherwise, it rounds the number down to numbers from the set: 1, 10, 30, 60, 120, 180, 240, 300, 600, 1200, 1800, 3600, 7200, 18000, 36000. "),(0,o.kt)("h2",{id:"roundagenum"},"roundAge(num)"),(0,o.kt)("p",null,"Accepts a number. If the number is less than 18, it returns 0. Otherwise, it rounds the number down to a number from the set: 18, 25, 35, 45, 55. "),(0,o.kt)("h2",{id:"rounddownnum-arr"},"roundDown(num, arr)"),(0,o.kt)("p",null,"Accepts a number and rounds it down to an element in the specified array. If the value is less than the lowest bound, the lowest bound is returned."))}c.isMDXComponent=!0}}]);