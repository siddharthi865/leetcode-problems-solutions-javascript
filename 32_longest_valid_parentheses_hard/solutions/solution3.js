function longestValidParentheses(s) {
  let left = 0;
  let right = 0;
  let maxLen = 0;

  // Left to Right
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") left++;
    else right++;

    if (left === right) {
      let length = 2 * right;
      if (length > maxLen) maxLen = length;
    } else if (right > left) {
      left = 0;
      right = 0;
    }
  }

  left = 0;
  right = 0;

  // Right to Left
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "(") left++;
    else right++;

    if (left === right) {
      let length = 2 * left;
      if (length > maxLen) maxLen = length;
    } else if (left > right) {
      left = 0;
      right = 0;
    }
  }

  return maxLen;
}

module.exports = longestValidParentheses;
