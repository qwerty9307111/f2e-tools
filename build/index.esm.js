function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var _this=undefined;var curry=function curry(fn){var arity=arguments.length>1&&arguments[1]!==undefined?arguments[1]:fn.length;for(var _len=arguments.length,args=new Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){args[_key-2]=arguments[_key];}return arity<=args.length?fn.apply(void 0,args):curry.bind.apply(curry,[null,fn,arity].concat(args))};var flow=function flow(funcs){var length=funcs.length;var index=length;while(index--){if(typeof funcs[index]!=="function"){throw new TypeError("Expected a function")}}return function(){var idx=0;for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}var result=length?funcs[idx].apply(_this,args):args[0];while(++idx<length){result=funcs[idx].call(_this,result);}return result}};var assign=function assign(o,n){var t=JSON.parse(JSON.stringify(o));for(var p in n){// eslint-disable-next-line no-prototype-builtins
if(n.hasOwnProperty(p)&&!o.hasOwnProperty(p)){t[p]=n[p];}}return t};var util = {curry:curry,flow:flow,assign:assign};

var pow=util.curry(function(num,pows){return Math.pow(num,pows)});var multiply=util.curry(function(a,b){return a*b});var precisionMultiply=util.curry(function(a,b){return util.flow([multiply,toPrecision])(a,b)});var divide=util.curry(function(a,b){return a/b});var precisionDivide=util.curry(function(a,b){return util.flow([divide,toPrecision])(a,b)});var getFloatLength=function getFloatLength(num){return ("".concat(num).split(".")[1]||"").length};var magnification=util.curry(function(times,num){return precisionMultiply(num,pow(10,times))});/**
 * 在数字的值超出指定位数时将其转换为指数计数法
 * @function
 * @author YinWenwu
 * @date 2020-05-25
 * @param {Number} num 需要转换的数值
 * @param {1~21} precision=12 指定位数
 * @returns {Number}
 */var toPrecision=function toPrecision(num){var precision=arguments.length>1&&arguments[1]!==undefined?arguments[1]:12;return Number(num.toPrecision(precision))};/**
 * 将数值按四舍五入转换为指定位数的小数
 * @function
 * @author YinWenwu
 * @date 2020-05-25
 * @param {Number} num 需要转换的数值
 * @param {Number} round=2 小数位数，默认保留两位小数
 * @returns {String}
 */var round=function round(num){var rounds=arguments.length>1&&arguments[1]!==undefined?arguments[1]:2;var times=pow(10,rounds);return precisionDivide(Math.round(precisionMultiply(num,times)),times)};/**
 * 两数相加
 * @function
 * @author YinWenwu
 * @date 2020-05-25
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */var add=util.curry(function(a,b){return a+b});/**
 * 两数相加后转换为指数计数法
 * @function
 * @author YinWenwu
 * @date 2020-05-25
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */var precisionAdd=util.curry(function(a,b){var toMagnification=magnification(Math.max(getFloatLength(a),getFloatLength(b)));return precisionDivide(util.flow([add,toPrecision])(toMagnification(a),toMagnification(b)),toMagnification(1))});/**
 * 两数相减
 * @function
 * @author YinWenwu
 * @date 2020-05-25
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */var sub=util.curry(function(a,b){return a-b});/**
 * 两数相减后转换为指数计数法
 * @function
 * @author YinWenwu
 * @date 2020-05-25
 * @param {Number} a
 * @param {Number} b
 * @returns {Number}
 */var precisionSub=util.curry(function(a,b){var toMagnification=magnification(Math.max(getFloatLength(a),getFloatLength(b)));return precisionDivide(util.flow([sub,toPrecision])(toMagnification(a),toMagnification(b)),toMagnification(1))});// const addAllItems = arr => arr.reduce(add)
var precisionAddAllItems=function precisionAddAllItems(arr){return arr.reduce(precisionAdd)};// const minusAllItems = arr => arr.reduce(sub)
var precisionMinusAllItems=function precisionMinusAllItems(arr){return arr.reduce(precisionSub)};// const multiplyAllItems = arr => arr.reduce(multiply)
var precisionMultiplyAllItems=function precisionMultiplyAllItems(arr){return arr.reduce(precisionMultiply)};// const divideAllItems = arr => arr.reduce(divide)
var precisionDivideAllItems=function precisionDivideAllItems(arr){return arr.reduce(precisionDivide)};// const sum = (...numbers) => addAllItems(numbers)
/**
 * 对传入的全部参数求和后转换为指数计数法
 * @function
 * @author YinWenwu
 * @date 2020-05-25
 * @param {Array} params
 * @returns {Number}
 */var precisionSum=function precisionSum(){for(var _len=arguments.length,numbers=new Array(_len),_key=0;_key<_len;_key++){numbers[_key]=arguments[_key];}return precisionAddAllItems(numbers)};// const minus = (...numbers) => minusAllItems(numbers)
