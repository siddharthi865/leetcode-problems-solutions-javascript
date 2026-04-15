var isPalindrome = function (s) {
  let cleaned = "";

  // Step 1: Build cleaned string
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];

    // Convert uppercase to lowercase manually
    if (ch >= "A" && ch <= "Z") {
      ch = String.fromCharCode(ch.charCodeAt(0) + 32);
    }

    // Check alphanumeric
    if ((ch >= "a" && ch <= "z") || (ch >= "0" && ch <= "9")) {
      cleaned += ch;
    }
  }

  // Step 2: Reverse string manually
  let reversed = "";
  for (let i = cleaned.length - 1; i >= 0; i--) {
    reversed += cleaned[i];
  }

  // Step 3: Compare
  return cleaned === reversed;
};

module.exports = isPalindrome;
