// Import both solutions
const searchInsertBrute = require("./solutions/solution1");
const searchInsertOptimal = require("./solutions/solution2");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: searchInsertBrute },
  { name: "Binary Search (Optimal)", fn: searchInsertOptimal },
];

// Store test cases
const testCases = [
  { nums: [1, 3, 5, 6], target: 5, expected: 2 },
  { nums: [1, 3, 5, 6], target: 2, expected: 1 },
  { nums: [1, 3, 5, 6], target: 7, expected: 4 },
  { nums: [1, 3, 5, 6], target: 0, expected: 0 },
  { nums: [1], target: 0, expected: 0 },
  { nums: [1], target: 2, expected: 1 },
  { nums: [1, 2, 4, 6, 8], target: 3, expected: 2 },
  { nums: [1, 2, 4, 6, 8], target: 6, expected: 3 },
  { nums: [1, 2, 4, 6, 8], target: 9, expected: 5 },
  { nums: [-10, -5, 0, 5, 10], target: -5, expected: 1 },
  { nums: [-10, -5, 0, 5, 10], target: -6, expected: 1 },
  { nums: [-10, -5, 0, 5, 10], target: 6, expected: 4 },
  { nums: [-10000, -5000, 0, 5000, 10000], target: 10000, expected: 4 },
  { nums: [-10000, -5000, 0, 5000, 10000], target: 10001, expected: 5 },
  { nums: [2, 4, 6, 8, 10, 12], target: 1, expected: 0 },
  { nums: [2, 4, 6, 8, 10, 12], target: 12, expected: 5 },
  { nums: [2, 4, 6, 8, 10, 12], target: 11, expected: 5 },
  { nums: [1, 3], target: 2, expected: 1 },
  { nums: [1, 3], target: 3, expected: 1 },
  { nums: [1, 3], target: 4, expected: 2 },
];

// Run tests
describe("Search Insert Position - All Implementations", () => {
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
