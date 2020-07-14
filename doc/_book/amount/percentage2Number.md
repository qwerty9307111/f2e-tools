# “Amount” 方法

## $t.percentage2Number(string)

将百分数转换为数字

## 参数

<i style="color: #3492ff;font-weight: 700;">string (String)</i>: 需要转换的百分数

## 返回

<i style="color: #3492ff;font-weight: 700;">(number)</i>: 转换后的数字

## 示例

```javascript
$t.number2Percentage('12.3%') // 0.123

$t.number2Percentage('-12.3%') // -0.123

$t.number2Percentage('This is just a string') // null
```
