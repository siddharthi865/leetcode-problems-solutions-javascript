function generate(numRows) {
  const result = [];
  const row = [];

  for (let i = 0; i < numRows; i++) {
    // Add 1 at end
    row[i] = 1;

    // Update backwards
    for (let j = i - 1; j > 0; j--) {
      row[j] = row[j] + row[j - 1];
    }

    // Copy row manually (no slice)
    const newRow = [];
    for (let k = 0; k <= i; k++) {
      newRow[k] = row[k];
    }

    result[i] = newRow;
  }

  return result;
}

module.exports = generate;
