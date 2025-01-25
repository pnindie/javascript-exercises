const repeatString = function(txt,count) {
    let reply='';
    if(count<0){
        return 'ERROR';
    }else{
        for(let i=0;i<count;i++){
            reply+=txt;
        }
    }
    return reply;

};

// Do not edit below this line
module.exports = repeatString;
