# REGEXP

## $t.REGEXP_TIME_24

匹配 24 小时制时间

<i style="color: #3492ff;">HH:mm</i>

<i style="color: #3492ff;">HH:mm:SS</i>

```javascript
$t.REGEXP_TIME_24.test('13:01')    // true

$t.REGEXP_TIME_24.test('12:59:59') // true

$t.REGEXP_TIME_24.test('12:59 am') // false

$t.REGEXP_TIME_24.test('12:59PM')  // false

$t.REGEXP_TIME_24.test('1:1')      // false

$t.REGEXP_TIME_24.test('24:01')    // false
```
