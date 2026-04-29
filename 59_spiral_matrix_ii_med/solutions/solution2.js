var generateMatrix = function (n) {
  let matrix = new Array(n);
  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n);
  }

  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;

  let num = 1;

  while (top <= bottom && left <= right) {
    // left → right
    for (let col = left; col <= right; col++) {
      matrix[top][col] = num;
      num++;
    }
    top++;

    // top → bottom
    for (let row = top; row <= bottom; row++) {
      matrix[row][right] = num;
      num++;
    }
    right--;

    // right → left
    if (top <= bottom) {
      for (let col = right; col >= left; col--) {
        matrix[bottom][col] = num;
        num++;
      }
      bottom--;
    }

    // bottom → top
    if (left <= right) {
      for (let row = bottom; row >= top; row--) {
        matrix[row][left] = num;
        num++;
      }
      left++;
    }
  }

  return matrix;
};

module.exports = generateMatrix;
