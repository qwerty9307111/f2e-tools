# “Other” 方法

## $t.hideMiddlePhoneNumber(phoneNumber, replaceChar = '*')

使用 replaceChar 替换手机号中间四位。

替换内容不包括 0，86，12693，17591 等前缀。

## 参数

<i style="color: #3492ff;font-weight: 700;">phoneNumber (Number | String)</i>: 11 位手机号。

<i style="color: #3492ff;font-weight: 700;">replaceChar (String)</i>: 替换的字符，默认为 *。

## 返回

<i style="color: #3492ff;font-weight: 700;">(String)</i>: 返回替换后的手机号。

## 示例

```javascript

$t.hideMiddlePhoneNumber(15688889999)         // 156****9999

$t.hideMiddlePhoneNumber('+86 15688889999')   // +86 156****9999

$t.hideMiddlePhoneNumber('12593-15688889999') // 12593-156****9999

$t.hideMiddlePhoneNumber(15688889999, '#')    // 156####9999

```
