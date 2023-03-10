const fibonacci = function(pos) {
    let index = Number(pos);
    let counter = 2;
    if (!index) return;
    if (index < 0) return "OOPS";
    let value1 = 1, value2 = 1;
    while (counter <= index){
        if (index === 1 || index === 2) return 1;
        let temp = value1 + value2;
        value1 = value2;
        value2 = temp;
        counter++;
    }
    return value1;
};

// Do not edit below this line
module.exports = fibonacci;
