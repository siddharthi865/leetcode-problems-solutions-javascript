// Import both solutions
const searchRangeBrute = require("./solutions/solution1");
const searchRangeOptimal = require("./solutions/solution2");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: searchRangeBrute },
  { name: "Binary Search (Optimal)", fn: searchRangeOptimal },
];

// Store test cases
const testCases = [
  // Basic cases
  { nums: [5, 7, 7, 8, 8, 10], target: 8, expected: [3, 4] },
  { nums: [5, 7, 7, 8, 8, 10], target: 6, expected: [-1, -1] },
  { nums: [], target: 0, expected: [-1, -1] },

  // Single element
  { nums: [1], target: 1, expected: [0, 0] },
  { nums: [1], target: 2, expected: [-1, -1] },

  // No duplicates
  { nums: [1, 2, 3, 4, 5], target: 3, expected: [2, 2] },
  { nums: [1, 2, 3, 4, 5], target: 6, expected: [-1, -1] },

  // All same elements
  { nums: [2, 2, 2, 2, 2], target: 2, expected: [0, 4] },
  { nums: [2, 2, 2, 2, 2], target: 3, expected: [-1, -1] },

  // Target at edges
  { nums: [1, 2, 3, 4, 5, 6], target: 1, expected: [0, 0] },
  { nums: [1, 2, 3, 4, 5, 6], target: 6, expected: [5, 5] },

  // Multiple duplicates in middle
  { nums: [1, 2, 2, 2, 3, 4], target: 2, expected: [1, 3] },
  { nums: [1, 1, 2, 3, 3, 3, 4], target: 3, expected: [3, 5] },

  // Negative numbers
  { nums: [-5, -4, -3, -2, -1], target: -3, expected: [2, 2] },
  { nums: [-5, -4, -3, -2, -1], target: 0, expected: [-1, -1] },

  // Mixed negatives and positives
  { nums: [-10, -5, 0, 0, 0, 5, 10], target: 0, expected: [2, 4] },
  { nums: [-10, -5, 0, 0, 0, 5, 10], target: -10, expected: [0, 0] },

  // Large range values
  { nums: [100, 200, 300, 400, 500], target: 300, expected: [2, 2] },
  { nums: [100, 200, 300, 300, 300, 400, 500], target: 300, expected: [2, 4] },

  // Consecutive duplicates
  { nums: [1, 1, 1, 2, 2, 3], target: 1, expected: [0, 2] },
  { nums: [1, 1, 1, 2, 2, 3], target: 2, expected: [3, 4] },

  // Target not present
  { nums: [1, 3, 5, 7, 9], target: 6, expected: [-1, -1] },
  { nums: [2, 4, 6, 8, 10], target: 1, expected: [-1, -1] },

  // Large gaps
  { nums: [1, 10, 10, 10, 100], target: 10, expected: [1, 3] },

  // Repeated single block
  { nums: [5, 5, 5, 5], target: 5, expected: [0, 3] },

  // Edge case small arrays
  { nums: [1, 2], target: 1, expected: [0, 0] },
  { nums: [1, 2], target: 2, expected: [1, 1] },

  // Mixed patterns
  { nums: [1, 2, 2, 3, 3, 4, 4, 4, 5], target: 4, expected: [5, 7] },

  // Another large duplicate block
  { nums: [7, 7, 7, 7, 7, 7, 7], target: 7, expected: [0, 6] },
];

// Run tests
describe("Find First and Last Position in Sorted Array", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ nums, target, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(nums, target);

          expect(result).toEqual(expected);
        });
      });
    });
  });
});
