# “TYPE” 方法

## $t.isInteger(value)

检查 value 是否是整数

## 参数

<i style="color: #3492ff;font-weight: 700;">value (Any)</i>: 要检查的值。

## 返回

<i style="color: #3492ff;font-weight: 700;">(boolean)</i>: 如果 value 是一个整数，那么返回 true，否则返回 false。

```javascript
$t.isInteger('123')         // false

$t.isInteger(123)           // true

$t.isInteger(0x1)           // true

$t.isInteger(1n)            // false

$t.isInteger(NaN)           // false

$t.isInteger(Infinity)      // false

$t.isInteger(-Infinity)     // false
```
