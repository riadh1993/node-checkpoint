var http = require("http");
http.get(process.argv[2], function (response) {
  var riadh = response.setEncoding();
  var str = riadh.toString();
  response.on("data", console.log);
  response.on("error", console.error);
});
