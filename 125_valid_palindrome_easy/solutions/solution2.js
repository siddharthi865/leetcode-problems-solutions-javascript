var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let l = s[left];
    let r = s[right];

    // Skip non-alphanumeric (left)
    if (!isAlphaNumeric(l)) {
      left++;
      continue;
    }

    // Skip non-alphanumeric (right)
    if (!isAlphaNumeric(r)) {
      right--;
      continue;
    }

    // Convert to lowercase manually
    l = toLower(l);
    r = toLower(r);

    if (l !== r) return false;

    left++;
    right--;
  }

  return true;
};

// Helper: check alphanumeric
function isAlphaNumeric(ch) {
  return (
    (ch >= "a" && ch <= "z") ||
    (ch >= "A" && ch <= "Z") ||
    (ch >= "0" && ch <= "9")
  );
}

// Helper: convert to lowercase
function toLower(ch) {
  if (ch >= "A" && ch <= "Z") {
    return String.fromCharCode(ch.charCodeAt(0) + 32);
  }
  return ch;
}

module.exports = isPalindrome;
