const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        let prefix = "";
        for (let k = 0; k < i; k++) {
          prefix += strs[0][k];
        }

        return prefix;
      }
    }
  }

  return strs[0];
};

module.exports = longestCommonPrefix;
