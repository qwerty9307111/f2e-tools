# REGEXP

## $t.REGEXP_CN_CHARACTERS

匹配中文字符

```javascript
$t.REGEXP_CN_CHARACTERS.test('hello world')      // false

$t.REGEXP_CN_CHARACTERS.test('ゆくえふめい')       // false

$t.REGEXP_CN_CHARACTERS.test('당신을 사랑해요')    // false

$t.REGEXP_CN_CHARACTERS.test('你好世界')          // true

$t.REGEXP_CN_CHARACTERS.test('憴')               // true
```
