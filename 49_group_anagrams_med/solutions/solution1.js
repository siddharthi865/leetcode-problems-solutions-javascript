function groupAnagrams(strs) {
  let groups = [];

  for (let str of strs) {
    let added = false;
    for (let group of groups) {
      if (isAnagram(str, group[0])) {
        group.push(str);
        added = true;
        break;
      }
    }
    if (!added) groups.push([str]);
  }

  function isAnagram(s1, s2) {
    if (s1.length !== s2.length) return false;
    let arr1 = s1.split("").sort();
    let arr2 = s2.split("").sort();
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }

  return groups;
}

module.exports = groupAnagrams;
