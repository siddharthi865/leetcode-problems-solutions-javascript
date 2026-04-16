// Import all 3 solutions
const singleNumberBrute = require("./solutions/solution1");
const singleNumberMap = require("./solutions/solution2");
const singleNumberOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: singleNumberBrute },
  { name: "Hash Map", fn: singleNumberMap },
  { name: "XOR (Optimal)", fn: singleNumberOptimal },
];

// Store test cases
const testCases = [
  { nums: [2, 2, 1], expected: 1 },
  { nums: [4, 1, 2, 1, 2], expected: 4 },
  { nums: [1], expected: 1 },
  { nums: [0, 1, 0], expected: 1 },
  { nums: [-1, -1, -2], expected: -2 },
  { nums: [5, 5, 6], expected: 6 },
  { nums: [10, 10, 20], expected: 20 },
  { nums: [7, 3, 5, 3, 7], expected: 5 },
  { nums: [100, 200, 100], expected: 200 },
  { nums: [-1000, -1000, 500], expected: 500 },
  { nums: [8, 8, 9, 9, 10], expected: 10 },
  { nums: [11, 12, 11], expected: 12 },
  { nums: [0, 0, -1], expected: -1 },
  { nums: [999, 1, 1], expected: 999 },
  { nums: [3, 4, 3], expected: 4 },
  { nums: [6, 7, 6], expected: 7 },
  { nums: [2, 3, 2, 4, 4], expected: 3 },
  { nums: [15, 15, 16], expected: 16 },
  { nums: [21, 22, 21], expected: 22 },
  { nums: [30, 40, 30], expected: 40 },
  { nums: [-5, -5, -6], expected: -6 },
  { nums: [-10, -20, -10], expected: -20 },
  { nums: [50, 60, 50], expected: 60 },
  { nums: [101, 102, 101], expected: 102 },
  { nums: [9999, 8888, 9999], expected: 8888 },
  { nums: [42, 42, 43], expected: 43 },
  { nums: [77, 78, 77], expected: 78 },
  { nums: [123, 321, 123], expected: 321 },
  { nums: [1000, 2000, 1000], expected: 2000 },
  { nums: [-30000, 5, 5], expected: -30000 },
];

// Run tests
describe("Single Number - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ nums, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(nums);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
