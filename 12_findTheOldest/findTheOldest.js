const findTheOldest = function(arr) {
    const ordered = arr.sort((person1, person2) => {
        let birth1 = person1.yearOfBirth;
        let birth2 = person2.yearOfBirth;
        let death1, death2;
        let currentTime = new Date();

        if(!('yearOfDeath' in person1)){
            death1 = currentTime.getFullYear();
            console.log(death1);
        }
        else death1 = person1.yearOfDeath;

        if(!('yearOfDeath' in person2)){
            death2 = currentTime.getFullYear();
            console.log(death2);
        }
        else death2 = person2.yearOfDeath;

        let age1 = death1 - birth1;
        let age2 = death2 - birth2;
        if (age1 > age2) return -1;
        else return 1;
    });
    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
