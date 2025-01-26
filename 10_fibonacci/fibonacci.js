const fibonacci = function(inputValue) {
    let index = parseInt(inputValue)
    if(index<0){
        return "OOPS"
    }else{
    
    let fibArr = [0, 1, 1]
    
    if(index>2){
        for(let i=3; i<=index;i++){
            fibArr.push(fibArr[i-1]+fibArr[i-2])
        }
        
    }

    return fibArr[index]
    }

};

// Do not edit below this line
module.exports = fibonacci;
