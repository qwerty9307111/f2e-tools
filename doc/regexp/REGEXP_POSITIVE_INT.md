# REGEXP

## $t.REGEXP_POSITIVE_INT

匹配正整数

```javascript
$t.REGEXP_POSITIVE_INT.test(0)      // false

$t.REGEXP_POSITIVE_INT.test(1)      // true

$t.REGEXP_POSITIVE_INT.test(+1)     // true

$t.REGEXP_POSITIVE_INT.test(-1)     // false

$t.REGEXP_POSITIVE_INT.test(1.1)    // false

$t.REGEXP_POSITIVE_INT.test(+1.1)   // false

$t.REGEXP_POSITIVE_INT.test(-1.1)   // false
```
