# REGEXP

## $t.REGEXP_POSITIVE_NUMBER

匹配正数

```javascript
$t.REGEXP_POSITIVE_NUMBER.test(0)   // true

$t.REGEXP_POSITIVE_NUMBER.test(1)   // true

$t.REGEXP_POSITIVE_NUMBER.test(+1)   // true

$t.REGEXP_POSITIVE_NUMBER.test(-1)  // false

$t.REGEXP_POSITIVE_NUMBER.test(1.1) // true

$t.REGEXP_POSITIVE_NUMBER.test(+1.1) // true

$t.REGEXP_POSITIVE_NUMBER.test(-1.1) // false
```
