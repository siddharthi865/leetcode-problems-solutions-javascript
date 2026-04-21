function isValidSudoku(board) {
  let rows = [];
  let cols = [];
  let boxes = [];

  // Initialize arrays
  for (let i = 0; i < 9; i++) {
    rows[i] = {};
    cols[i] = {};
    boxes[i] = {};
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let val = board[i][j];
      if (val === ".") continue;

      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      // Check duplicates
      if (rows[i][val]) return false;
      if (cols[j][val]) return false;
      if (boxes[boxIndex][val]) return false;

      // Mark as seen
      rows[i][val] = true;
      cols[j][val] = true;
      boxes[boxIndex][val] = true;
    }
  }

  return true;
}

module.exports = isValidSudoku;
