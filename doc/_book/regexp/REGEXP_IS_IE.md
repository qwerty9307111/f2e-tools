# REGEXP

## $t.REGEXP_IS_IE

从 UA 判断是否为 IE 浏览器

获取 UA：`window.navigator.userAgent`

```javascript
$t.REGEXP_IS_IE.test('Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0; Trident/4.0)') // true

$t.REGEXP_IS_IE.test('Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0')  // true

$t.REGEXP_IS_IE.test('Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)')              // true

$t.REGEXP_IS_IE.test('Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)')              // true

```
