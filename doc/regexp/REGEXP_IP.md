# REGEXP

## $t.REGEXP_IP

匹配 IP 地址

```javascript
$t.REGEXP_IP.test('10.173.49.184')                // true

$t.REGEXP_IP.test('255.255.252.0')                // true

$t.REGEXP_IP.test('10.173.48.1')                  // true

$t.REGEXP_IP.test('259.2.3.123')                  // false

$t.REGEXP_IP.test('fe80::c81f:85a1:c317:9dc7%14') // true
```
