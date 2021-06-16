const a = 1900;

if(((inputData % 4) === 0) && (((inputData % 100) !== 0)) || ((inputData % 400) === 0)){
  console.log('1');
} else {
  console.log('0');
}