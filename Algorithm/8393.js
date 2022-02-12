const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString();
const textNum = Number(input);

let ans = 0;

for( i=1; i<=textNum; i++ ) {
    ans = ans + i;
}

console.log(ans);