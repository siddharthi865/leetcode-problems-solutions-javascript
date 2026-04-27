var spiralOrder = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  let top = 0;
  let bottom = m - 1;
  let left = 0;
  let right = n - 1;

  let result = [];

  while (top <= bottom && left <= right) {
    // Traverse top row
    for (let j = left; j <= right; j++) {
      result[result.length] = matrix[top][j];
    }
    top++;

    // Traverse right column
    for (let i = top; i <= bottom; i++) {
      result[result.length] = matrix[i][right];
    }
    right--;

    // Traverse bottom row
    if (top <= bottom) {
      for (let j = right; j >= left; j--) {
        result[result.length] = matrix[bottom][j];
      }
      bottom--;
    }

    // Traverse left column
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result[result.length] = matrix[i][left];
      }
      left++;
    }
  }

  return result;
};

module.exports = spiralOrder;
