# “Amount” 方法

## $t.number2Amount(number, [temp = '0,0'], [nullFormat = 'N/A'])

根据传入的模板字符串格式化数字

## 参数

<i style="color: #3492ff;font-weight: 700;">number (Number)</i>: 要格式化的数字

<i style="color: #3492ff;font-weight: 700;">[temp = '0,0'] (String)</i>: 格式模板字符串

<i style="color: #3492ff;font-weight: 700;">[nullFormat = 'N/A'] (String)</i>: number 为空值或传入的 number 不能正确转换为 Number 类型时的返回结果

## 返回

<i style="color: #3492ff;font-weight: 700;">(String)</i>: 格式化结果

## 示例

```javascript
$t.number2Amount(1234.567) // 1,235

$t.number2Amount(1234.567, '0,0.0') // 1,234.6

$t.number2Amount(1234.567, '$0,0.00') // $1,234.57

$t.number2Amount(1234.567, '0,0.000元') // 1,234.567 元

$t.number2Amount(null) // N/A

$t.number2Amount('') // N/A

$t.number2Amount(undefined) // N/A

$t.number2Amount('This is a string', '0,0.0', 'N.A.') // N.A.
```
