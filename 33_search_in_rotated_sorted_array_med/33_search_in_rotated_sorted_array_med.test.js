// Import both solutions
const searchBrute = require("./solutions/solution1");
const searchBinary = require("./solutions/solution2");

// Store solutions
const solutions = [
  { name: "Linear Search (Brute)", fn: searchBrute },
  { name: "Binary Search (Optimal)", fn: searchBinary },
];

// Store test cases
const testCases = [
  // Basic rotated cases
  { nums: [4, 5, 6, 7, 0, 1, 2], target: 0, expected: 4 },
  { nums: [4, 5, 6, 7, 0, 1, 2], target: 3, expected: -1 },
  { nums: [1], target: 0, expected: -1 },
  { nums: [1], target: 1, expected: 0 },
  { nums: [1, 2], target: 2, expected: 1 },

  // No rotation cases
  { nums: [1, 2, 3, 4, 5, 6], target: 4, expected: 3 },
  { nums: [1, 2, 3, 4, 5, 6], target: 1, expected: 0 },
  { nums: [1, 2, 3, 4, 5, 6], target: 6, expected: 5 },
  { nums: [1, 2, 3, 4, 5, 6], target: 7, expected: -1 },

  // Full rotation edge cases
  { nums: [2, 3, 4, 5, 6, 7, 1], target: 1, expected: 6 },
  { nums: [2, 3, 4, 5, 6, 7, 1], target: 7, expected: 5 },

  // Small arrays
  { nums: [3, 1], target: 1, expected: 1 },
  { nums: [3, 1], target: 3, expected: 0 },

  // Middle rotation
  { nums: [6, 7, 8, 1, 2, 3, 4, 5], target: 8, expected: 2 },
  { nums: [6, 7, 8, 1, 2, 3, 4, 5], target: 5, expected: 7 },

  // Negative numbers
  { nums: [-4, -3, -2, -1, 0, 1, 2], target: -3, expected: 1 },
  { nums: [-4, -3, -2, -1, 0, 1, 2], target: 2, expected: 6 },

  // Large spread values
  { nums: [10, 20, 30, 40, 50, 5, 6, 7, 8], target: 5, expected: 5 },
  { nums: [10, 20, 30, 40, 50, 5, 6, 7, 8], target: 40, expected: 3 },

  // Target not present
  { nums: [4, 5, 6, 7, 0, 1, 2], target: 8, expected: -1 },
  { nums: [5, 6, 7, 8, 9, 1, 2, 3, 4], target: 10, expected: -1 },

  // Already sorted (no rotation)
  { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9], target: 9, expected: 8 },
  { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9], target: 1, expected: 0 },

  // Rotation at different pivots
  { nums: [30, 40, 50, 10, 20], target: 10, expected: 3 },
  { nums: [30, 40, 50, 10, 20], target: 40, expected: 1 },

  // Edge duplicates not allowed but still valid distinct patterns
  { nums: [15, 18, 2, 3, 6, 12], target: 3, expected: 3 },
  { nums: [15, 18, 2, 3, 6, 12], target: 15, expected: 0 },

  // Larger array
  {
    nums: [9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8],
    target: 6,
    expected: 10,
  },
  {
    nums: [9, 10, 11, 12, 13, 1, 2, 3, 4, 5, 6, 7, 8],
    target: 13,
    expected: 4,
  },

  // Extreme ends
  { nums: [7, 8, 9, 1, 2, 3, 4, 5, 6], target: 7, expected: 0 },
  { nums: [7, 8, 9, 1, 2, 3, 4, 5, 6], target: 6, expected: 8 },
];

// Run tests
describe("Search in Rotated Sorted Array - All Implementations", () => {
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
