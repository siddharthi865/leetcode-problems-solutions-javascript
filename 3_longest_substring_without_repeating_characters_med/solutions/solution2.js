function lengthOfLongestSubstring(s) {
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    let freq = {};

    for (let j = i; j < s.length; j++) {
      let char = s[j];

      if (freq[char]) {
        break;
      }

      freq[char] = 1;

      let length = j - i + 1;
      if (length > maxLength) {
        maxLength = length;
      }
    }
  }

  return maxLength;
}

module.exports = lengthOfLongestSubstring;
