const leapYears = function(year) {
    if (year%400 === 0){
        console.log("400");
        return true;
    }
    else if (year%100 === 0){
        console.log("100");
        return false;
    }
    else if (year%4 === 0){
        console.log("4");
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
