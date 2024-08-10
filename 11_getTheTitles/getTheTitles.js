const getTheTitles = function(data) {
    array = [];
    data.forEach((obj) => {
        array.push(obj.title);
    })
    return array;
};

// Do not edit below this line
module.exports = getTheTitles;
