function generate(numRows) {
  const result = [];

  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1);

    // Fill with 1s
    for (let k = 0; k <= i; k++) {
      row[k] = 1;
    }

    // Compute inner values
    for (let j = 1; j < i; j++) {
      row[j] = result[i - 1][j - 1] + result[i - 1][j];
    }

    result[i] = row;
  }

  return result;
}

module.exports = generate;
