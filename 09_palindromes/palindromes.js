const palindromes = function (sentence) {
    // Convert the sentence into an array of characters
    const array = sentence.split('');
    
    // Filter out non-alphabetic characters and convert the remaining characters to lowercase
    const cleanChars = array.filter(char => /[a-zA-Z0-9]/.test(char)).join('').toLowerCase();

    // Reverse the cleaned string
    const reversed = cleanChars.split('').reverse().join('');

    // Check if the cleaned string is equal to its reverse
    return cleanChars === reversed;
};

// Do not edit below this line
module.exports = palindromes;
