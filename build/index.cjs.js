"use strict";function _defineProperty(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}function ownKeys(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);if(e)n=n.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable});t.push.apply(t,n)}return t}function _objectSpread2(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};if(e%2){ownKeys(Object(t),true).forEach(function(e){_defineProperty(r,e,t[e])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(r,Object.getOwnPropertyDescriptors(t))}else{ownKeys(Object(t)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))})}}return r}function _slicedToArray(e,r){return _arrayWithHoles(e)||_iterableToArrayLimit(e,r)||_unsupportedIterableToArray(e,r)||_nonIterableRest()}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArrayLimit(e,r){if(typeof Symbol==="undefined"||!(Symbol.iterator in Object(e)))return;var t=[];var n=true;var o=false;var i=undefined;try{for(var a=e[Symbol.iterator](),c;!(n=(c=a.next()).done);n=true){t.push(c.value);if(r&&t.length===r)break}}catch(e){o=true;i=e}finally{try{if(!n&&a["return"]!=null)a["return"]()}finally{if(o)throw i}}return t}function _unsupportedIterableToArray(e,r){if(!e)return;if(typeof e==="string")return _arrayLikeToArray(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor)t=e.constructor.name;if(t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _arrayLikeToArray(e,r)}function _arrayLikeToArray(e,r){if(r==null||r>e.length)r=e.length;for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var _this=undefined;var curry=function e(r){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:r.length;for(var n=arguments.length,o=new Array(n>2?n-2:0),i=2;i<n;i++){o[i-2]=arguments[i]}return t<=o.length?r.apply(void 0,o):e.bind.apply(e,[null,r,t].concat(o))};var flow=function e(i){var a=i.length;var r=a;while(r--){if(typeof i[r]!=="function"){throw new TypeError("Expected a function")}}return function(){var e=0;for(var r=arguments.length,t=new Array(r),n=0;n<r;n++){t[n]=arguments[n]}var o=a?i[e].apply(_this,t):t[0];while(++e<a){o=i[e].call(_this,o)}return o}};var assign=function e(r,t){var n=JSON.parse(JSON.stringify(r));for(var o in t){if(t.hasOwnProperty(o)&&!r.hasOwnProperty(o)){n[o]=t[o]}}return n};var util={curry:curry,flow:flow,assign:assign};var pow=util.curry(function(e,r){return Math.pow(e,r)});var multiply=util.curry(function(e,r){return e*r});var precisionMultiply=util.curry(function(e,r){return util.flow([multiply,toPrecision])(e,r)});var divide=util.curry(function(e,r){return e/r});var precisionDivide=util.curry(function(e,r){return util.flow([divide,toPrecision])(e,r)});var getFloatLength=function e(r){return("".concat(r).split(".")[1]||"").length};var magnification=util.curry(function(e,r){return precisionMultiply(r,pow(10,e))});var toPrecision=function e(r){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:12;return Number(r.toPrecision(t))};var round=function e(r){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:2;var n=pow(10,t);return precisionDivide(Math.round(precisionMultiply(r,n)),n)};var add=util.curry(function(e,r){return e+r});var precisionAdd=util.curry(function(e,r){var t=magnification(Math.max(getFloatLength(e),getFloatLength(r)));return precisionDivide(util.flow([add,toPrecision])(t(e),t(r)),t(1))});var sub=util.curry(function(e,r){return e-r});var precisionSub=util.curry(function(e,r){var t=magnification(Math.max(getFloatLength(e),getFloatLength(r)));return precisionDivide(util.flow([sub,toPrecision])(t(e),t(r)),t(1))});var precisionAddAllItems=function e(r){return r.reduce(precisionAdd)};var precisionMinusAllItems=function e(r){return r.reduce(precisionSub)};var precisionMultiplyAllItems=function e(r){return r.reduce(precisionMultiply)};var precisionDivideAllItems=function e(r){return r.reduce(precisionDivide)};var precisionSum=function e(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++){t[n]=arguments[n]}return precisionAddAllItems(t)};var precisionMinus=function e(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++){t[n]=arguments[n]}return precisionMinusAllItems(t)};var precisionTimes=function e(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++){t[n]=arguments[n]}return precisionMultiplyAllItems(t)};var precisionDivides=function e(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++){t[n]=arguments[n]}return precisionDivideAllItems(t)};var math={add:precisionSum,addition:precisionAdd,subtract:precisionMinus,subtraction:precisionSub,multiplication:precisionMultiply,multiply:precisionTimes,division:precisionDivide,divide:precisionDivides,round:round};var passRegExp={COMPLEX:"^(?=(.*[0-9]))(?=.*[\\!@#$%^&*()\\\\[\\]{}\\-_+=~`|:;\"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).",MODERATE:"^(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^."};var innerProxy=function e(i,a){return new Proxy({},{get:function e(r,t,n){var o=Number(t)||"";return new RegExp("".concat(passRegExp[a],"{").concat(Number(i),",").concat(o===Infinity||o===-Infinity?"":o,"}$"))}})};var passProxy=function e(i){return new Proxy({},{get:function e(r,t,n){var o=Number(t)||1;return innerProxy(o,i)}})};var regExp={REGEXP_PHONE:/^(\+?0[ -]?|\+?86[ -]?|\+?17951[ -]?|\+?12593[ -]?)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,REGEXP_EMAIL:/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,REGEXP_CN_CHARACTERS:/[\u4e00-\u9fa5]/gm,REGEXP_EN_CHARACTERS:/^[a-z]+$/i,REGEXP_UPPER_EN_CHARACTERS:/^[A-Z]+$/,REGEXP_DBCS:/[^\x00-\xff]/gim,REGEXP_POSITIVE_INT:/^\+?[1-9]\d*$/,REGEXP_NEGATIVE_INT:/^-[1-9]\d*$/,REGEXP_NON_NEGATIVE_INT:/^\+?\d+$/,REGEXP_NON_POSITIVE_INT:/^((-\d+)|(0+))$/,REGEXP_NON_NEGATIVE_NUMBER:/^\+?\d*(\.\d+)?$/,REGEXP_NON_POSITIVE_NUMBER:/^((-\d+(\.\d+)?)|(0+(\.0+)?))$/,REGEXP_NUMBER:/^[-\+]?\d*(\.\d+)?$/,REGEXP_POSITIVE_NUMBER:/^\+?(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/,REGEXP_NEGATIVE_NUMBER:/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/,REGEXP_FLOAT:/^[-\+]?([1-9]\d*\.\d+|0\.\d*[1-9]\d*|0?\.0+)$/,REGEXP_EN_NUM:/^[a-z0-9]+$/i,REGEXP_PASS_COMPLEX:passProxy("COMPLEX"),REGEXP_PASS_MODERATE:passProxy("MODERATE"),REGEXP_URL:/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z#0-9_-](\?)?)*)*$/i,REGEXP_IPV4:/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,REGEXP_IPV6:/(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/,REGEXP_IP:/((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/,REGEXP_DATE:/^(([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])))|(([12]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])))$/,REGEXP_TIME_12:/^((1[0-2]|0?[1-9]):([0-5][0-9])(:(?:[012345]\d))? ?([ap]m)?)$/i,REGEXP_TIME_24:/^(?:[01]\d|2[0123]):(?:[012345]\d)(:(?:[012345]\d))?$/,REGEXP_AMOUNT_OF_MONEY:/^([¤฿₵¢₡₫€ƒ₲₭£₤₥₦₱PQR$〒₮₩¥￥₴₪៛﷼₣]|B[rs]|Ft|Rs\.|kr|Lm|Sk|R[p$M]|৲৳|S\/\.|NT\$|zł|руб)?([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(\.[0-9]{1,})?$/,REGEXP_HTML_TAG:/^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/,REGEXP_REPEAT_STR:/(\b\w+\b)(?=.*\b\1\b)/,REGEXP_LNG_LAT:/^((1[0-7]\d)|\d{1,2})(\.\d{1,})?,(([1-8]\d)|\d)(\.\d{1,})?$/,REGEXP_ID_CARD:/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,REGEXP_POSTCODE:/^[1-9]\d{5}(?!\d)$/,REGEXP_FILE_PATH:/^((\/|\.\/|\.\.\/|\\|\/\/|https?:\\\\|https?:\/\/)[a-z0-9 _@\-^!#$%&+={}.\/\\\[\]]+)+\.[a-z]+$/i,REGEXP_HEX:/^#?([a-f0-9]{8}|[a-f0-9]{6}|[a-f0-9]{3})$/i,REGEXP_SLUG:/^[a-z0-9-]+$/,REGEXP_PLATES:/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/i,REGEXP_IS_IE:/msie (\d+\.\d+)/i,REGEXP_IS_WEBKIT:/webkit/i,REGEXP_IS_CHROME:/chrome\/(\d+\.\d+)/i,REGEXP_IS_EDGE:/edge\/(\d+\.\d+)/i,REGEXP_IS_FIREFOX:/firefox\/(\d+\.\d+)/i,REGEXP_IS_OPERA:/opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i,REGEXP_IS_SAFARI:/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i,REGEXP_IS_ANDROID:/android/i,REGEXP_IS_IPAD:/ipad/i,REGEXP_IS_IPHONE:/iphone/i,REGEXP_IS_MAC:/macintosh/i,REGEXP_IS_WINDOWS:/windows/i,REGEXP_IS_WX:/MicroMessenger/i,REGEXP_IS_MOBILE:/(nokia|iphone|android|ipad|motorola|^mot\-|softbank|foma|docomo|kddi|up\.browser|up\.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam\-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte\-|longcos|pantech|gionee|^sie\-|portalmmm|jig\s browser|hiptop|^ucweb|^benq|haier|^lct|opera\s*mobi|opera\*mini|320x320|240x320|176x220)/i};var checkPrototype=function e(r){return Object.prototype.toString.call(r)};var protoTypes={string:"[object String]",number:"[object Number]",bigInt:"[object BigInt]",boolean:"[object Boolean]",undefined:"[object Undefined]",symbol:"[object Symbol]",function:"[object Function]",array:"[object Array]",object:"[object Object]",null:"[object Null]",map:"[object Map]",set:"[object Set]",promise:"[object Promise]",async:"[object AsyncFunction]",date:"[object Date]"};var isString=function e(r){return checkPrototype(r)===protoTypes.string};var isNumber=function e(r){return checkPrototype(r)===protoTypes.number};var isNaN=function e(r){return isNumber(r)&&r.toString()==="NaN"};var isFinite=function e(r){return isNumber(r)&&!isNaN(r)&&r!==Infinity&&r!==-Infinity};var isInteger=function e(r){return isFinite(r)&&"".concat(r).indexOf(".")<0};var isBigInt=function e(r){return checkPrototype(r)===protoTypes.bigInt};var isFloat=function e(r){return isFinite(r)&&!isInteger(r)};var isBoolean=function e(r){return checkPrototype(r)===protoTypes["boolean"]};var isUndefined=function e(r){return checkPrototype(r)===protoTypes.undefined};var isSymbol=function e(r){return checkPrototype(r)===protoTypes.symbol};var isFunction=function e(r){return checkPrototype(r)===protoTypes["function"]};var isArray=function e(r){return checkPrototype(r)===protoTypes.array};var isObject=function e(r){return checkPrototype(r)===protoTypes.object};var isNull=function e(r){return checkPrototype(r)===protoTypes["null"]};var isHTML=function e(r){return r instanceof HTMLElement};var isMap=function e(r){return checkPrototype(r)===protoTypes.map};var isSet=function e(r){return checkPrototype(r)===protoTypes.set};var isPromise=function e(r){return checkPrototype(r)===protoTypes.promise};var isAsync=function e(r){return checkPrototype(r)===protoTypes.async};var isDate=function e(r){return checkPrototype(r)===protoTypes.date};var isEmpty=function e(r){return isArray(r)&&r.length===0||isObject(r)&&Object.keys(r).length===0||(isMap(r)||isSet(r))&&r.size===0||isNull(r)};var type={isString:isString,isNumber:isNumber,isNaN:isNaN,isFinite:isFinite,isInteger:isInteger,isBigInt:isBigInt,isFloat:isFloat,isBoolean:isBoolean,isUndefined:isUndefined,isSymbol:isSymbol,isFunction:isFunction,isObject:isObject,isArray:isArray,isNull:isNull,isHTML:isHTML,isMap:isMap,isSet:isSet,isEmpty:isEmpty,isPromise:isPromise,isAsync:isAsync,isDate:isDate};var number2Amount=function e(r){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"0,0";var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"N/A";if(r===null||r===undefined||r===""||type.isNaN(Number(r))){return n}var o=t.match(/(.*?)0/)[1];var i=t.match(/.*0(.*)/)[1];var a=o?"\\":"";var c=i?"\\":"";var u=t.match(new RegExp("".concat(a).concat(o,"(.*)").concat(c).concat(i)))[1];var l=u.split(".")[1]||"",s=l.length;var d=Number(r).toString().split("."),p=_slicedToArray(d,2),f=p[0],v=p[1],m=v===void 0?"":v;var y=math.round(m/Math.pow(10,m.length),s);if(y===1){y="0.0".padEnd(s+2,0);f=Number(f)+1}var b=t.match(/0(.*?)0/)[1];var h="".concat(f<0?0-f:f).replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+b);var E=s&&"".concat(y).split(".")[1]?"."+"".concat(y).split(".")[1].padEnd(s,0):"";return"".concat(f<0?"-":"").concat(o).concat(h).concat(E," ").concat(i.trimStart()).trimEnd()};var amount2Number=function e(r){var t="".concat(r);if(!/\d/.test(t)){return null}var n=t.split(".")[0];var o=t.includes(".")?t.match(/.*\.(.*)/)[1]:"";var i={int:n.match(/\d/g),float:o.match(/\d/g)};var a=i["int"]&&i["int"].join("");var c=i["float"]&&i["float"].join("");return Number("".concat(t.includes("-")?"-":"").concat(a).concat(c?"."+c:""))};var number2Percentage=function e(r){var t=math.multiplication(r,100);if(type.isNaN(t))return null;return t+"%"};var percentage2Number=function e(r){return math.division(Number.parseFloat(r),100)||null};var int2Chinese=function e(r){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{case:"upper"};var n=parseFloat(r);if(!type.isFinite(n)){return r}var o=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"];var i=["〇","一","二","三","四","五","六","七","八","九"];var a=t["case"]==="lower"?i:o;var c=["","拾","佰","仟"];var u=["","十","百","千"];var l=t["case"]==="lower"?u:c;var s=["","万","亿","兆"];var d="负";var p="";if(n===0){p=a[0];return p}var f=n<0;if(f){n=0-n}var v;var m;n=n.toString();if(n.indexOf(".")===-1){v=n}else{m=n.split(".");v=m[0]}if(parseInt(v,10)>0){var y=0;var b=v.length;for(var h=0;h<b;h++){var E=v.substr(h,1);var g=b-h-1;var S=g/4;var A=g%4;if(E==="0"){y++}else{if(y>0){p+=a[0]}y=0;p+=a[parseInt(E,10)]+l[A]}if(A===0&&y<4){p+=s[S]}}}if(p===""){p+=a[0]}return f?d+p:p};var float2Chinese=function e(r){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{case:"upper",type:"number"};var n=parseFloat(r);if(!type.isFloat(n)){return""}var o=["零","壹","贰","叁","肆","伍","陆","柒","捌","玖"];var i=["〇","一","二","三","四","五","六","七","八","九"];var a=t["case"]==="lower"?i:o;var c=["角","分","毫","厘"];var u="";if(n===0){return a[0]}var l;var s;n=n.toString();if(n.indexOf(".")===-1){l=""}else{s=n.split(".");l=t.type==="money"?s[1].substr(0,4):s[1]}if(l){var d=l.length;for(var p=0;p<d;p++){var f=l.substr(p,1);if(t.type==="money"){if(f!=="0"){u+=a[Number(f)]+c[p]}}else{u+=a[Number(f)]}}}return u};var number2ChineseWithOption=util.curry(function(e,r){if(!type.isObject(e)){throw new Error('param "option" type error')}if(type.isNaN(Number(r)))return null;var t=999999999999999.9;if(r>=t)return r;var n=e.type==="money"?"元":"点";var o="整";var i=int2Chinese(r,e);var a=float2Chinese(r,e);if(a){return i+n+a}return i+(e.type==="money"?n+o:"")});var amount2Chinese=number2ChineseWithOption({type:"money",case:"upper"});var number2Chinese=number2ChineseWithOption({type:"number",case:"upper"});var amount={number2Amount:number2Amount,amount2Number:amount2Number,number2Percentage:number2Percentage,percentage2Number:percentage2Number,amount2Chinese:amount2Chinese,number2Chinese:number2Chinese,number2ChineseWithOption:number2ChineseWithOption};var isHTML$1=function e(r){return r instanceof HTMLElement};var getDom=function e(r){return isHTML$1(r)?r:window};var getElement=function e(r){return isHTML$1(r)?r:window.document.body};var getScrollTop=function e(r){if(isHTML$1(r))return r.scrollTop;var t=0;var n=0;document.body&&(t=document.body.scrollTop);document.documentElement&&(n=document.documentElement.scrollTop);return Math.max(t,n)};var getScrollHeight=function e(r){if(isHTML$1(r))return r.scrollHeight;var t=0;var n=0;document.body&&(t=document.body.scrollHeight);document.documentElement&&(n=document.documentElement.scrollHeight);return Math.max(t,n)};var getWindowHeight=function e(r){if(isHTML$1(r)){return r.offsetHeight}if(document.compatMode==="CSS1Compat"){return document.documentElement.clientHeight}return document.body.clientHeight};var isScrollTop=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;return getScrollTop(r)<=0};var isScrollBottom=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:.1;var n=getScrollTop(r)+getWindowHeight(r)-getScrollHeight(r);return Math.abs(n)<=t};var doScroll=function e(r){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;getElement(r).style.scrollBehavior!=="smooth"&&(getElement(r).style.scrollBehavior="smooth");document.documentElement.style.scrollBehavior!=="smooth"&&(document.documentElement.style.scrollBehavior="smooth");try{getDom(r).scrollTo(0,t)}catch(e){getDom(r).scrollTop=t}return getScrollTop(r)};var scroll2Top=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;return doScroll(r,0)};var scroll2Bottom=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;return doScroll(r,getScrollHeight(r))};var scrollTopByStep=function e(r){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:window;var n=getScrollTop(t);if(n>0){var o=n-(r||0);return doScroll(t,o)}return n};var scrollBottomByStep=function e(r){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:window;var n=getScrollTop(t);if(isScrollBottom(t,0)){return n}var o=n+(r||0);return doScroll(t,o)};var toFullScreen=function e(r){var t=isHTML$1(r)?r:document.body;if(t.webkitRequestFullScreen){return t.webkitRequestFullScreen()||true}if(t.mozRequestFullScreen){return t.mozRequestFullScreen()||true}if(t.msRequestFullscreen){return t.msRequestFullscreen()||true}if(t.requestFullScreen){return t.requestFullScreen()||true}return false};var exitFullScreen=function e(){var r=parent.document;if(r.webkitCancelFullScreen){return r.webkitCancelFullScreen()||true}if(r.mozCancelFullScreen){return r.mozCancelFullScreen()||true}if(r.cancelFullScreen){return r.cancelFullScreen()||true}if(r.msExitFullscreen){return r.msExitFullscreen()||true}if(r.exitFullscreen){return r.exitFullscreen()||true}return false};var print=function e(r){var t=r||{};if(!type.isObject(t)){throw new TypeError("option 类型错误")}var n={width:1e3,height:900,printClass:"print",noPrintClass:"no-print",closeWindow:false,delay:200};var o=util.assign(n,t);var i=window.open(" ","","width=".concat(o.width,",height=").concat(o.height,",scrollbars=yes"));var a="";var c=function e(n){var r=["input","textarea"];r.forEach(function(e){var r=document.querySelectorAll(".".concat(o.printClass," ").concat(e));for(var t=0;t<r.length;t++){n(r[t],e)}})};c(function(e,r){e.setAttribute(e.hasAttribute("disabled")?"is-disabled":"disabled",true);if(r==="textarea"){e.innerHTML=e.value}else{e.setAttribute("value",e.value)}});var u=window.document.getElementsByClassName(o.printClass);for(var l=0;l<u.length;l++){a+=u[l].innerHTML}c(function(e){if(!e.hasAttribute("is-disabled"))e.removeAttribute("disabled")});var s=document.head.innerHTML+"<style>.".concat(o.noPrintClass,"{display: none !important;}</style>");s=s.replace("screen","screen, print");s=s.replace(/<script.*?<\/script>/g,"");i.document.write("<html>");i.document.write(s);i.document.write("<body>");i.document.write(a.replace(/,/g,"").replace(/null/g,""));i.document.write("<script>setTimeout(function() {window.print();".concat(o.closeWindow&&"window.close()","}, ").concat(o.delay,")</"));i.document.write("script>");i.document.write("</body></html>")};var createElement=function e(r){var t=document.createElement("div");t.innerHTML=r;return t.firstElementChild};var doCopy=function e(r){var t=createElement('<textarea readonly value="'.concat(r,'" style="position: absolute;left: -9999px;">').concat(r,"</textarea>"));document.body.appendChild(t);var n=document.getSelection().rangeCount>0?document.getSelection().getRangeAt(0):false;t.select();document.execCommand("copy");document.body.removeChild(t);if(n){document.getSelection().removeAllRanges();document.getSelection().addRange(n)}};var copyToClipboard=function e(t){var n={then:function e(r){if(type.isFunction(r))r(t);return n},catch:function e(r){}};try{doCopy(t)}catch(r){n.then=function(e){return n};n["catch"]=function(e){return type.isFunction(e)&&e(r)}}return n};var scrollTop=0;var preventScroll=function e(r){if(getElement(r).dataset.preventScroll==="true")return false;scrollTop=getScrollTop();getElement(r).style["overflow-y"]="hidden";getElement(r).style.top=-scrollTop+"px";getElement(r).dataset.preventScroll=true;return scrollTop};var recoverScroll=function e(r){if(getElement(r).dataset.preventScroll==="true"){getElement(r).dataset.preventScroll=false;getElement(r).style["overflow-y"]="auto";window.scrollTo(0,scrollTop);return scrollTop}return false};var getSelectText=function e(){return document.Selection?document.selection.createRange().text:window.getSelection().toString()};var disableSelect=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.document.body;return getElement(r).onselectstart=function(){return false}};var recoverSelect=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.document.body;return getElement(r).onselectstart=function(){return true}};var disableContextMenu=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.document.body;return getElement(r.oncontextmenu=function(){return false})};var disableCopy=function e(){var r=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.document.body;return getElement(r).oncopy=function(){return false}};var replaceCopy=function e(r){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:window.document.body;copyToClipboard(getSelectText()+"\n"+r);disableCopy(t)};var page={scroll2Top:scroll2Top,scroll2Bottom:scroll2Bottom,isScrollTop:isScrollTop,isScrollBottom:isScrollBottom,scrollTopByStep:scrollTopByStep,scrollBottomByStep:scrollBottomByStep,toFullScreen:toFullScreen,exitFullScreen:exitFullScreen,print:print,createElement:createElement,copyToClipboard:copyToClipboard,preventScroll:preventScroll,recoverScroll:recoverScroll,disableSelect:disableSelect,recoverSelect:recoverSelect,disableContextMenu:disableContextMenu,disableCopy:disableCopy,getSelectText:getSelectText,replaceCopy:replaceCopy};var getPrefix=function e(r){var t="".concat(r).match(/^\+?86[ -]?|^\+?0[ -]?|^\+?17951[ -]?|^\+?12593[ -]?/);var n="";if(t)n=t[0];return[n,"".concat(r).replace(n,"")]};var getRepeatStr=function e(r,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"";var o=[];for(var i=0;i<r;i++){o.push(t)}return o.join(n)};var hideMiddlePhoneNumber=function e(r){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"*";var n=getPrefix(r),o=_slicedToArray(n,2),i=o[0],a=o[1];var c="".concat(a).length;if(!Number(a)||c<=7)return r;var u=new RegExp("^(\\d{3})\\d{".concat(c-3-4,"}(\\d{4})$"));return i+"".concat(a).replace(u,"$1".concat(getRepeatStr(c-3-4,t),"$2"))};var hideFrontNumber=function e(r){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";var n=getPrefix(r),o=_slicedToArray(n,2),i=o[0],a=o[1];var c="".concat(a).length;if(c<=4||!Number(a))return r;var u=c-4;var l=new RegExp("^\\d{".concat(u,"}(\\d{4})$"));return(t&&i)+"".concat(a).replace(l,"".concat(getRepeatStr(u,t),"$1"))};var hideMiddleNumber=function e(r){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"*";var n="".concat(r);if(n.length<=8||!Number(n))return r;return n.replace(/^(\d{4})\d*(\d{4})$/,"$1".concat(getRepeatStr(4,t),"$2"))};var outOfNumber=function e(r){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:99;return type.isFinite(Number(r))&&Number(r)>Number(t)?"".concat(t,"+"):r};var other={hideMiddlePhoneNumber:hideMiddlePhoneNumber,hideFrontNumber:hideFrontNumber,outOfNumber:outOfNumber,hideMiddleNumber:hideMiddleNumber};var tools=_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({},math),regExp),amount),page),other),type);module.exports=tools;