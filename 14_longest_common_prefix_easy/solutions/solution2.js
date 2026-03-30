const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    let j = 0;

    while (
      j < prefix.length &&
      j < strs[i].length &&
      prefix[j] === strs[i][j]
    ) {
      j++;
    }

    let newPrefix = "";
    for (let k = 0; k < j; k++) {
      newPrefix += prefix[k];
    }

    prefix = newPrefix;

    if (prefix === "") return "";
  }

  return prefix;
};

module.exports = longestCommonPrefix;
