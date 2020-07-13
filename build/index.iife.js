var f2eTools=function(){"use strict";function t(e,r,n){if(r in e){Object.defineProperty(e,r,{value:n,enumerable:true,configurable:true,writable:true})}else{e[r]=n}return e}function a(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);if(e)t=t.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable});n.push.apply(n,t)}return n}function e(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};if(e%2){a(Object(n),true).forEach(function(e){t(r,e,n[e])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(r,Object.getOwnPropertyDescriptors(n))}else{a(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}}return r}function g(e,r){return n(e)||o(e,r)||i(e,r)||c()}function n(e){if(Array.isArray(e))return e}function o(e,r){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(e)))return;var n=[];var t=true;var a=false;var o=undefined;try{for(var i=e[Symbol.iterator](),u;!(t=(u=i.next()).done);t=true){n.push(u.value);if(r&&n.length===r)break}}catch(e){a=true;o=e}finally{try{if(!t&&i["return"]!=null)i["return"]()}finally{if(a)throw o}}return n}function i(e,r){if(!e)return;if(typeof e==="string")return u(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor)n=e.constructor.name;if(n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,r)}function u(e,r){if(r==null||r>e.length)r=e.length;for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var d=undefined;var r=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:r.length;for(var t=arguments.length,a=new Array(t>2?t-2:0),o=2;o<t;o++){a[o-2]=arguments[o]}return n<=a.length?r.apply(void 0,a):e.bind.apply(e,[null,r,n].concat(a))};var l=function e(o){var i=o.length;var r=i;while(r--){if(typeof o[r]!=="function"){throw new TypeError("Expected a function")}}return function(){var e=0;for(var r=arguments.length,n=new Array(r),t=0;t<r;t++){n[t]=arguments[t]}var a=i?o[e].apply(d,n):n[0];while(++e<i){a=o[e].call(d,a)}return a}};var f={curry:r,flow:l};var s=f.curry(function(e,r){return Math.pow(e,r)});var v=f.curry(function(e,r){return e*r});var m=f.curry(function(e,r){return f.flow([v,y])(e,r)});var E=f.curry(function(e,r){return e/r});var p=f.curry(function(e,r){return f.flow([E,y])(e,r)});var b=function e(r){return("".concat(r).split(".")[1]||"").length};var h=f.curry(function(e,r){return m(r,s(10,e))});var y=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:12;return Number(r.toPrecision(n))};var w=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:2;var t=s(10,n);return p(Math.round(m(r,t)),t)};var A=f.curry(function(e,r){return e+r});var _=f.curry(function(e,r){var n=h(Math.max(b(e),b(r)));return p(f.flow([A,y])(n(e),n(r)),n(1))});var S=f.curry(function(e,r){return e-r});var P=f.curry(function(e,r){var n=h(Math.max(b(e),b(r)));return p(f.flow([S,y])(n(e),n(r)),n(1))});var R=function e(r){return r.reduce(_)};var F=function e(r){return r.reduce(P)};var N=function e(r){return r.reduce(m)};var G=function e(r){return r.reduce(p)};var I=function e(){for(var r=arguments.length,n=new Array(r),t=0;t<r;t++){n[t]=arguments[t]}return R(n)};var O=function e(){for(var r=arguments.length,n=new Array(r),t=0;t<r;t++){n[t]=arguments[t]}return F(n)};var X=function e(){for(var r=arguments.length,n=new Array(r),t=0;t<r;t++){n[t]=arguments[t]}return N(n)};var T=function e(){for(var r=arguments.length,n=new Array(r),t=0;t<r;t++){n[t]=arguments[t]}return G(n)};var $={add:I,addition:_,subtract:O,subtraction:P,multiplication:m,multiply:X,division:p,divide:T,round:w};var j={REGEXP_PHONE:/^(0-?|86-?|17951-?)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,REGEXP_EMAIL:/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,REGEXP_CN_CHARACTERS:/[\u4e00-\u9fa5]/gm,REGEXP_EN_CHARACTERS:/^[a-z]+$/i,REGEXP_UPPER_EN_CHARACTERS:/^[A-Z]+$/,REGEXP_DBCS:/[^\x00-\xff]/gim,REGEXP_POSITIVE_INT:/^\+?[1-9]\d*$/,REGEXP_NEGATIVE_INT:/^-[1-9]\d*$/,REGEXP_NON_NEGATIVE_INT:/^\+?\d+$/,REGEXP_NON_POSITIVE_INT:/^((-\d+)|(0+))$/,REGEXP_NON_NEGATIVE_NUMBER:/^\+?\d*(\.\d+)?$/,REGEXP_NON_POSITIVE_NUMBER:/^((-\d+(\.\d+)?)|(0+(\.0+)?))$/,REGEXP_NUMBER:/^[-\+]?\d*(\.\d+)?$/,REGEXP_POSITIVE_NUMBER:/^\+?(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/,REGEXP_NEGATIVE_NUMBER:/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/,REGEXP_FLOAT:/^[-\+]?([1-9]\d*\.\d+|0\.\d*[1-9]\d*|0?\.0+)$/,REGEXP_EN_NUM:/^[a-z0-9]+$/i,REGEXP_PASS_COMPLEX:/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{4,}/,REGEXP_PASS_MODERATE:/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{3,}$/,REGEXP_URL:/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z#0-9_-](\?)?)*)*$/i,REGEXP_IPV4:/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,REGEXP_IPV6:/(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/,REGEXP_IP:/((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/,REGEXP_DATE:/^(([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])))|(([12]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])))$/,REGEXP_TIME_12:/^((1[0-2]|0?[1-9]):([0-5][0-9])(:(?:[012345]\d))? ?([ap]m)?)$/i,REGEXP_TIME_24:/^(?:[01]\d|2[0123]):(?:[012345]\d)(:(?:[012345]\d))?$/,REGEXP_AMOUNT_OF_MONEY:/^([¤฿₵¢₡₫€ƒ₲₭£₤₥₦₱PQR$〒₮₩¥￥₴₪៛﷼₣]|B[rs]|Ft|Rs\.|kr|Lm|Sk|R[p$M]|৲৳|S\/\.|NT\$|zł|руб)?([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(\.[0-9]{1,})?$/,REGEXP_HTML_TAG:/^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/,REGEXP_REPEAT_STR:/(\b\w+\b)(?=.*\b\1\b)/,REGEXP_LNG_LAT:/^((1[0-7]\d)|\d{1,2})(\.\d{1,})?,(([1-8]\d)|\d)(\.\d{1,})?$/,REGEXP_ID_CARD:/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,REGEXP_POSTCODE:/^[1-9]\d{5}(?!\d)$/,REGEXP_FILE_PATH:/^((\/|\.\/|\.\.\/|\\|\/\/|https?:\\\\|https?:\/\/)[a-z0-9 _@\-^!#$%&+={}.\/\\\[\]]+)+\.[a-z]+$/i,REGEXP_HEX:/^#?([a-f0-9]{8}|[a-f0-9]{6}|[a-f0-9]{3})$/i,REGEXP_SLUG:/^[a-z0-9-]+$/,REGEXP_PLATES:/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/i,REGEXP_IS_IE:/msie (\d+\.\d+)/i,REGEXP_IS_WEBKIT:/webkit/i,REGEXP_IS_CHROME:/chrome\/(\d+\.\d+)/i,REGEXP_IS_EDGE:/edge\/(\d+\.\d+)/i,REGEXP_IS_FIREFOX:/firefox\/(\d+\.\d+)/i,REGEXP_IS_OPERA:/opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i,REGEXP_IS_SAFARI:/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i,REGEXP_IS_ANDROID:/android/i,REGEXP_IS_IPAD:/ipad/i,REGEXP_IS_IPHONE:/iphone/i,REGEXP_IS_MAC:/macintosh/i,REGEXP_IS_WINDOWS:/windows/i,REGEXP_IS_WX:/MicroMessenger/i,REGEXP_IS_MOBILE:/(nokia|iphone|android|ipad|motorola|^mot\-|softbank|foma|docomo|kddi|up\.browser|up\.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam\-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte\-|longcos|pantech|gionee|^sie\-|portalmmm|jig\s browser|hiptop|^ucweb|^benq|haier|^lct|opera\s*mobi|opera\*mini|320x320|240x320|176x220)/i};var M=function e(r){return Object.prototype.toString.call(r)};var C={string:"[object String]",number:"[object Number]",bigInt:"[object BigInt]",boolean:"[object Boolean]",undefined:"[object Undefined]",symbol:"[object Symbol]",function:"[object Function]",array:"[object Array]",object:"[object Object]",null:"[object Null]",map:"[object Map]",set:"[object Set]"};var x=function e(r){return M(r)===C.string};var H=function e(r){return M(r)===C.number};var z=function e(r){return Number.isNaN(r)};var B=function e(r){return Number.isFinite(r)};var L=function e(r){return Number.isSafeInteger(r)};var k=function e(r){return M(r)===C.bigInt};var D=function e(r){return Number.isFinite(r)&&"".concat(r).includes(".")};var U=function e(r){return M(r)===C["boolean"]};var Z=function e(r){return M(r)===C.undefined};var q=function e(r){return M(r)===C.symbol};var V=function e(r){return M(r)===C["function"]};var W=function e(r){return M(r)===C.array};var K=function e(r){return M(r)===C.object};var Q=function e(r){return M(r)===C["null"]};var Y=function e(r){return r instanceof HTMLElement};var J=function e(r){return M(r)===C.map};var ee=function e(r){return M(r)===C.set};var re=function e(r){return W(r)&&r.length===0||K(r)&&Object.keys(r).length===0||(J(r)||ee(r))&&r.size===0};var ne={isString:x,isNumber:H,isNaN:z,isFinite:B,isInteger:L,isBigInt:k,isFloat:D,isBoolean:U,isUndefined:Z,isSymbol:q,isFunction:V,isObject:K,isArray:W,isNull:Q,isHTML:Y,isMap:J,isSet:ee,isEmpty:re};var te=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"0,0";var t=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"N/A";if(r===null||r===undefined||r===""||ne.isNaN(Number(r))){return t}var a=n.match(/(.*?)0/)[1];var o=n.match(/.*0(.*)/)[1];var i=a?"\\":"";var u=o?"\\":"";var c=n.match(new RegExp("".concat(i).concat(a,"(.*)").concat(u).concat(o)))[1];var d=c.split(".")[1]||"",l=d.length;var f=Number(r).toString().split("."),s=g(f,2),v=s[0],m=s[1],E=m===void 0?"":m;var p=$.round(E/Math.pow(10,E.length),l);if(p===1){p="0.0".padEnd(l+2,0);v=Number(v)+1}var b=n.match(/0(.*?)0/)[1];var h="".concat(v<0?0-v:v).replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+b);var y=l&&"".concat(p).split(".")[1]?"."+"".concat(p).split(".")[1].padEnd(l,0):"";return"".concat(v<0?"-":"").concat(a).concat(h).concat(y," ").concat(o.trimStart()).trimEnd()};var ae=function e(r){var n="".concat(r);if(!/\d/.test(n)){return null}var t=n.split(".")[0];var a=n.includes(".")?n.match(/.*\.(.*)/)[1]:"";var o={int:t.match(/\d/g),float:a.match(/\d/g)};var i=o["int"]&&o["int"].join("");var u=o["float"]&&o["float"].join("");return Number("".concat(n.includes("-")?"-":"").concat(i).concat(u?"."+u:""))};var oe=function e(r){var n=$.multiplication(r,100);if(ne.isNaN(n))return null;return n+"%"};var ie=function e(r){return $.division(Number.parseFloat(r),100)||null};var ue=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{case:"upper"};var t=parseFloat(r);if(!Number.isFinite(t)){return r}var a=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"];var o=["〇","一","二","三","四","五","六","七","八","九"];var i=n["case"]==="lower"?o:a;var u=["","拾","佰","仟"];var c=["","十","百","千"];var d=n["case"]==="lower"?c:u;var l=["","万","亿","兆"];var f="负";var s="";if(t===0){s=i[0];return s}var v=t<0;if(v){t=0-t}var m;var E;t=t.toString();if(t.indexOf(".")===-1){m=t}else{E=t.split(".");m=E[0]}if(parseInt(m,10)>0){var p=0;var b=m.length;for(var h=0;h<b;h++){var y=m.substr(h,1);var g=b-h-1;var w=g/4;var A=g%4;if(y==="0"){p++}else{if(p>0){s+=i[0]}p=0;s+=i[parseInt(y,10)]+d[A]}if(A===0&&p<4){s+=l[w]}}}if(s===""){s+=i[0]}return v?f+s:s};var ce=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{case:"upper",type:"number"};var t=parseFloat(r);if(!ne.isFloat(t)){return""}var a=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"];var o=["〇","一","二","三","四","五","六","七","八","九"];var i=n["case"]==="lower"?o:a;var u=["角","分","毫","厘"];var c="";if(t===0){return i[0]}var d;var l;t=t.toString();if(t.indexOf(".")===-1){d=""}else{l=t.split(".");d=n.type==="money"?l[1].substr(0,4):l[1]}if(d){var f=d.length;for(var s=0;s<f;s++){var v=d.substr(s,1);if(n.type==="money"){if(v!=="0"){c+=i[Number(v)]+u[s]}}else{c+=i[Number(v)]}}}return c};var de=f.curry(function(e,r){if(!ne.isObject(e)){throw new Error('param "option" type error')}if(ne.isNaN(Number(r)))return null;var n=999999999999999.9;if(r>=n)return r;var t=e.type==="money"?"元":"点";var a="整";var o=ue(r,e);var i=ce(r,e);if(i){return o+t+i}return o+(e.type==="money"?t+a:"")});var le=de({type:"money",case:"upper"});var fe=de({type:"number",case:"upper"});var se={number2Amount:te,amount2Number:ae,number2Percentage:oe,percentage2Number:ie,amount2Chinese:le,number2Chinese:fe,number2ChineseWithOption:de};var ve=function e(r){return r instanceof HTMLElement};var me=function e(r){return ve(r)?r:window};var Ee=function e(r){return ve(r)?r:window.document};var pe=function e(r){var n=0;var t=0;document.body&&(n=document.body.scrollTop);ve(r)&&(n=r.scrollTop);document.documentElement&&(t=document.documentElement.scrollTop);return Math.max(n,t)};var be=function e(r){var n=0;var t=0;document.body&&(n=document.body.scrollHeight);ve(r)&&(n=r.scrollHeight);document.documentElement&&(t=document.documentElement.scrollHeight);return Math.max(n,t)};var he=function e(r){if(ve(r)){return r.offsetHeight}if(document.compatMode==="CSS1Compat"){return document.documentElement.clientHeight}return document.body.clientHeight};var ye=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;return pe(r)<=0};var ge=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:.1;var t=pe(r)+he(r)-be(r);return t>=0&&t<=n};var we=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;me(r).scrollTo({top:n,left:0,behavior:"smooth"});return pe(r)};var Ae=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;return we(r,0)};var _e=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;return we(r,be(r))};var Se=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:window;var t=pe(n);if(t>0){var a=t-(r||0);return we(n,a)}return t};var Pe=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:window;var t=pe(n);if(ge(n,0)){return t}var a=t+(r||0);return we(n,a)};var Re=function e(){var r=document.body;if(r.webkitRequestFullScreen){return r.webkitRequestFullScreen()||true}if(r.mozRequestFullScreen){return r.mozRequestFullScreen()||true}if(r.msRequestFullscreen){return r.msRequestFullscreen()||true}if(r.requestFullScreen){return r.requestFullScreen()||true}return false};var Fe=function e(){var r=parent.document;if(r.webkitCancelFullScreen){return r.webkitCancelFullScreen()||true}if(r.mozCancelFullScreen){return r.mozCancelFullScreen()||true}if(r.cancelFullScreen){return r.cancelFullScreen()||true}if(r.msExitFullscreen){return r.msExitFullscreen()||true}if(r.exitFullscreen){return r.exitFullscreen()||true}return false};var Ne=function e(r){var n={width:1e3,height:900,printClass:"print",noPrintClass:"no-print",closeWindow:false,delay:200};var a=Object.assign({},n,r);var t=window.open(" ","","width=".concat(a.width,",height=").concat(a.height,",scrollbars=yes"));var o="";var i=function e(t){var r=["input","textarea"];r.forEach(function(e){var r=document.querySelectorAll(".".concat(a.printClass," ").concat(e));for(var n=0;n<r.length;n++){t(r[n],e)}})};i(function(e,r){e.setAttribute(e.hasAttribute("disabled")?"is-disabled":"disabled",true);if(r==="textarea"){e.innerHTML=e.value}else{e.setAttribute("value",e.value)}});var u=window.document.getElementsByClassName(a.printClass);for(var c=0;c<u.length;c++){o+=u[c].innerHTML}i(function(e){if(!e.hasAttribute("is-disabled"))e.removeAttribute("disabled")});var d=document.head.innerHTML+"<style>.".concat(a.noPrintClass,"{display: none !important;}</style>");d=d.replace("screen","screen, print");d=d.replace(/<script.*?<\/script>/g,"");t.document.write("<html>");t.document.write(d);t.document.write("<body>");t.document.write(o.replace(/,/g,"").replace(/null/g,""));t.document.write("<script>setTimeout(function() {window.print();".concat(a.closeWindow&&"window.close()","}, ").concat(a.delay,")</"));t.document.write("script>");t.document.write("</body></html>")};var Ge=function e(r){var n=document.createElement("div");n.innerHTML=r;return n.firstElementChild};var Ie=function e(a){return new Promise(function(e,r){try{var n=Ge('<textarea readonly value="'.concat(a,'" style="position: absolute;left: -9999px;">').concat(a,"</textarea>"));document.body.appendChild(n);var t=document.getSelection().rangeCount>0?document.getSelection().getRangeAt(0):false;n.select();document.execCommand("copy");document.body.removeChild(n);if(t){document.getSelection().removeAllRanges();document.getSelection().addRange(t)}e()}catch(e){r(e)}})};var Oe=0;var Xe=function e(){if(document.body.dataset.preventScroll==="true")return false;Oe=pe();document.body.style["overflow-y"]="hidden";document.body.style.position="fixed";document.body.style.width="100%";document.body.style.top=-Oe+"px";document.body.dataset.preventScroll=true;return Oe};var Te=function e(){if(document.body.dataset.preventScroll==="true"){document.body.dataset.preventScroll=false;document.body.style["overflow-y"]="auto";document.body.style.position="static";window.scrollTo(0,Oe);return Oe}return false};var $e=function e(){return document.Selection?document.selection.createRange().text:window.getSelection().toString()};var je=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.document;return Ee(r).onselectstart=function(){return false}};var Me=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.document;return Ee(r.oncontextmenu=function(){return false})};var Ce=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.document;return Ee(r).oncopy=function(){return false}};var xe=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:window.document;Ie($e()+"\n"+r);Ce(n)};var He={scroll2Top:Ae,scroll2Bottom:_e,isScrollTop:ye,isScrollBottom:ge,scrollTopByStep:Se,scrollBottomByStep:Pe,toFullScreen:Re,exitFullScreen:Fe,print:Ne,createElement:Ge,copyToClipboard:Ie,preventScroll:Xe,recoverScroll:Te,disableSelect:je,disableContextMenu:Me,disableCopy:Ce,getSelectText:$e,replaceCopy:xe};var ze=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"*";if(Number(r)&&String(r).length===11){return"".concat(r).replace(/^(\d{3})\d{4}(\d{4})$/,"$1".concat(new Array(4).fill(n).join(""),"$2"))}return r};var Be=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";if(Number(r)&&String(r).length===11){return"".concat(r).replace(/^\d{7}(\d{4})$/,"".concat(new Array(7).fill(n).join(""),"$1"))}return r};var Le=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:99;return Number.isFinite(Number(r))&&Number(r)>Number(n)?"".concat(n,"+"):r};var ke={hideMiddlePhoneNumber:ze,hideFrontPhoneNumber:Be,outOfNumber:Le};var De=e(e(e(e(e(e({},$),j),se),He),ke),ne);return De}();