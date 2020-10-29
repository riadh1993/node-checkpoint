var fs = require("fs");
var newLine = fs.readFile(process.argv[2], (err, data) => {
  if (err) console.log(err);
  else console.log(data.toString().match(/\n/g).length);
});
