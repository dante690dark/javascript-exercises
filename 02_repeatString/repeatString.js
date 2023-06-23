const repeatString = function (str, number = Math.floor(Math.random() * 1000)) {
  let newStr = "";

  if (!str || !number) return "";
  if (number == -1) return "ERROR";

  for (let i = 0; i < number; i++) {
    newStr += str;
  }

  return newStr;
};

repeatString("hello", "");
// Do not edit below this line
module.exports = repeatString;
