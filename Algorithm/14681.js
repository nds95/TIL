const fs = require('fs');
const inputData = fs.readFileSync('./inputData.txt').toString().split('\n').map(value => +value);

//console.log(inputData);

const [a,b] = inputData;
if(a > 0){
  if(b > 0){
    console.log('1');
  } else {
    console.log('4');
  };
} else {
  if(b < 0){
    console.log('3');
  } else {
    console.log('2');
  }
};