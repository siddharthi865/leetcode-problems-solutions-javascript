function reverse(x) {
  var rev = 0;

  while (x !== 0) {
    var pop = x % 10;
    x = (x / 10) | 0;

    rev = rev * 10 + pop;
  }

  if (rev < -2147483648 || rev > 2147483647) {
    return 0;
  }

  return rev;
}

module.exports = reverse;
