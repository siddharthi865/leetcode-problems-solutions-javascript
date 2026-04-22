function multiply(num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";

  let n = num1.length;
  let m = num2.length;

  let result = new Array(n + m);
  for (let i = 0; i < n + m; i++) result[i] = 0;

  for (let i = n - 1; i >= 0; i--) {
    let digit1 = num1.charCodeAt(i) - 48;

    for (let j = m - 1; j >= 0; j--) {
      let digit2 = num2.charCodeAt(j) - 48;

      let sum = digit1 * digit2 + result[i + j + 1];

      result[i + j + 1] = sum % 10;
      result[i + j] += Math.floor(sum / 10);
    }
  }

  // Convert array to string (skip leading zero)
  let res = "";
  let i = 0;

  if (result[0] === 0) i = 1;

  for (; i < result.length; i++) {
    res += String.fromCharCode(result[i] + 48);
  }

  return res;
}

module.exports = multiply;
