const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0)
};

const multiply = function(array) {
  return array.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1)
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	if (a === 0){
    return 1;
  }
  else if (a > 0){
    let total = 1;
    for (i=1; i<=a; i++){
      total = total * i;
    }
    return total;
  }
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
