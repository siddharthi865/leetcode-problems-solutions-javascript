var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Move left pointer
    while (
      left < right &&
      !(
        (s[left] >= "a" && s[left] <= "z") ||
        (s[left] >= "A" && s[left] <= "Z") ||
        (s[left] >= "0" && s[left] <= "9")
      )
    ) {
      left++;
    }

    // Move right pointer
    while (
      left < right &&
      !(
        (s[right] >= "a" && s[right] <= "z") ||
        (s[right] >= "A" && s[right] <= "Z") ||
        (s[right] >= "0" && s[right] <= "9")
      )
    ) {
      right--;
    }

    let l = s[left];
    let r = s[right];

    // Convert to lowercase manually
    if (l >= "A" && l <= "Z") {
      l = String.fromCharCode(l.charCodeAt(0) + 32);
    }
    if (r >= "A" && r <= "Z") {
      r = String.fromCharCode(r.charCodeAt(0) + 32);
    }

    if (l !== r) return false;

    left++;
    right--;
  }

  return true;
};

module.exports = isPalindrome;
