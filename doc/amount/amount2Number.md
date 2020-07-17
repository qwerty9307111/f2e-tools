# “Amount” 方法

## $t.amount2Number(string)

从金额字符串中解析数字

## 参数

<i style="color: #3492ff;font-weight: 700;">string (String)</i>: 金额字符串

## 返回

<i style="color: #3492ff;font-weight: 700;">(Number)</i>: 金额值

## 示例

```javascript
$t.amount2Number('$123,456.789') // 123456.789

$t.amount2Number('-$123,456.789 元') // -123456.789

$t.amount2Number('This is just a string') // null
```
