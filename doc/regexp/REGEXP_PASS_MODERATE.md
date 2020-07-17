# REGEXP

## $t.REGEXP_PASS_MODERATE

匹配简单密码（包含大小写字母，数字）。

~~此正则只匹配字符类型，密码长度需另行判断。~~

按对象取值的方式调用，可匹配不同长度的字符串。必需使用 2 个键值，否则将返回一个空对象。

例如 `$t.REGEXP_PASS_MODERATE[4][10]` 将会是一个匹配长度为 4 - 10 位的密码字符串。

如果不想指定密码长度上限，第二个键值应当指定为 `Infinity`。

```javascript
$t.REGEXP_PASS_MODERATE              // {}

$t.REGEXP_PASS_MODERATE[1]           // {}

$t.REGEXP_PASS_MODERATE[4][30]       // /RegExp{4,30}$/ 匹配 4 - 30 位字符长度的密码

$t.REGEXP_PASS_MODERATE[8][Infinity] // /RegExp{8,}$/ 匹配 8 位字符以上的密码
```
