# REGEXP

## $t.REGEXP_NON_NEGATIVE_INT

匹配非负整数

```javascript
$t.REGEXP_NON_NEGATIVE_INT.test(0)   // true

$t.REGEXP_NON_NEGATIVE_INT.test(1)   // true

$t.REGEXP_NON_NEGATIVE_INT.test(+1)  // true

$t.REGEXP_NON_NEGATIVE_INT.test(-1)  // false

$t.REGEXP_NON_NEGATIVE_INT.test(1.1) // false

$t.REGEXP_NON_NEGATIVE_INT.test(+1.1) // false

$t.REGEXP_NON_NEGATIVE_INT.test(-1.1) // false
```
