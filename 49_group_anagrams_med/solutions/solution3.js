function groupAnagrams(strs) {
  let map = {};

  for (let str of strs) {
    let count = new Array(26).fill(0);
    for (let char of str) {
      count[char.charCodeAt(0) - 97]++;
    }
    let key = count.join("#"); // delimiter prevents collisions
    if (!map[key]) map[key] = [];
    map[key].push(str);
  }

  return Object.values(map);
}

module.exports = groupAnagrams;
