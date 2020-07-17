define(function(){"use strict";function t(e,r,n){if(r in e){Object.defineProperty(e,r,{value:n,enumerable:true,configurable:true,writable:true})}else{e[r]=n}return e}function a(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);if(e)t=t.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable});n.push.apply(n,t)}return n}function e(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};if(e%2){a(Object(n),true).forEach(function(e){t(r,e,n[e])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(r,Object.getOwnPropertyDescriptors(n))}else{a(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}}return r}function g(e,r){return n(e)||o(e,r)||i(e,r)||c()}function n(e){if(Array.isArray(e))return e}function o(e,r){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(e)))return;var n=[];var t=true;var a=false;var o=undefined;try{for(var i=e[Symbol.iterator](),u;!(t=(u=i.next()).done);t=true){n.push(u.value);if(r&&n.length===r)break}}catch(e){a=true;o=e}finally{try{if(!t&&i["return"]!=null)i["return"]()}finally{if(a)throw o}}return n}function i(e,r){if(!e)return;if(typeof e==="string")return u(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor)n=e.constructor.name;if(n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,r)}function u(e,r){if(r==null||r>e.length)r=e.length;for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d=undefined;var r=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:r.length;for(var t=arguments.length,a=new Array(t>2?t-2:0),o=2;o<t;o++){a[o-2]=arguments[o]}return n<=a.length?r.apply(void 0,a):e.bind.apply(e,[null,r,n].concat(a))};var l=function e(o){var i=o.length;var r=i;while(r--){if(typeof o[r]!=="function"){throw new TypeError("Expected a function")}}return function(){var e=0;for(var r=arguments.length,n=new Array(r),t=0;t<r;t++){n[t]=arguments[t]}var a=i?o[e].apply(d,n):n[0];while(++e<i){a=o[e].call(d,a)}return a}};var f=function e(r,n){var t=JSON.parse(JSON.stringify(r));for(var a in n){if(n.hasOwnProperty(a)&&!r.hasOwnProperty(a)){t[a]=n[a]}}return t};var s={curry:r,flow:l,assign:f};var v=s.curry(function(e,r){return Math.pow(e,r)});var m=s.curry(function(e,r){return e*r});var E=s.curry(function(e,r){return s.flow([m,w])(e,r)});var p=s.curry(function(e,r){return e/r});var b=s.curry(function(e,r){return s.flow([p,w])(e,r)});var h=function e(r){return("".concat(r).split(".")[1]||"").length};var y=s.curry(function(e,r){return E(r,v(10,e))});var w=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:12;return Number(r.toPrecision(n))};var A=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:2;var t=v(10,n);return b(Math.round(E(r,t)),t)};var _=s.curry(function(e,r){return e+r});var P=s.curry(function(e,r){var n=y(Math.max(h(e),h(r)));return b(s.flow([_,w])(n(e),n(r)),n(1))});var S=s.curry(function(e,r){return e-r});var R=s.curry(function(e,r){var n=y(Math.max(h(e),h(r)));return b(s.flow([S,w])(n(e),n(r)),n(1))});var F=function e(r){return r.reduce(P)};var N=function e(r){return r.reduce(R)};var O=function e(r){return r.reduce(E)};var I=function e(r){return r.reduce(b)};var G=function e(){for(var r=arguments.length,n=new Array(r),t=0;t<r;t++){n[t]=arguments[t]}return F(n)};var X=function e(){for(var r=arguments.length,n=new Array(r),t=0;t<r;t++){n[t]=arguments[t]}return N(n)};var T=function e(){for(var r=arguments.length,n=new Array(r),t=0;t<r;t++){n[t]=arguments[t]}return O(n)};var $=function e(){for(var r=arguments.length,n=new Array(r),t=0;t<r;t++){n[t]=arguments[t]}return I(n)};var M={add:G,addition:P,subtract:X,subtraction:R,multiplication:E,multiply:T,division:b,divide:$,round:A};var j={COMPLEX:"^(?=(.*[0-9]))(?=.*[\\!@#$%^&*()\\\\[\\]{}\\-_+=~`|:;\"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).",MODERATE:"^(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^."};var C=function e(o,i){return new Proxy({},{get:function e(r,n,t){var a=Number(n)||"";return new RegExp("".concat(j[i],"{").concat(Number(o),",").concat(a===Infinity||a===-Infinity?"":a,"}$"))}})};var x=function e(o){return new Proxy({},{get:function e(r,n,t){var a=Number(n)||1;return C(a,o)}})};var B={REGEXP_PHONE:/^(\+?0[ -]?|\+?86[ -]?|\+?17951[ -]?|\+?12593[ -]?)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,REGEXP_EMAIL:/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,REGEXP_CN_CHARACTERS:/[\u4e00-\u9fa5]/gm,REGEXP_EN_CHARACTERS:/^[a-z]+$/i,REGEXP_UPPER_EN_CHARACTERS:/^[A-Z]+$/,REGEXP_DBCS:/[^\x00-\xff]/gim,REGEXP_POSITIVE_INT:/^\+?[1-9]\d*$/,REGEXP_NEGATIVE_INT:/^-[1-9]\d*$/,REGEXP_NON_NEGATIVE_INT:/^\+?\d+$/,REGEXP_NON_POSITIVE_INT:/^((-\d+)|(0+))$/,REGEXP_NON_NEGATIVE_NUMBER:/^\+?\d*(\.\d+)?$/,REGEXP_NON_POSITIVE_NUMBER:/^((-\d+(\.\d+)?)|(0+(\.0+)?))$/,REGEXP_NUMBER:/^[-\+]?\d*(\.\d+)?$/,REGEXP_POSITIVE_NUMBER:/^\+?(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/,REGEXP_NEGATIVE_NUMBER:/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/,REGEXP_FLOAT:/^[-\+]?([1-9]\d*\.\d+|0\.\d*[1-9]\d*|0?\.0+)$/,REGEXP_EN_NUM:/^[a-z0-9]+$/i,REGEXP_PASS_COMPLEX:x("COMPLEX"),REGEXP_PASS_MODERATE:x("MODERATE"),REGEXP_URL:/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z#0-9_-](\?)?)*)*$/i,REGEXP_IPV4:/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,REGEXP_IPV6:/(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/,REGEXP_IP:/((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/,REGEXP_DATE:/^(([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])))|(([12]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])))$/,REGEXP_TIME_12:/^((1[0-2]|0?[1-9]):([0-5][0-9])(:(?:[012345]\d))? ?([ap]m)?)$/i,REGEXP_TIME_24:/^(?:[01]\d|2[0123]):(?:[012345]\d)(:(?:[012345]\d))?$/,REGEXP_AMOUNT_OF_MONEY:/^([¤฿₵¢₡₫€ƒ₲₭£₤₥₦₱PQR$〒₮₩¥￥₴₪៛﷼₣]|B[rs]|Ft|Rs\.|kr|Lm|Sk|R[p$M]|৲৳|S\/\.|NT\$|zł|руб)?([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(\.[0-9]{1,})?$/,REGEXP_HTML_TAG:/^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/,REGEXP_REPEAT_STR:/(\b\w+\b)(?=.*\b\1\b)/,REGEXP_LNG_LAT:/^((1[0-7]\d)|\d{1,2})(\.\d{1,})?,(([1-8]\d)|\d)(\.\d{1,})?$/,REGEXP_ID_CARD:/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,REGEXP_POSTCODE:/^[1-9]\d{5}(?!\d)$/,REGEXP_FILE_PATH:/^((\/|\.\/|\.\.\/|\\|\/\/|https?:\\\\|https?:\/\/)[a-z0-9 _@\-^!#$%&+={}.\/\\\[\]]+)+\.[a-z]+$/i,REGEXP_HEX:/^#?([a-f0-9]{8}|[a-f0-9]{6}|[a-f0-9]{3})$/i,REGEXP_SLUG:/^[a-z0-9-]+$/,REGEXP_PLATES:/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/i,REGEXP_IS_IE:/msie (\d+\.\d+)/i,REGEXP_IS_WEBKIT:/webkit/i,REGEXP_IS_CHROME:/chrome\/(\d+\.\d+)/i,REGEXP_IS_EDGE:/edge\/(\d+\.\d+)/i,REGEXP_IS_FIREFOX:/firefox\/(\d+\.\d+)/i,REGEXP_IS_OPERA:/opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i,REGEXP_IS_SAFARI:/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i,REGEXP_IS_ANDROID:/android/i,REGEXP_IS_IPAD:/ipad/i,REGEXP_IS_IPHONE:/iphone/i,REGEXP_IS_MAC:/macintosh/i,REGEXP_IS_WINDOWS:/windows/i,REGEXP_IS_WX:/MicroMessenger/i,REGEXP_IS_MOBILE:/(nokia|iphone|android|ipad|motorola|^mot\-|softbank|foma|docomo|kddi|up\.browser|up\.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam\-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte\-|longcos|pantech|gionee|^sie\-|portalmmm|jig\s browser|hiptop|^ucweb|^benq|haier|^lct|opera\s*mobi|opera\*mini|320x320|240x320|176x220)/i};var H=function e(r){return Object.prototype.toString.call(r)};var L={string:"[object String]",number:"[object Number]",bigInt:"[object BigInt]",boolean:"[object Boolean]",undefined:"[object Undefined]",symbol:"[object Symbol]",function:"[object Function]",array:"[object Array]",object:"[object Object]",null:"[object Null]",map:"[object Map]",set:"[object Set]",promise:"[object Promise]",async:"[object AsyncFunction]",date:"[object Date]"};var z=function e(r){return H(r)===L.string};var D=function e(r){return H(r)===L.number};var k=function e(r){return D(r)&&r.toString()==="NaN"};var U=function e(r){return D(r)&&!k(r)&&r!==Infinity&&r!==-Infinity};var Z=function e(r){return U(r)&&"".concat(r).indexOf(".")<0};var q=function e(r){return H(r)===L.bigInt};var V=function e(r){return U(r)&&!Z(r)};var W=function e(r){return H(r)===L["boolean"]};var J=function e(r){return H(r)===L.undefined};var K=function e(r){return H(r)===L.symbol};var Q=function e(r){return H(r)===L["function"]};var Y=function e(r){return H(r)===L.array};var ee=function e(r){return H(r)===L.object};var re=function e(r){return H(r)===L["null"]};var ne=function e(r){return r instanceof HTMLElement};var te=function e(r){return H(r)===L.map};var ae=function e(r){return H(r)===L.set};var oe=function e(r){return H(r)===L.promise};var ie=function e(r){return H(r)===L.async};var ue=function e(r){return H(r)===L.date};var ce=function e(r){return Y(r)&&r.length===0||ee(r)&&Object.keys(r).length===0||(te(r)||ae(r))&&r.size===0||re(r)};var de={isString:z,isNumber:D,isNaN:k,isFinite:U,isInteger:Z,isBigInt:q,isFloat:V,isBoolean:W,isUndefined:J,isSymbol:K,isFunction:Q,isObject:ee,isArray:Y,isNull:re,isHTML:ne,isMap:te,isSet:ae,isEmpty:ce,isPromise:oe,isAsync:ie,isDate:ue};var le=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"0,0";var t=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"N/A";if(r===null||r===undefined||r===""||de.isNaN(Number(r))){return t}var a=n.match(/(.*?)0/)[1];var o=n.match(/.*0(.*)/)[1];var i=a?"\\":"";var u=o?"\\":"";var c=n.match(new RegExp("".concat(i).concat(a,"(.*)").concat(u).concat(o)))[1];var d=c.split(".")[1]||"",l=d.length;var f=Number(r).toString().split("."),s=g(f,2),v=s[0],m=s[1],E=m===void 0?"":m;var p=M.round(E/Math.pow(10,E.length),l);if(p===1){p="0.0".padEnd(l+2,0);v=Number(v)+1}var b=n.match(/0(.*?)0/)[1];var h="".concat(v<0?0-v:v).replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+b);var y=l&&"".concat(p).split(".")[1]?"."+"".concat(p).split(".")[1].padEnd(l,0):"";return"".concat(v<0?"-":"").concat(a).concat(h).concat(y," ").concat(o.trimStart()).trimEnd()};var fe=function e(r){var n="".concat(r);if(!/\d/.test(n)){return null}var t=n.split(".")[0];var a=n.includes(".")?n.match(/.*\.(.*)/)[1]:"";var o={int:t.match(/\d/g),float:a.match(/\d/g)};var i=o["int"]&&o["int"].join("");var u=o["float"]&&o["float"].join("");return Number("".concat(n.includes("-")?"-":"").concat(i).concat(u?"."+u:""))};var se=function e(r){var n=M.multiplication(r,100);if(de.isNaN(n))return null;return n+"%"};var ve=function e(r){return M.division(Number.parseFloat(r),100)||null};var me=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{case:"upper"};var t=parseFloat(r);if(!de.isFinite(t)){return r}var a=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"];var o=["〇","一","二","三","四","五","六","七","八","九"];var i=n["case"]==="lower"?o:a;var u=["","拾","佰","仟"];var c=["","十","百","千"];var d=n["case"]==="lower"?c:u;var l=["","万","亿","兆"];var f="负";var s="";if(t===0){s=i[0];return s}var v=t<0;if(v){t=0-t}var m;var E;t=t.toString();if(t.indexOf(".")===-1){m=t}else{E=t.split(".");m=E[0]}if(parseInt(m,10)>0){var p=0;var b=m.length;for(var h=0;h<b;h++){var y=m.substr(h,1);var g=b-h-1;var w=g/4;var A=g%4;if(y==="0"){p++}else{if(p>0){s+=i[0]}p=0;s+=i[parseInt(y,10)]+d[A]}if(A===0&&p<4){s+=l[w]}}}if(s===""){s+=i[0]}return v?f+s:s};var Ee=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{case:"upper",type:"number"};var t=parseFloat(r);if(!de.isFloat(t)){return""}var a=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"];var o=["〇","一","二","三","四","五","六","七","八","九"];var i=n["case"]==="lower"?o:a;var u=["角","分","毫","厘"];var c="";if(t===0){return i[0]}var d;var l;t=t.toString();if(t.indexOf(".")===-1){d=""}else{l=t.split(".");d=n.type==="money"?l[1].substr(0,4):l[1]}if(d){var f=d.length;for(var s=0;s<f;s++){var v=d.substr(s,1);if(n.type==="money"){if(v!=="0"){c+=i[Number(v)]+u[s]}}else{c+=i[Number(v)]}}}return c};var pe=s.curry(function(e,r){if(!de.isObject(e)){throw new Error('param "option" type error')}if(de.isNaN(Number(r)))return null;var n=999999999999999.9;if(r>=n)return r;var t=e.type==="money"?"元":"点";var a="整";var o=me(r,e);var i=Ee(r,e);if(i){return o+t+i}return o+(e.type==="money"?t+a:"")});var be=pe({type:"money",case:"upper"});var he=pe({type:"number",case:"upper"});var ye={number2Amount:le,amount2Number:fe,number2Percentage:se,percentage2Number:ve,amount2Chinese:be,number2Chinese:he,number2ChineseWithOption:pe};var ge=function e(r){return r instanceof HTMLElement};var we=function e(r){return ge(r)?r:window};var Ae=function e(r){return ge(r)?r:window.document.body};var _e=function e(r){if(ge(r))return r.scrollTop;var n=0;var t=0;document.body&&(n=document.body.scrollTop);document.documentElement&&(t=document.documentElement.scrollTop);return Math.max(n,t)};var Pe=function e(r){if(ge(r))return r.scrollHeight;var n=0;var t=0;document.body&&(n=document.body.scrollHeight);document.documentElement&&(t=document.documentElement.scrollHeight);return Math.max(n,t)};var Se=function e(r){if(ge(r)){return r.offsetHeight}if(document.compatMode==="CSS1Compat"){return document.documentElement.clientHeight}return document.body.clientHeight};var Re=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;return _e(r)<=0};var Fe=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:.1;var t=_e(r)+Se(r)-Pe(r);return Math.abs(t)<=n};var Ne=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;Ae(r).style.scrollBehavior!=="smooth"&&(Ae(r).style.scrollBehavior="smooth");document.documentElement.style.scrollBehavior!=="smooth"&&(document.documentElement.style.scrollBehavior="smooth");try{we(r).scrollTo(0,n)}catch(e){we(r).scrollTop=n}return _e(r)};var Oe=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;return Ne(r,0)};var Ie=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;return Ne(r,Pe(r))};var Ge=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:window;var t=_e(n);if(t>0){var a=t-(r||0);return Ne(n,a)}return t};var Xe=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:window;var t=_e(n);if(Fe(n,0)){return t}var a=t+(r||0);return Ne(n,a)};var Te=function e(r){var n=ge(r)?r:document.body;if(n.webkitRequestFullScreen){return n.webkitRequestFullScreen()||true}if(n.mozRequestFullScreen){return n.mozRequestFullScreen()||true}if(n.msRequestFullscreen){return n.msRequestFullscreen()||true}if(n.requestFullScreen){return n.requestFullScreen()||true}return false};var $e=function e(){var r=parent.document;if(r.webkitCancelFullScreen){return r.webkitCancelFullScreen()||true}if(r.mozCancelFullScreen){return r.mozCancelFullScreen()||true}if(r.cancelFullScreen){return r.cancelFullScreen()||true}if(r.msExitFullscreen){return r.msExitFullscreen()||true}if(r.exitFullscreen){return r.exitFullscreen()||true}return false};var Me=function e(r){var n=r||{};if(!de.isObject(n)){throw new TypeError("option 类型错误")}var t={width:1e3,height:900,printClass:"print",noPrintClass:"no-print",closeWindow:false,delay:200};var a=s.assign(t,n);var o=window.open(" ","","width=".concat(a.width,",height=").concat(a.height,",scrollbars=yes"));var i="";var u=function e(t){var r=["input","textarea"];r.forEach(function(e){var r=document.querySelectorAll(".".concat(a.printClass," ").concat(e));for(var n=0;n<r.length;n++){t(r[n],e)}})};u(function(e,r){e.setAttribute(e.hasAttribute("disabled")?"is-disabled":"disabled",true);if(r==="textarea"){e.innerHTML=e.value}else{e.setAttribute("value",e.value)}});var c=window.document.getElementsByClassName(a.printClass);for(var d=0;d<c.length;d++){i+=c[d].innerHTML}u(function(e){if(!e.hasAttribute("is-disabled"))e.removeAttribute("disabled")});var l=document.head.innerHTML+"<style>.".concat(a.noPrintClass,"{display: none !important;}</style>");l=l.replace("screen","screen, print");l=l.replace(/<script.*?<\/script>/g,"");o.document.write("<html>");o.document.write(l);o.document.write("<body>");o.document.write(i.replace(/,/g,"").replace(/null/g,""));o.document.write("<script>setTimeout(function() {window.print();".concat(a.closeWindow&&"window.close()","}, ").concat(a.delay,")</"));o.document.write("script>");o.document.write("</body></html>")};var je=function e(r){var n=document.createElement("div");n.innerHTML=r;return n.firstElementChild};var Ce=function e(r){var n=je('<textarea readonly value="'.concat(r,'" style="position: absolute;left: -9999px;">').concat(r,"</textarea>"));document.body.appendChild(n);var t=document.getSelection().rangeCount>0?document.getSelection().getRangeAt(0):false;n.select();document.execCommand("copy");document.body.removeChild(n);if(t){document.getSelection().removeAllRanges();document.getSelection().addRange(t)}};var xe=function e(n){var t={then:function e(r){if(de.isFunction(r))r(n);return t},catch:function e(r){}};try{Ce(n)}catch(r){t.then=function(e){return t};t["catch"]=function(e){return de.isFunction(e)&&e(r)}}return t};var Be=0;var He=function e(r){if(Ae(r).dataset.preventScroll==="true")return false;Be=_e();Ae(r).style["overflow-y"]="hidden";Ae(r).style.top=-Be+"px";Ae(r).dataset.preventScroll=true;return Be};var Le=function e(r){if(Ae(r).dataset.preventScroll==="true"){Ae(r).dataset.preventScroll=false;Ae(r).style["overflow-y"]="auto";window.scrollTo(0,Be);return Be}return false};var ze=function e(){return document.Selection?document.selection.createRange().text:window.getSelection().toString()};var De=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.document.body;return Ae(r).onselectstart=function(){return false}};var ke=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.document.body;return Ae(r).onselectstart=function(){return true}};var Ue=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.document.body;return Ae(r.oncontextmenu=function(){return false})};var Ze=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.document.body;return Ae(r).oncopy=function(){return false}};var qe=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:window.document.body;xe(ze()+"\n"+r);Ze(n)};var Ve={scroll2Top:Oe,scroll2Bottom:Ie,isScrollTop:Re,isScrollBottom:Fe,scrollTopByStep:Ge,scrollBottomByStep:Xe,toFullScreen:Te,exitFullScreen:$e,print:Me,createElement:je,copyToClipboard:xe,preventScroll:He,recoverScroll:Le,disableSelect:De,recoverSelect:ke,disableContextMenu:Ue,disableCopy:Ze,getSelectText:ze,replaceCopy:qe};var We=function e(r){var n="".concat(r).match(/^\+?86[ -]?|^\+?0[ -]?|^\+?17951[ -]?|^\+?12593[ -]?/);var t="";if(n)t=n[0];return[t,"".concat(r).replace(t,"")]};var Je=function e(r,n){var t=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"";var a=[];for(var o=0;o<r;o++){a.push(n)}return a.join(t)};var Ke=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"*";var t=We(r),a=g(t,2),o=a[0],i=a[1];var u="".concat(i).length;if(!Number(i)||u<=7)return r;var c=new RegExp("^(\\d{3})\\d{".concat(u-3-4,"}(\\d{4})$"));return o+"".concat(i).replace(c,"$1".concat(Je(u-3-4,n),"$2"))};var Qe=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";var t=We(r),a=g(t,2),o=a[0],i=a[1];var u="".concat(i).length;if(u<=4||!Number(i))return r;var c=u-4;var d=new RegExp("^\\d{".concat(c,"}(\\d{4})$"));return(n&&o)+"".concat(i).replace(d,"".concat(Je(c,n),"$1"))};var Ye=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"*";var t="".concat(r);if(t.length<=8||!Number(t))return r;return t.replace(/^(\d{4})\d*(\d{4})$/,"$1".concat(Je(4,n),"$2"))};var er=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:99;return de.isFinite(Number(r))&&Number(r)>Number(n)?"".concat(n,"+"):r};var rr={hideMiddlePhoneNumber:Ke,hideFrontNumber:Qe,outOfNumber:er,hideMiddleNumber:Ye};var nr=e(e(e(e(e(e({},M),B),ye),Ve),rr),de);return nr});