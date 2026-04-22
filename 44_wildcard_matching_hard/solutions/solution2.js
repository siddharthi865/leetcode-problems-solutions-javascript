var isMatch = function (s, p) {
  const memo = {};

  function dfs(i, j) {
    let key = i + "," + j;
    if (memo[key] !== undefined) return memo[key];

    if (i === s.length && j === p.length) return true;
    if (j === p.length) return false;

    let result;

    if (p[j] === "*") {
      result = dfs(i, j + 1) || (i < s.length && dfs(i + 1, j));
    } else if (i < s.length && (p[j] === "?" || s[i] === p[j])) {
      result = dfs(i + 1, j + 1);
    } else {
      result = false;
    }

    memo[key] = result;
    return result;
  }

  return dfs(0, 0);
};

module.exports = isMatch;
