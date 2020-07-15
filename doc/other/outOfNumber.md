# “Other” 方法

## $t.outOfNumber(Num, Max = 99)

当传入的数字大于最大值时，返回 Max+。

## 参数

<i style="color: #3492ff;font-weight: 700;">Num (Number)</i>: 原始数值。

<i style="color: #3492ff;font-weight: 700;">Max (Num)</i>: 最大值，默认为 99。

## 返回

<i style="color: #3492ff;font-weight: 700;">(String)</i>: 返回替换后的数量。

## 示例

```javascript

$t.outOfNumber(10)        // 10

$t.outOfNumber(101)       // 99+

$t.outOfNumber(101, 999)  // 101

$t.outOfNumber(1010, 999) // 999+
```
