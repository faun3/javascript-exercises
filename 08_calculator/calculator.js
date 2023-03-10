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

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
