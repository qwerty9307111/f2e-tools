# “Math” 方法

## $t.addition(number, number)

两数相加（解决了浮点数精度问题）。

这是一个柯里化（curry）函数，当传入部分参数时，将返回另一个函数。

## 参数

<i style="color: #3492ff;font-weight: 700;">augend (Number)</i>: 相加的第一个数字。

<i style="color: #3492ff;font-weight: 700;">addend (Number)</i>: 相加的第二个数字。

## 返回

<i style="color: #3492ff;font-weight: 700;">(Number)</i>: 返回总和。

## 示例

```javascript

$t.addition(0.1, 0.2) // 返回 0.3 而不是 0.30000000000000004

const plusTen = $t.addition(10) // [Function: bound e]

const result = plusTen(1) // 11

```
