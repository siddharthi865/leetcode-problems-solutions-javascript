function findSubstring(s, words) {
  var result = [];
  var wordLen = words[0].length;
  var wordCount = words.length;
  var totalLen = wordLen * wordCount;

  var target = {};
  for (var i = 0; i < words.length; i++) {
    if (!target[words[i]]) target[words[i]] = 0;
    target[words[i]]++;
  }

  for (var i = 0; i <= s.length - totalLen; i++) {
    var seen = {};
    var j = 0;

    while (j < wordCount) {
      var start = i + j * wordLen;

      var word = "";
      for (var k = 0; k < wordLen; k++) {
        word += s[start + k];
      }

      if (!target[word]) break;

      if (!seen[word]) seen[word] = 0;
      seen[word]++;

      if (seen[word] > target[word]) break;

      j++;
    }

    if (j === wordCount) {
      result.push(i);
    }
  }

  return result;
}

module.exports = findSubstring;
