# REGEXP

## $t.REGEXP_NON_POSITIVE_INT

匹配非正整数

```javascript
$t.REGEXP_NON_POSITIVE_INT.test(0)   // true

$t.REGEXP_NON_POSITIVE_INT.test(1)   // false

$t.REGEXP_NON_POSITIVE_INT.test(+1)   // false

$t.REGEXP_NON_POSITIVE_INT.test(-1)  // true

$t.REGEXP_NON_POSITIVE_INT.test(1.1) // false

$t.REGEXP_NON_POSITIVE_INT.test(+1.1) // false

$t.REGEXP_NON_POSITIVE_INT.test(-1.1) // false
```
