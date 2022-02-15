// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => +value);

const num = '5 8 4'
const input = num.toString().split(' ').map(value => +value);

const [a, b, c] = input;

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a*b) % c);
console.log(((a%c) * (b%c)) % c);