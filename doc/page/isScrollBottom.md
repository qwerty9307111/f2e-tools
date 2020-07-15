# “PAGE” 方法

## $t.isScrollBottom(?target, ?limit)

判断 target 目标元素内的滚动条是否位于底部位置。

判断条件为滚动条底部距离元素底部的高度差小于 limit 阈值。

## 参数

<i style="color: #3492ff;font-weight: 700;">target (Element)</i>: 目标元素。默认为 `window`。

<i style="color: #3492ff;font-weight: 700;">limit (number)</i>: 判断元素位于底部的阈值，默认为 0.1。

## 返回

<i style="color: #3492ff;font-weight: 700;">(boolean)</i>：如果滚动条位于底部，则返回 true，否则返回 false。

## 示例

```javascript
$t.isScrollBottom() // 整个页面的滚动条是否位于底部

$t.isScrollBottom(document.getElementById('box')) // id="box" 的元素内部的滚动条是否位于底部

$t.isScrollBottom(document.getElementById('box'), 100) // id="box" 的元素内部的滚动条底部距离元素底部的高度差小于 100 时将返回 true
```
