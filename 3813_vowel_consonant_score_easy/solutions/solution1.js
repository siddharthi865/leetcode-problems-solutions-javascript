function scoreOfString(s) {
  let v = 0; // vowels
  let c = 0; // consonants

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];

    // check if lowercase letter
    if (ch >= "a" && ch <= "z") {
      if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
        v++;
      } else {
        c++;
      }
    }
  }

  if (c === 0) return 0;

  return Math.floor(v / c);
}

module.exports = scoreOfString;
