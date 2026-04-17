function isMatch(s, p) {
  function dfs(i, j) {
    if (j === p.length) {
      return i === s.length;
    }

    let firstMatch = false;

    if (i < s.length && (s[i] === p[j] || p[j] === ".")) {
      firstMatch = true;
    }

    if (j + 1 < p.length && p[j + 1] === "*") {
      if (dfs(i, j + 2)) {
        return true;
      }

      if (firstMatch && dfs(i + 1, j)) {
        return true;
      }

      return false;
    }

    if (firstMatch) {
      return dfs(i + 1, j + 1);
    }

    return false;
  }

  return dfs(0, 0);
}

module.exports = isMatch;
