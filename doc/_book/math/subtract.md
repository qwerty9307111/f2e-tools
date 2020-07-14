# “Math” 方法

## $t.subtract(...number)

对传入的数字求差值（解决了浮点数精度问题）。

## 参数

<i style="color: #3492ff;font-weight: 700;">arguments (Number)</i>: 相减的数字。

## 返回

<i style="color: #3492ff;font-weight: 700;">(Number)</i>: 返回差值。

## 示例

```javascript

$t.subtract(0.3, 0.1) // 返回 0.2 而不是 0.19999999999999998

$t.subtract(4, 3, 2, 1) // -2

```
