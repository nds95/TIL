const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().split('\n');

let [a, b] = input;

b = b.split("");

const first = a * b[2];
const second = a * b[1];
const third = a * b[0];

console.log(first);
console.log(second);
console.log(third);
console.log(first + (second * 10) + (third * 100));