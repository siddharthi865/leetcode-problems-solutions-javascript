function multiply(num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  function add(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let res = "";

    while (i >= 0 || j >= 0 || carry > 0) {
      let sum = carry;

      if (i >= 0) sum += a.charCodeAt(i--) - 48;
      if (j >= 0) sum += b.charCodeAt(j--) - 48;

      res = String.fromCharCode((sum % 10) + 48) + res;
      carry = (sum / 10) | 0;
    }

    return res;
  }

  function removeLeadingZeros(str) {
    let i = 0;
    while (i < str.length - 1 && str[i] === "0") i++;
    return str.slice(i);
  }

  let result = "0";

  for (let i = num2.length - 1; i >= 0; i--) {
    let digit2 = num2.charCodeAt(i) - 48;
    let temp = "";
    let carry = 0;

    for (let j = num1.length - 1; j >= 0; j--) {
      let digit1 = num1.charCodeAt(j) - 48;
      let prod = digit1 * digit2 + carry;

      temp = String.fromCharCode((prod % 10) + 48) + temp;
      carry = (prod / 10) | 0;
    }

    if (carry > 0) {
      temp = String.fromCharCode(carry + 48) + temp;
    }

    // shift (append zeros)
    for (let k = 0; k < num2.length - 1 - i; k++) {
      temp += "0";
    }

    result = add(result, temp);
  }

  return removeLeadingZeros(result);
}

module.exports = multiply;
