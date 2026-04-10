// Import all 3 solutions
const sqrtBrute = require("./solutions/solution1");
const sqrtBinary = require("./solutions/solution2");
const sqrtOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: sqrtBrute },
  { name: "Binary Search", fn: sqrtBinary },
  { name: "Optimal (Safe Binary)", fn: sqrtOptimal },
];

// Store test cases
const testCases = [
  { x: 0, expected: 0 },
  { x: 1, expected: 1 },
  { x: 2, expected: 1 },
  { x: 3, expected: 1 },
  { x: 4, expected: 2 },
  { x: 5, expected: 2 },
  { x: 8, expected: 2 },
  { x: 9, expected: 3 },
  { x: 10, expected: 3 },
  { x: 15, expected: 3 },

  // Perfect squares
  { x: 16, expected: 4 },
  { x: 25, expected: 5 },
  { x: 36, expected: 6 },
  { x: 49, expected: 7 },
  { x: 64, expected: 8 },

  // Non-perfect squares
  { x: 17, expected: 4 },
  { x: 26, expected: 5 },
  { x: 50, expected: 7 },
  { x: 99, expected: 9 },
  { x: 120, expected: 10 },

  // Larger numbers
  { x: 1000, expected: 31 },
  { x: 1024, expected: 32 },
  { x: 9999, expected: 99 },
  { x: 10000, expected: 100 },

  // Edge near integer limits
  { x: 2147395599, expected: 46339 }, // just below perfect square
  { x: 2147395600, expected: 46340 }, // perfect square
  { x: 2147483647, expected: 46340 }, // max 32-bit int

  // Random cases
  { x: 12345, expected: 111 },
  { x: 54321, expected: 233 },
  { x: 99999999, expected: 9999 },
];

// Run tests
describe("Sqrt(x) - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ x, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(x);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
