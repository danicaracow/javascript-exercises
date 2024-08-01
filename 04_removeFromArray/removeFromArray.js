const removeFromArray = function(array, ...deleteElem) {

    for (const elem of [...array]) {
        if (deleteElem.includes(elem)) {
            array.splice(array.indexOf(elem), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
