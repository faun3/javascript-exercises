const add = function(a, b) {
  return a + b;
};

const subtract = function(a ,b) {
  return a - b;
};

const sum = function(array) {
	let s = 0;
  for (el in array){
    s += array[el];
  }
  return s;
};

const multiply = function(array) {
  let p = 1;
  for (el in array){
    p *= array[el];
  }
  return p;
};

const power = function(a ,b) {
	return a ** b;
};

const factorial = function(nr) {
  let p = 1;
  if (nr == 0) return 1;
  for (i = 1; i <= nr; i++){
    p *= i;
  }
  return p;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
