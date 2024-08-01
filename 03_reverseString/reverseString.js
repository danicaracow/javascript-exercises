const reverseString = function(str) {
    reversedString = "";

    for(i = str.length-1; i>=0; i--){
        reversedString = reversedString + str[i];
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
