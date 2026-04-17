function myAtoi(s) {
  let i = 0;
  let n = s.length;

  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;

  // Skip spaces
  while (i < n && s[i] === " ") {
    i++;
  }

  // Sign
  let sign = 1;

  if (i < n && (s[i] === "-" || s[i] === "+")) {
    if (s[i] === "-") {
      sign = -1;
    }
    i++;
  }

  let num = 0;
  let hasDigits = false;

  while (i < n) {
    let c = s[i];

    if (c < "0" || c > "9") {
      break;
    }

    hasDigits = true;

    let digit = c.charCodeAt(0) - 48;

    // Overflow check
    if (num > 214748364 || (num === 214748364 && digit > 7)) {
      return sign === 1 ? INT_MAX : INT_MIN;
    }

    num = num * 10 + digit;

    i++;
  }

  if (!hasDigits) {
    return 0;
  }

  return num * sign;
}

module.exports = myAtoi;
