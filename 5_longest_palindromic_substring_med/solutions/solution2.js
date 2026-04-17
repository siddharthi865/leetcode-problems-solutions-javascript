var longestPalindrome = function (s) {
  var n = s.length;
  var start = 0;
  var maxLen = 0;

  function expand(left, right) {
    while (left >= 0 && right < n && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  for (var i = 0; i < n; i++) {
    var len1 = expand(i, i); // odd
    var len2 = expand(i, i + 1); // even
    var len = len1 > len2 ? len1 : len2;

    if (len > maxLen) {
      maxLen = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }

  var result = "";
  for (var k = start; k < start + maxLen; k++) {
    result += s[k];
  }

  return result;
};

module.exports = longestPalindrome;
