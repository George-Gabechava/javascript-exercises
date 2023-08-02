const findTheOldest = function(people) {
    let nameMap = people.map((person) => person.name);
    let birthMap = people.map((person) => person.yearOfBirth);
    //console.log(birthMap);
    //birthMap.length
    let deathMap = people.map((person) => person.yearOfDeath);
    
    var ageArray = [];
    i = 0;
    peopleAmount = birthMap.length;
    for (i; i < peopleAmount; i++) {
        if (deathMap[i] == undefined) {
            deathMap[i] = 2023;
        }
        //console.log(deathMap[i]);
        //console.log('DM' , deathMap);

        agePerson = deathMap[i] - birthMap[i];
        ageArray.push(agePerson);
    }
    //console.log(ageArray);
    oldestPerson = indexOfMax(ageArray);
    //console.log(oldestPerson);
    
    return people[oldestPerson];

    


};

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}

// Do not edit below this line
module.exports = findTheOldest;
