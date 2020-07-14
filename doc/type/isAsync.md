# “TYPE” 方法

## $t.isAsync(value)

检查 value 是否是 Async 函数

## 参数

<i style="color: #3492ff;font-weight: 700;">value (Any)</i>: 要检查的值。

## 返回

<i style="color: #3492ff;font-weight: 700;">(boolean)</i>: 如果 value 是一个 Async 函数，那么返回 true，否则返回 false。

```javascript
$t.isAsync('123')          // false

$t.isAsync([])             // false

$t.isAsync({})             // false

$t.isAsync(async () => {}) // true
```
