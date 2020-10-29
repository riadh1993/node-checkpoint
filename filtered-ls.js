/*var fs = require("fs");
var path = require("path");

var ext = "." + process.argv[3];

fs.readdir(process.argv[2], function (err, files) {
  if (err) return console.error(err);
  files.map(function (file) {
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});*/

var fs = require("fs");
var path = require("path");
var ext = "." + process.argv[3];

fs.readdir(process.argv[2], function (err, list) {
  if (err) console.log(err);
  list.map(function (list) {
    if (path.extname(list) == ext) {
      console.log(list);
    }
  });
});
