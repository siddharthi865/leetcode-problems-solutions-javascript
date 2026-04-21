// Import all 3 solutions
const findSubstringBrute = require("./solutions/solution1");
const findSubstringBetter = require("./solutions/solution2");
const findSubstringOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: findSubstringBrute },
  { name: "Sliding Window (Better)", fn: findSubstringBetter },
  { name: "Optimized Sliding Window", fn: findSubstringOptimal },
];

// Store test cases
const testCases = [
  { s: "barfoothefoobarman", words: ["foo", "bar"], expected: [0, 9] },
  {
    s: "wordgoodgoodgoodbestword",
    words: ["word", "good", "best", "word"],
    expected: [],
  },
  {
    s: "barfoofoobarthefoobarman",
    words: ["bar", "foo", "the"],
    expected: [6, 9, 12],
  },

  { s: "aaaaaa", words: ["aa", "aa"], expected: [0, 1, 2] },
  { s: "abcd", words: ["ab", "ef"], expected: [] },
  { s: "foo", words: ["foo"], expected: [0] },
  { s: "foobarbaz", words: ["bar", "foo", "baz"], expected: [0] },

  {
    s: "wordgoodgoodgoodbestword",
    words: ["word", "good", "good"],
    expected: [0],
  },
  { s: "abab", words: ["a", "b"], expected: [0, 1, 2] },
  { s: "abc", words: ["a", "a"], expected: [] },

  {
    s: "lingmindraboofooowingdingbarrwingmonkeypoundcake",
    words: ["fooo", "barr", "wing", "ding", "wing"],
    expected: [13],
  },
  {
    s: "catbatatecatatebat",
    words: ["cat", "ate", "bat"],
    expected: [0, 3, 9],
  },
  { s: "aaaaaa", words: ["aa", "ab"], expected: [] },
  { s: "aaaa", words: ["aa"], expected: [0, 1, 2] },

  {
    s: "barfoofoobarthefoobarman",
    words: ["bar", "foo", "the"],
    expected: [6, 9, 12],
  },
  { s: "abcdefg", words: ["hi", "jk"], expected: [] },
  { s: "aaaaab", words: ["aaa", "aab"], expected: [0] },

  { s: "ababa", words: ["ab", "ba", "ab"], expected: [] },
  { s: "aaaaaaa", words: ["aa", "aa", "aa"], expected: [0, 1] },
  { s: "ababab", words: ["ab", "ab", "ab"], expected: [0] },

  { s: "abcabcabc", words: ["abc", "abc", "abd"], expected: [] },
  { s: "aaa", words: ["a", "a", "a"], expected: [0] },
  { s: "foobarbazbarfoo", words: ["bar", "foo"], expected: [0, 9] },

  { s: "xxfoobaryybarfoozz", words: ["foo", "bar"], expected: [2, 10] },
  {
    s: "aaaaaaaaaaaa",
    words: ["aa", "aa", "aa"],
    expected: [0, 1, 2, 3, 4, 5, 6],
  },

  { s: "aaaa", words: ["aa", "bb"], expected: [] },
  { s: "catdogcatdog", words: ["dog", "cat"], expected: [0, 3, 6] },
  { s: "abcabcab", words: ["abc", "cab"], expected: [] },
  { s: "abcdefgh", words: ["ab", "gh", "xy"], expected: [] },
];

// Run tests
describe("Substring with Concatenation of All Words - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ s, words, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(s, words);

          if (result === undefined) {
            expect(result).toBeUndefined();
          } else {
            expect([...result].sort((a, b) => a - b)).toEqual(
              [...expected].sort((a, b) => a - b),
            );
          }
        });
      });
    });
  });
});
