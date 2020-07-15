# “PAGE” 方法

## $t.disableSelect(?DOM)

禁止 DOM 元素内的文本选中事件。

## 参数

<i style="color: #3492ff;font-weight: 700;">DOM (Element)</i>: 目标元素。默认为 `window.document.body`。

## 示例

```javascript
$t.disableSelect() // 整个页面内禁止选中文本

$t.disableSelect(document.getElementById('box')) // 禁止选中 box 内部文本（不建议使用）
```
