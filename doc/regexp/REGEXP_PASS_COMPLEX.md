# REGEXP

## $t.REGEXP_PASS_COMPLEX

匹配复杂密码（包含大小写字母，数字，特殊字符）。

特殊字符包括 ! @ # $ % ^ & * ( ) - + \ ` _ + | ~ [ ] { } : ; " ' < > , . / ?

~~此正则只匹配字符类型，密码长度需另行判断。~~

由于 IE 浏览器不支持 Proxy，因此在 IE 浏览器中直接调用 `$t.REGEXP_PASS_COMPLEX` 将返回一个只匹配字符类型的正则表达式。需自行判断密码长度。

在支持 Proxy 的环境中，可使用不同的键值来获取不同的正则表达式：

```javascript
$t.REGEXP_PASS_COMPLEX_1_10 // /^RegExp{1,10}$/

$t.REGEXP_PASS_COMPLEX_1    // /^RegExp{1,}$/
```

或者按对象取值的方式调用，可匹配不同长度的字符串。必需使用 2 个键值，否则将返回一个空对象。

例如 `$t.REGEXP_PASS_COMPLEX[4][10]` 将会是一个匹配长度为 4 - 10 位的密码字符串。

如果不想指定密码长度上限，第二个键值应当指定为 `Infinity`。

```javascript
$t.REGEXP_PASS_COMPLEX              // {}

$t.REGEXP_PASS_COMPLEX[1]           // {}

$t.REGEXP_PASS_COMPLEX[4][30]       // /^RegExp{4,30}$/ 匹配 4 - 30 位字符长度的密码

$t.REGEXP_PASS_COMPLEX[8][Infinity] // /^RegExp{8,}$/ 匹配 8 位字符以上的密码
```
