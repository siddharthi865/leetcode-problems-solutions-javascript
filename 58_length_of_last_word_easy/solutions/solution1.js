const lengthOfLastWord = (s) => {
  let words = [];
  let current = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      current += s[i];
    } else {
      if (current.length > 0) {
        words[words.length] = current;
        current = "";
      }
    }
  }

  // Add last word if exists
  if (current.length > 0) {
    words[words.length] = current;
  }

  let lastWord = words[words.length - 1];
  return lastWord.length;
};

module.exports = lengthOfLastWord;
