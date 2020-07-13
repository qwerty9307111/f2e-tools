# REGEXP

## $t.REGEXP_IPV4

匹配 IPV4 地址

```javascript
$t.REGEXP_IPV4.test('10.173.49.184')       // true

$t.REGEXP_IPV4.test('255.255.252.0')       // true

$t.REGEXP_IPV4.test('10.173.48.1')         // true

$t.REGEXP_IPV4.test('atrapa.deloitte.com') // false

$t.REGEXP_IPV4.test('259.2.3.123')         // false
```
