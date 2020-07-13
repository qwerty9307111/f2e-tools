# REGEXP

## $t.REGEXP_IS_FIREFOX

从 UA 判断是否为 Firefox 浏览器

获取 UA：`window.navigator.userAgent`

```javascript
$t.REGEXP_IS_FIREFOX.test('Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0') // true
```
