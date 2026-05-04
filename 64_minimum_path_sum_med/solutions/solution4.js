var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  let dp = [];

  for (let j = 0; j < n; j++) {
    dp[j] = 0;
  }

  dp[0] = grid[0][0];

  // First row
  for (let j = 1; j < n; j++) {
    dp[j] = dp[j - 1] + grid[0][j];
  }

  for (let i = 1; i < m; i++) {
    dp[0] = dp[0] + grid[i][0];

    for (let j = 1; j < n; j++) {
      let minPrev = dp[j] < dp[j - 1] ? dp[j] : dp[j - 1];
      dp[j] = grid[i][j] + minPrev;
    }
  }

  return dp[n - 1];
};

module.exports = minPathSum;
