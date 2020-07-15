# “PAGE” 方法

## $t.createElement(temp)

根据传入的模板字符串创建 Element 元素。

## 参数

<i style="color: #3492ff;font-weight: 700;">temp (String)</i>: Element 模板字符串。

## 返回

<i style="color: #3492ff;font-weight: 700;">(Element)</i>：返回创建的 DOM 元素。

## 示例

```javascript
$t.createElement('123') // null

$t.createElement('<p class="text">123</p>') // <p class="text">123</p>
```
