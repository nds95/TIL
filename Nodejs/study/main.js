const fs = require('fs');

/* console.log('start');

let content = fs.readFileSync('./new', 'utf-8');
console.log(content);

console.log('Finish'); */

console.log('start');

fs.readFile('./new', 'utf8', (error, data) => {
  console.log(data);
});

console.log('Finish');