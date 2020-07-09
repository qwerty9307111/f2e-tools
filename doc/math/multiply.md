# “Math” 方法

## $t.multiply(...number)

对传入的数值求积（解决了浮点数精度问题）。

## 参数

<i style="color: #3492ff;font-weight: 700;">arguments (Number)</i>: 相乘的数字。

## 返回

<i style="color: #3492ff;font-weight: 700;">(Number)</i>: 返回乘积。

## 示例

```javascript

$t.multiply(0.1, 0.2) // 返回 0.02 而不是 0.020000000000000004

$t.multiply(1, 2, 3, 4) // 24

```
