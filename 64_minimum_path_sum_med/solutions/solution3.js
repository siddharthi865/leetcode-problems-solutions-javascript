var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  let dp = [];

  for (let i = 0; i < m; i++) {
    dp[i] = [];
    for (let j = 0; j < n; j++) {
      dp[i][j] = 0;
    }
  }

  dp[0][0] = grid[0][0];

  // First row
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  // First column
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  // Fill rest
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      let top = dp[i - 1][j];
      let left = dp[i][j - 1];

      dp[i][j] = grid[i][j] + (top < left ? top : left);
    }
  }

  return dp[m - 1][n - 1];
};

module.exports = minPathSum;
