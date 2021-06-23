const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const array = [];
const onInput = (input) => array.push(Number(input));

const onClose = () => {
  const [x, y] = array;

  if(x > 0){
    if(y > 0){
      console.log('1');
    } else {
      console.log('4');
    };
  } else {
    if(y < 0){
      console.log('3');
    } else {
      console.log('2');
    }
  };
  process.exit();
};

rl.on('line', onInput).on('close', onClose);