# “Other” 方法

## $t.hideLastName(name, replaceStr = '*')

隐藏姓氏。

## 参数

<i style="color: #3492ff;font-weight: 700;">name (string)</i>: 全名。

<i style="color: #3492ff;font-weight: 700;">replaceStr (string)</i>: 替换字符，默认为 *。

## 返回

<i style="color: #3492ff;font-weight: 700;">(String)</i>: 返回替换后的名字。

## 示例

```javascript

$t.hideLastName('周瑜')        // *瑜

$t.hideLastName('诸葛亮')      // *亮

$t.hideLastName('司马懿')      // *懿

```
