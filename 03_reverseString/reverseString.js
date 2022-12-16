const reverseString = function(string) {
    let result = "";
    for (let i = string.length; i > 0; i--)
    {
        let temp = string.substring(i - 1, i);
        result += temp;
    }
    return result;
};
// Do not edit below this line
module.exports = reverseString;
