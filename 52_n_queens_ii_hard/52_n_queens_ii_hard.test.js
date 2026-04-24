// Import all 4 solutions
const solutionBrute = require("./solutions/solution4");
const solutionBacktracking = require("./solutions/solution1");
const solutionHashing = require("./solutions/solution2");
const solutionBitmask = require("./solutions/solution3");

// Store solutions
const solutions = [
  //   { name: "Brute Force", fn: solutionBrute },
  { name: "Backtracking (Board Check)", fn: solutionBacktracking },
  { name: "Hashing Optimization", fn: solutionHashing },
  { name: "Bitmask (Optimal)", fn: solutionBitmask },
];

// Store test cases (n <= 9 constraint respected)
const testCases = [
  { n: 1, expected: 1 },
  { n: 2, expected: 0 },
  { n: 3, expected: 0 },
  { n: 4, expected: 2 },
  { n: 5, expected: 10 },
  { n: 6, expected: 4 },
  { n: 7, expected: 40 },
  { n: 8, expected: 92 },
  { n: 9, expected: 352 },

  // Repeated small cases (edge-heavy validation)
  { n: 1, expected: 1 },
  { n: 2, expected: 0 },
  { n: 3, expected: 0 },
  { n: 4, expected: 2 },
  { n: 5, expected: 10 },

  // Mid-range repetitions
  { n: 6, expected: 4 },
  { n: 7, expected: 40 },
  { n: 8, expected: 92 },

  // Random mix within constraints
  { n: 3, expected: 0 },
  { n: 5, expected: 10 },
  { n: 7, expected: 40 },
  { n: 4, expected: 2 },
  { n: 6, expected: 4 },

  // More stress-style repeats
  { n: 8, expected: 92 },
  { n: 9, expected: 352 },
  { n: 5, expected: 10 },
  { n: 7, expected: 40 },
  { n: 6, expected: 4 },

  // Final mixed validations
  { n: 2, expected: 0 },
  { n: 8, expected: 92 },
  { n: 9, expected: 352 },
];

// Run tests
describe("N-Queens II - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ n, expected }, index) => {
        test(`Test Case ${index + 1} (n=${n})`, () => {
          const result = fn(n);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
