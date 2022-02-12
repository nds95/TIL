// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let ans = 0;

for( t=1; t<=input[0]; t++ ){
    const [a, b] = input[t].split(' ');
    console.log(Number(a) + Number(b));
}