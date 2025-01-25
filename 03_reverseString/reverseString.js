const reverseString = function(inputTxt) {
    let charArray = []
    let reversedString = ''
    charArray = inputTxt.split("")
    for(let i=0; i<inputTxt.length; i++){
        reversedString = reversedString + charArray[inputTxt.length-1-i]
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
