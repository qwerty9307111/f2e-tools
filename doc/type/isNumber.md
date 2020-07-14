# “TYPE” 方法

## $t.isNumber(value)

检查 value 是否为 Number

## 参数

<i style="color: #3492ff;font-weight: 700;">value (Any)</i>: 要检查的值。

## 返回

<i style="color: #3492ff;font-weight: 700;">(boolean)</i>: 如果 value 为一个数值，那么返回 true，否则返回 false。

```javascript
$t.isNumber('123')     // false

$t.isNumber(Number())  // true

$t.isNumber(123)       // true

$t.isNumber(0x1)       // true

$t.isNumber(1n)        // false

$t.isNumber(NaN)       // true

$t.isNumber(Infinity)  // true

$t.isNumber(-Infinity) // true
```
