function isValidSudoku(board) {
  let rows = new Array(9);
  let cols = new Array(9);
  let boxes = new Array(9);

  // Initialize all masks to 0
  for (let i = 0; i < 9; i++) {
    rows[i] = 0;
    cols[i] = 0;
    boxes[i] = 0;
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let val = board[i][j];
      if (val === ".") continue;

      let num = val.charCodeAt(0) - "0".charCodeAt(0); // convert char to number
      let bit = 1 << (num - 1);

      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      // Check duplicate
      if ((rows[i] & bit) !== 0) return false;
      if ((cols[j] & bit) !== 0) return false;
      if ((boxes[boxIndex] & bit) !== 0) return false;

      // Set bit
      rows[i] |= bit;
      cols[j] |= bit;
      boxes[boxIndex] |= bit;
    }
  }

  return true;
}

module.exports = isValidSudoku;
