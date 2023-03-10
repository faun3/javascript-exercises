const palindromes = function (word) {
    word = word.toLowerCase();
    const punctuationRegex = /[! `"#$%&'()+-,-./:;<=>?@[\]^_`{|}~]/g;
    let cleanedWord = word.replace(punctuationRegex, '');
    let reversedWord = cleanedWord.split('').reverse().join('');
    if (cleanedWord === reversedWord) return true;
    else return false;
};

palindromes("Rac er ! Tr !! aces");

// Do not edit below this line
module.exports = palindromes;
