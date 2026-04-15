function generate(numRows) {
  const result = [];

  for (let i = 0; i < numRows; i++) {
    const row = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row[j] = 1;
      } else {
        row[j] = result[i - 1][j - 1] + result[i - 1][j];
      }
    }

    result[i] = row;
  }

  return result;
}

module.exports = generate;
