# “TYPE” 方法

## $t.isPromise(value)

检查 value 是否是 Promise 对象

## 参数

<i style="color: #3492ff;font-weight: 700;">value (Any)</i>: 要检查的值。

## 返回

<i style="color: #3492ff;font-weight: 700;">(boolean)</i>: 如果 value 是一个 Promise，那么返回 true，否则返回 false。

```javascript
$t.isPromise('123')                                // false

$t.isPromise([])                                   // false

$t.isPromise({})                                   // false

$t.isPromise(new Promise((resolve, reject) => {})) // true
```
