# REGEXP

## $t.REGEXP_PASS_MODERATE

匹配简单密码（包含大小写字母，数字）。

此正则只匹配字符类型，密码长度需另行判断。

```javascript
$t.REGEXP_PASS_MODERATE.test('password')    // false

$t.REGEXP_PASS_MODERATE.test('PassWord')    // false

$t.REGEXP_PASS_MODERATE.test('PassWord123') // true
```
