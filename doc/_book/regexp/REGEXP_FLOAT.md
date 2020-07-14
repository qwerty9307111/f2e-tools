# REGEXP

## $t.REGEXP_FLOAT

匹配非负数

```javascript
$t.REGEXP_FLOAT.test(0)    // false

$t.REGEXP_FLOAT.test(1)    // false

$t.REGEXP_FLOAT.test(+1)   // false

$t.REGEXP_FLOAT.test(-1)   // false

$t.REGEXP_FLOAT.test(1.1)  // true

$t.REGEXP_FLOAT.test(+1.1) // true

$t.REGEXP_FLOAT.test(-1.1) // true
```
