const input = require('fs').readFileSync('./example.txt').toString().split('\n');

let ans = '';

for( t=1; t<=input[0]; t++ ){
    const [a, b] = input[t].split(' ');
    ans += `Case #${t}: ${a} + ${b} = ${Number(a) + Number(b)}` + "\n";
}

console.log(ans);