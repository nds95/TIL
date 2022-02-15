const fs = require('fs');
const input = fs.readFileSync('./example.txt').toString().split('\n');

let a = input[0].split(' ');
let hour = Number(a[0]);
let minute = Number(a[1]) + Number(input[1]);

if(minute >= 60) {
  const time = Math.floor(minute / 60);
  hour += time;
  minute -= 60 * time;
  if(hour >= 24) {
    hour -= 24;
  }
};

console.log(hour, minute);