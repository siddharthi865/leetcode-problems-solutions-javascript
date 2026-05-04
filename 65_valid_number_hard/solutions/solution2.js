var isNumber = function (s) {
  let seenDigit = false;
  let seenDot = false;
  let seenExp = false;
  let digitAfterExp = true;

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];

    if (ch >= "0" && ch <= "9") {
      seenDigit = true;
      digitAfterExp = true;
    } else if (ch === "+" || ch === "-") {
      // Must be at start OR right after e/E
      if (i > 0 && s[i - 1] !== "e" && s[i - 1] !== "E") {
        return false;
      }
    } else if (ch === ".") {
      // Only one dot and not after exponent
      if (seenDot || seenExp) return false;
      seenDot = true;
    } else if (ch === "e" || ch === "E") {
      // Only one exponent and must have digit before it
      if (seenExp || !seenDigit) return false;
      seenExp = true;
      digitAfterExp = false;
    } else {
      return false;
    }
  }

  return seenDigit && digitAfterExp;
};

module.exports = isNumber;
