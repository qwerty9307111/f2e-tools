# REGEXP

## $t.REGEXP_IPV6

匹配 IPV6 地址

```javascript
$t.REGEXP_IPV6.test('10.173.49.184')                // false

$t.REGEXP_IPV6.test('255.255.252.0')                // false

$t.REGEXP_IPV6.test('10.173.48.1')                  // false

$t.REGEXP_IPV6.test('259.2.3.123')                  // false

$t.REGEXP_IPV6.test('fe80::c81f:85a1:c317:9dc7%14') // true
```
