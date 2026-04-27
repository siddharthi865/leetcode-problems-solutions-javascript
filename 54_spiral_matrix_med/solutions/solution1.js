var spiralOrder = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let visited = [];
  for (let i = 0; i < m; i++) {
    visited[i] = [];
    for (let j = 0; j < n; j++) {
      visited[i][j] = false;
    }
  }

  let result = [];

  // directions: right, down, left, up
  let dr = [0, 1, 0, -1];
  let dc = [1, 0, -1, 0];

  let r = 0,
    c = 0,
    dir = 0;

  for (let i = 0; i < m * n; i++) {
    result[result.length] = matrix[r][c];
    visited[r][c] = true;

    let nr = r + dr[dir];
    let nc = c + dc[dir];

    if (nr < 0 || nr >= m || nc < 0 || nc >= n || visited[nr][nc]) {
      dir = (dir + 1) % 4;
      nr = r + dr[dir];
      nc = c + dc[dir];
    }

    r = nr;
    c = nc;
  }

  return result;
};

module.exports = spiralOrder;
