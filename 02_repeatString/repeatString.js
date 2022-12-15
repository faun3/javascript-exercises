const repeatString = function(string, num) 
{
    let result = "";
    if (num >= 0)
    {
        if (num != 0)
        {
            let copy = string;
            while (num)
            {
                result += string;
                num--;
            }
            return result;
        }
        else
        {
            return result;
        }
    }
    else return "ERROR";
};
console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
