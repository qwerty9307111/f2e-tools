# “TYPE” 方法

## $t.isEmpty(value)

检查 value 是否为一个空对象，集合，映射或者set。

## 参数

<i style="color: #3492ff;font-weight: 700;">value (Any)</i>: 要检查的值。

## 返回

<i style="color: #3492ff;font-weight: 700;">(boolean)</i>: 如果 value 为空，那么返回 true，否则返回 false。

```javascript
$t.isEmpty('')        // false

$t.isEmpty([])        // true

$t.isEmpty({})        // true

$t.isEmpty(null)      // true

$t.isEmpty(new Set()) // true

$t.isEmpty(new Map()) // true
```
