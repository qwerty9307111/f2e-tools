# REGEXP

## $t.REGEXP_IS_MAC

从 UA 判断是否为 Mac OS 平台

获取 UA：`window.navigator.userAgent`

```javascript
$t.REGEXP_IS_MAC.test('Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_3 like Mac OS X; en-us) AppleWebKit/533.17.9 (KHTML, like Gecko) Version/5.0.2 Mobile/8J2 Safari/6533.18.5 safari iOS 4.33 – iPod Touch') // false
```
