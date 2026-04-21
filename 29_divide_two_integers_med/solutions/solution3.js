const MAX = 2147483647;
const MIN = -2147483648;

var divide = function (dividend, divisor) {
  if (dividend === MIN && divisor === -1) return MAX;

  let negative = (dividend < 0) ^ (divisor < 0);

  let a = dividend > 0 ? dividend : -dividend;
  let b = divisor > 0 ? divisor : -divisor;

  let result = 0;

  for (let i = 31; i >= 0; i--) {
    let power = b * 2 ** i;

    if (power > 0 && a >= power) {
      a -= power;
      result += 1 << i; // safe because result itself never overflows 32-bit signed range here
    }
  }

  if (negative) result = -result;

  if (result <= MIN) return MIN;
  if (result >= MAX) return MAX;

  return result;
};

module.exports = divide;
