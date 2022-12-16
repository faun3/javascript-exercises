const removeFromArray = function(array, ...remove) {
    for (let i = 0; i < array.length; i++)
    {
        remove.sort();
        for (let j = 0; j < remove.length; j++)
        {
            if (array[i] === remove[j])
            {
                array.splice(i, 1);
            }
        }
    }
    return array;
};
console.log(removeFromArray([1, 2, 3, 4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;
