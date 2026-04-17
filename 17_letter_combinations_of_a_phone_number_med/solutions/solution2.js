function letterCombinations(digits) {
  if (digits.length === 0) return [];

  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const result = [];

  function backtrack(index, path) {
    if (path.length === digits.length) {
      result[result.length] = path;
      return;
    }

    const letters = map[digits[index]];

    for (let i = 0; i < letters.length; i++) {
      backtrack(index + 1, path + letters[i]);
    }
  }

  backtrack(0, "");

  return result;
}

module.exports = letterCombinations;
