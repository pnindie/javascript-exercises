const leapYears = function(inputYear) {
    let isLeap = false
    
    if(inputYear%4 == 0){
        if(inputYear%100 == 0){
            if(inputYear%400 == 0){
                isLeap = true 
            }
    
        }else{
        isLeap = true
        }
    }
    
    return isLeap

};

// Do not edit below this line
module.exports = leapYears;
