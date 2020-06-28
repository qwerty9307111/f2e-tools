# f2e-tools

> Common front-end tools

## Install

``` node
npm install f2e-tools --save
```

## Use

``` javascript
const tool = require('f2e-tools')

tool.*
```

## Math

``` javascript
.add(num1, num2)                   // add :: (number, number) -> number               两数相加
.precisionAdd(num1, num2)          // precisionAdd :: (number, number) -> number      两数相加并返回正确结果
.sub(num1, num2)                   // sub :: (number, number) -> number               两数相减
.precisionSub(num1, num2)          // precisionSub :: (number, number) -> number      两数相减并返回正确结果
.multiply(num1, num2)              // multiply :: (number, number) -> number          两数相乘
.precisionMultiply(num1, num2)     // precisionMultiply :: (number, number) -> number 两数相乘并返回正确结果
.divide(num1, num2)                // divide :: (number, number) -> number            两数相除
.precisionDivide(num1, num2)       // precisionDivide :: (number, number) -> number   两数相除并返回正确结果
.sum(...nums)                      // sum :: (...number) -> number                    对传入的全部数字依次相加
.precisionSum(...nums)             // precisionSum :: (...number) -> number           对传入的全部数字依次相加并返回正确结果
.minus(...nums)                    // minus :: (...number) -> number                  对传入的全部数字依次相减
.precisionMinus(...nums)           // precisionMinus :: (...number) ->  number        对传入的全部数字依次相减并返回正确结果
.times(...nums)                    // times :: (...number) -> number                  对传入的全部数字依次相乘
.precisionTimes(...nums)           // precisionTimes :: (...number) -> number         对传入的全部数字依次相乘并返回正确结果
.divides(...nums)                  // divides :: (...number) -> number                对传入的全部数字依次相除
.precisionDivides(...nums)         // precisionDivides :: (...number) -> number       对传入的全部数字依次相除并返回正确结果
.round(num, ?round = 2)            // round :: (number, number = 2) -> string         将数值按四舍五入转换为指定位数的小数，默认保留 2 位小数
.toFixed(num, ?fixed = 2)          // toFixed :: (number, number = 2) -> string       将数值按银行家舍入法转换为指定位数的小数，默认保留 2 位小数
.toPrecision(num, ?precision = 12) // toPrecision :: (number, number = 12) -> number  将数值转换为指数计数法，默认精度为 12
```

## Amount

```javascript
.number2Amount(num, ?temp = '0,0', ?nullFormat = 'N/A', ?zeroFormat = 'N/A')
.amount2Number(amount)
.number2Percentage(num)
.percentage2Number(percentage)
.amount2Chinese(amount)
.number2Chinese(num)
.number2ChineseWithOption(opts)
```

## Page

```javascript
.scroll2Top(?DOM = window)
.scroll2Bottom(?DOM = window)
.isScrollTop(?DOM = window)
.isScrollBottom(?DOM = window, ?limit = 0.1)
.scrollTopByStep(?step = 0, ?DOM = window)
.scrollBottomByStep(?step = 0, ?DOM = window)
.toFullScreen()
.exitFullScreen()
.print(?opts)
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
.REGEXP_TIME_AM_PM          // HH:mm 12小时值 + AM/PM/am/pm
.REGEXP_TIME_24             // HH:mm 24小时制
.REGEXP_TIME_SEC            // HH:mm:SS 24小时制
.REGEXP_TIME_24_LEADING     // 可选 H:mm 24小时制
.REGEXP_AMOUNT_OF_MONEY     // 匹配金额（包含千分符）
.REGEXP_HTML_TAG            // 匹配 HTML 标签
.REGEXP_TAG_NAME            // 匹配重复字符串 - 取 HTML 标签名
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

## Other

``` javascript

.hideMiddlePhoneNumber(phoneNumber, ?replaceStr = '*') // hideMiddlePhoneNumber :: (number | string, string = '*') -> string
.hideFrontPhoneNumber(phoneNumber, ?replaceStr = '') // hideFrontPhoneNumber :: (number | string, string = '') -> string

```
