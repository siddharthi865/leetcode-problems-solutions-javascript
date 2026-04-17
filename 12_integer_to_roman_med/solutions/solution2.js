var intToRoman = function (num) {
  var values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  var result = "";

  for (var i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += symbols[i];
      num -= values[i];
    }
  }

  return result;
};

module.exports = intToRoman;
