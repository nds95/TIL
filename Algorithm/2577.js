const input = require('fs').readFileSync('./example.txt').toString().trim().split('\n').map(value => +value);

let result = 1;
input.forEach(e => result = result * e);
result = result.toString().split('');
for( i=0;i<=9;i++ ) {
  let resultNum = 0;
  for ( j=0;j<result.length;j++ ) {
    if(result[j] == i) {
      resultNum += 1;
    }
  }
  console.log(resultNum);
}