// Import solutions
const maxProfitBrute = require("./solutions/solution1");
const maxProfitOptimal = require("./solutions/solution2");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: maxProfitBrute },
  { name: "Optimal One Pass", fn: maxProfitOptimal },
];

// Store test cases
const testCases = [
  { prices: [7, 1, 5, 3, 6, 4], expected: 5 },
  { prices: [7, 6, 4, 3, 1], expected: 0 },
  { prices: [1, 2, 3, 4, 5], expected: 4 },
  { prices: [5, 4, 3, 2, 1], expected: 0 },
  { prices: [3, 3, 3, 3, 3], expected: 0 },
  { prices: [2, 4, 1], expected: 2 },
  { prices: [2, 1, 2, 1, 0, 1, 2], expected: 2 },
  { prices: [1], expected: 0 },
  { prices: [1, 100000], expected: 99999 },
  { prices: [100000, 1], expected: 0 },

  { prices: [5, 2, 6, 1, 4], expected: 4 },
  { prices: [1, 3, 2, 8, 4, 9], expected: 8 },
  { prices: [2, 7, 1, 4, 11], expected: 10 },
  { prices: [6, 1, 3, 2, 4, 7], expected: 6 },
  { prices: [1, 2], expected: 1 },
  { prices: [2, 1], expected: 0 },
  { prices: [4, 2, 7], expected: 5 },
  { prices: [10, 9, 8, 7, 6, 5], expected: 0 },
  { prices: [1, 5, 2, 10], expected: 9 },
  { prices: [2, 1, 4], expected: 3 },

  { prices: [3, 8, 1, 5, 7, 8], expected: 7 },
  { prices: [1, 2, 4, 2, 5, 7, 2, 4, 9, 0], expected: 8 },
  { prices: [2, 3, 10, 6, 4, 8, 1], expected: 8 },
  { prices: [1, 6, 2, 8, 3, 10], expected: 9 },
  { prices: [7, 2, 5, 3, 6, 1, 4], expected: 4 },
  { prices: [1, 3, 7, 5, 10, 3], expected: 9 },
  { prices: [9, 1, 3, 10, 1, 4], expected: 9 },
  { prices: [2, 5, 1, 7, 3, 9], expected: 8 },
  { prices: [1, 4, 2, 11], expected: 10 },
  { prices: [5, 3, 6, 7, 2, 8], expected: 6 },
];

// Run tests
describe("Best Time to Buy and Sell Stock - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ prices, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(prices);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
