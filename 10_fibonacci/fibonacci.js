const fibonacci = function(num) {
    let fibonacci = [1, 1];
    num = Number(num);

    if (num < 0) return "OOPS";
    if (num === 0) return 0;
    if (num === 1 || num === 2) return 1;

    for(i=2; i<num; i++){
        fibonacci.push(fibonacci[i-2]+fibonacci[i-1]);
    }

    return fibonacci[fibonacci.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
