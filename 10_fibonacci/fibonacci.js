const serie = function(n) {
  return n <= 1 ? n : serie(n - 1) + serie(n - 2);
}

const fibonacci = function(num) {
  if(num < 0) return 'OOPS'

  const arr = []

  for (let i = 1; i <= num; i++) {
      arr.push(serie(i))
  }

  return Math.max(...arr)
};

// Do not edit below this line
module.exports = fibonacci;
