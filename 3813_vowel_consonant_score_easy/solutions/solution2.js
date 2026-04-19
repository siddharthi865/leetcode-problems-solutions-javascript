function scoreOfString(s) {
  let v = 0;
  let c = 0;

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];

    if (ch >= "a" && ch <= "z") {
      // vowel check using minimal comparisons
      if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
        v++;
      } else {
        c++;
      }
    }
  }

  return c === 0 ? 0 : (v / c) | 0; // bitwise floor
}

module.exports = scoreOfString;
