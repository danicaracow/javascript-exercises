const sumAll = function(num1, num2) {
    let result = 0;

    if(num1<0 || num2<0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }

    if (num1 < num2){
        for (i = num1; i<=num2; i++){
            result = result + i;
        }
    }
    
    if (num1 > num2){
        for (i = num2; i<=num1; i++){
            result = result + i;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
