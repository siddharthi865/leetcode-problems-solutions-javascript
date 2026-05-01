function uniquePathsWithObstacles(grid) {
  let m = grid.length;
  let n = grid[0].length;

  let dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(0);
  }

  // Start position
  if (grid[0][0] === 1) return 0;
  dp[0][0] = 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        dp[i][j] = 0;
        continue;
      }

      if (i > 0) dp[i][j] += dp[i - 1][j];
      if (j > 0) dp[i][j] += dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}

module.exports = uniquePathsWithObstacles;
