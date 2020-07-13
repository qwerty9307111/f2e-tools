# REGEXP

## $t.REGEXP_IS_ANDROID

从 UA 判断是否为 Android 系统

获取 UA：`window.navigator.userAgent`

```javascript
$t.REGEXP_IS_ANDROID.test('Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13 BlackBerry') // true
```
