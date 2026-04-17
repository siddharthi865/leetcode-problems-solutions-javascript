function isMatch(s, p) {
  let memo = [];

  for (let i = 0; i <= s.length; i++) {
    memo[i] = [];
  }

  function dfs(i, j) {
    if (memo[i][j] !== undefined) {
      return memo[i][j];
    }

    if (j === p.length) {
      memo[i][j] = i === s.length;
      return memo[i][j];
    }

    let firstMatch = false;

    if (i < s.length && (s[i] === p[j] || p[j] === ".")) {
      firstMatch = true;
    }

    let ans;

    if (j + 1 < p.length && p[j + 1] === "*") {
      ans = dfs(i, j + 2) || (firstMatch && dfs(i + 1, j));
    } else {
      ans = firstMatch && dfs(i + 1, j + 1);
    }

    memo[i][j] = ans;

    return ans;
  }

  return dfs(0, 0);
}

module.exports = isMatch;
