const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim().split('\n');

const num = input[1].split(' ').map(value => +value);
console.log(Math.min(...num), Math.max(...num));