# “PAGE” 方法

## $t.copyToClipboard(str)

复制字符串到剪贴板。

## 参数

<i style="color: #3492ff;font-weight: 700;">str (String)</i>: 要复制的字符串。

## 返回

<i style="color: #3492ff;font-weight: 700;">(Object)</i>：返回一个包含 then 和 catch 方法的对象。

## 示例

```javascript
$t.copyToClipboard('123')
  .then(res => { console.log('copy success! ' + res) }) // copy success! 123
  .catch(err => { console.log(err) })
```
