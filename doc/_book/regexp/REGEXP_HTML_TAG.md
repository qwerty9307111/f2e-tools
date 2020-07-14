# REGEXP

## $t.REGEXP_HTML_TAG

匹配 HTML 标签

```javascript
$t.REGEXP_HTML_TAG.test('<div class="box"><.div>')    // true

$t.REGEXP_HTML_TAG.test('<img src="./avatar.png" />') // true

$t.REGEXP_HTML_TAG.test('<p>Hello World</p>')         // true
```
