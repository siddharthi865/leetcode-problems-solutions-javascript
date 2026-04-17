function myAtoi(s) {
  let i = 0;
  let n = s.length;

  // Step 1: skip whitespace
  while (i < n && s[i] === " ") {
    i++;
  }

  // Step 2: sign detection
  let sign = 1;
  if (i < n && (s[i] === "-" || s[i] === "+")) {
    if (s[i] === "-") {
      sign = -1;
    }
    i++;
  }

  // Step 3: convert digits
  let num = 0;
  let hasDigits = false;

  while (i < n) {
    let c = s[i];

    if (c < "0" || c > "9") {
      break;
    }

    hasDigits = true;

    let digit = c.charCodeAt(0) - 48;

    num = num * 10 + digit;

    i++;
  }

  if (!hasDigits) {
    return 0;
  }

  num = num * sign;

  // Step 4: clamp
  if (num < -2147483648) {
    return -2147483648;
  }

  if (num > 2147483647) {
    return 2147483647;
  }

  return num;
}

module.exports = myAtoi;
