# “TYPE” 方法

## $t.isSet(value)

检查 value 是否是 Set 对象

## 参数

<i style="color: #3492ff;font-weight: 700;">value (Any)</i>: 要检查的值。

## 返回

<i style="color: #3492ff;font-weight: 700;">(boolean)</i>: 如果 value 是 Set 类型，那么返回 true，否则返回 false。

```javascript
$t.isSet('123')       // false

$t.isSet([])          // false

$t.isSet({})          // false

$t.isSet(new Set([])) // true
```
