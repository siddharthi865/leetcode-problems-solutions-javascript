function uniquePathsWithObstacles(grid) {
  let m = grid.length;
  let n = grid[0].length;

  let memo = new Array(m);
  for (let i = 0; i < m; i++) {
    memo[i] = new Array(n).fill(-1);
  }

  function dfs(i, j) {
    if (i >= m || j >= n || grid[i][j] === 1) return 0;

    if (i === m - 1 && j === n - 1) return 1;

    if (memo[i][j] !== -1) return memo[i][j];

    memo[i][j] = dfs(i + 1, j) + dfs(i, j + 1);
    return memo[i][j];
  }

  return dfs(0, 0);
}

module.exports = uniquePathsWithObstacles;
