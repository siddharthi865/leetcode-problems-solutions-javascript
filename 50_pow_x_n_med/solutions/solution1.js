function myPow(x, n) {
  let result = 1;
  let power = Math.abs(n);
  for (let i = 0; i < power; i++) {
    result *= x;
  }
  return n < 0 ? 1 / result : result;
}

module.exports = myPow;
