var swig = require('swig');

var tmpl = swig.compileFile(__dirname + '/template/mit-template');

exports.getMITLicense = function(author, year) {

  var renderedFile = tmpl({
    author: author,
    year: year
  });

  return renderedFile;
}