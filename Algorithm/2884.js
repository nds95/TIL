const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(value => +value);

let [h, m] = input;

if(m - 45 < 0) {
  if(h === 0) {
    h = 24 - 1;
  } else {
    h -= 1;
  }
  m = 60 + (m - 45);
} else {
  m -= 45;
}

console.log(h, m);