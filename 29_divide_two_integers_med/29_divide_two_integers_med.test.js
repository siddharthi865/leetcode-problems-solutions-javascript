// Import all 3 solutions
const divideBrute = require("./solutions/solution1");
const divideOptimized = require("./solutions/solution2");
const divideBitwise = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force Subtraction", fn: divideBrute },
  { name: "Doubling Optimization", fn: divideOptimized },
  { name: "Bit Manipulation Optimal", fn: divideBitwise },
];

// Store test cases
const testCases = [
  { dividend: 10, divisor: 3, expected: 3 },
  { dividend: 7, divisor: -3, expected: -2 },
  { dividend: -10, divisor: 3, expected: -3 },
  { dividend: -10, divisor: -3, expected: 3 },
  { dividend: 1, divisor: 1, expected: 1 },
  { dividend: 0, divisor: 1, expected: 0 },
  { dividend: 1, divisor: 2, expected: 0 },
  { dividend: 2, divisor: 1, expected: 2 },
  { dividend: 15, divisor: 2, expected: 7 },
  { dividend: 100, divisor: 10, expected: 10 },
  { dividend: 2147483647, divisor: 1, expected: 2147483647 },
  { dividend: -2147483648, divisor: -1, expected: 2147483647 },
  { dividend: 2147483647, divisor: 2, expected: 1073741823 },
  { dividend: -101, divisor: 2, expected: -50 },
  { dividend: 101, divisor: -2, expected: -50 },
  { dividend: -101, divisor: -2, expected: 50 },
  { dividend: 8, divisor: 2, expected: 4 },
  { dividend: 9, divisor: 3, expected: 3 },
  { dividend: 27, divisor: 3, expected: 9 },
  { dividend: 30, divisor: 7, expected: 4 },
  { dividend: 50, divisor: 5, expected: 10 },
  { dividend: 55, divisor: 6, expected: 9 },
  { dividend: 123, divisor: 10, expected: 12 },
  { dividend: -123, divisor: 10, expected: -12 },
  { dividend: 12345, divisor: 1, expected: 12345 },
  { dividend: -12345, divisor: 1, expected: -12345 },
  { dividend: 2147483647, divisor: 3, expected: 715827882 },
  { dividend: -2147483648, divisor: 2, expected: -1073741824 },
  { dividend: 99999, divisor: 9, expected: 11111 },
];

// Run tests
describe("Divide Two Integers - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ dividend, divisor, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(dividend, divisor);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
