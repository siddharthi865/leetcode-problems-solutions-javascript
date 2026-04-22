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

  function isZero(str) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== "0") return false;
    }
    return true;
  }

  function subtractOne(str) {
    let arr = str.split("");
    let i = arr.length - 1;

    while (i >= 0) {
      if (arr[i] > "0") {
        arr[i] = String.fromCharCode(arr[i].charCodeAt(0) - 1);
        break;
      } else {
        arr[i] = "9";
        i--;
      }
    }

    // remove leading zero
    if (arr[0] === "0") arr.shift();

    return arr.join("");
  }

  let result = "0";

  while (!isZero(num2)) {
    result = add(result, num1);
    num2 = subtractOne(num2);
  }

  return result;
}

module.exports = multiply;
