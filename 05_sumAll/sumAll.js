const sumAll = function (param1, param2) {
  if (
    param2 < 0 ||
    param1 < 0 ||
    typeof param1 !== "number" ||
    typeof param2 !== "number"
  ) {
    return "ERROR";
  }
  const greater = Math.max(param1, param2),
    less = Math.min(param1, param2);
  let sum = less;

  for (let i = greater; i > less; i--) {
    sum += i;
  }

  return sum;
};

sumAll(1, 4);
// Do not edit below this line
module.exports = sumAll;
