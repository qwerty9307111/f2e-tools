# REGEXP

## $.REGEXP_UPPER_EN_CHARACTERS

匹配大写英文字符

```javascript
$t.REGEXP_UPPER_EN_CHARACTERS.test('hello world')  // true

$t.REGEXP_UPPER_EN_CHARACTERS.test('HELLO WORLD')  // false

$t.REGEXP_UPPER_EN_CHARACTERS.test('你好世界')      // false

$t.REGEXP_UPPER_EN_CHARACTERS.test('ゆくえふめい')   // false
```
