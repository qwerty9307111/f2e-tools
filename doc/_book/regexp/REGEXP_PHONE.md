# REGEXP

## $t.REGEXP_PHONE

匹配手机号码（包含 0，86，17951 开头的手机号）

## 示例

```javascript
$t.REGEXP_PHONE.test('18910105656')       // true

$t.REGEXP_PHONE.test('0-18910105656')     // true

$t.REGEXP_PHONE.test('018910105656')      // true

$t.REGEXP_PHONE.test('86-18910105656')    // true

$t.REGEXP_PHONE.test('8618910105656')     // true

$t.REGEXP_PHONE.test('17951-18910105656') // true

$t.REGEXP_PHONE.test('1795118910105656')  // true
```
