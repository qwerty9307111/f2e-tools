# “PAGE” 方法

## $t.isScrollTop(?target)

判断 target 目标元素内的滚动条是否位于顶部位置。

## 参数

<i style="color: #3492ff;font-weight: 700;">target (Element)</i>: 目标元素。默认为 `window`。

## 返回

<i style="color: #3492ff;font-weight: 700;">(boolean)</i>：如果滚动条位于顶部，则返回 true，否则返回 false。

## 示例

```javascript
$t.isScrollTop() // 整个页面的滚动条是否位于顶部

$t.isScrollTop(document.getElementById('box')) // id="box" 的元素内部的滚动条是否位于顶部
```
