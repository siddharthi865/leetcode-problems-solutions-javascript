var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;

    if (i >= 0) {
      sum += a[i] === "1" ? 1 : 0;
      i--;
    }

    if (j >= 0) {
      sum += b[j] === "1" ? 1 : 0;
      j--;
    }

    // Current bit
    if (sum % 2 === 0) {
      result = "0" + result;
    } else {
      result = "1" + result;
    }

    // Update carry
    if (sum >= 2) {
      carry = 1;
    } else {
      carry = 0;
    }
  }

  return result;
};

module.exports = addBinary;
