const plusOne = (digits) => {
  let n = digits.length;

  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] = digits[i] + 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }

  // If all digits were 9
  let result = new Array(n + 1);
  result[0] = 1;

  for (let i = 1; i <= n; i++) {
    result[i] = 0;
  }

  return result;
};

module.exports = plusOne;
