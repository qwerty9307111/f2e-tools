# “TYPE” 方法

## $t.isUndefined(value)

检查 value 是否是 undefined

## 参数

<i style="color: #3492ff;font-weight: 700;">value (Any)</i>: 要检查的值。

## 返回

<i style="color: #3492ff;font-weight: 700;">(boolean)</i>: 如果 value 是 undefined，那么返回 true，否则返回 false。

```javascript
$t.isUndefined('123')     // false

$t.isUndefined(undefined) // true

$t.isUndefined(void 0)    // true
```
