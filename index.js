'use strict';

module.exports = function (options) {
  options || (options = {});
  options.button || (options.button = 'Image');
  options.upload || (options.upload = function () {});

  return function (editor) {
    var input = fileSelector();

    var insertImages = function (images) {
      if (typeof images === 'string') {
        images = [images];
      }

      var image;

      while (image = images.shift()) {
        editor.command('insertImage', image);
      }
    };

    editor.el.appendChild(input);

    input.onchange = function () {
      options.upload(input.files, insertImages);
    };

    editor.button(options.button, function () {
      input.click();
    });
  };
};

function fileSelector() {
  var input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.multiple = true;
  input.style.display = 'none';
  return input;
}
