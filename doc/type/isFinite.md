# “TYPE” 方法

## $t.isFinite(value)

检查 value 是否是原始有限数值

## 参数

<i style="color: #3492ff;font-weight: 700;">value (Any)</i>: 要检查的值。

## 返回

<i style="color: #3492ff;font-weight: 700;">(boolean)</i>: 如果 value 是一个有限数值，那么返回 true，否则返回 false。

```javascript
$t.isFinite('123')     // false

$t.isFinite(123)       // true

$t.isFinite(0x1)       // true

$t.isFinite(1n)        // false

$t.isFinite(NaN)       // false

$t.isFinite(Infinity)  // false

$t.isFinite(-Infinity) // false
```
