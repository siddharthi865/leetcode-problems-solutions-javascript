function convert(s, numRows) {
  if (numRows === 1) return s;

  let n = s.length;

  let matrix = [];
  for (let i = 0; i < numRows; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = "";
    }
  }

  let row = 0;
  let col = 0;
  let index = 0;

  while (index < n) {
    // down
    while (row < numRows && index < n) {
      matrix[row][col] = s[index];
      row++;
      index++;
    }

    row -= 2;
    col++;

    // diagonal up
    while (row > 0 && index < n) {
      matrix[row][col] = s[index];
      row--;
      col++;
      index++;
    }
  }

  let result = "";

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] !== "") {
        result += matrix[i][j];
      }
    }
  }

  return result;
}

module.exports = convert;
