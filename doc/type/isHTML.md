# “TYPE” 方法

## $t.isHTML(value)

检查 value 是否是 HTML 元素

## 参数

<i style="color: #3492ff;font-weight: 700;">value (Any)</i>: 要检查的值。

## 返回

<i style="color: #3492ff;font-weight: 700;">(boolean)</i>: 如果 value 是 HTML 元素，那么返回 true，否则返回 false。

```javascript
$t.isHTML('123')         // false

$t.isHTML([])            // false

$t.isHTML({})            // false

$t.isHTML(document.body) // true
```
