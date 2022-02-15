const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

for( i=1; i <= 9; i++ ){
    console.log(`${text} * ${i} = ${text * i}`);
}