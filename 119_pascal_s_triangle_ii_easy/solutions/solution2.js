function getRow(rowIndex) {
  let row = [];

  for (let i = 0; i <= rowIndex; i++) {
    row[i] = 1;

    for (let j = i - 1; j > 0; j--) {
      row[j] = row[j] + row[j - 1];
    }
  }

  return row;
}

module.exports = getRow;
