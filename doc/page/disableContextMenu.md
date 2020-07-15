# “PAGE” 方法

## $t.disableContextMenu(?DOM)

禁止 DOM 元素内的鼠标右键事件。

## 参数

<i style="color: #3492ff;font-weight: 700;">DOM (Element)</i>: 目标元素。默认为 `window.document.body`。

## 示例

```javascript
$t.disableContextMenu() // 整个页面内禁止鼠标右键事件

$t.disableContextMenu(document.getElementById('box')) // 禁止 box 内部的鼠标右键事件
```
