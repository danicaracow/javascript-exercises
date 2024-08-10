const findTheOldest = function(array) {
    //Add current date to people without yearOfDeath
    const completed = array.map((person) => {
        if(!("yearOfDeath" in person)){
            person.yearOfDeath = new Date().getFullYear();
        }
        return person;
    })

    //Order people by age (older first)
    const ordered = completed.sort((a, b) => {
        if(a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth){
            return -1;
        }
        else{
            return 1;
        }
    })

    //Return oldest person
    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
