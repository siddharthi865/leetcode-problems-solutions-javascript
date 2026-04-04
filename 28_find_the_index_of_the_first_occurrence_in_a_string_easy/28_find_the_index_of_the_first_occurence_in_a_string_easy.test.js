// Import both solutions
const strStrBrute = require("./solutions/solution1");
const strStrKMP = require("./solutions/solution2");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: strStrBrute },
  { name: "KMP (Optimal)", fn: strStrKMP },
];

// Store test cases
const testCases = [
  { haystack: "sadbutsad", needle: "sad", expected: 0 },
  { haystack: "leetcode", needle: "leeto", expected: -1 },
  { haystack: "hello", needle: "ll", expected: 2 },
  { haystack: "aaaaa", needle: "bba", expected: -1 },
  { haystack: "a", needle: "a", expected: 0 },
  { haystack: "abc", needle: "c", expected: 2 },
  { haystack: "mississippi", needle: "issip", expected: 4 },
  { haystack: "mississippi", needle: "issi", expected: 1 },
  { haystack: "abcabcabc", needle: "abc", expected: 0 },
  { haystack: "abcabcabc", needle: "cab", expected: 2 },
  { haystack: "abababab", needle: "abab", expected: 0 },
  { haystack: "abababab", needle: "baba", expected: 1 },
  { haystack: "xyz", needle: "xyz", expected: 0 },
  { haystack: "xyz", needle: "xyzz", expected: -1 },
  { haystack: "aaaaab", needle: "aab", expected: 3 },
  { haystack: "abcde", needle: "e", expected: 4 },
  { haystack: "abcde", needle: "a", expected: 0 },
  { haystack: "abcde", needle: "f", expected: -1 },
  { haystack: "abababc", needle: "ababc", expected: 2 },
  { haystack: "zzzzzz", needle: "zzz", expected: 0 },
];

// Run tests
describe("Find First Occurrence in String - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ haystack, needle, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(haystack, needle);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
