function generateParenthesis(n) {
  const result = [];
  const current = new Array(2 * n);

  function backtrack(index, open, close) {
    if (index === 2 * n) {
      let str = "";
      for (let i = 0; i < current.length; i++) {
        str += current[i];
      }
      result[result.length] = str;
      return;
    }

    if (open < n) {
      current[index] = "(";
      backtrack(index + 1, open + 1, close);
    }

    if (close < open) {
      current[index] = ")";
      backtrack(index + 1, open, close + 1);
    }
  }

  backtrack(0, 0, 0);
  return result;
}

module.exports = generateParenthesis;
