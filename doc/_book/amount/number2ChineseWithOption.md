# “Amount” 方法

## $t.number2ChineseWithOption(Object, number)

根据传入的 option 对象，对 number 进行转换。

这是一个柯里化（curry）函数，当仅传入 option 时，将返回一个转换函数。

## 参数

<i style="color: #3492ff;font-weight: 700;">option (Object)</i>: 配置对象。

<i style="color: #3492ff;font-weight: 700;">number (Number)</i>: 需要转换的数值。

```javascript
option = {
  case: 'upper'  | 'lower', // 转换为大写中文或小写中文
  type: 'number' | 'money'  // 转换为中文数值或中文金额
}
```

## 返回

<i style="color: #3492ff;font-weight: 700;">(String)</i>: Function | 中文数字 | 中文金额

## 示例

```javascript
$t.number2ChineseWithOption({ case: 'lower', type: 'money' }, 123.456) // 一百二十三元四角五分六毫

const number2Chinese = $t.number2ChineseWithOption({ case: 'lower', type: 'number' }) // [Function: bound e]

number2Chinese(123.456) // 一百二十三点四五六
```
