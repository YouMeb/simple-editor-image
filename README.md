simple-editor-image
-------------------

```javascript
var Editor = require('simple-editor');
var image = require('simple-editor-image');
var editor = new Editor('<p>Hello</p>');

editor.use(image({
  upload: function (files, done) {
    // [String] or String
    console.log('upload');
    done('http://www.w3.org/html/logo/img/class-header-semantics.jpg');
  }
}));

document.body.appendChild(editor.el);
```

### Options

* button - html string
* upload - function
  arguments:
  1. files
  2. done
