function findSubstring(s, words) {
  var result = [];
  var permutations = [];

  function generate(arr, path, used) {
    if (path.length === arr.length) {
      var str = "";
      for (var i = 0; i < path.length; i++) {
        str += path[i];
      }
      permutations.push(str);
      return;
    }

    for (var i = 0; i < arr.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(arr[i]);

      generate(arr, path, used);

      path.pop();
      used[i] = false;
    }
  }

  generate(words, [], []);

  for (var i = 0; i < s.length; i++) {
    for (var j = 0; j < permutations.length; j++) {
      var str = permutations[j];
      var match = true;

      for (var k = 0; k < str.length; k++) {
        if (s[i + k] !== str[k]) {
          match = false;
          break;
        }
      }

      if (match) {
        result.push(i);
        break;
      }
    }
  }

  return result;
}

module.exports = findSubstring;
