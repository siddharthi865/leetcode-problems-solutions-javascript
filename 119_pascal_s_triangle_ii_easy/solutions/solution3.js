function getRow(rowIndex) {
  let row = [];
  let prev = 1;

  row[0] = 1;

  for (let k = 1; k <= rowIndex; k++) {
    // Compute next value using previous
    prev = (prev * (rowIndex - k + 1)) / k;
    row[k] = prev;
  }

  return row;
}

module.exports = getRow;
