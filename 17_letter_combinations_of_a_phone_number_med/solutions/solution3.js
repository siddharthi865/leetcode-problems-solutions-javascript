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

  let queue = [""];

  for (let i = 0; i < digits.length; i++) {
    const letters = map[digits[i]];
    const size = queue.length;

    let newQueue = [];

    for (let j = 0; j < size; j++) {
      const current = queue[j];

      for (let k = 0; k < letters.length; k++) {
        newQueue[newQueue.length] = current + letters[k];
      }
    }

    queue = newQueue;
  }

  return queue;
}

module.exports = letterCombinations;
