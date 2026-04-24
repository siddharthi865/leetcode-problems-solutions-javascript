// Import all 3 solutions
const groupAnagramsBrute = require("./solutions/solution1");
const groupAnagramsSort = require("./solutions/solution2");
const groupAnagramsOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: groupAnagramsBrute },
  { name: "Sorting Key", fn: groupAnagramsSort },
  { name: "Char Count (Optimal)", fn: groupAnagramsOptimal },
];

// Helper to normalize output (sort inner + outer arrays)
function normalize(arr) {
  return arr
    .map((group) => group.slice().sort())
    .sort((a, b) => a[0].localeCompare(b[0]));
}

// Store test cases
const testCases = [
  {
    strs: ["eat", "tea", "tan", "ate", "nat", "bat"],
    expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
  },
  { strs: [""], expected: [[""]] },
  { strs: ["a"], expected: [["a"]] },
  { strs: ["ab", "ba"], expected: [["ab", "ba"]] },
  { strs: ["abc", "bca", "cab"], expected: [["abc", "bca", "cab"]] },
  { strs: ["abc", "def", "ghi"], expected: [["abc"], ["def"], ["ghi"]] },
  { strs: ["a", "b", "c", "a"], expected: [["a", "a"], ["b"], ["c"]] },
  { strs: ["aa", "bb", "ab", "ba"], expected: [["aa"], ["bb"], ["ab", "ba"]] },
  {
    strs: ["listen", "silent", "enlist"],
    expected: [["listen", "silent", "enlist"]],
  },
  {
    strs: ["rat", "tar", "art", "car"],
    expected: [["rat", "tar", "art"], ["car"]],
  },
  {
    strs: ["aabb", "bbaa", "abab", "baba"],
    expected: [["aabb", "bbaa", "abab", "baba"]],
  },
  {
    strs: ["abc", "cba", "bac", "xyz", "zyx"],
    expected: [
      ["abc", "cba", "bac"],
      ["xyz", "zyx"],
    ],
  },
  {
    strs: ["abcd", "dcba", "lls", "sll"],
    expected: [
      ["abcd", "dcba"],
      ["lls", "sll"],
    ],
  },
  { strs: ["a", ""], expected: [["a"], [""]] },
  { strs: ["zzz", "zzz", "zzz"], expected: [["zzz", "zzz", "zzz"]] },
  { strs: ["ab", "cd", "ef"], expected: [["ab"], ["cd"], ["ef"]] },
  {
    strs: ["abc", "acb", "bac", "bca", "cab", "cba"],
    expected: [["abc", "acb", "bac", "bca", "cab", "cba"]],
  },
  {
    strs: ["abcd", "efgh", "ijkl", "mnop"],
    expected: [["abcd"], ["efgh"], ["ijkl"], ["mnop"]],
  },
  {
    strs: ["aabbcc", "abcabc", "baccab"],
    expected: [["aabbcc", "abcabc", "baccab"]],
  },
  {
    strs: ["x", "y", "z", "xy", "yx"],
    expected: [["x"], ["y"], ["z"], ["xy", "yx"]],
  },
  { strs: ["ab", "a"], expected: [["ab"], ["a"]] },
  {
    strs: ["abc", "def", "fed", "cba"],
    expected: [
      ["abc", "cba"],
      ["def", "fed"],
    ],
  },
  {
    strs: ["abcde", "edcba", "aabbc", "bcaba"],
    expected: [
      ["abcde", "edcba"],
      ["aabbc", "bcaba"],
    ],
  },
  { strs: ["aaab", "abaa", "baaa"], expected: [["aaab", "abaa", "baaa"]] },
  {
    strs: ["abcd", "abdc", "acbd", "acdb"],
    expected: [["abcd", "abdc", "acbd", "acdb"]],
  },
  {
    strs: ["qwe", "ewq", "weq", "hello"],
    expected: [["qwe", "ewq", "weq"], ["hello"]],
  },
  { strs: ["", ""], expected: [["", ""]] },
  { strs: ["abc", "abc"], expected: [["abc", "abc"]] },
  {
    strs: ["abcd", "efgh", "hgfe", "dcba"],
    expected: [
      ["abcd", "dcba"],
      ["efgh", "hgfe"],
    ],
  },
  {
    strs: ["a", "aa", "aaa", "aaaa"],
    expected: [["a"], ["aa"], ["aaa"], ["aaaa"]],
  },
];

// Run tests
describe("Group Anagrams - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ strs, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(strs);

          expect(normalize(result)).toEqual(normalize(expected));
        });
      });
    });
  });
});
