# “Math” 方法

## $t.multiplication(number, number)

两数相乘（解决了浮点数精度问题）。

这是一个柯里化（curry）函数，当传入部分参数时，将返回另一个函数。

## 参数

<i style="color: #3492ff;font-weight: 700;">multiplicand (Number)</i>: 相乘的第一个数字。

<i style="color: #3492ff;font-weight: 700;">multiplier (Number)</i>: 相乘的第二个数字。

## 返回

<i style="color: #3492ff;font-weight: 700;">(Number)</i>: 返回乘积。

## 示例

```javascript

$t.multiplication(0.1, 0.2) // 返回 0.02 而不是 0.020000000000000004

const timesTen = $t.multiplication(10) // [Function: bound e]

const result = timesTen(2) // 20

```
