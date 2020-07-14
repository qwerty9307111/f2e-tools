# “TYPE” 方法

## $t.isBigInt(value)

检查 value 是否是 BigInt

## 参数

<i style="color: #3492ff;font-weight: 700;">value (Any)</i>: 要检查的值。

## 返回

<i style="color: #3492ff;font-weight: 700;">(boolean)</i>: 如果 value 是一个 BigInt，那么返回 true，否则返回 false。

```javascript
$t.isBigInt('123')     // false

$t.isBigInt(123)       // false

$t.isBigInt(0x1)       // false

$t.isBigInt(1n)        // true

$t.isBigInt(BigInt(1)) // true

$t.isBigInt(Infinity)  // false

$t.isBigInt(NaN)       // false
```
