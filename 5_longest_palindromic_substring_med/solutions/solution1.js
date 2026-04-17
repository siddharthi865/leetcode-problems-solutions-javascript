var longestPalindrome = function (s) {
  var n = s.length;
  var maxLen = 0;
  var start = 0;

  function isPalindrome(str, left, right) {
    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }

  for (var i = 0; i < n; i++) {
    for (var j = i; j < n; j++) {
      if (isPalindrome(s, i, j)) {
        if (j - i + 1 > maxLen) {
          maxLen = j - i + 1;
          start = i;
        }
      }
    }
  }

  var result = "";
  for (var k = start; k < start + maxLen; k++) {
    result += s[k];
  }

  return result;
};

module.exports = longestPalindrome;
