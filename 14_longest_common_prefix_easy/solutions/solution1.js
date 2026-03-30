const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (true) {
      let match = true;

      if (prefix.length > strs[i].length) {
        match = false;
      } else {
        for (let j = 0; j < prefix.length; j++) {
          if (prefix[j] !== strs[i][j]) {
            match = false;
            break;
          }
        }
      }

      if (match) break;

      prefix = prefix.slice(0, prefix.length - 1);

      if (prefix === "") return "";
    }
  }

  return prefix;
};

module.exports = longestCommonPrefix;
