# REGEXP

## $t.REGEXP_TIME_12

匹配 12 小时制时间

<i style="color: #3492ff;">HH:mm</i>

<i style="color: #3492ff;">HH:mm:SS</i>

<i style="color: #3492ff;">HH:mm:SS AM | PM</i>

<i style="color: #3492ff;">HH:mm am | pm</i>

```javascript
$t.REGEXP_TIME_12.test('12:01')    // true

$t.REGEXP_TIME_12.test('12:59 am') // true

$t.REGEXP_TIME_12.test('12:59PM')  // true

$t.REGEXP_TIME_12.test('12:59:59') // true

$t.REGEXP_TIME_12.test('1:1')      // false

$t.REGEXP_TIME_12.test('13:01')    // false
```
