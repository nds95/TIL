const input = require('fs').readFileSync('./example.txt').toString().trim().split('\n').map(value => value%42);

const set = new Set(input);

console.log(set.size);
