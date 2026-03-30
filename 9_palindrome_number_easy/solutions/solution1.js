const isPalindrome = (x) => {
  if (x < 0) return false;

  var digits = [];

  while (x > 0) {
    var digit = x % 10;
    digits[digits.length] = digit;
    x = (x - digit) / 10;
  }

  var left = 0;
  var right = digits.length - 1;

  while (left < right) {
    if (digits[left] !== digits[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};

module.exports = isPalindrome;
