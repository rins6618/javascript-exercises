function getAge(person) {
    let death;
    if (!person.yearOfDeath) death = 2024;
    else death = person.yearOfDeath;
    return death - person.yearOfBirth;
}

const findTheOldest = function(peopleArray) {
    return peopleArray.reduce((last, person) => {
        let currentAge = getAge(person);
        let lastAge = getAge(last);
        console.log(currentAge, lastAge)
        return currentAge > lastAge ? person : last;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
