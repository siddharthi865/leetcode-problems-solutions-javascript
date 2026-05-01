function uniquePathsWithObstacles(grid) {
  let m = grid.length;
  let n = grid[0].length;

  let dp = new Array(n).fill(0);

  // Starting cell
  dp[0] = grid[0][0] === 1 ? 0 : 1;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        dp[j] = 0; // obstacle
      } else {
        if (j > 0) {
          dp[j] += dp[j - 1];
        }
      }
    }
  }

  return dp[n - 1];
}

module.exports = uniquePathsWithObstacles;
