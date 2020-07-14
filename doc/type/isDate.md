# “TYPE” 方法

## $t.isDate(value)

检查 value 是否是 Date 对象

## 参数

<i style="color: #3492ff;font-weight: 700;">value (Any)</i>: 要检查的值。

## 返回

<i style="color: #3492ff;font-weight: 700;">(boolean)</i>: 如果 value 是一个 Date 对象，那么返回 true，否则返回 false。

```javascript
$t.isDate('123')      // false

$t.isDate([])         // false

$t.isDate({})         // false

$t.isDate(new Date()) // true
```
