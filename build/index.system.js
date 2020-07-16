System.register("f2eTools",[],function(Qe){"use strict";return{execute:function(){function t(e,r,n){if(r in e){Object.defineProperty(e,r,{value:n,enumerable:true,configurable:true,writable:true})}else{e[r]=n}return e}function a(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);if(e)t=t.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable});n.push.apply(n,t)}return n}function e(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};if(e%2){a(Object(n),true).forEach(function(e){t(r,e,n[e])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(r,Object.getOwnPropertyDescriptors(n))}else{a(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}}return r}function g(e,r){return n(e)||o(e,r)||i(e,r)||c()}function n(e){if(Array.isArray(e))return e}function o(e,r){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(e)))return;var n=[];var t=true;var a=false;var o=undefined;try{for(var i=e[Symbol.iterator](),u;!(t=(u=i.next()).done);t=true){n.push(u.value);if(r&&n.length===r)break}}catch(e){a=true;o=e}finally{try{if(!t&&i["return"]!=null)i["return"]()}finally{if(a)throw o}}return n}function i(e,r){if(!e)return;if(typeof e==="string")return u(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor)n=e.constructor.name;if(n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,r)}function u(e,r){if(r==null||r>e.length)r=e.length;for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l=undefined;var r=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:r.length;for(var t=arguments.length,a=new Array(t>2?t-2:0),o=2;o<t;o++){a[o-2]=arguments[o]}return n<=a.length?r.apply(void 0,a):e.bind.apply(e,[null,r,n].concat(a))};var d=function e(o){var i=o.length;var r=i;while(r--){if(typeof o[r]!=="function"){throw new TypeError("Expected a function")}}return function(){var e=0;for(var r=arguments.length,n=new Array(r),t=0;t<r;t++){n[t]=arguments[t]}var a=i?o[e].apply(l,n):n[0];while(++e<i){a=o[e].call(l,a)}return a}};var f=function e(r,n){var t=JSON.parse(JSON.stringify(r));for(var a in n){if(n.hasOwnProperty(a)&&!r.hasOwnProperty(a)){t[a]=n[a]}}return t};var s={curry:r,flow:d,assign:f};var v=s.curry(function(e,r){return Math.pow(e,r)});var m=s.curry(function(e,r){return e*r});var E=s.curry(function(e,r){return s.flow([m,w])(e,r)});var p=s.curry(function(e,r){return e/r});var b=s.curry(function(e,r){return s.flow([p,w])(e,r)});var h=function e(r){return("".concat(r).split(".")[1]||"").length};var y=s.curry(function(e,r){return E(r,v(10,e))});var w=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:12;return Number(r.toPrecision(n))};var A=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:2;var t=v(10,n);return b(Math.round(E(r,t)),t)};var _=s.curry(function(e,r){return e+r});var S=s.curry(function(e,r){var n=y(Math.max(h(e),h(r)));return b(s.flow([_,w])(n(e),n(r)),n(1))});var P=s.curry(function(e,r){return e-r});var R=s.curry(function(e,r){var n=y(Math.max(h(e),h(r)));return b(s.flow([P,w])(n(e),n(r)),n(1))});var F=function e(r){return r.reduce(S)};var N=function e(r){return r.reduce(R)};var O=function e(r){return r.reduce(E)};var I=function e(r){return r.reduce(b)};var G=function e(){for(var r=arguments.length,n=new Array(r),t=0;t<r;t++){n[t]=arguments[t]}return F(n)};var X=function e(){for(var r=arguments.length,n=new Array(r),t=0;t<r;t++){n[t]=arguments[t]}return N(n)};var T=function e(){for(var r=arguments.length,n=new Array(r),t=0;t<r;t++){n[t]=arguments[t]}return O(n)};var $=function e(){for(var r=arguments.length,n=new Array(r),t=0;t<r;t++){n[t]=arguments[t]}return I(n)};var j={add:G,addition:S,subtract:X,subtraction:R,multiplication:E,multiply:T,division:b,divide:$,round:A};var M={REGEXP_PHONE:/^(\+?0[ -]?|\+?86[ -]?|\+?17951[ -]?|\+?12593[ -]?)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,REGEXP_EMAIL:/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,REGEXP_CN_CHARACTERS:/[\u4e00-\u9fa5]/gm,REGEXP_EN_CHARACTERS:/^[a-z]+$/i,REGEXP_UPPER_EN_CHARACTERS:/^[A-Z]+$/,REGEXP_DBCS:/[^\x00-\xff]/gim,REGEXP_POSITIVE_INT:/^\+?[1-9]\d*$/,REGEXP_NEGATIVE_INT:/^-[1-9]\d*$/,REGEXP_NON_NEGATIVE_INT:/^\+?\d+$/,REGEXP_NON_POSITIVE_INT:/^((-\d+)|(0+))$/,REGEXP_NON_NEGATIVE_NUMBER:/^\+?\d*(\.\d+)?$/,REGEXP_NON_POSITIVE_NUMBER:/^((-\d+(\.\d+)?)|(0+(\.0+)?))$/,REGEXP_NUMBER:/^[-\+]?\d*(\.\d+)?$/,REGEXP_POSITIVE_NUMBER:/^\+?(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/,REGEXP_NEGATIVE_NUMBER:/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/,REGEXP_FLOAT:/^[-\+]?([1-9]\d*\.\d+|0\.\d*[1-9]\d*|0?\.0+)$/,REGEXP_EN_NUM:/^[a-z0-9]+$/i,REGEXP_PASS_COMPLEX:/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{4,}/,REGEXP_PASS_MODERATE:/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{3,}$/,REGEXP_URL:/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z#0-9_-](\?)?)*)*$/i,REGEXP_IPV4:/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,REGEXP_IPV6:/(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/,REGEXP_IP:/((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/,REGEXP_DATE:/^(([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])))|(([12]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])))$/,REGEXP_TIME_12:/^((1[0-2]|0?[1-9]):([0-5][0-9])(:(?:[012345]\d))? ?([ap]m)?)$/i,REGEXP_TIME_24:/^(?:[01]\d|2[0123]):(?:[012345]\d)(:(?:[012345]\d))?$/,REGEXP_AMOUNT_OF_MONEY:/^([¤฿₵¢₡₫€ƒ₲₭£₤₥₦₱PQR$〒₮₩¥￥₴₪៛﷼₣]|B[rs]|Ft|Rs\.|kr|Lm|Sk|R[p$M]|৲৳|S\/\.|NT\$|zł|руб)?([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(\.[0-9]{1,})?$/,REGEXP_HTML_TAG:/^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/,REGEXP_REPEAT_STR:/(\b\w+\b)(?=.*\b\1\b)/,REGEXP_LNG_LAT:/^((1[0-7]\d)|\d{1,2})(\.\d{1,})?,(([1-8]\d)|\d)(\.\d{1,})?$/,REGEXP_ID_CARD:/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,REGEXP_POSTCODE:/^[1-9]\d{5}(?!\d)$/,REGEXP_FILE_PATH:/^((\/|\.\/|\.\.\/|\\|\/\/|https?:\\\\|https?:\/\/)[a-z0-9 _@\-^!#$%&+={}.\/\\\[\]]+)+\.[a-z]+$/i,REGEXP_HEX:/^#?([a-f0-9]{8}|[a-f0-9]{6}|[a-f0-9]{3})$/i,REGEXP_SLUG:/^[a-z0-9-]+$/,REGEXP_PLATES:/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/i,REGEXP_IS_IE:/msie (\d+\.\d+)/i,REGEXP_IS_WEBKIT:/webkit/i,REGEXP_IS_CHROME:/chrome\/(\d+\.\d+)/i,REGEXP_IS_EDGE:/edge\/(\d+\.\d+)/i,REGEXP_IS_FIREFOX:/firefox\/(\d+\.\d+)/i,REGEXP_IS_OPERA:/opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i,REGEXP_IS_SAFARI:/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i,REGEXP_IS_ANDROID:/android/i,REGEXP_IS_IPAD:/ipad/i,REGEXP_IS_IPHONE:/iphone/i,REGEXP_IS_MAC:/macintosh/i,REGEXP_IS_WINDOWS:/windows/i,REGEXP_IS_WX:/MicroMessenger/i,REGEXP_IS_MOBILE:/(nokia|iphone|android|ipad|motorola|^mot\-|softbank|foma|docomo|kddi|up\.browser|up\.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam\-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte\-|longcos|pantech|gionee|^sie\-|portalmmm|jig\s browser|hiptop|^ucweb|^benq|haier|^lct|opera\s*mobi|opera\*mini|320x320|240x320|176x220)/i};var C=function e(r){return Object.prototype.toString.call(r)};var x={string:"[object String]",number:"[object Number]",bigInt:"[object BigInt]",boolean:"[object Boolean]",undefined:"[object Undefined]",symbol:"[object Symbol]",function:"[object Function]",array:"[object Array]",object:"[object Object]",null:"[object Null]",map:"[object Map]",set:"[object Set]",promise:"[object Promise]",async:"[object AsyncFunction]",date:"[object Date]"};var B=function e(r){return C(r)===x.string};var H=function e(r){return C(r)===x.number};var z=function e(r){return H(r)&&r.toString()==="NaN"};var L=function e(r){return H(r)&&!z(r)&&r!==Infinity&&r!==-Infinity};var D=function e(r){return L(r)&&"".concat(r).indexOf(".")<0};var k=function e(r){return C(r)===x.bigInt};var U=function e(r){return L(r)&&!D(r)};var Z=function e(r){return C(r)===x["boolean"]};var q=function e(r){return C(r)===x.undefined};var V=function e(r){return C(r)===x.symbol};var W=function e(r){return C(r)===x["function"]};var J=function e(r){return C(r)===x.array};var K=function e(r){return C(r)===x.object};var Q=function e(r){return C(r)===x["null"]};var Y=function e(r){return r instanceof HTMLElement};var ee=function e(r){return C(r)===x.map};var re=function e(r){return C(r)===x.set};var ne=function e(r){return C(r)===x.promise};var te=function e(r){return C(r)===x.async};var ae=function e(r){return C(r)===x.date};var oe=function e(r){return J(r)&&r.length===0||K(r)&&Object.keys(r).length===0||(ee(r)||re(r))&&r.size===0||Q(r)};var ie={isString:B,isNumber:H,isNaN:z,isFinite:L,isInteger:D,isBigInt:k,isFloat:U,isBoolean:Z,isUndefined:q,isSymbol:V,isFunction:W,isObject:K,isArray:J,isNull:Q,isHTML:Y,isMap:ee,isSet:re,isEmpty:oe,isPromise:ne,isAsync:te,isDate:ae};var ue=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"0,0";var t=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"N/A";if(r===null||r===undefined||r===""||ie.isNaN(Number(r))){return t}var a=n.match(/(.*?)0/)[1];var o=n.match(/.*0(.*)/)[1];var i=a?"\\":"";var u=o?"\\":"";var c=n.match(new RegExp("".concat(i).concat(a,"(.*)").concat(u).concat(o)))[1];var l=c.split(".")[1]||"",d=l.length;var f=Number(r).toString().split("."),s=g(f,2),v=s[0],m=s[1],E=m===void 0?"":m;var p=j.round(E/Math.pow(10,E.length),d);if(p===1){p="0.0".padEnd(d+2,0);v=Number(v)+1}var b=n.match(/0(.*?)0/)[1];var h="".concat(v<0?0-v:v).replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+b);var y=d&&"".concat(p).split(".")[1]?"."+"".concat(p).split(".")[1].padEnd(d,0):"";return"".concat(v<0?"-":"").concat(a).concat(h).concat(y," ").concat(o.trimStart()).trimEnd()};var ce=function e(r){var n="".concat(r);if(!/\d/.test(n)){return null}var t=n.split(".")[0];var a=n.includes(".")?n.match(/.*\.(.*)/)[1]:"";var o={int:t.match(/\d/g),float:a.match(/\d/g)};var i=o["int"]&&o["int"].join("");var u=o["float"]&&o["float"].join("");return Number("".concat(n.includes("-")?"-":"").concat(i).concat(u?"."+u:""))};var le=function e(r){var n=j.multiplication(r,100);if(ie.isNaN(n))return null;return n+"%"};var de=function e(r){return j.division(Number.parseFloat(r),100)||null};var fe=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{case:"upper"};var t=parseFloat(r);if(!ie.isFinite(t)){return r}var a=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"];var o=["〇","一","二","三","四","五","六","七","八","九"];var i=n["case"]==="lower"?o:a;var u=["","拾","佰","仟"];var c=["","十","百","千"];var l=n["case"]==="lower"?c:u;var d=["","万","亿","兆"];var f="负";var s="";if(t===0){s=i[0];return s}var v=t<0;if(v){t=0-t}var m;var E;t=t.toString();if(t.indexOf(".")===-1){m=t}else{E=t.split(".");m=E[0]}if(parseInt(m,10)>0){var p=0;var b=m.length;for(var h=0;h<b;h++){var y=m.substr(h,1);var g=b-h-1;var w=g/4;var A=g%4;if(y==="0"){p++}else{if(p>0){s+=i[0]}p=0;s+=i[parseInt(y,10)]+l[A]}if(A===0&&p<4){s+=d[w]}}}if(s===""){s+=i[0]}return v?f+s:s};var se=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{case:"upper",type:"number"};var t=parseFloat(r);if(!ie.isFloat(t)){return""}var a=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"];var o=["〇","一","二","三","四","五","六","七","八","九"];var i=n["case"]==="lower"?o:a;var u=["角","分","毫","厘"];var c="";if(t===0){return i[0]}var l;var d;t=t.toString();if(t.indexOf(".")===-1){l=""}else{d=t.split(".");l=n.type==="money"?d[1].substr(0,4):d[1]}if(l){var f=l.length;for(var s=0;s<f;s++){var v=l.substr(s,1);if(n.type==="money"){if(v!=="0"){c+=i[Number(v)]+u[s]}}else{c+=i[Number(v)]}}}return c};var ve=s.curry(function(e,r){if(!ie.isObject(e)){throw new Error('param "option" type error')}if(ie.isNaN(Number(r)))return null;var n=999999999999999.9;if(r>=n)return r;var t=e.type==="money"?"元":"点";var a="整";var o=fe(r,e);var i=se(r,e);if(i){return o+t+i}return o+(e.type==="money"?t+a:"")});var me=ve({type:"money",case:"upper"});var Ee=ve({type:"number",case:"upper"});var pe={number2Amount:ue,amount2Number:ce,number2Percentage:le,percentage2Number:de,amount2Chinese:me,number2Chinese:Ee,number2ChineseWithOption:ve};var be=function e(r){return r instanceof HTMLElement};var he=function e(r){return be(r)?r:window};var ye=function e(r){return be(r)?r:window.document.body};var ge=function e(r){if(be(r))return r.scrollTop;var n=0;var t=0;document.body&&(n=document.body.scrollTop);document.documentElement&&(t=document.documentElement.scrollTop);return Math.max(n,t)};var we=function e(r){if(be(r))return r.scrollHeight;var n=0;var t=0;document.body&&(n=document.body.scrollHeight);document.documentElement&&(t=document.documentElement.scrollHeight);return Math.max(n,t)};var Ae=function e(r){if(be(r)){return r.offsetHeight}if(document.compatMode==="CSS1Compat"){return document.documentElement.clientHeight}return document.body.clientHeight};var _e=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;return ge(r)<=0};var Se=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:.1;var t=ge(r)+Ae(r)-we(r);return Math.abs(t)<=n};var Pe=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;ye(r).style.scrollBehavior!=="smooth"&&(ye(r).style.scrollBehavior="smooth");document.documentElement.style.scrollBehavior!=="smooth"&&(document.documentElement.style.scrollBehavior="smooth");try{he(r).scrollTo(0,n)}catch(e){he(r).scrollTop=n}return ge(r)};var Re=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;return Pe(r,0)};var Fe=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;return Pe(r,we(r))};var Ne=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:window;var t=ge(n);if(t>0){var a=t-(r||0);return Pe(n,a)}return t};var Oe=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:window;var t=ge(n);if(Se(n,0)){return t}var a=t+(r||0);return Pe(n,a)};var Ie=function e(r){var n=be(r)?r:document.body;if(n.webkitRequestFullScreen){return n.webkitRequestFullScreen()||true}if(n.mozRequestFullScreen){return n.mozRequestFullScreen()||true}if(n.msRequestFullscreen){return n.msRequestFullscreen()||true}if(n.requestFullScreen){return n.requestFullScreen()||true}return false};var Ge=function e(){var r=parent.document;if(r.webkitCancelFullScreen){return r.webkitCancelFullScreen()||true}if(r.mozCancelFullScreen){return r.mozCancelFullScreen()||true}if(r.cancelFullScreen){return r.cancelFullScreen()||true}if(r.msExitFullscreen){return r.msExitFullscreen()||true}if(r.exitFullscreen){return r.exitFullscreen()||true}return false};var Xe=function e(r){var n=r||{};if(!ie.isObject(n)){throw new TypeError("option 类型错误")}var t={width:1e3,height:900,printClass:"print",noPrintClass:"no-print",closeWindow:false,delay:200};var a=s.assign(t,n);var o=window.open(" ","","width=".concat(a.width,",height=").concat(a.height,",scrollbars=yes"));var i="";var u=function e(t){var r=["input","textarea"];r.forEach(function(e){var r=document.querySelectorAll(".".concat(a.printClass," ").concat(e));for(var n=0;n<r.length;n++){t(r[n],e)}})};u(function(e,r){e.setAttribute(e.hasAttribute("disabled")?"is-disabled":"disabled",true);if(r==="textarea"){e.innerHTML=e.value}else{e.setAttribute("value",e.value)}});var c=window.document.getElementsByClassName(a.printClass);for(var l=0;l<c.length;l++){i+=c[l].innerHTML}u(function(e){if(!e.hasAttribute("is-disabled"))e.removeAttribute("disabled")});var d=document.head.innerHTML+"<style>.".concat(a.noPrintClass,"{display: none !important;}</style>");d=d.replace("screen","screen, print");d=d.replace(/<script.*?<\/script>/g,"");o.document.write("<html>");o.document.write(d);o.document.write("<body>");o.document.write(i.replace(/,/g,"").replace(/null/g,""));o.document.write("<script>setTimeout(function() {window.print();".concat(a.closeWindow&&"window.close()","}, ").concat(a.delay,")</"));o.document.write("script>");o.document.write("</body></html>")};var Te=function e(r){var n=document.createElement("div");n.innerHTML=r;return n.firstElementChild};var $e=function e(r){var n=Te('<textarea readonly value="'.concat(r,'" style="position: absolute;left: -9999px;">').concat(r,"</textarea>"));document.body.appendChild(n);var t=document.getSelection().rangeCount>0?document.getSelection().getRangeAt(0):false;n.select();document.execCommand("copy");document.body.removeChild(n);if(t){document.getSelection().removeAllRanges();document.getSelection().addRange(t)}};var je=function e(n){var t={then:function e(r){if(ie.isFunction(r))r(n);return t},catch:function e(r){}};try{$e(n)}catch(r){t.then=function(e){return t};t["catch"]=function(e){return ie.isFunction(e)&&e(r)}}return t};var Me=0;var Ce=function e(r){if(ye(r).dataset.preventScroll==="true")return false;Me=ge();ye(r).style["overflow-y"]="hidden";ye(r).style.top=-Me+"px";ye(r).dataset.preventScroll=true;return Me};var xe=function e(r){if(ye(r).dataset.preventScroll==="true"){ye(r).dataset.preventScroll=false;ye(r).style["overflow-y"]="auto";window.scrollTo(0,Me);return Me}return false};var Be=function e(){return document.Selection?document.selection.createRange().text:window.getSelection().toString()};var He=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.document.body;return ye(r).onselectstart=function(){return false}};var ze=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.document.body;return ye(r).onselectstart=function(){return true}};var Le=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.document.body;return ye(r.oncontextmenu=function(){return false})};var De=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.document.body;return ye(r).oncopy=function(){return false}};var ke=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:window.document.body;je(Be()+"\n"+r);De(n)};var Ue={scroll2Top:Re,scroll2Bottom:Fe,isScrollTop:_e,isScrollBottom:Se,scrollTopByStep:Ne,scrollBottomByStep:Oe,toFullScreen:Ie,exitFullScreen:Ge,print:Xe,createElement:Te,copyToClipboard:je,preventScroll:Ce,recoverScroll:xe,disableSelect:He,recoverSelect:ze,disableContextMenu:Le,disableCopy:De,getSelectText:Be,replaceCopy:ke};var Ze=function e(r){var n="".concat(r).match(/^\+?86[ -]?|^\+?0[ -]?|^\+?17951[ -]?|^\+?12593[ -]?/);var t="";if(n)t=n[0];return[t,"".concat(r).replace(t,"")]};var qe=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"*";var t=Ze(r),a=g(t,2),o=a[0],i=a[1];var u="".concat(i).length;if(!Number(i)||u<=7)return r;var c=new RegExp("^(\\d{3})\\d{".concat(u-3-4,"}(\\d{4})$"));return o+"".concat(i).replace(c,"$1".concat(new Array(u-3-4).fill(n).join(""),"$2"))};var Ve=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";var t=Ze(r),a=g(t,2),o=a[0],i=a[1];var u="".concat(i).length;if(u<=4||!Number(i))return r;var c=u-4;var l=new RegExp("^\\d{".concat(c,"}(\\d{4})$"));return(n&&o)+"".concat(i).replace(l,"".concat(new Array(c).fill(n).join(""),"$1"))};var We=function e(r){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:99;return ie.isFinite(Number(r))&&Number(r)>Number(n)?"".concat(n,"+"):r};var Je={hideMiddlePhoneNumber:qe,hideFrontNumber:Ve,outOfNumber:We};var Ke=Qe("default",e(e(e(e(e(e({},j),M),pe),Ue),Je),ie))}}});