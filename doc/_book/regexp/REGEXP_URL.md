# REGEXP

## $t.REGEXP_URL

匹配 URL 地址

```javascript
$t.REGEXP_URL.test('www.baidu.com')                                        // false

$t.REGEXP_URL.test('https://google.com')                                   // true

$t.REGEXP_URL.test('http://localhost:8080/#/login')                        // true

$t.REGEXP_URL.test('https://www.lodashjs.com/docs/lodash.findIndex')       // true

$t.REGEXP_URL.test('http://124.17.100.183:32080/portal/index.html#/login') // true
```
