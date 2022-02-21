let input = require('fs').readFileSync('./example.txt').toString().trim();
if(input >= 10) {
  input = input.split("").map(value => +value);
}
let result = 0;
let [a, b] = input;
let count = 0;

while(count < 6) {
  count ++;
  console.log(`a = ${a}, b = ${b}`);
  let newNum = a + b;
  if(newNum >= 10) {
    newNum = a + b - 10;
    console.log(`newNum = ${newNum}`);
  }
  result = (b * 10) + newNum;
  if(result === input[0] * 10 + input[1]){
    break;
  }
  console.log(`result = ${result}`);
  a = Number(result.toString()[0]);
  b = Number(result.toString()[1]);
}

console.log(count);