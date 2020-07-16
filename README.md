# f2e-tools

> Common front-end tools

## Install

``` node
npm install f2e-tools --save
```

## Use

``` javascript
const tool = require('f2e-tools').default
// OR
import tool from 'f2e-tools'

tool.*
```

[点击查看详细文档](https://qwerty9307111.github.io/f2e-tools-doc/)

## Math

``` javascript
.add(...number)                    // add               :: (...number) -> number
.addition(num1, num2)              // addition          :: (number, number) -> number
.subtract(...number)               // subtract          :: (...number) -> number
.subtraction(num1, num2)           // subtraction       :: (number, number) -> number
.multiply(...number)               // multiply          :: (...number) -> number
.multiplication(num1, num2)        // multiplication    :: (number, number) -> number
.divide(...number)                 // divide            :: (...number) -> number
.division(num1, num2)              // division          :: (number, number) -> number
.round(num, ?round = 2)            // round             :: (number, number = 2) -> number
```

## Amount

```javascript
// number2Amount :: (number, string = '0,0', string = 'M/A') -> string
.number2Amount(num, ?temp = '0,0', ?nullFormat = 'N/A', ?zeroFormat = 'N/A')
.amount2Number(amount)                    // amount2Number            :: string -> number
.number2Percentage(num)                   // number2Percentage        :: number -> string
.percentage2Number(percentage)            // percentage2Number        :: string -> number
.amount2Chinese(amount)                   // amount2Chinese           :: number -> string
.number2Chinese(num)                      // number2Chinese           :: number -> string
.number2ChineseWithOption(opts， ?number) // number2ChineseWithOption :: (object, ?number) -> function | string
```

## Page

```javascript
.scroll2Top(?DOM = window)                   // scroll2Top         :: (document = window) -> undefined
.scroll2Bottom(?DOM = window)                // scroll2Bottom      :: (document = window) -> undefined
.isScrollTop(?DOM = window)                  // isScrollTop        :: (document = window) -> boolean
.isScrollBottom(?DOM = window, ?limit = 0.1) // isScrollBottom     :: (document = window, number = 0.1) -> boolean
.scrollTopByStep(step, ?DOM = window)        // scrollTopByStep    :: (number, document = window) -> number
.scrollBottomByStep(step, ?DOM = window)     // scrollBottomByStep :: (number, document = window) -> number
.toFullScreen()                              // toFullScreen       :: any -> boolean
.exitFullScreen()                            // exitFullScreen     :: any -> boolean
.print(?opts)                                // print              :: object -> undefined
.createElement(str)                          // createElement      :: string -> element
.copyToClipboard(str)                        // copyToClipboard    :: string -> promise
.preventScroll()                             // preventScroll      :: any -> undefined | number
.recoverScroll()                             // recoverScroll      :: any -> undefined | number
.disableSelect(?DOM = document)              // disableSelect      :: ?document -> undefined
.disableContextMenu(?DOM = document)         // disableContextMenu :: ?document -> undefined
.disableCopy(?DOM = document)                // disableCopy        :: ?document -> undefined
.getSelectText()                             // getSelectText      :: any -> string
```

## RegExp

```javascript
.REGEXP_PHONE               // 手机号
.REGEXP_EMAIL               // 电子邮箱
.REGEXP_CN_CHARACTERS       // 中文字符
.REGEXP_EN_CHARACTERS       // 英文字符
.REGEXP_UPPER_EN_CHARACTERS // 大写英文字符
.REGEXP_DBCS                // 双字节字符
.REGEXP_POSITIVE_INT        // 正整数
.REGEXP_NEGATIVE_INT        // 负整数
.REGEXP_NON_NEGATIVE_INT    // 非负整数
.REGEXP_NON_POSITIVE_INT    // 非正整数
.REGEXP_POSITIVE_NUMBER     // 正数
.REGEXP_NUMBER              // 实数
.REGEXP_NON_NEGATIVE_FLOAT  // 非负浮点数
.REGEXP_NON_POSITIVE_FLOAT  // 非正浮点数
.REGEXP_POSITIVE_FLOAT      // 正浮点数
.REGEXP_NEGATIVE_FLOAT      // 负浮点数
.REGEXP_FLOAT               // 浮点数
.REGEXP_EN_NUM              // 英文 + 数字
.REGEXP_PASS_COMPLEX        // 复杂密码（包含大小写字母，数字，特殊字符，至少8个字符长）
.REGEXP_PASS_MODERATE       // 中等密码（包含大小写字母，数字，至少8个字符长）
.REGEXP_URL                 // URL 地址
.REGEXP_IPV4                // IPv4 地址
.REGEXP_IPV6                // IPv6 地址
.REGEXP_IP                  // IPv4 或 IPv6 地址
.REGEXP_DATE                // 日期 YYYY-MM-dd 或 YYYY/MM/dd
.REGEXP_TIME_12             // HH:mm 12小时制
.REGEXP_TIME_24             // HH:mm 24小时制
.REGEXP_AMOUNT_OF_MONEY     // 匹配金额（包含千分符）
.REGEXP_HTML_TAG            // 匹配 HTML 标签
.REGEXP_REPEAT_STR            // 匹配重复字符串
.REGEXP_LNG_LAT             // 经纬度
.REGEXP_ID_CARD             // 身份证
.REGEXP_POSTCODE            // 邮编
.REGEXP_FILE_PATH           // 带有后缀名的文件路径
.REGEXP_HEX                 // 匹配 HEX 颜色值
.REGEXP_SLUG                // 匹配 slug 字符串
.REGEXP_PLATES              // 车牌号
.REGEXP_IS_IE               // 从 UA 判断是否为 IE 浏览器
.REGEXP_IS_WEBKIT           // 从 UA 判断是否为 webkit 内核
.REGEXP_IS_CHROME           // 从 UA 判断是否为 chrome 浏览器
.REGEXP_IS_FIREFOX          // 从 UA 判断是否为 firefox 浏览器
.REGEXP_IS_OPERA            // 从 UA 判断是否为 opera 浏览器
.REGEXP_IS_SAFARI           // 从 UA 判断是否为 safari 浏览器
.REGEXP_IS_ANDROID          // 从 UA 判断是否为 Android 系统
.REGEXP_IS_IPAD             // 从 UA 判断是否为 iPad
.REGEXP_IS_IPHONE           // 从 UA 判断是否为 iPhone
.REGEXP_IS_MAC              // 从 UA 判断是否为 Mac OS 平台
.REGEXP_IS_WINDOWS          // 从 UA 判断是否为 Windows 平台
.REGEXP_IS_WX               // 从 UA 判断是否为微信浏览器
.REGEXP_IS_MOBILE           // 从 UA 判断是否为移动终端
```

## Type

```javascript

.isString    // isString    :: any -> boolean
.isNumber    // isNumber    :: any -> boolean
.isNaN       // isNaN       :: any -> boolean
.isFinite    // isFinite    :: any -> boolean
.isInteger   // isInteger   :: any -> boolean
.isBigInt    // isBigInt    :: any -> boolean
.isFloat     // isFloat     :: any -> boolean
.isBoolean   // isBoolean   :: any -> boolean
.isUndefined // isUndefined :: any -> boolean
.isSymbol    // isSymbol    :: any -> boolean
.isFunction  // isFunction  :: any -> boolean
.isObject    // isObject    :: any -> boolean
.isArray     // isArray     :: any -> boolean
.isNull      // isNull      :: any -> boolean
.isHTML      // isHTML      :: any -> boolean
.isMap       // isMap       :: any -> boolean
.isSet       // isSet       :: any -> boolean
.isEmpty     // isEmpty     :: any -> boolean

```

## Other

``` javascript

.hideMiddlePhoneNumber(phoneNumber, ?replaceStr = '*') // hideMiddlePhoneNumber :: (number | string, string = '*') -> string
.hideFrontNumber(phoneNumber, ?replaceStr = '')        // hideFrontNumber  :: (number | string, string = '') -> string
.outOfNumber(number, max = 99)                         // outOfNumber           :: (number, number) -> string | number

```
