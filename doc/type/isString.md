# “TYPE” 方法

## $t.isString(value)

检查 value 是否为 String

## 参数

<i style="color: #3492ff;font-weight: 700;">value (Any)</i>: 要检查的值。

## 返回

<i style="color: #3492ff;font-weight: 700;">(boolean)</i>: 如果 value 为一个字符串，那么返回 true，否则返回 false。

```javascript
$t.isString('hello world') // true

$t.isString(String())      // true

$t.isString(123)           // false
```
