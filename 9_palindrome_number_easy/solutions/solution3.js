const isPalindrome = (x) => {
  if (x < 0) return false;
  if (x !== 0 && x % 10 === 0) return false;

  var reversedHalf = 0;

  while (x > reversedHalf) {
    var digit = x % 10;
    reversedHalf = reversedHalf * 10 + digit;
    x = (x - digit) / 10;
  }

  return x === reversedHalf || x === (reversedHalf - (reversedHalf % 10)) / 10;
};

module.exports = isPalindrome;
