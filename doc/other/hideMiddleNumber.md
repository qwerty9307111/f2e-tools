# “Other” 方法

## $t.hideMiddleNumber(target, replaceChar = '*')

隐藏数字账号的中间位，只显示前后 4 位数字。中间位用 4 个 replaceChar 字符代替。

## 参数

<i style="color: #3492ff;font-weight: 700;">target (Number | String)</i>: 账号。

<i style="color: #3492ff;font-weight: 700;">replaceChar (String)</i>: 替换的字符，默认为 '*' 空字符串。

## 返回

<i style="color: #3492ff;font-weight: 700;">(String)</i>: 返回替换后的账号信息。

## 示例

```javascript

$t.hideMiddleNumber(15688889999, '#')            // 1568####9999

$t.hideMiddleNumber('530521199308287319')   // 5305****7319
```
