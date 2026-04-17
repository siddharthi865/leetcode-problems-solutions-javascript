function lengthOfLongestSubstring(s) {
  let left = 0;
  let maxLength = 0;

  // ASCII size = 128
  let lastSeen = new Array(128);

  // Initialize all to -1
  for (let i = 0; i < 128; i++) {
    lastSeen[i] = -1;
  }

  for (let right = 0; right < s.length; right++) {
    let charCode = s.charCodeAt(right);

    if (lastSeen[charCode] >= left) {
      left = lastSeen[charCode] + 1;
    }

    lastSeen[charCode] = right;

    let windowLength = right - left + 1;

    if (windowLength > maxLength) {
      maxLength = windowLength;
    }
  }

  return maxLength;
}

module.exports = lengthOfLongestSubstring;
