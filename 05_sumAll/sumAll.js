const sumAll = function(number1, number2) {
    if (typeof number1 === "number" && typeof number2 === "number")
    {
        if (number1 >= 0 && number2 >= 0)
        {
                let sum = 0;
            if (number1 > number2)
            {
                let adder = number2;
                while (adder <= number1)
                {
                    sum += adder;
                    adder++;
                }
            }
            else
            {
                let adder = number1;
                while (adder <= number2)
                {
                    sum += adder;
                    adder++;
                }
            }
            return sum;
    
        }
        else return "ERROR";
    }
    else
    {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
