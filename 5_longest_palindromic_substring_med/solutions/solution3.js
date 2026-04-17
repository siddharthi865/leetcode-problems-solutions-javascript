var longestPalindrome = function (s) {
  var n = s.length;
  if (n === 0) return "";

  // Transform string
  var t = "^";
  for (var i = 0; i < n; i++) {
    t += "#" + s[i];
  }
  t += "#$";

  var m = t.length;
  var p = new Array(m);
  for (var i = 0; i < m; i++) {
    p[i] = 0;
  }

  var center = 0;
  var right = 0;

  for (var i = 1; i < m - 1; i++) {
    var mirror = 2 * center - i;

    if (i < right) {
      p[i] = p[mirror] < right - i ? p[mirror] : right - i;
    }

    // Expand
    while (t[i + 1 + p[i]] === t[i - 1 - p[i]]) {
      p[i]++;
    }

    // Update center and right
    if (i + p[i] > right) {
      center = i;
      right = i + p[i];
    }
  }

  // Find max palindrome
  var maxLen = 0;
  var centerIndex = 0;

  for (var i = 1; i < m - 1; i++) {
    if (p[i] > maxLen) {
      maxLen = p[i];
      centerIndex = i;
    }
  }

  var start = Math.floor((centerIndex - maxLen) / 2);

  var result = "";
  for (var i = start; i < start + maxLen; i++) {
    result += s[i];
  }

  return result;
};

module.exports = longestPalindrome;
