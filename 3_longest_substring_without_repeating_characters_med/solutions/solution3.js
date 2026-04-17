function lengthOfLongestSubstring(s) {
  let left = 0;
  let maxLength = 0;
  let lastSeen = {};

  for (let right = 0; right < s.length; right++) {
    let char = s[right];

    if (lastSeen[char] !== undefined && lastSeen[char] >= left) {
      left = lastSeen[char] + 1;
    }

    lastSeen[char] = right;

    let windowLength = right - left + 1;

    if (windowLength > maxLength) {
      maxLength = windowLength;
    }
  }

  return maxLength;
}

module.exports = lengthOfLongestSubstring;
