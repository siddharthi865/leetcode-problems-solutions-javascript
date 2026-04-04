const buildLPS = (pattern) => {
  let m = pattern.length;
  let lps = new Array(m);
  lps[0] = 0;

  let len = 0;
  let i = 1;

  while (i < m) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        lps[i] = 0;
        i++;
      }
    }
  }

  return lps;
};

const strStr = (haystack, needle) => {
  let n = haystack.length;
  let m = needle.length;

  let lps = buildLPS(needle);

  let i = 0; // haystack pointer
  let j = 0; // needle pointer

  while (i < n) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    }

    if (j === m) {
      return i - j; // match found
    } else if (i < n && haystack[i] !== needle[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i++;
      }
    }
  }

  return -1;
};

module.exports = strStr;
