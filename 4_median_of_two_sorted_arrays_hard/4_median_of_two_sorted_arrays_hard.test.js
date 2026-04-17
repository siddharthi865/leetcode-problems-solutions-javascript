// Import all 3 solutions
const medianBrute = require("./solutions/solution1");
const medianMerge = require("./solutions/solution2");
const medianOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: medianBrute },
  { name: "Merge Approach", fn: medianMerge },
  { name: "Binary Search (Optimal)", fn: medianOptimal },
];

// Store test cases
const testCases = [
  { nums1: [1, 3], nums2: [2], expected: 2.0 },
  { nums1: [1, 2], nums2: [3, 4], expected: 2.5 },
  { nums1: [0, 0], nums2: [0, 0], expected: 0.0 },
  { nums1: [], nums2: [1], expected: 1.0 },
  { nums1: [2], nums2: [], expected: 2.0 },
  { nums1: [1], nums2: [2, 3, 4], expected: 2.5 },
  { nums1: [1, 3, 5], nums2: [2, 4, 6], expected: 3.5 },
  { nums1: [1, 2, 3], nums2: [4, 5, 6, 7], expected: 4.0 },
  { nums1: [1, 2], nums2: [1, 2, 3], expected: 2.0 },
  { nums1: [-5, -3, -1], nums2: [-2, 0, 2], expected: -1.5 },
  { nums1: [-10, -5, 0], nums2: [5, 10], expected: 0.0 },
  { nums1: [1000000], nums2: [-1000000], expected: 0.0 },
  { nums1: [1, 1, 1], nums2: [1, 1, 1], expected: 1.0 },
  { nums1: [1, 2, 2], nums2: [2, 2, 3], expected: 2.0 },
  { nums1: [1, 4, 7], nums2: [2, 3, 5, 6, 8], expected: 4.5 },
  { nums1: [1, 2, 3, 4], nums2: [5, 6, 7, 8], expected: 4.5 },
  { nums1: [1, 3], nums2: [2, 7, 8, 9], expected: 5.0 },
  { nums1: [1, 2, 3], nums2: [4, 5, 6], expected: 3.5 },
  { nums1: [1, 2, 5, 6], nums2: [3, 4], expected: 3.5 },
  { nums1: [1, 3, 8], nums2: [7, 9, 10, 11], expected: 8.0 },
  { nums1: [1, 2], nums2: [1, 2, 3, 4, 5], expected: 2.0 },
  { nums1: [3, 4], nums2: [1, 2, 5, 6], expected: 3.5 },
  { nums1: [2, 3, 5, 8], nums2: [10, 12, 14, 16, 18, 20], expected: 11.0 },
  { nums1: [1], nums2: [2], expected: 1.5 },
  { nums1: [1, 2, 3, 4, 5], nums2: [], expected: 3.0 },
  { nums1: [], nums2: [1, 2, 3, 4], expected: 2.5 },
  { nums1: [1, 2, 3], nums2: [100, 101, 102], expected: 51.5 },
  { nums1: [-1000000, -500000], nums2: [500000, 1000000], expected: 0.0 },
  { nums1: [2, 2, 2], nums2: [2, 2], expected: 2.0 },
  { nums1: [1, 2, 3, 9], nums2: [4, 5, 6, 7, 8], expected: 5.0 },
];

// Run tests
describe("Median of Two Sorted Arrays - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ nums1, nums2, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(nums1, nums2);

          expect(result).toBeCloseTo(expected, 5);
        });
      });
    });
  });
});
