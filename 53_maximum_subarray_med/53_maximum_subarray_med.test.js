// Import all 3 solutions
const maxSubArrayBrute = require("./solutions/solution1");
const maxSubArrayBetter = require("./solutions/solution2");
const maxSubArrayOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: maxSubArrayBrute },
  { name: "Improved Brute Force", fn: maxSubArrayBetter },
  { name: "Kadane's Algorithm (Optimal)", fn: maxSubArrayOptimal },
];

// Store test cases
const testCases = [
  { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4], expected: 6 },
  { nums: [1], expected: 1 },
  { nums: [5, 4, -1, 7, 8], expected: 23 },
  { nums: [-1, -2, -3, -4], expected: -1 },
  { nums: [0, 0, 0, 0], expected: 0 },
  { nums: [2, -1, 2, 3, 4, -5], expected: 10 },
  { nums: [-2, -1], expected: -1 },
  { nums: [1, 2, 3, 4, 5], expected: 15 },
  { nums: [-5, -4, -3, -2, -1], expected: -1 },
  { nums: [3, -2, 5, -1], expected: 6 },
  { nums: [1, -1, 1, -1, 1, -1, 1], expected: 1 },
  { nums: [10000, -10000, 10000], expected: 10000 },
  { nums: [-10000, 10000, -10000, 10000], expected: 10000 },
  { nums: [4, -1, 2, 1], expected: 6 },
  { nums: [-2, 1], expected: 1 },
  { nums: [1, -2, 3, 10, -4, 7, 2, -5], expected: 18 },
  { nums: [8, -19, 5, -4, 20], expected: 21 },
  { nums: [-2, -3, 4, -1, -2, 1, 5, -3], expected: 7 },
  { nums: [1, 2, -1, 2, -3, 2, -5], expected: 4 },
  { nums: [2, -1, 2, 3, 4, -5, 2], expected: 10 },
  { nums: [-1], expected: -1 },
  { nums: [0], expected: 0 },
  { nums: [-1, 0, -2], expected: 0 },
  { nums: [5, -2, 3, 4], expected: 10 },
  { nums: [-2, 3, -1, 3, -2], expected: 5 },
  { nums: [1, -3, 2, 1, -1], expected: 3 },
  { nums: [2, 2, -1, 2, 2], expected: 7 },
  { nums: [-3, 1, -1, 1, -1, 1, -1], expected: 1 },
  { nums: [10, -3, 1, -4, 2, 1, -5, 4], expected: 10 },
  { nums: [1, -2, 3, 5, -3, 2], expected: 8 },
];

// Run tests
describe("Maximum Subarray - All Implementations", () => {
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
