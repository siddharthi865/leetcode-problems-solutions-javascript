const MAX = 2147483647;
const MIN = -2147483648;

var divide = function (dividend, divisor) {
  if (dividend === MIN && divisor === -1) return MAX;
  if (dividend === MIN && divisor === 1) return MIN;

  let sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;

  let a = dividend > 0 ? dividend : -dividend;
  let b = divisor > 0 ? divisor : -divisor;

  let count = 0;

  while (a >= b) {
    a -= b;
    count++;
  }

  let result = sign * count;

  if (result > MAX) return MAX;
  if (result < MIN) return MIN;

  return result;
};

module.exports = divide;
