# REGEXP

## $t.REGEXP_PASS_COMPLEX

匹配复杂密码（包含大小写字母，数字，特殊字符）。

特殊字符包括 ! @ # $ % ^ & * ( ) - + \ ` _ + | ~ [ ] { } : ; " ' < > , . / ?

此正则只匹配字符类型，密码长度需另行判断。

```javascript
$t.REGEXP_PASS_COMPLEX.test('!@#$%^&*()_+-=|\\/?;:"\',.~`1qW') // true

$t.REGEXP_PASS_COMPLEX.test('!Qa1')                            // true

$t.REGEXP_PASS_COMPLEX.test('123')                             // false

$t.REGEXP_PASS_COMPLEX.test('password')                        // false

$t.REGEXP_PASS_COMPLEX.test('PassWord')                        // false

$t.REGEXP_PASS_COMPLEX.test('PassWord123')                     // false
```