var precisionMinus=function precisionMinus(){for(var _len2=arguments.length,numbers=new Array(_len2),_key2=0;_key2<_len2;_key2++){numbers[_key2]=arguments[_key2];}return precisionMinusAllItems(numbers)};// const times = (...numbers) => multiplyAllItems(numbers)
var precisionTimes=function precisionTimes(){for(var _len3=arguments.length,numbers=new Array(_len3),_key3=0;_key3<_len3;_key3++){numbers[_key3]=arguments[_key3];}return precisionMultiplyAllItems(numbers)};// const divides = (...numbers) => divideAllItems(numbers)
var precisionDivides=function precisionDivides(){for(var _len4=arguments.length,numbers=new Array(_len4),_key4=0;_key4<_len4;_key4++){numbers[_key4]=arguments[_key4];}return precisionDivideAllItems(numbers)};var math = {add:precisionSum,addition:precisionAdd,subtract:precisionMinus,subtraction:precisionSub,multiplication:precisionMultiply,multiply:precisionTimes,division:precisionDivide,divide:precisionDivides,round:round};

/* eslint-disable no-control-regex */ /* eslint-disable no-useless-escape */var passRegExp={COMPLEX:"^(?=(.*[0-9]))(?=.*[\\!@#$%^&*()\\\\[\\]{}\\-_+=~`|:;\"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).",MODERATE:"^(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^."};var innerProxy=function innerProxy(keyName,type){return new Proxy({},{get:function get(target,key,receiver){var endIndex=Number(key)||"";return new RegExp("".concat(passRegExp[type],"{").concat(Number(keyName),",").concat(endIndex===Infinity||endIndex===-Infinity?"":endIndex,"}$"))}})};var passProxy=function passProxy(type){return new Proxy({},{get:function get(target,key,receiver){var startIndex=Number(key)||1;return innerProxy(startIndex,type)}})};var regExp = {REGEXP_PHONE:/^(\+?0[ -]?|\+?86[ -]?|\+?17951[ -]?|\+?12593[ -]?)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,// 手机号
REGEXP_EMAIL:/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/,// 电子邮箱
REGEXP_CN_CHARACTERS:/[\u4e00-\u9fa5]/gm,// 中文字符
REGEXP_EN_CHARACTERS:/^[a-z]+$/i,// 英文字符
REGEXP_UPPER_EN_CHARACTERS:/^[A-Z]+$/,// 大写英文字符
REGEXP_DBCS:/[^\x00-\xff]/igm,// 双字节字符
REGEXP_POSITIVE_INT:/^\+?[1-9]\d*$/,// 正整数
REGEXP_NEGATIVE_INT:/^-[1-9]\d*$/,// 负整数
REGEXP_NON_NEGATIVE_INT:/^\+?\d+$/,// 非负整数
REGEXP_NON_POSITIVE_INT:/^((-\d+)|(0+))$/,// 非正整数
REGEXP_NON_NEGATIVE_NUMBER:/^\+?\d*(\.\d+)?$/,// 非负数
REGEXP_NON_POSITIVE_NUMBER:/^((-\d+(\.\d+)?)|(0+(\.0+)?))$/,// 非正数
REGEXP_NUMBER:/^[-\+]?\d*(\.\d+)?$/,// 实数
REGEXP_POSITIVE_NUMBER:/^\+?(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/,// 正数
REGEXP_NEGATIVE_NUMBER:/^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/,// 负数
REGEXP_FLOAT:/^[-\+]?([1-9]\d*\.\d+|0\.\d*[1-9]\d*|0?\.0+)$/,// 浮点数
REGEXP_EN_NUM:/^[a-z0-9]+$/i,// 英文 + 数字
REGEXP_PASS_COMPLEX:Proxy?passProxy("COMPLEX"):new RegExp(passRegExp.COMPLEX+"{4,}$"),// 复杂密码（包含大小写字母，数字，特殊字符，至少4个字符长）
REGEXP_PASS_MODERATE:Proxy?passProxy("MODERATE"):new RegExp(passRegExp.MODERATE+"{3,}$"),// 中等密码（包含大小写字母，数字，至少3个字符长）
REGEXP_URL:/^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z#0-9_-](\?)?)*)*$/i,// URL 地址
REGEXP_IPV4:/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,// IPv4 地址
REGEXP_IPV6:/(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/,// IPv6 地址
REGEXP_IP:/((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/,// IPv4 & IPv6
REGEXP_DATE:/^(([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])))|(([12]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])))$/,// 日期 YYYY-MM-dd 或 YYYY/MM/dd
REGEXP_TIME_12:/^((1[0-2]|0?[1-9]):([0-5][0-9])(:(?:[012345]\d))? ?([ap]m)?)$/i,// HH:mm 12小时制
REGEXP_TIME_24:/^(?:[01]\d|2[0123]):(?:[012345]\d)(:(?:[012345]\d))?$/,// HH:mm 24小时制
REGEXP_AMOUNT_OF_MONEY:/^([¤฿₵¢₡₫€ƒ₲₭£₤₥₦₱PQR$〒₮₩¥￥₴₪៛﷼₣]|B[rs]|Ft|Rs\.|kr|Lm|Sk|R[p$M]|৲৳|S\/\.|NT\$|zł|руб)?([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(\.[0-9]{1,})?$/,// 匹配金额（包含千分符）
REGEXP_HTML_TAG:/^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/,// 匹配 HTML 标签
REGEXP_REPEAT_STR:/(\b\w+\b)(?=.*\b\1\b)/,// 匹配重复字符串 - 取 HTML 标签名
REGEXP_LNG_LAT:/^((1[0-7]\d)|\d{1,2})(\.\d{1,})?,(([1-8]\d)|\d)(\.\d{1,})?$/,// 经纬度 106.322314,29.799853
REGEXP_ID_CARD:/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,// 身份证
REGEXP_POSTCODE:/^[1-9]\d{5}(?!\d)$/,// 邮编
REGEXP_FILE_PATH:/^((\/|\.\/|\.\.\/|\\|\/\/|https?:\\\\|https?:\/\/)[a-z0-9 _@\-^!#$%&+={}.\/\\\[\]]+)+\.[a-z]+$/i,// 带有后缀名的文件路径
REGEXP_HEX:/^#?([a-f0-9]{8}|[a-f0-9]{6}|[a-f0-9]{3})$/i,// 匹配 HEX 颜色值
REGEXP_SLUG:/^[a-z0-9-]+$/,// 匹配 slug 字符串
REGEXP_PLATES:/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/i,// 车牌号
REGEXP_IS_IE:/msie (\d+\.\d+)/i,// 从 UA 判断是否为 IE 浏览器
REGEXP_IS_WEBKIT:/webkit/i,// 从 UA 判断是否为 webkit 内核
REGEXP_IS_CHROME:/chrome\/(\d+\.\d+)/i,// 从 UA 判断是否为 chrome 浏览器
REGEXP_IS_EDGE:/edge\/(\d+\.\d+)/i,// 从 UA 判断是否为 edge 浏览器
REGEXP_IS_FIREFOX:/firefox\/(\d+\.\d+)/i,// 从 UA 判断是否为 firefox 浏览器
REGEXP_IS_OPERA:/opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i,// 从 UA 判断是否为 opera 浏览器
REGEXP_IS_SAFARI:/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i,// 从 UA 判断是否为 safari 浏览器
REGEXP_IS_ANDROID:/android/i,// 从 UA 判断是否为 Android 系统
REGEXP_IS_IPAD:/ipad/i,// 从 UA 判断是否为 iPad
REGEXP_IS_IPHONE:/iphone/i,// 从 UA 判断是否为 iPhone
REGEXP_IS_MAC:/macintosh/i,// 从 UA 判断是否为 Mac OS 平台
REGEXP_IS_WINDOWS:/windows/i,// 从 UA 判断是否为 Windows 平台
REGEXP_IS_WX:/MicroMessenger/i,// 从 UA 判断是否为微信浏览器
REGEXP_IS_MOBILE:/(nokia|iphone|android|ipad|motorola|^mot\-|softbank|foma|docomo|kddi|up\.browser|up\.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam\-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte\-|longcos|pantech|gionee|^sie\-|portalmmm|jig\s browser|hiptop|^ucweb|^benq|haier|^lct|opera\s*mobi|opera\*mini|320x320|240x320|176x220)/i// 从 UA 判断是否为移动终端
};

var checkPrototype=function checkPrototype(val){return Object.prototype.toString.call(val)};var protoTypes={string:"[object String]",number:"[object Number]",bigInt:"[object BigInt]","boolean":"[object Boolean]",undefined:"[object Undefined]",symbol:"[object Symbol]","function":"[object Function]",array:"[object Array]",object:"[object Object]","null":"[object Null]",map:"[object Map]",set:"[object Set]",promise:"[object Promise]",async:"[object AsyncFunction]",date:"[object Date]"};var isString=function isString(val){return checkPrototype(val)===protoTypes.string};var isNumber=function isNumber(val){return checkPrototype(val)===protoTypes.number};var isNaN=function isNaN(val){return isNumber(val)&&val.toString()==="NaN"};var isFinite=function isFinite(val){return isNumber(val)&&!isNaN(val)&&val!==Infinity&&val!==-Infinity};var isInteger=function isInteger(val){return isFinite(val)&&"".concat(val).indexOf(".")<0};var isBigInt=function isBigInt(val){return checkPrototype(val)===protoTypes.bigInt};var isFloat=function isFloat(val){return isFinite(val)&&!isInteger(val)};var isBoolean=function isBoolean(val){return checkPrototype(val)===protoTypes["boolean"]};var isUndefined=function isUndefined(val){return checkPrototype(val)===protoTypes.undefined};var isSymbol=function isSymbol(val){return checkPrototype(val)===protoTypes.symbol};var isFunction=function isFunction(val){return checkPrototype(val)===protoTypes["function"]};var isArray=function isArray(val){return checkPrototype(val)===protoTypes.array};var isObject=function isObject(val){return checkPrototype(val)===protoTypes.object};var isNull=function isNull(val){return checkPrototype(val)===protoTypes["null"]};var isHTML=function isHTML(val){return val instanceof HTMLElement};var isMap=function isMap(val){return checkPrototype(val)===protoTypes.map};var isSet=function isSet(val){return checkPrototype(val)===protoTypes.set};var isPromise=function isPromise(val){return checkPrototype(val)===protoTypes.promise};var isAsync=function isAsync(val){return checkPrototype(val)===protoTypes.async};var isDate=function isDate(val){return checkPrototype(val)===protoTypes.date};var isEmpty=function isEmpty(val){return isArray(val)&&val.length===0||isObject(val)&&Object.keys(val).length===0||(isMap(val)||isSet(val))&&val.size===0||isNull(val)};var type = {isString:isString,isNumber:isNumber,isNaN:isNaN,isFinite:isFinite,isInteger:isInteger,isBigInt:isBigInt,isFloat:isFloat,isBoolean:isBoolean,isUndefined:isUndefined,isSymbol:isSymbol,isFunction:isFunction,isObject:isObject,isArray:isArray,isNull:isNull,isHTML:isHTML,isMap:isMap,isSet:isSet,isEmpty:isEmpty,isPromise:isPromise,isAsync:isAsync,isDate:isDate};

var number2Amount=function number2Amount(num){var temp=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"0,0";var nullFormat=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"N/A";if(num===null||num===undefined||num===""||type.isNaN(Number(num))){return nullFormat}// if (!Number(num)) { return num }
var frontCurrency=temp.match(/(.*?)0/)[1];// 模板字符串中的前置币种符号
var backCurrency=temp.match(/.*0(.*)/)[1];// 模板字符串中的后置币种符号
var FEscape=frontCurrency?"\\":"";// 存在前置币种符号时，构建正则需加上转义符
var BEscape=backCurrency?"\\":"";// 存在后置币种符号时，构建正则需加上转义符
var amountStr=temp.match(new RegExp("".concat(FEscape).concat(frontCurrency,"(.*)").concat(BEscape).concat(backCurrency)))[1];// 前后币种符之间的金额模板字符串
var _ref=amountStr.split(".")[1]||"",floatLength=_ref.length;var _Number$toString$spli=Number(num).toString().split("."),_Number$toString$spli2=_slicedToArray(_Number$toString$spli,2),_int=_Number$toString$spli2[0],_Number$toString$spli3=_Number$toString$spli2[1],_float=_Number$toString$spli3===void 0?"":_Number$toString$spli3;var floatNum=math.round(_float/Math.pow(10,_float.length),floatLength);if(floatNum===1){floatNum="0.0".padEnd(floatLength+2,0);_int=Number(_int)+1;}var separator=temp.match(/0(.*?)0/)[1];var intString="".concat(_int<0?0-_int:_int).replace(/(\d)(?=(?:\d{3})+$)/g,"$1"+separator);// 将整数部分逢三一断
var floatString=floatLength&&"".concat(floatNum).split(".")[1]?"."+"".concat(floatNum).split(".")[1].padEnd(floatLength,0):"";return "".concat(_int<0?"-":"").concat(frontCurrency).concat(intString).concat(floatString," ").concat(backCurrency.trimStart()).trimEnd()};var amount2Number=function amount2Number(amount){var amountStr="".concat(amount);if(!/\d/.test(amountStr)){return null}var strBeforePoint=amountStr.split(".")[0];var strAfterPoint=amountStr.includes(".")?amountStr.match(/.*\.(.*)/)[1]:"";var matchRes={"int":strBeforePoint.match(/\d/g),"float":strAfterPoint.match(/\d/g)};var _int2=matchRes["int"]&&matchRes["int"].join("");var _float2=matchRes["float"]&&matchRes["float"].join("");return Number("".concat(amountStr.includes("-")?"-":"").concat(_int2).concat(_float2?"."+_float2:""))};var number2Percentage=function number2Percentage(number){var res=math.multiplication(number,100);if(type.isNaN(res))return null;return res+"%"};var percentage2Number=function percentage2Number(percentage){return math.division(Number.parseFloat(percentage),100)||null};var int2Chinese=function int2Chinese(num){var option=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{"case":"upper"};var number=parseFloat(num);if(!type.isFinite(number)){return num}var CN_UPPER_NUMS=["\u96F6","\u58F9","\u8D30","\u53C1","\u8086","\u4F0D","\u9646","\u67D2","\u634C","\u7396"];var CN_LOWER_NUMS=["\u3007","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u4E03","\u516B","\u4E5D"];var CN_NUMS=option["case"]==="lower"?CN_LOWER_NUMS:CN_UPPER_NUMS;var CN_UPPER_INT_BASIC_UNIT=["","\u62FE","\u4F70","\u4EDF"];var CN_LOWER_INT_BASIC_UNIT=["","\u5341","\u767E","\u5343"];var CN_INT_BASIC_UNIT=option["case"]==="lower"?CN_LOWER_INT_BASIC_UNIT:CN_UPPER_INT_BASIC_UNIT;var CN_INT_UNITS=["","\u4E07","\u4EBF","\u5146"];var NEGATIVE="\u8D1F";var cnStr="";// 输出的中文字符串
if(number===0){cnStr=CN_NUMS[0];return cnStr}var IS_NEGATIVE=number<0;if(IS_NEGATIVE){number=0-number;}var integerNum;// 金额整数部分
var parts;// 分离金额后用的数组，预定义
number=number.toString();if(number.indexOf(".")===-1){integerNum=number;}else {parts=number.split(".");integerNum=parts[0];}if(parseInt(integerNum,10)>0){// 获取整型部分转换
var zeroCount=0;var INT_LEN=integerNum.length;for(var i=0;i<INT_LEN;i++){var N=integerNum.substr(i,1);var P=INT_LEN-i-1;var Q=P/4;var M=P%4;if(N==="0"){zeroCount++;}else {if(zeroCount>0){cnStr+=CN_NUMS[0];}zeroCount=0;// 归零
cnStr+=CN_NUMS[parseInt(N,10)]+CN_INT_BASIC_UNIT[M];}if(M===0&&zeroCount<4){cnStr+=CN_INT_UNITS[Q];}}// 整型部分处理完毕
}if(cnStr===""){cnStr+=CN_NUMS[0];}return IS_NEGATIVE?NEGATIVE+cnStr:cnStr};var float2Chinese=function float2Chinese(num){var option=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{"case":"upper",type:"number"};var number=parseFloat(num);if(!type.isFloat(number)){return ""}var CN_UPPER_NUMS=["\u96F6","\u58F9","\u8D30","\u53C1","\u8086","\u4F0D","\u9646","\u67D2","\u634C","\u7396"];var CN_LOWER_NUMS=["\u3007","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u4E03","\u516B","\u4E5D"];var CN_NUMS=option["case"]==="lower"?CN_LOWER_NUMS:CN_UPPER_NUMS;var CN_DEC_UNITS=["\u89D2","\u5206","\u6BEB","\u5398"];var cnStr="";// 输出的中文字符串
if(number===0){return CN_NUMS[0]}var decimalNum;// 小数部分
var parts;// 分离后用的数组，预定义
number=number.toString();if(number.indexOf(".")===-1){decimalNum="";}else {parts=number.split(".");decimalNum=option.type==="money"?parts[1].substr(0,4):parts[1];}if(decimalNum){// 小数部分
var decLen=decimalNum.length;for(var i=0;i<decLen;i++){var N=decimalNum.substr(i,1);if(option.type==="money"){if(N!=="0"){cnStr+=CN_NUMS[Number(N)]+CN_DEC_UNITS[i];}}else {cnStr+=CN_NUMS[Number(N)];}}}return cnStr};var number2ChineseWithOption=util.curry(function(option,amount){if(!type.isObject(option)){throw new Error("param \"option\" type error")}if(type.isNaN(Number(amount)))return null;var MAX_NUM=999999999999999.9;// 最大处理的数字
if(amount>=MAX_NUM)return amount;var CN_INT_LAST=option.type==="money"?"\u5143":"\u70B9";var CN_INTEGER="\u6574";var INT_PART=int2Chinese(amount,option);var FLOAT_PART=float2Chinese(amount,option);if(FLOAT_PART){return INT_PART+CN_INT_LAST+FLOAT_PART}return INT_PART+(option.type==="money"?CN_INT_LAST+CN_INTEGER:"")});var amount2Chinese=number2ChineseWithOption({type:"money","case":"upper"});var number2Chinese=number2ChineseWithOption({type:"number","case":"upper"});var amount = {number2Amount:number2Amount,amount2Number:amount2Number,number2Percentage:number2Percentage,percentage2Number:percentage2Number,amount2Chinese:amount2Chinese,number2Chinese:number2Chinese,number2ChineseWithOption:number2ChineseWithOption};

var isHTML$1=function isHTML(dom){return dom instanceof HTMLElement};var getDom=function getDom(dom){return isHTML$1(dom)?dom:window};var getElement=function getElement(dom){return isHTML$1(dom)?dom:window.document.body};var getScrollTop=function getScrollTop(dom){if(isHTML$1(dom))return dom.scrollTop;var bodyScrollTop=0;var documentScrollTop=0;document.body&&(bodyScrollTop=document.body.scrollTop);document.documentElement&&(documentScrollTop=document.documentElement.scrollTop);return Math.max(bodyScrollTop,documentScrollTop)};var getScrollHeight=function getScrollHeight(dom){if(isHTML$1(dom))return dom.scrollHeight;var bodyScrollHeight=0;var documentScrollHeight=0;document.body&&(bodyScrollHeight=document.body.scrollHeight);document.documentElement&&(documentScrollHeight=document.documentElement.scrollHeight);return Math.max(bodyScrollHeight,documentScrollHeight)};var getWindowHeight=function getWindowHeight(dom){if(isHTML$1(dom)){return dom.offsetHeight}if(document.compatMode==="CSS1Compat"){return document.documentElement.clientHeight}return document.body.clientHeight};var isScrollTop=function isScrollTop(){var dom=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;return getScrollTop(dom)<=0};var isScrollBottom=function isScrollBottom(){var dom=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;var limit=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0.1;var res=getScrollTop(dom)+getWindowHeight(dom)-getScrollHeight(dom);return Math.abs(res)<=limit};var doScroll=function doScroll(dom){var top=arguments.length>1&&arguments[1]!==undefined?arguments[1]:0;getElement(dom).style.scrollBehavior!=="smooth"&&(getElement(dom).style.scrollBehavior="smooth");document.documentElement.style.scrollBehavior!=="smooth"&&(document.documentElement.style.scrollBehavior="smooth");try{getDom(dom).scrollTo(0,top);}catch(err){getDom(dom).scrollTop=top;}return getScrollTop(dom)};var scroll2Top=function scroll2Top(){var dom=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;return doScroll(dom,0)};var scroll2Bottom=function scroll2Bottom(){var dom=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window;return doScroll(dom,getScrollHeight(dom))};var scrollTopByStep=function scrollTopByStep(step){var dom=arguments.length>1&&arguments[1]!==undefined?arguments[1]:window;var scrollTopNum=getScrollTop(dom);if(scrollTopNum>0){var scrollStep=scrollTopNum-(step||0);return doScroll(dom,scrollStep)}return scrollTopNum};var scrollBottomByStep=function scrollBottomByStep(step){var dom=arguments.length>1&&arguments[1]!==undefined?arguments[1]:window;var scrollTopNum=getScrollTop(dom);if(isScrollBottom(dom,0)){return scrollTopNum}var scrollStep=scrollTopNum+(step||0);return doScroll(dom,scrollStep)};var toFullScreen=function toFullScreen(dom){var elem=isHTML$1(dom)?dom:document.body;if(elem.webkitRequestFullScreen){return elem.webkitRequestFullScreen()||true}if(elem.mozRequestFullScreen){return elem.mozRequestFullScreen()||true}if(elem.msRequestFullscreen){return elem.msRequestFullscreen()||true}if(elem.requestFullScreen){return elem.requestFullScreen()||true}return false};var exitFullScreen=function exitFullScreen(){var elem=parent.document;if(elem.webkitCancelFullScreen){return elem.webkitCancelFullScreen()||true}if(elem.mozCancelFullScreen){return elem.mozCancelFullScreen()||true}if(elem.cancelFullScreen){return elem.cancelFullScreen()||true}if(elem.msExitFullscreen){return elem.msExitFullscreen()||true}if(elem.exitFullscreen){return elem.exitFullscreen()||true}return false};var print=function print(option){var options=option||{};if(!type.isObject(options)){throw new TypeError("option \u7C7B\u578B\u9519\u8BEF")}var defaultOption={width:1000,height:900,printClass:"print",noPrintClass:"no-print",closeWindow:false,delay:200};var opts=util.assign(defaultOption,options);// 打开一个新窗口
var myWindow=window.open(" ","","width=".concat(opts.width,",height=").concat(opts.height,",scrollbars=yes"));var bodyHtml="";var M=function M(fn){var inputElementsTag=["input","textarea"];inputElementsTag.forEach(function(tagName){var inputElement=document.querySelectorAll(".".concat(opts.printClass," ").concat(tagName));for(var i=0;i<inputElement.length;i++){fn(inputElement[i],tagName);}});};M(function(item,tagName){item.setAttribute(item.hasAttribute("disabled")?"is-disabled":"disabled",true);if(tagName==="textarea"){item.innerHTML=item.value;}else {item.setAttribute("value",item.value);}});var printElements=window.document.getElementsByClassName(opts.printClass);for(var i=0;i<printElements.length;i++){bodyHtml+=printElements[i].innerHTML;}M(function(item){if(!item.hasAttribute("is-disabled"))item.removeAttribute("disabled");});// 获取head标签内的html
var headHtml=document.head.innerHTML+"<style>.".concat(opts.noPrintClass,"{display: none !important;}</style>");// 头中的screen换成打印样式print
headHtml=headHtml.replace("screen","screen, print");// 删除头中的 script 标签
headHtml=headHtml.replace(/<script.*?<\/script>/g,"");// 重新写入文档流
myWindow.document.write("<html>");myWindow.document.write(headHtml);myWindow.document.write("<body>");myWindow.document.write(bodyHtml.replace(/,/g,"").replace(/null/g,""));myWindow.document.write("<script>setTimeout(function() {window.print();".concat(opts.closeWindow&&"window.close()","}, ").concat(opts.delay,")</"));myWindow.document.write("script>");myWindow.document.write("</body></html>");};var createElement=function createElement(str){var el=document.createElement("div");el.innerHTML=str;return el.firstElementChild};var doCopy=function doCopy(str){var el=createElement("<textarea readonly value=\"".concat(str,"\" style=\"position: absolute;left: -9999px;\">").concat(str,"</textarea>"));document.body.appendChild(el);var selected=document.getSelection().rangeCount>0?document.getSelection().getRangeAt(0):false;el.select();document.execCommand("copy");document.body.removeChild(el);if(selected){document.getSelection().removeAllRanges();document.getSelection().addRange(selected);}};var copyToClipboard=function copyToClipboard(str){var result={then:function then(fn){if(type.isFunction(fn))fn(str);return result},"catch":function _catch(fn){}};try{doCopy(str);}catch(err){result.then=function(fn){return result};result["catch"]=function(fn){return type.isFunction(fn)&&fn(err)};}return result};var scrollTop=0;var preventScroll=function preventScroll(dom){if(getElement(dom).dataset.preventScroll==="true")return false;scrollTop=getScrollTop();getElement(dom).style["overflow-y"]="hidden";// getElement(dom).style.position = 'fixed'
// getElement(dom).style.width = '100%'
getElement(dom).style.top=-scrollTop+"px";getElement(dom).dataset.preventScroll=true;return scrollTop};var recoverScroll=function recoverScroll(dom){if(getElement(dom).dataset.preventScroll==="true"){getElement(dom).dataset.preventScroll=false;getElement(dom).style["overflow-y"]="auto";// getElement(dom).style.position = 'static'
window.scrollTo(0,scrollTop);return scrollTop}return false};var getSelectText=function getSelectText(){return document.Selection?document.selection.createRange().text:window.getSelection().toString()};var disableSelect=function disableSelect(){var dom=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.document.body;return getElement(dom).onselectstart=function(){return false}};var recoverSelect=function recoverSelect(){var dom=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.document.body;return getElement(dom).onselectstart=function(){return true}};var disableContextMenu=function disableContextMenu(){var dom=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.document.body;return getElement(dom.oncontextmenu=function(){return false})};var disableCopy=function disableCopy(){var dom=arguments.length>0&&arguments[0]!==undefined?arguments[0]:window.document.body;return getElement(dom).oncopy=function(){return false}};var replaceCopy=function replaceCopy(str){var dom=arguments.length>1&&arguments[1]!==undefined?arguments[1]:window.document.body;copyToClipboard(getSelectText()+"\n"+str);disableCopy(dom);};var page = {scroll2Top:scroll2Top,scroll2Bottom:scroll2Bottom,isScrollTop:isScrollTop,isScrollBottom:isScrollBottom,scrollTopByStep:scrollTopByStep,scrollBottomByStep:scrollBottomByStep,toFullScreen:toFullScreen,exitFullScreen:exitFullScreen,print:print,createElement:createElement,copyToClipboard:copyToClipboard,preventScroll:preventScroll,recoverScroll:recoverScroll,disableSelect:disableSelect,recoverSelect:recoverSelect,disableContextMenu:disableContextMenu,disableCopy:disableCopy,getSelectText:getSelectText,replaceCopy:replaceCopy};

var getPrefix=function getPrefix(val){var matchFront="".concat(val).match(/^\+?86[ -]?|^\+?0[ -]?|^\+?17951[ -]?|^\+?12593[ -]?/);var prefix="";if(matchFront)prefix=matchFront[0];return [prefix,"".concat(val).replace(prefix,"")]};var getRepeatStr=function getRepeatStr(len,str){var joinStr=arguments.length>2&&arguments[2]!==undefined?arguments[2]:"";var arr=[];for(var i=0;i<len;i++){arr.push(str);}return arr.join(joinStr)};var hideMiddlePhoneNumber=function hideMiddlePhoneNumber(phoneNumber){var replaceStr=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"*";var _getPrefix=getPrefix(phoneNumber),_getPrefix2=_slicedToArray(_getPrefix,2),prefix=_getPrefix2[0],str=_getPrefix2[1];var len="".concat(str).length;if(!Number(str)||len<=7)return phoneNumber;var regExp=new RegExp("^(\\d{3})\\d{".concat(len-3-4,"}(\\d{4})$"));return prefix+"".concat(str).replace(regExp,"$1".concat(getRepeatStr(len-3-4,replaceStr),"$2"))};var hideFrontNumber=function hideFrontNumber(targetNumber){var replaceStr=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";var _getPrefix3=getPrefix(targetNumber),_getPrefix4=_slicedToArray(_getPrefix3,2),prefix=_getPrefix4[0],str=_getPrefix4[1];var len="".concat(str).length;if(len<=4||!Number(str))return targetNumber;var replaceLength=len-4;var regExp=new RegExp("^\\d{".concat(replaceLength,"}(\\d{4})$"));return (replaceStr&&prefix)+"".concat(str).replace(regExp,"".concat(getRepeatStr(replaceLength,replaceStr),"$1"))};var hideMiddleNumber=function hideMiddleNumber(target){var replaceStr=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"*";var str="".concat(target);if(str.length<=8||!Number(str))return target;return str.replace(/^(\d{4})\d*(\d{4})$/,"$1".concat(getRepeatStr(4,replaceStr),"$2"))};var outOfNumber=function outOfNumber(number){var maxNumber=arguments.length>1&&arguments[1]!==undefined?arguments[1]:99;return type.isFinite(Number(number))&&Number(number)>Number(maxNumber)?"".concat(maxNumber,"+"):number};var other = {hideMiddlePhoneNumber:hideMiddlePhoneNumber,hideFrontNumber:hideFrontNumber,outOfNumber:outOfNumber,hideMiddleNumber:hideMiddleNumber};

var tools=_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({},math),regExp),amount),page),other),type);

var exportTool=tools;var proxyFn=function proxyFn(target,key,receiver,targetKey){if(key.indexOf(targetKey)>=0&&key!==targetKey){var lastStr=key.split(targetKey+"_")[1]||"";var _lastStr$split=lastStr.split("_"),_lastStr$split2=_slicedToArray(_lastStr$split,2),startIndex=_lastStr$split2[0],endIndex=_lastStr$split2[1];return target[targetKey][startIndex][endIndex]}return target[key]};if(Proxy){exportTool=new Proxy(tools,{get:function get(target,key,receiver){if(key.indexOf("REGEXP_PASS_COMPLEX_")>=0){return proxyFn(target,key,receiver,"REGEXP_PASS_COMPLEX")}if(key.indexOf("REGEXP_PASS_MODERATE_")>=0){return proxyFn(target,key,receiver,"REGEXP_PASS_MODERATE")}return target[key]}});}var exportTool$1 = exportTool;

export default exportTool$1;
