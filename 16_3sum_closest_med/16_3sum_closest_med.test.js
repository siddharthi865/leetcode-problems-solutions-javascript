// Import both solutions
const threeSumBrute = require("./solutions/solution1");
const threeSumOptimal = require("./solutions/solution2");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: threeSumBrute },
  { name: "Two Pointer (Optimal)", fn: threeSumOptimal },
];

// Store test cases
const testCases = [
  { nums: [-1, 2, 1, -4], target: 1, expected: 2 },
  { nums: [0, 0, 0], target: 1, expected: 0 },
  { nums: [1, 1, 1, 0], target: -100, expected: 2 },
  { nums: [1, 2, 5, 10, 11], target: 12, expected: 13 },
  { nums: [-3, -2, -5, 3, -4], target: -1, expected: -2 },
  { nums: [4, 0, 5, -5, 3, 3, 0, -4, -5], target: -2, expected: -2 },
  { nums: [1, 2, 3], target: 6, expected: 6 },
  { nums: [1, 2, 3], target: 7, expected: 6 },
  { nums: [-1, 0, 1, 1, 55], target: 3, expected: 2 },
  { nums: [0, 2, 1, -3], target: 1, expected: 0 },
  { nums: [1, 1, -1, -1, 3], target: -1, expected: -1 },
  { nums: [1, 6, 9, 14, 16, 70], target: 81, expected: 80 },

  { nums: [-1000, -999, 1000, 999], target: 0, expected: -999 },

  { nums: [-1000, 0, 1000], target: 1, expected: 0 },
  { nums: [5, 2, 7, 4, 0, 9], target: 20, expected: 20 },
  { nums: [5, 2, 7, 4, 0, 9], target: -5, expected: 6 },
  { nums: [3, 0, -2, -1, 1, 2], target: 1, expected: 1 },
  { nums: [10, 20, 30, 40, 50], target: 100, expected: 100 },
  { nums: [10, 20, 30, 40, 50], target: 5, expected: 60 },

  { nums: [-7, -3, 2, 3, 11], target: 0, expected: 1 },

  { nums: [-7, -3, 2, 3, 11], target: 5, expected: 6 },

  { nums: [1, 4, 45, 6, 10, 8], target: 22, expected: 22 },
  { nums: [1, 4, 45, 6, 10, 8], target: 50, expected: 50 },

  { nums: [0, 1, 2], target: 3, expected: 3 },
  { nums: [0, 1, 2], target: 100, expected: 3 },
  { nums: [-5, -2, -1, -10], target: -6, expected: -8 },
  { nums: [-5, -2, -1, -10], target: -20, expected: -17 },
  { nums: [2, 3, 4, 5, 6, 7], target: 10, expected: 10 },
  { nums: [2, 3, 4, 5, 6, 7], target: 50, expected: 18 },
  { nums: [-4, -1, 1, 2], target: 1, expected: 2 },
];

// Run tests
describe("Three Sum Closest - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ nums, target, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(nums, target);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
