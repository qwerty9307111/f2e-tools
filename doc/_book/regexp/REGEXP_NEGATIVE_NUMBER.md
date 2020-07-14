# REGEXP

## $t.REGEXP_NEGATIVE_NUMBER

匹配负数

```javascript
$t.REGEXP_NEGATIVE_NUMBER.test(0)    // true

$t.REGEXP_NEGATIVE_NUMBER.test(1)    // false

$t.REGEXP_NEGATIVE_NUMBER.test(+1)   // false

$t.REGEXP_NEGATIVE_NUMBER.test(-1)   // true

$t.REGEXP_NEGATIVE_NUMBER.test(1.1)  // false

$t.REGEXP_NEGATIVE_NUMBER.test(+1.1) // false

$t.REGEXP_NEGATIVE_NUMBER.test(-1.1) // true
```
