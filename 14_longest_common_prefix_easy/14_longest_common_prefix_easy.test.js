// Import all 3 solutions
const lcpBrute = require("./solutions/solution1");
const lcpHorizontal = require("./solutions/solution2");
const lcpVertical = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force (Prefix Shrinking)", fn: lcpBrute },
  { name: "Horizontal Scanning", fn: lcpHorizontal },
  { name: "Vertical Scanning (Optimal)", fn: lcpVertical },
];

// Store test cases
const testCases = [
  { strs: ["flower", "flow", "flight"], expected: "fl" },
  { strs: ["dog", "racecar", "car"], expected: "" },
  { strs: ["apple", "apple", "apple"], expected: "apple" },
  { strs: ["a"], expected: "a" },
  { strs: ["", ""], expected: "" },
  { strs: ["prefix", "pre", "prevent"], expected: "pre" },
  { strs: ["interview", "internet", "internal"], expected: "inter" },
  { strs: ["abc", "abcd", "ab"], expected: "ab" },
  { strs: ["x", "y", "z"], expected: "" },
  { strs: ["same", "same", "same", "same"], expected: "same" },
  { strs: ["longstring", "long", "longer"], expected: "long" },
  { strs: ["testcase", "test", "testing"], expected: "test" },
  { strs: ["abcde", "abc", "abcd", "ab"], expected: "ab" },
  { strs: ["a", "ab", "abc", "abcd"], expected: "a" },
  { strs: ["prefix", "suffix", "fix"], expected: "" },
  { strs: ["aaa", "aa", "aaa", "aaaa"], expected: "aa" },
  { strs: ["commonprefix", "common", "commute"], expected: "comm" },
  { strs: ["zebra", "zen", "zero"], expected: "ze" },
  { strs: ["abc", "def", "ghi"], expected: "" },
  { strs: ["repetition", "repeat", "replica", "report"], expected: "rep" },
];

// Run tests
describe("Longest Common Prefix - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ strs, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(strs);

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
