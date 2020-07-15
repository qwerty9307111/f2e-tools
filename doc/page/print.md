# “PAGE” 方法

## $t.print(?option)

打印当前页面（打印时会保留当前页面样式）。

**需要注意的是，此方法只会打印类名为 “printClass” 元素的子元素。因此，不要在类名为 “printClass” 的元素上写任何样式。**

## 参数

<i style="color: #3492ff;font-weight: 700;">option (Object)</i>: 打印参数，详见下表。

| 参数         | 说明                       | 类型    | 默认值   |
| ------------ | -------------------------- | ------- | -------- |
| width        | 打印预览窗口宽度           | number  | 1000     |
| height       | 打印预览窗口高度           | number  | 900      |
| printClass   | 需要打印的元素类名         | string  | print    |
| noPrintClass | 不打印的元素类名           | string  | no-print |
| closeWindow  | 打印后是否关闭预览页面     | boolean | false    |
| delay        | 延迟唤起打印功能页的毫秒数 | number  | 200      |

## 示例

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Print</title>
  <style>
    /* 在 print 元素上设置的样式无法在打印时生效 */
    .print { border: 1px solid black; }
    /* 以下这些样式都会在打印时生效 */
    .container { background-color: darkcyan; }
    .text { color: #ededed; }
  </style>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <!-- 此按钮将不会被打印，因为它不是 print 元素的子元素 -->
  <button id="do-print">打印</button>
  <div class="print"> <!-- 这个 div 不会被打印，只会打印其内部 class 不为 "no-print" 的子元素 -->
    <div class="container">
      <p class="text">会打印的文字</p>
      <p class="no-print">不会打印的文字</p>
    </div>
  </div>
</body>
</html>
```

```javascript
$t.print() // 打印当前页面

const option = {
  width: 800,
  height: 600,
  printClass: 'do-print',
  noPrintClass: 'no-print',
  closeWindow: true,
  delay: 500
}
$t.print(option)
```
