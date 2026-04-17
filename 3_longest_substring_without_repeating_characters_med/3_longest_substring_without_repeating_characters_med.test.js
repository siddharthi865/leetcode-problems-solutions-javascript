// Import all 4 solutions
const sol1 = require("./solutions/solution1");
const sol2 = require("./solutions/solution2");
const sol3 = require("./solutions/solution3");
const sol4 = require("./solutions/solution4");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: sol1 },
  { name: "Improved Brute", fn: sol2 },
  { name: "Sliding Window (Optimal)", fn: sol3 },
  { name: "Sliding Window + ASCII Array (Most Optimal)", fn: sol4 },
];

// Store test cases
const testCases = [
  { s: "", expected: 0 },
  { s: "a", expected: 1 },
  { s: "aa", expected: 1 },
  { s: "ab", expected: 2 },
  { s: "abcabcbb", expected: 3 },
  { s: "bbbbb", expected: 1 },
  { s: "pwwkew", expected: 3 },
  { s: "abcdef", expected: 6 },
  { s: "abba", expected: 2 },
  { s: "dvdf", expected: 3 },
  { s: "anviaj", expected: 5 },
  { s: "tmmzuxt", expected: 5 },
  { s: " ", expected: 1 },
  { s: "  ", expected: 1 },
  { s: "aab", expected: 2 },
  { s: "abcdeafbdgcbb", expected: 7 },
  { s: "abbaabcd", expected: 4 },
  { s: "abcddefgh", expected: 5 },
  { s: "abcabcabcd", expected: 4 },
  { s: "zxyzxyzxyz", expected: 3 },
  { s: "1234567890", expected: 10 },
  { s: "1122334455", expected: 2 },
  { s: "a1b2c3d4e5", expected: 10 },
  { s: "!@#$%^&*()", expected: 10 },
  { s: "a!b@c#d$e%", expected: 10 },
  { s: "abcABC123", expected: 9 },
  { s: "AaBbCcDd", expected: 8 },
  { s: "aabbccddeeff", expected: 2 },
  { s: "abcdabcbbefgh", expected: 5 },
  { s: "longestsubstringtestcase", expected: 8 },
];

// Run tests
describe("Longest Substring Without Repeating Characters - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ s, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(s);

          if (result === undefined) {
            expect(result).toBeUndefined();
          } else {
            expect(result).toBe(expected);
          }
        });
      });
    });
  });
});
