// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim();

const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().split('\n');

let ans = '';

for( t=1; t<=input[0]; t++ ){
    const [a, b] = input[t].split(' ');
    ans += Number(a) + Number(b) + "\n";
}

console.log(ans);