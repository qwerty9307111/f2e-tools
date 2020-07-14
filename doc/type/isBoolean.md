# “TYPE” 方法

## $t.isBoolean(value)

检查 value 是否是 Boolean 值

## 参数

<i style="color: #3492ff;font-weight: 700;">value (Any)</i>: 要检查的值。

## 返回

<i style="color: #3492ff;font-weight: 700;">(boolean)</i>: 如果 value 是一个布尔值，那么返回 true，否则返回 false。

```javascript
$t.isBoolean('123')     // false

$t.isBoolean(true)      // true

$t.isBoolean(Boolean()) // true
```
