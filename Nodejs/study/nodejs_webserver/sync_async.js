const fs = require('fs');
console.log(1);
var data = fs.readFileSync('data.txt', {encoding: 'utf-8'});
console.log(data);

console.log(2);
fs.readFile('data.txt', {encoding: 'utf-8'}, function(err, a){
  console.log(a);
})
console.log(3);
console.log(3);
console.log(3);
console.log(3);
console.log(3);
console.log(3);
console.log(3);