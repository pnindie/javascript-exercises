function cleanString(txt){
    return txt.toLowerCase().replace(/[~`!@#$%^&*() +={}\[\];:\'\"<>.,\/\\\?-_]/g, '');
    
}
const palindromes = function (txtInput) {

    let cleanTxt = cleanString(txtInput)
    console.log(cleanTxt)
    return cleanTxt == cleanTxt.split('').reverse().join('');

};

// Do not edit below this line
module.exports = palindromes;
