const input = require('fs').readFileSync('./example.txt').toString().trim();

let ans = '';

for( i=Number(input); i>=1; i-- ){
    ans += i + '\n';
}

console.log(ans);