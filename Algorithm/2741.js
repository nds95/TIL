const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().trim();

let ans = '';

for( i=1; i<=Number(input); i++ ){
    ans += i + '\n';
};

console.log(ans);