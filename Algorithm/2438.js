const input = require('fs').readFileSync('./example.txt').toString().trim();

const n = Number(input);
let star = '';
let starNum = '';

for( i=1; i<=n; i++ ){
  starNum += '*';
  star += starNum + '\n';
}

console.log(star);