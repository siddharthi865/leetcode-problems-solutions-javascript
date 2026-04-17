function convert(s, numRows) {
  if (numRows === 1) return s;

  let result = "";
  let n = s.length;
  let cycleLen = 2 * numRows - 2;

  for (let row = 0; row < numRows; row++) {
    for (let i = row; i < n; i += cycleLen) {
      result += s[i];

      let diagonal = i + cycleLen - 2 * row;

      if (row !== 0 && row !== numRows - 1 && diagonal < n) {
        result += s[diagonal];
      }
    }
  }

  return result;
}

module.exports = convert;
