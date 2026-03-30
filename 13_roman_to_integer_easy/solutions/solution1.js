const romanToInt = (s) => {
  let i = 0;
  let total = 0;

  while (i < s.length) {
    if (i + 1 < s.length) {
      let pair = s[i] + s[i + 1];

      if (pair === "IV") {
        total += 4;
        i += 2;
        continue;
      }
      if (pair === "IX") {
        total += 9;
        i += 2;
        continue;
      }
      if (pair === "XL") {
        total += 40;
        i += 2;
        continue;
      }
      if (pair === "XC") {
        total += 90;
        i += 2;
        continue;
      }
      if (pair === "CD") {
        total += 400;
        i += 2;
        continue;
      }
      if (pair === "CM") {
        total += 900;
        i += 2;
        continue;
      }
    }

    if (s[i] === "I") total += 1;
    else if (s[i] === "V") total += 5;
    else if (s[i] === "X") total += 10;
    else if (s[i] === "L") total += 50;
    else if (s[i] === "C") total += 100;
    else if (s[i] === "D") total += 500;
    else if (s[i] === "M") total += 1000;

    i++;
  }

  return total;
};

module.exports = romanToInt;
