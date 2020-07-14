# “Math” 方法

## $t.division(number, number)

两数相除（解决了浮点数精度问题）。

这是一个柯里化（curry）函数，当传入部分参数时，将返回另一个函数。

## 参数

<i style="color: #3492ff;font-weight: 700;">dividend (Number)</i>: 相除的第一个数字。

<i style="color: #3492ff;font-weight: 700;">divisor (Number)</i>: 相除的第二个数字。

## 返回

<i style="color: #3492ff;font-weight: 700;">(Number)</i>: 返回商数。

## 示例

```javascript

$t.division(0.1, 0.3) // // 返回 0.333333333333 而不是 0.33333333333333337

const divideByTen = $t.division(10) // [Function: bound e]

const result = divideByTen(2) // 5

```
