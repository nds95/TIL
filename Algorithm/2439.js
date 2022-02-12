const input = require('fs').readFileSync('./example.txt').toString().trim();

const n = Number(input);
let star = '';
let num = n;

for( i=1; i<=n; i++ ){
  let starNum = '';
  num -= 1;
  for( j=1; j<=n; j++) {
    if(j > num) {
      starNum += '*';
    } else {
      starNum += ' ';
    }
  }
  star += starNum + '\n';
}

console.log(star);