var fs = require("fs");
var newLine = fs.readFileSync(process.argv[2], "utf8");
console.log(newLine.match(/\n/g).length);
