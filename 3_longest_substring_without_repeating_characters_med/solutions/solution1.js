function lengthOfLongestSubstring(s) {
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      // Check if substring from i to j has duplicates
      let isUnique = true;

      for (let k = i; k <= j; k++) {
        for (let l = k + 1; l <= j; l++) {
          if (s[k] === s[l]) {
            isUnique = false;
            break;
          }
        }
        if (!isUnique) break;
      }

      if (isUnique) {
        let length = j - i + 1;
        if (length > maxLength) {
          maxLength = length;
        }
      }
    }
  }

  return maxLength;
}

module.exports = lengthOfLongestSubstring;
