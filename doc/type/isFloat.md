# “TYPE” 方法

## $t.isFloat(value)

检查 value 是否是浮点数

## 参数

<i style="color: #3492ff;font-weight: 700;">value (Any)</i>: 要检查的值。

## 返回

<i style="color: #3492ff;font-weight: 700;">(boolean)</i>: 如果 value 是一个浮点数，那么返回 true，否则返回 false。

```javascript
$t.isFloat('123')         // false

$t.isFloat(12.3)          // true

$t.isFloat(0x1)           // false

$t.isFloat(1n)            // false

$t.isFloat(NaN)           // false

$t.isFloat(Infinity)      // false

$t.isFloat(-Infinity)     // false
```
