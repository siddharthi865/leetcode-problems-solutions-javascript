var addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry !== 0) {
    let bitA = 0;
    let bitB = 0;

    if (i >= 0) {
      bitA = a[i] === "1" ? 1 : 0;
      i--;
    }

    if (j >= 0) {
      bitB = b[j] === "1" ? 1 : 0;
      j--;
    }

    // XOR for sum
    let sumBit;
    if (bitA + bitB + carry === 1 || bitA + bitB + carry === 3) {
      sumBit = 1;
    } else {
      sumBit = 0;
    }

    // Carry logic (AND-style behavior)
    let newCarry;
    if (bitA + bitB + carry >= 2) {
      newCarry = 1;
    } else {
      newCarry = 0;
    }

    result = (sumBit === 1 ? "1" : "0") + result;
    carry = newCarry;
  }

  return result;
};

module.exports = addBinary;
