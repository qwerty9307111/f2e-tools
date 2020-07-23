/* eslint-disable no-control-regex */
/* eslint-disable no-useless-escape */
/* global globalThis */
const passRegExp = {
  COMPLEX: '^(?=(.*[0-9]))(?=.*[\\!@#$%^&*()\\\\[\\]{}\\-_+=~`|:;"\'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).',
  MODERATE: '^(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.'
}

const that = (typeof globalThis === 'object' && globalThis) ||
(typeof window === 'object' && window) ||
(typeof global === 'object' && global) ||
(typeof self === 'object' && self) ||
this

const passProxy = type => {
  if (that.Proxy) {
    const innerProxy = (keyName, t) => new Proxy({}, {
      get (target, key, receiver) {
        const endIndex = Number(key) || ''
        return new RegExp(`${passRegExp[t]}{${Number(keyName)},${endIndex === Infinity || endIndex === -Infinity ? '' : endIndex}}$`)
      }
    })
    return new Proxy({}, {
      get (target, key, receiver) {
        const startIndex = Number(key) || 1
        return innerProxy(startIndex, type)
      }
    })
  }
  return null
}

export default {
  REGEXP_PHONE: /^(\+?0[ -]?|\+?86[ -]?|\+?17951[ -]?|\+?12593[ -]?)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/, // 手机号
  REGEXP_EMAIL: /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/, // 电子邮箱
  REGEXP_CN_CHARACTERS: /[\u4e00-\u9fa5]/gm, // 中文字符
  REGEXP_EN_CHARACTERS: /^[a-z]+$/i, // 英文字符
  REGEXP_UPPER_EN_CHARACTERS: /^[A-Z]+$/, // 大写英文字符
  REGEXP_DBCS: /[^\x00-\xff]/igm, // 双字节字符
  REGEXP_POSITIVE_INT: /^\+?[1-9]\d*$/, // 正整数
  REGEXP_NEGATIVE_INT: /^-[1-9]\d*$/, // 负整数
  REGEXP_NON_NEGATIVE_INT: /^\+?\d+$/, // 非负整数
  REGEXP_NON_POSITIVE_INT: /^((-\d+)|(0+))$/, // 非正整数
  REGEXP_NON_NEGATIVE_NUMBER: /^\+?\d*(\.\d+)?$/, // 非负数
  REGEXP_NON_POSITIVE_NUMBER: /^((-\d+(\.\d+)?)|(0+(\.0+)?))$/, // 非正数
  REGEXP_NUMBER: /^[-\+]?\d*(\.\d+)?$/, // 实数
  REGEXP_POSITIVE_NUMBER: /^\+?(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/, // 正数
  REGEXP_NEGATIVE_NUMBER: /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/, // 负数
  REGEXP_FLOAT: /^[-\+]?([1-9]\d*\.\d+|0\.\d*[1-9]\d*|0?\.0+)$/, // 浮点数
  REGEXP_EN_NUM: /^[a-z0-9]+$/i, // 英文 + 数字
  REGEXP_PASS_COMPLEX: passProxy('COMPLEX') || new RegExp(passRegExp.COMPLEX + '{4,}$'), // 复杂密码（包含大小写字母，数字，特殊字符，至少4个字符长）
  REGEXP_PASS_MODERATE: passProxy('MODERATE') || new RegExp(passRegExp.MODERATE + '{3,}$'), // 中等密码（包含大小写字母，数字，至少3个字符长）
  REGEXP_URL: /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z#0-9_-](\?)?)*)*$/i, // URL 地址
  REGEXP_IPV4: /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/, // IPv4 地址
  REGEXP_IPV6: /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/, // IPv6 地址
  REGEXP_IP: /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/, // IPv4 & IPv6
  REGEXP_DATE: /^(([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])))|(([12]\d{3}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])))$/, // 日期 YYYY-MM-dd 或 YYYY/MM/dd
  REGEXP_TIME_12: /^((1[0-2]|0?[1-9]):([0-5][0-9])(:(?:[012345]\d))? ?([ap]m)?)$/i, // HH:mm 12小时制
  REGEXP_TIME_24: /^(?:[01]\d|2[0123]):(?:[012345]\d)(:(?:[012345]\d))?$/, // HH:mm 24小时制
  REGEXP_AMOUNT_OF_MONEY: /^([¤฿₵¢₡₫€ƒ₲₭£₤₥₦₱PQR$〒₮₩¥￥₴₪៛﷼₣]|B[rs]|Ft|Rs\.|kr|Lm|Sk|R[p$M]|৲৳|S\/\.|NT\$|zł|руб)?([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(\.[0-9]{1,})?$/, // 匹配金额（包含千分符）
  REGEXP_HTML_TAG: /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/, // 匹配 HTML 标签
  REGEXP_REPEAT_STR: /(\b\w+\b)(?=.*\b\1\b)/, // 匹配重复字符串 - 取 HTML 标签名
  REGEXP_LNG_LAT: /^((1[0-7]\d)|\d{1,2})(\.\d{1,})?,(([1-8]\d)|\d)(\.\d{1,})?$/, // 经纬度 106.322314,29.799853
  REGEXP_ID_CARD: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/, // 身份证
  REGEXP_POSTCODE: /^[1-9]\d{5}(?!\d)$/, // 邮编
  REGEXP_FILE_PATH: /^((\/|\.\/|\.\.\/|\\|\/\/|https?:\\\\|https?:\/\/)[a-z0-9 _@\-^!#$%&+={}.\/\\\[\]]+)+\.[a-z]+$/i, // 带有后缀名的文件路径
  REGEXP_HEX: /^#?([a-f0-9]{8}|[a-f0-9]{6}|[a-f0-9]{3})$/i, // 匹配 HEX 颜色值
  REGEXP_SLUG: /^[a-z0-9-]+$/, // 匹配 slug 字符串
  REGEXP_PLATES: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/i, // 车牌号
  REGEXP_IS_IE: /msie (\d+\.\d+)/i, // 从 UA 判断是否为 IE 浏览器
  REGEXP_IS_WEBKIT: /webkit/i, // 从 UA 判断是否为 webkit 内核
  REGEXP_IS_CHROME: /chrome\/(\d+\.\d+)/i, // 从 UA 判断是否为 chrome 浏览器
  REGEXP_IS_EDGE: /edge\/(\d+\.\d+)/i, // 从 UA 判断是否为 edge 浏览器
  REGEXP_IS_FIREFOX: /firefox\/(\d+\.\d+)/i, // 从 UA 判断是否为 firefox 浏览器
  REGEXP_IS_OPERA: /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i, // 从 UA 判断是否为 opera 浏览器
  REGEXP_IS_SAFARI: /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i, // 从 UA 判断是否为 safari 浏览器
  REGEXP_IS_ANDROID: /android/i, // 从 UA 判断是否为 Android 系统
  REGEXP_IS_IPAD: /ipad/i, // 从 UA 判断是否为 iPad
  REGEXP_IS_IPHONE: /iphone/i, // 从 UA 判断是否为 iPhone
  REGEXP_IS_MAC: /macintosh/i, // 从 UA 判断是否为 Mac OS 平台
  REGEXP_IS_WINDOWS: /windows/i, // 从 UA 判断是否为 Windows 平台
  REGEXP_IS_WX: /MicroMessenger/i, // 从 UA 判断是否为微信浏览器
  REGEXP_IS_MOBILE: /(nokia|iphone|android|ipad|motorola|^mot\-|softbank|foma|docomo|kddi|up\.browser|up\.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam\-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte\-|longcos|pantech|gionee|^sie\-|portalmmm|jig\s browser|hiptop|^ucweb|^benq|haier|^lct|opera\s*mobi|opera\*mini|320x320|240x320|176x220)/i // 从 UA 判断是否为移动终端
}
