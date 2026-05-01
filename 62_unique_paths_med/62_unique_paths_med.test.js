// Import all 5 solutions
const sol1 = require("./solutions/solution1"); // Brute Force
const sol2 = require("./solutions/solution2"); // Memoization
const sol3 = require("./solutions/solution3"); // Tabulation
const sol4 = require("./solutions/solution4"); // Space Optimized
const sol5 = require("./solutions/solution5"); // Combinatorics

// Store solutions
const solutions = [
  { name: "Brute Force", fn: sol1 },
  { name: "Memoization", fn: sol2 },
  { name: "Tabulation", fn: sol3 },
  { name: "Space Optimized", fn: sol4 },
  { name: "Combinatorics (Optimal)", fn: sol5 },
];

// Store test cases
const testCases = [
  { m: 1, n: 1, expected: 1 },
  { m: 1, n: 5, expected: 1 },
  { m: 5, n: 1, expected: 1 },
  { m: 2, n: 2, expected: 2 },
  { m: 2, n: 3, expected: 3 },
  { m: 3, n: 2, expected: 3 },
  { m: 3, n: 3, expected: 6 },
  { m: 3, n: 7, expected: 28 },
  { m: 4, n: 4, expected: 20 },
  { m: 5, n: 5, expected: 70 },
  { m: 6, n: 6, expected: 252 },
  { m: 7, n: 3, expected: 28 },
  { m: 3, n: 10, expected: 55 },
  { m: 10, n: 3, expected: 55 },
  { m: 10, n: 10, expected: 48620 },
  { m: 8, n: 8, expected: 3432 },
  { m: 15, n: 2, expected: 15 },
  { m: 2, n: 15, expected: 15 },
  { m: 12, n: 4, expected: 364 },
  { m: 4, n: 12, expected: 364 },
  { m: 20, n: 1, expected: 1 },
  { m: 1, n: 20, expected: 1 },
  { m: 9, n: 5, expected: 495 },
  { m: 5, n: 9, expected: 495 },
  { m: 13, n: 3, expected: 91 },
  { m: 3, n: 13, expected: 91 },
  { m: 7, n: 7, expected: 924 },
  { m: 11, n: 11, expected: 184756 },
  { m: 16, n: 3, expected: 136 },
  { m: 3, n: 16, expected: 136 },
];

// Run tests
describe("Unique Paths - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ m, n, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(m, n);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
