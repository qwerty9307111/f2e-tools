# “TYPE” 方法

## $t.isObject(value)

检查 value 是否是 Object

## 参数

<i style="color: #3492ff;font-weight: 700;">value (Any)</i>: 要检查的值。

## 返回

<i style="color: #3492ff;font-weight: 700;">(boolean)</i>: 如果 value 是 Object，那么返回 true，否则返回 false。

```javascript
$t.isObject('123') // false

$t.isObject([])    // false

$t.isObject({})    // true

$t.isObject(null)  // false
```
