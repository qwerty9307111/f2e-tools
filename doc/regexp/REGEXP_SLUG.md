# REGEXP

## $t.REGEXP_SLUG

匹配 SLUG 字符串

```javascript
$t.REGEXP_SLUG.test('HelloWorld')  // false

$t.REGEXP_SLUG.test('helloworld')  // true

$t.REGEXP_SLUG.test('hello-world') // true

$t.REGEXP_SLUG.test('hello world') // false

```
