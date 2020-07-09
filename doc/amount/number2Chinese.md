# “Amount” 方法

## $t.number2Chinese(number)

将数值转换为中文数字

## 参数

<i style="color: #3492ff;font-weight: 700;">number (Number)</i>: 需要转换的数值

## 返回

<i style="color: #3492ff;font-weight: 700;">(String)</i>: 中文数字

## 示例

```javascript
$t.number2Chinese(1234567890) // 壹拾贰亿叁仟肆佰伍拾陆万柒仟捌佰玖拾

$t.number2Chinese(-1234567.89) // 负壹佰贰拾叁万肆仟伍佰陆拾柒点捌玖

$t.number2Chinese('This is just a string') // null
```
