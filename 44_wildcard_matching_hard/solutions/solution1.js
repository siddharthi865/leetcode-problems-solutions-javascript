var isMatch = function (s, p) {
  function dfs(i, j) {
    if (i === s.length && j === p.length) return true;
    if (j === p.length) return false;

    if (p[j] === "*") {
      // match zero OR one character
      return dfs(i, j + 1) || (i < s.length && dfs(i + 1, j));
    }

    if (i < s.length && (p[j] === "?" || s[i] === p[j])) {
      return dfs(i + 1, j + 1);
    }

    return false;
  }

  return dfs(0, 0);
};

module.exports = isMatch;
