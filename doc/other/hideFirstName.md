# “Other” 方法

## $t.hideFirstName(name, gender)

隐藏名字。

## 参数

<i style="color: #3492ff;font-weight: 700;">name (string)</i>: 全名。

<i style="color: #3492ff;font-weight: 700;">gender (number)</i>: 性别，1 - 男，2 - 女， 0 - 未知。

## 返回

<i style="color: #3492ff;font-weight: 700;">(String)</i>: 返回替换后的名字。

## 示例

```javascript

$t.hideFirstName('周瑜', 1)  // 周先生

$t.hideFirstName('蔡文姬', 2) // 蔡女士

$t.hideFirstName('李元芳')    // 李**

```
