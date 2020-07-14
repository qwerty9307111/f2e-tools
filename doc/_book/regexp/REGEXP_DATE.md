# REGEXP

## $t.REGEXP_DATE

匹配日期（<i style="color: #3492ff;">YYYY-MM-dd</i> 或 <i style="color: #3492ff;">YYYY/MM/dd</i>）

```javascript
$t.REGEXP_DATE.test('2020/07/13') // true

$t.REGEXP_DATE.test('2020-07-13') // true

$t.REGEXP_DATE.test('2020/7/13')  // false

$t.REGEXP_DATE.test('2020/07/32') // false

$t.REGEXP_DATE.test('2020/13/13') // false
```
