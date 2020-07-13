# REGEXP

## $t.REGEXP_NON_NEGATIVE_NUMBER

匹配非负数

```javascript
$t.REGEXP_NON_NEGATIVE_NUMBER.test(0)    // true

$t.REGEXP_NON_NEGATIVE_NUMBER.test(1)    // true

$t.REGEXP_NON_NEGATIVE_NUMBER.test(+1)   // true

$t.REGEXP_NON_NEGATIVE_NUMBER.test(-1)   // false

$t.REGEXP_NON_NEGATIVE_NUMBER.test(1.1)  // true

$t.REGEXP_NON_NEGATIVE_NUMBER.test(+1.1) // true

$t.REGEXP_NON_NEGATIVE_NUMBER.test(-1.1) // false
```
