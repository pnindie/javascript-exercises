const add = function(num1, num2) {
  return num1+num2;
	
};

const subtract = function(num1, num2) {
	
  return num1-num2;
};

const sum = function(numArr) { 

  return numArr.reduce((total, currNum) => total+currNum,0)
	
};

const multiply = function(numArr) {
  return numArr.reduce((total,curNum)=>total*curNum,1);

};

const power = function(num1, num2) {
  return Math.pow(num1,num2)
};

const factorial = function(num1) {
  if(num1<2){
    return 1
  }else{
    return Array.from({length: num1}, (_, i) => i + 1).reduce((total,currNum)=>total*currNum,1)
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
