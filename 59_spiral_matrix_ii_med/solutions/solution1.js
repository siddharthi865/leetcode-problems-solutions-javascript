var generateMatrix = function (n) {
  let matrix = new Array(n);
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n);
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }

  let dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]; // right, down, left, up
  let dir = 0;
  let row = 0,
    col = 0;

  for (let num = 1; num <= n * n; num++) {
    matrix[row][col] = num;

    let nextRow = row + dirs[dir][0];
    let nextCol = col + dirs[dir][1];

    if (
      nextRow < 0 ||
      nextRow >= n ||
      nextCol < 0 ||
      nextCol >= n ||
      matrix[nextRow][nextCol] !== 0
    ) {
      dir = dir + 1;
      if (dir === 4) dir = 0;
    }

    row = row + dirs[dir][0];
    col = col + dirs[dir][1];
  }

  return matrix;
};

module.exports = generateMatrix;
