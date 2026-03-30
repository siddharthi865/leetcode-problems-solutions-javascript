const romanToInt = (s) => {
  function getValue(c) {
    if (c === "I") return 1;
    if (c === "V") return 5;
    if (c === "X") return 10;
    if (c === "L") return 50;
    if (c === "C") return 100;
    if (c === "D") return 500;
    if (c === "M") return 1000;
  }

  let total = 0;
  let prev = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    let current = getValue(s[i]);

    if (current < prev) {
      total -= current;
    } else {
      total += current;
    }

    prev = current;
  }

  return total;
};

module.exports = romanToInt;
