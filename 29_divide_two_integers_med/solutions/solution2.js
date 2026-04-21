const MAX = 2147483647;
const MIN = -2147483648;

var divide = function (dividend, divisor) {
  if (dividend === MIN && divisor === -1) return MAX;

  let sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;

  let a = dividend > 0 ? dividend : -dividend;
  let b = divisor > 0 ? divisor : -divisor;

  let result = 0;

  while (a >= b) {
    let temp = b;
    let multiple = 1;

    while (a >= temp + temp) {
      if (temp > MAX >> 1) break; // prevent overflow
      temp += temp;
      multiple += multiple;
    }

    a -= temp;
    result += multiple;
  }

  result = sign * result;

  if (result > MAX) return MAX;
  if (result < MIN) return MIN;

  return result;
};

module.exports = divide;
