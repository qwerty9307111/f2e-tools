# “TYPE” 方法

## $t.isNaN(value)

检查 value 是否为 NaN

## 参数

<i style="color: #3492ff;font-weight: 700;">value (Any)</i>: 要检查的值。

## 返回

<i style="color: #3492ff;font-weight: 700;">(boolean)</i>: 如果 value 为 NaN，那么返回 true，否则返回 false。

```javascript
$t.isNaN('123')         // false

$t.isNaN(Number('NaN')) // true

$t.isNaN(123)           // false

$t.isNaN(0x1)           // false

$t.isNaN(1n)            // false

$t.isNaN(NaN)           // true

$t.isNaN(Infinity)      // false

$t.isNaN(-Infinity)     // false
```
