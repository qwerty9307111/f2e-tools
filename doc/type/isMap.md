# “TYPE” 方法

## $t.isMap(value)

检查 value 是否是 Map 对象

## 参数

<i style="color: #3492ff;font-weight: 700;">value (Any)</i>: 要检查的值。

## 返回

<i style="color: #3492ff;font-weight: 700;">(boolean)</i>: 如果 value 是 Map 类型，那么返回 true，否则返回 false。

```javascript
$t.isMap('123')      // false

$t.isMap([])         // false

$t.isMap({})         // false

$t.isMap(new Map([])) // true
```
