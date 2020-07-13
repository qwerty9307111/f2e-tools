# REGEXP

## $t.REGEXP_NUMBER

匹配实数

```javascript
$t.REGEXP_NUMBER.test(0)    // true

$t.REGEXP_NUMBER.test(1)    // true

$t.REGEXP_NUMBER.test(+1)   // true

$t.REGEXP_NUMBER.test(-1)   // true

$t.REGEXP_NUMBER.test(1.1)  // true

$t.REGEXP_NUMBER.test(+1.1) // true

$t.REGEXP_NUMBER.test(-1.1) // true
```
