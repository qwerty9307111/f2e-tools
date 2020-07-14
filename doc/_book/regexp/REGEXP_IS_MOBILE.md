# REGEXP

## $t.REGEXP_IS_MOBILE

从 UA 判断是否为移动终端

获取 UA：`window.navigator.userAgent`

```javascript
$t.REGEXP_IS_MOBILE.test('mozilla/5.0 (linux; u; android 4.1.2; zh-cn; mi-one plus build/jzo54k) applewebkit/534.30 (khtml, like gecko) version/4.0 mobile safari/534.30 micromessenger/5.0.1.352') // true
```
