const repeatString = function(str, num) {
    let resultString = "";

    if(num < 0){
        return "ERROR";
    }

    for(i = 0; i < num; i++){
        resultString = resultString + str;
    }

    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
