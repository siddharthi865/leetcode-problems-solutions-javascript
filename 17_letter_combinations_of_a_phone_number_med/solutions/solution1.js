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

  const first = map[digits[0]];

  for (let i = 0; i < first.length; i++) {
    if (digits.length === 1) {
      result[result.length] = first[i];
    } else {
      const second = map[digits[1]];
      for (let j = 0; j < second.length; j++) {
        if (digits.length === 2) {
          result[result.length] = first[i] + second[j];
        } else {
          const third = map[digits[2]];
          for (let k = 0; k < third.length; k++) {
            if (digits.length === 3) {
              result[result.length] = first[i] + second[j] + third[k];
            } else {
              const fourth = map[digits[3]];
              for (let l = 0; l < fourth.length; l++) {
                result[result.length] =
                  first[i] + second[j] + third[k] + fourth[l];
              }
            }
          }
        }
      }
    }
  }

  return result;
}

module.exports = letterCombinations;
