// Import both solutions
const solution1 = require("./solutions/solution1");
const solution2 = require("./solutions/solution2");

// Store solutions
const solutions = [
  { name: "Basic Counting", fn: solution1 },
  { name: "Bitmask Optimized", fn: solution2 },
];

// Store test cases
const testCases = [
  { s: "cooear", expected: 2 },
  { s: "axeyizou", expected: 1 },
  { s: "au 123", expected: 0 },
  { s: "a", expected: 0 },
  { s: "b", expected: 0 },
  { s: "aeiou", expected: 0 },
  { s: "bcdfg", expected: 0 },
  { s: "abcde", expected: 0 },
  { s: "aaaaabbbbb", expected: 1 },
  { s: "aaaaabbbb", expected: 1 },
  { s: "aaaaabbb", expected: 1 },
  { s: "aaaaabb", expected: 2 },
  { s: "aaaaab", expected: 5 },
  { s: "z", expected: 0 },
  { s: "u", expected: 0 },
  { s: "hello world", expected: 0 }, // v=3, c=7 → 0
  { s: "leetcode", expected: 1 }, // v=4, c=4
  { s: "programming", expected: 0 }, // v=3, c=8
  { s: "data science", expected: 0 },
  { s: "a e i o u b c d", expected: 1 }, // v=5, c=3
  { s: "xyz 123", expected: 0 },
  { s: "aeiobcdfg", expected: 0 }, // v=4, c=5
  { s: "aeiobcdf", expected: 1 }, // v=4, c=4
  { s: "aeiobcd", expected: 1 }, // v=4, c=3
  { s: "aeiobc", expected: 2 }, // v=4, c=2
  { s: "aeiob", expected: 4 }, // v=4, c=1
  { s: "12345", expected: 0 },
  { s: "   ", expected: 0 },
  { s: "a1e2i3o4u5", expected: 0 }, // no consonants
  { s: "b1c2d3f4g5a", expected: 0 }, // v=1, c=5
];

// Run tests
describe("Score of String - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ s, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(s);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
