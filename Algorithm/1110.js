let input = Number(require('fs').readFileSync('./example.txt').toString().trim());
if(input >= 10) {
  input = input.toString().split("").map(value => +value);
} else {
  input = (input * 10).toString().split("").map(value => +value);
}
let result = 0;
let [a, b] = input;
let count = 0;

while(true) {
  count ++;
  if(b === undefined) {
    break;
  }
  let newNum = a + b;
  a = b;
  if(newNum >= 10){
    b = newNum - 10;
  } else {
    b = newNum;
  }
  if(a.toString() + b.toString() === input[0].toString() + input[1].toString()) {
    break;
  }
}

console.log(count);