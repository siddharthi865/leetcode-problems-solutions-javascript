const isPalindrome = (x) => {
  if (x < 0) return false;

  var original = x;
  var reversed = 0;

  while (x > 0) {
    var digit = x % 10;
    reversed = reversed * 10 + digit;
    x = (x - digit) / 10;
  }

  return original === reversed;
};

module.exports = isPalindrome;
