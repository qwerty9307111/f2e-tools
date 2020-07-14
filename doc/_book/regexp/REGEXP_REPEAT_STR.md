# REGEXP

## $t.REGEXP_REPEAT_STR

匹配重复字符

```javascript
$t.REGEXP_REPEAT_STR.test('<div class="box"></div>')    // true

$t.REGEXP_REPEAT_STR.test('hello hello') // true

'<div class="box"></div>'.match($t.REGEXP_REPEAT_STR) // ["div", "div", index: 1, input: "<div class="box"></div>", groups: undefined]
```
