function uniquePathsWithObstacles(grid) {
  let m = grid.length;
  let n = grid[0].length;

  function dfs(i, j) {
    // Out of bounds or obstacle
    if (i >= m || j >= n || grid[i][j] === 1) return 0;

    // Reached destination
    if (i === m - 1 && j === n - 1) return 1;

    return dfs(i + 1, j) + dfs(i, j + 1);
  }

  return dfs(0, 0);
}

module.exports = uniquePathsWithObstacles;
