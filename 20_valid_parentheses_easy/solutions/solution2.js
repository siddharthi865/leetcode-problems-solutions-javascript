const isValid = (s) => {
  var stack = [];
  var top = -1;

  for (var i = 0; i < s.length; i++) {
    var c = s[i];

    if (c === "(" || c === "{" || c === "[") {
      top++;
      stack[top] = c;
    } else {
      if (top < 0) return false;

      var last = stack[top];
      top--;

      if (
        (c === ")" && last !== "(") ||
        (c === "}" && last !== "{") ||
        (c === "]" && last !== "[")
      ) {
        return false;
      }
    }
  }

  return top === -1;
};

module.exports = isValid;
