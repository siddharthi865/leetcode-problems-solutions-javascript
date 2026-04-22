var isMatch = function (s, p) {
  let i = 0; // pointer for s
  let j = 0; // pointer for p
  let starIndex = -1;
  let matchIndex = 0;

  while (i < s.length) {
    if (j < p.length && (p[j] === "?" || s[i] === p[j])) {
      i++;
      j++;
    } else if (j < p.length && p[j] === "*") {
      starIndex = j;
      matchIndex = i;
      j++;
    } else if (starIndex !== -1) {
      j = starIndex + 1;
      matchIndex++;
      i = matchIndex;
    } else {
      return false;
    }
  }

  // check remaining pattern
  while (j < p.length && p[j] === "*") {
    j++;
  }

  return j === p.length;
};

module.exports = isMatch;
