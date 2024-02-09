const findTheOldest = function(people) {
    const ages = people.map(person => {
        if (person.yearOfDeath)
            return person.yearOfDeath - person.yearOfBirth
        else
        {
            currentYear = (new Date()).getFullYear();
            return currentYear - person.yearOfBirth;
        }
    });
    const indexOldest = ages.indexOf(Math.max(...ages));
    return people[indexOldest];
};

// Do not edit below this line
module.exports = findTheOldest;
