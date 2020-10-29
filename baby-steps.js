var argm = process.argv;
argm = argm.splice(2, argm.length);
var sum = argm.reduce(function (a, b) {
  return +a + +b;
});
console.log(sum);
