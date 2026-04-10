var addBinary = function (a, b) {
  let num1 = 0;
  let num2 = 0;

  // Convert a to decimal
  for (let i = 0; i < a.length; i++) {
    num1 = num1 * 2 + (a[i] === "1" ? 1 : 0);
  }

  // Convert b to decimal
  for (let i = 0; i < b.length; i++) {
    num2 = num2 * 2 + (b[i] === "1" ? 1 : 0);
  }

  let sum = num1 + num2;

  // Convert back to binary
  let result = "";
  while (sum > 0) {
    result = (sum % 2) + result;
    sum = Math.floor(sum / 2);
  }

  return result === "" ? "0" : result;
};

module.exports = addBinary;
