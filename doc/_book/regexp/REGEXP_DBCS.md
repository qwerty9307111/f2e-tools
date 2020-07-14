# REGEXP

## $t.REGEXP_DBCS

匹配双字节字符

```javascript
$t.REGEXP_DBCS.test('ｈｅｌｌｏ　ｗｏｒｌｄ')  // true

$t.REGEXP_DBCS.test('hello world')        // false

$t.REGEXP_DBCS.test('你好世界')            // true

$t.REGEXP_DBCS.test('ゆくえふめい')        // true
```
