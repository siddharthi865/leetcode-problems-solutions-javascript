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

  for (let i = 0; i < s.length; i++) {
    let current = getValue(s[i]);
    let next = 0;

    if (i + 1 < s.length) {
      next = getValue(s[i + 1]);
    }

    if (current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  return total;
};

module.exports = romanToInt;
