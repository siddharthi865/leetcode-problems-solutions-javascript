function isValid(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") count++;
    else count--;

    if (count < 0) return false;
  }

  return count === 0;
}

function longestValidParentheses(s) {
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      let substr = "";
      for (let k = i; k <= j; k++) {
        substr += s[k];
      }

      if (isValid(substr)) {
        if (substr.length > maxLen) {
          maxLen = substr.length;
        }
      }
    }
  }

  return maxLen;
}

module.exports = longestValidParentheses;
