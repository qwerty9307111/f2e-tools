# “PAGE” 方法

## $t.recoverSelect(?DOM)

允许 DOM 元素内的文本选中事件。

## 参数

<i style="color: #3492ff;font-weight: 700;">DOM (Element)</i>: 目标元素。默认为 `window.document.body`。

## 示例

```javascript
$t.recoverSelect() // 整个页面内禁允许选中文本

$t.recoverSelect(document.getElementById('box')) // 允许选中 box 内部文本
```
