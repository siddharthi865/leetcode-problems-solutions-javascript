// Import all 3 solutions
const powBrute = require("./solutions/solution1");
const powRecursive = require("./solutions/solution2");
const powOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: powBrute },
  { name: "Recursive Fast Power", fn: powRecursive },
  { name: "Iterative Fast Power (Optimal)", fn: powOptimal },
];

// Helper for floating comparison
function isClose(a, b, epsilon = 1e-5) {
  return Math.abs(a - b) < epsilon;
}

// Store test cases
const testCases = [
  { x: 2, n: 10, expected: 1024 },
  { x: 2.1, n: 3, expected: 9.261 },
  { x: 2, n: -2, expected: 0.25 },
  { x: 5, n: 0, expected: 1 },
  { x: -2, n: 3, expected: -8 },
  { x: -2, n: 4, expected: 16 },
  { x: 0.5, n: 3, expected: 0.125 },
  { x: 10, n: 5, expected: 100000 },
  { x: 3, n: 7, expected: 2187 },
  { x: 1, n: 100000, expected: 1 },
  { x: -1, n: 100001, expected: -1 },
  { x: -1, n: 100000, expected: 1 },
  { x: 2, n: 1, expected: 2 },
  { x: 2, n: -1, expected: 0.5 },
  { x: 0.25, n: 2, expected: 0.0625 },
  { x: 0.25, n: -2, expected: 16 },
  { x: 9, n: 0, expected: 1 },
  { x: 99.99, n: 1, expected: 99.99 },
  { x: -3, n: -3, expected: -0.037037 },
  { x: 4, n: -3, expected: 0.015625 },
  { x: 7, n: 2, expected: 49 },
  { x: 8, n: 3, expected: 512 },
  { x: 2, n: 30, expected: 1073741824 },
  { x: 0.1, n: 2, expected: 0.01 },
  { x: 0.1, n: -2, expected: 100 },
  { x: -0.5, n: 3, expected: -0.125 },
  { x: -0.5, n: 4, expected: 0.0625 },
  { x: 6, n: -1, expected: 0.1666667 },
  { x: 1.5, n: 3, expected: 3.375 },
  { x: 2, n: 31, expected: 2147483648 },
];

// Run tests
describe("Pow(x, n) - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ x, n, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(x, n);

          if (result === undefined) {
            expect(result).toBeUndefined();
          } else {
            expect(isClose(result, expected)).toBe(true);
          }
        });
      });
    });
  });
});
