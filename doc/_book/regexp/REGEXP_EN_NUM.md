# REGEXP

## $t.REGEXP_EN_NUM

匹配英文 + 数字

```javascript
$t.REGEXP_EN_NUM.test('hello world') // false

$t.REGEXP_EN_NUM.test('English')     // true

$t.REGEXP_EN_NUM.test(123)           // true

$t.REGEXP_EN_NUM.test(-1)            // false

$t.REGEXP_EN_NUM.test(1.1)           // false

$t.REGEXP_EN_NUM.test('En123')       // true
```
