# REGEXP

## $t.REGEXP_PLATES

匹配车牌号

```javascript
$t.REGEXP_PLATES.test('渝AZ0B88')  // true

$t.REGEXP_PLATES.test('渝az0b88')  // true

$t.REGEXP_PLATES.test('渝AZ0B8学') // true

$t.REGEXP_PLATES.test('渝AZ0B8警') // true

```
