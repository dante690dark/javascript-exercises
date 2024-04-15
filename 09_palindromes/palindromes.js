const palindromes = function (str) {

    const convertedStr = str.split("").filter(e => e.match(/\w/)).map(e => e.toLowerCase()).join(""),
          reversedStr = str.split("").filter(e => e.match(/\w/)).map(e => e.toLowerCase()).reverse().join("")
 
    return convertedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
