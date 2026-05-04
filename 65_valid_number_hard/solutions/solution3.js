var isNumber = function (s) {
  let state = 0;

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];

    if (ch >= "0" && ch <= "9") {
      if (state === 0 || state === 1 || state === 2) {
        state = 2; // integer
      } else if (state === 3 || state === 4) {
        state = 4; // decimal
      } else if (state === 5 || state === 6 || state === 7) {
        state = 7; // exponent number
      }
    } else if (ch === "+" || ch === "-") {
      if (state === 0) state = 1;
      else if (state === 5) state = 6;
      else return false;
    } else if (ch === ".") {
      if (state === 0 || state === 1) {
        state = 3; // no leading digit
      } else if (state === 2) {
        state = 4; // has leading digit
      } else {
        return false;
      }
    } else if (ch === "e" || ch === "E") {
      if (state === 2 || state === 4) {
        state = 5;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  return state === 2 || state === 4 || state === 7;
};

module.exports = isNumber;
