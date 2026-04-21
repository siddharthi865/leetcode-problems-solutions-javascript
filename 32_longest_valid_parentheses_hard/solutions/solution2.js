function longestValidParentheses(s) {
  let stack = [];
  stack.push(-1); // base index
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else {
      stack.pop();

      if (stack.length === 0) {
        stack.push(i);
      } else {
        let length = i - stack[stack.length - 1];
        if (length > maxLen) {
          maxLen = length;
        }
      }
    }
  }

  return maxLen;
}

module.exports = longestValidParentheses;
