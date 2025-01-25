function isPositiveInteger(n) {
    return  typeof n !== 'string' && n >>> 0 === parseFloat(n);
}

const sumAll = function(num1, num2) {
    if(isPositiveInteger(num1) && isPositiveInteger(num2)){
        let sum=0;
        for(let i=Math.min(num1,num2); i<=Math.max(num1,num2);i++){
            sum +=i;
        }
        return sum
    }else{
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
