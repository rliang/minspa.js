# minspa.js

A minimalist single-page-application engine.

## Example Usage

```javascript
var spa = minspa(document.body);
var p = document.createElement('p');
spa(p);

var spa2 = minspa(p);
spa2('<a></a>');
```

### Result

```html
<body>
  <p>
    <div>
      <a></a>
    </div>
  </p>
</body>
```
