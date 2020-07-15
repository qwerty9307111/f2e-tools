# “Other” 方法

## $t.hideFrontNumber(target, replaceChar = '')

只显示手机号、银行账号等的后四位尾数。

## 参数

<i style="color: #3492ff;font-weight: 700;">target (Number | String)</i>: 账号。

<i style="color: #3492ff;font-weight: 700;">replaceChar (String)</i>: 替换的字符，默认为 '' 空字符串。

## 返回

<i style="color: #3492ff;font-weight: 700;">(String)</i>: 返回替换后的账号信息。

## 示例

```javascript

$t.hideFrontNumber(15688889999)            // 9999

$t.hideFrontNumber('+86 15688889999', '*') // +86 *******9999

$t.hideFrontNumber('530521199308287319')   // 7319
```
