var intToRoman = function (num) {
  var result = "";

  // thousands
  var thousands = Math.floor(num / 1000);
  num = num % 1000;
  for (var i = 0; i < thousands; i++) {
    result += "M";
  }

  // hundreds
  var hundreds = Math.floor(num / 100);
  num = num % 100;

  if (hundreds === 9) result += "CM";
  else if (hundreds >= 5) {
    result += "D";
    for (var i = 0; i < hundreds - 5; i++) result += "C";
  } else if (hundreds === 4) result += "CD";
  else {
    for (var i = 0; i < hundreds; i++) result += "C";
  }

  // tens
  var tens = Math.floor(num / 10);
  num = num % 10;

  if (tens === 9) result += "XC";
  else if (tens >= 5) {
    result += "L";
    for (var i = 0; i < tens - 5; i++) result += "X";
  } else if (tens === 4) result += "XL";
  else {
    for (var i = 0; i < tens; i++) result += "X";
  }

  // ones
  var ones = num;

  if (ones === 9) result += "IX";
  else if (ones >= 5) {
    result += "V";
    for (var i = 0; i < ones - 5; i++) result += "I";
  } else if (ones === 4) result += "IV";
  else {
    for (var i = 0; i < ones; i++) result += "I";
  }

  return result;
};

module.exports = intToRoman;
