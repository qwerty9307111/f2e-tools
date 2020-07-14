# “Amount” 方法

## $t.amount2Chinese(number)

将数值转换为中文金额

## 参数

<i style="color: #3492ff;font-weight: 700;">number (Number)</i>: 需要转换的数值

## 返回

<i style="color: #3492ff;font-weight: 700;">(String)</i>: 中文金额

## 示例

```javascript
$t.amount2Chinese(1234567890) // 壹拾贰亿叁仟肆佰伍拾陆万柒仟捌佰玖拾元整

$t.amount2Chinese(-1234567890.987654321) // 负壹拾贰亿叁仟肆佰伍拾陆万柒仟捌佰玖拾元玖角捌分柒毫陆厘

$t.amount2Chinese('This is just a string') // null
```
