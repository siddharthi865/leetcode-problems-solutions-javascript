// Import all 3 solutions
const isMatchBrute = require("./solutions/solution1");
const isMatchMemo = require("./solutions/solution2");
const isMatchDP = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: isMatchBrute },
  { name: "Memoization (Top-Down DP)", fn: isMatchMemo },
  { name: "Bottom-Up DP (Optimal)", fn: isMatchDP },
];

// Store test cases
const testCases = [
  { s: "aa", p: "a", expected: false },
  { s: "aa", p: "a*", expected: true },
  { s: "ab", p: ".*", expected: true },
  { s: "aab", p: "c*a*b", expected: true },
  { s: "mississippi", p: "mis*is*p*.", expected: false },
  { s: "mississippi", p: "mis*is*ip*.", expected: true },
  { s: "ab", p: ".*c", expected: false },
  { s: "aaa", p: "a*a", expected: true },
  { s: "aaa", p: "ab*a*c*a", expected: true },
  { s: "a", p: "ab*", expected: true },
  { s: "bbbba", p: ".*a*a", expected: true },
  { s: "a", p: ".", expected: true },
  { s: "ab", p: ".", expected: false },
  { s: "abcd", p: "d*", expected: false },
  { s: "aaa", p: "aaaa", expected: false },
  { s: "aaa", p: "a*a*a", expected: true },
  { s: "abc", p: "abc", expected: true },
  { s: "abc", p: "a.c", expected: true },
  { s: "abc", p: "ab*c", expected: true },
  { s: "abbc", p: "ab*c", expected: true },
  { s: "abbbbc", p: "ab*c", expected: true },
  { s: "abbbbc", p: "ab*bc", expected: true },
  { s: "abcd", p: ".*d", expected: true },
  { s: "abcd", p: ".*e", expected: false },
  { s: "aaa", p: "ab*a", expected: false },
  { s: "a", p: "ab*a", expected: false },
  { s: "bbb", p: "b*b", expected: true },
  { s: "bbb", p: "b*bb", expected: true },
  { s: "abc", p: ".*.*", expected: true },
  { s: "abc", p: ".*.*c", expected: true },
];

// Run tests
describe("Regular Expression Matching - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ s, p, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(s, p);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
