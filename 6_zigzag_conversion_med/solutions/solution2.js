function convert(s, numRows) {
  if (numRows === 1) return s;

  let rows = [];
  for (let i = 0; i < numRows; i++) {
    rows[i] = "";
  }

  let currentRow = 0;
  let goingDown = true;

  for (let i = 0; i < s.length; i++) {
    rows[currentRow] += s[i];

    if (currentRow === 0) {
      goingDown = true;
    } else if (currentRow === numRows - 1) {
      goingDown = false;
    }

    if (goingDown) {
      currentRow++;
    } else {
      currentRow--;
    }
  }

  let result = "";
  for (let i = 0; i < numRows; i++) {
    result += rows[i];
  }

  return result;
}

module.exports = convert;
