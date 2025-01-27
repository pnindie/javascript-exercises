const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear()

    let agesArray = people.map((person) => 
        person.hasOwnProperty('yearOfDeath') ?
            (person.age = person.yearOfDeath-person.yearOfBirth)
        :
            (person.age = currentYear-person.yearOfBirth)
        
    )
    let indexOfMaxValue = agesArray.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
    console.log(agesArray,indexOfMaxValue,people[indexOfMaxValue],people[indexOfMaxValue]["name"])
    return  people[indexOfMaxValue]
    
};

// Do not edit below this line
module.exports = findTheOldest;
