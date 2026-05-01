function uniquePaths(m, n) {
  let memo = [];

  for (let i = 0; i < m; i++) {
    memo[i] = [];
    for (let j = 0; j < n; j++) {
      memo[i][j] = -1;
    }
  }

  function dfs(i, j) {
    if (i === m - 1 && j === n - 1) return 1;
    if (i >= m || j >= n) return 0;

    if (memo[i][j] !== -1) return memo[i][j];

    memo[i][j] = dfs(i + 1, j) + dfs(i, j + 1);
    return memo[i][j];
  }

  return dfs(0, 0);
}

module.exports = uniquePaths;
