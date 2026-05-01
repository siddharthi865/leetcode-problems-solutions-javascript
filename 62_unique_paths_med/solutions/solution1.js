function uniquePaths(m, n) {
  function dfs(i, j) {
    // reached destination
    if (i === m - 1 && j === n - 1) return 1;

    // out of bounds
    if (i >= m || j >= n) return 0;

    return dfs(i + 1, j) + dfs(i, j + 1);
  }

  return dfs(0, 0);
}

module.exports = uniquePaths;
