// Import all 3 solutions
const isMatchBrute = require("./solutions/solution1");
const isMatchDPTopDown = require("./solutions/solution2");
const isMatchDPBottomUp = require("./solutions/solution3");
const isMatchGreedy = require("./solutions/solution4");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: isMatchBrute },
  { name: "DP (Top Down)", fn: isMatchDPTopDown },
  { name: "DP (Bottom Up)", fn: isMatchDPBottomUp },
  { name: "Greedy (Optimal)", fn: isMatchGreedy },
];

// Store test cases
const testCases = [
  { s: "aa", p: "a", expected: false },
  { s: "aa", p: "*", expected: true },
  { s: "cb", p: "?a", expected: false },
  { s: "adceb", p: "*a*b", expected: true },
  { s: "acdcb", p: "a*c?b", expected: false },

  { s: "", p: "", expected: true },
  { s: "", p: "*", expected: true },
  { s: "", p: "?", expected: false },
  { s: "a", p: "", expected: false },
  { s: "a", p: "?", expected: true },

  { s: "abc", p: "abc", expected: true },
  { s: "abc", p: "a?c", expected: true },
  { s: "abc", p: "a*d", expected: false },
  { s: "abcd", p: "a*d", expected: true },
  { s: "abcd", p: "a*c?", expected: true },

  { s: "mississippi", p: "m*si*pi", expected: true },
  { s: "mississippi", p: "m??*ss*?i*pi", expected: false },
  { s: "abefcdgiescdfimde", p: "ab*cd?i*de", expected: true },
  { s: "aaa", p: "****", expected: true },
  { s: "aaa", p: "*a*a", expected: true },

  { s: "aaa", p: "a*a*a", expected: true },
  { s: "aaa", p: "a*a*b", expected: false },
  { s: "abcde", p: "*?*?*", expected: true },
  { s: "abcde", p: "*?*?*?", expected: true },
  { s: "abcde", p: "*?*?*?*", expected: true },

  { s: "abc", p: "****a****b****c****", expected: true },
  { s: "abc", p: "****a****b****d****", expected: false },
  { s: "aaaaaaaaaa", p: "a*a*a*a*a*", expected: true },
  { s: "aaaaaaaaaa", p: "a*a*a*a*b*", expected: false },
  { s: "xyz", p: "*x*z", expected: true },
];

// Run tests
describe("Wildcard Matching - All Implementations", () => {
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
