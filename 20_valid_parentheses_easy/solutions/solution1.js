const isValid = (s) => {
  var changed = true;

  while (changed) {
    changed = false;
    var newStr = "";
    var i = 0;

    while (i < s.length) {
      if (
        i < s.length - 1 &&
        ((s[i] === "(" && s[i + 1] === ")") ||
          (s[i] === "{" && s[i + 1] === "}") ||
          (s[i] === "[" && s[i + 1] === "]"))
      ) {
        i = i + 2;
        changed = true;
      } else {
        newStr = newStr + s[i];
        i = i + 1;
      }
    }

    s = newStr;
  }

  return s.length === 0;
};

module.exports = isValid;
