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

  for (var i = 0; i < wordLen; i++) {
    var left = i;
    var right = i;
    var count = 0;
    var window = {};

    while (right + wordLen <= s.length) {
      var word = "";

      for (var k = 0; k < wordLen; k++) {
        word += s[right + k];
      }

      right += wordLen;

      if (target[word]) {
        if (!window[word]) window[word] = 0;
        window[word]++;
        count++;

        while (window[word] > target[word]) {
          var leftWord = "";
          for (var k = 0; k < wordLen; k++) {
            leftWord += s[left + k];
          }

          window[leftWord]--;
          left += wordLen;
          count--;
        }

        if (count === wordCount) {
          result.push(left);
        }
      } else {
        window = {};
        count = 0;
        left = right;
      }
    }
  }

  return result;
}

module.exports = findSubstring;
