const input = require('fs').readFileSync('./example.txt').toString().split('\n');

const x = Number(input[0].split(' ')[1]);
let a = input[1].split(' ').map(n => Number(n));
let ans = '';

for(i=0; i<=a.length; i++) {
    if(a[i] < x) {
        ans += `${a[i]} `;
    }
}

console.log(ans);