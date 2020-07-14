# “Math” 方法

## $t.subtraction(number, number)

两数相减（解决了浮点数精度问题）。

这是一个柯里化（curry）函数，当传入部分参数时，将返回另一个函数。

## 参数

<i style="color: #3492ff;font-weight: 700;">minuend (Number)</i>: 相减的第一个数字。

<i style="color: #3492ff;font-weight: 700;">subtrahend (Number)</i>: 相减的第二个数字。

## 返回

<i style="color: #3492ff;font-weight: 700;">(Number)</i>: 返回差。

## 示例

```javascript

$t.subtraction(0.3, 0.1) // 返回 0.2 而不是 0.19999999999999998

const subtractsFromTen = $t.subtraction(10) // [Function: bound e]

const result = subtractsFromTen(1) // 9

```
