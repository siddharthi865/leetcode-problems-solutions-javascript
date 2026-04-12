// Import all 3 solutions
const mergeBrute = require("./solutions/solution1");
const mergeBetter = require("./solutions/solution2");
const mergeOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: mergeBrute },
  { name: "Extra Array", fn: mergeBetter },
  { name: "Two Pointer Optimal", fn: mergeOptimal },
];

// Store test cases
const testCases = [
  {
    nums1: [1, 2, 3, 0, 0, 0],
    m: 3,
    nums2: [2, 5, 6],
    n: 3,
    expected: [1, 2, 2, 3, 5, 6],
  },
  { nums1: [1], m: 1, nums2: [], n: 0, expected: [1] },
  { nums1: [0], m: 0, nums2: [1], n: 1, expected: [1] },
  { nums1: [2, 0], m: 1, nums2: [1], n: 1, expected: [1, 2] },
  {
    nums1: [4, 5, 6, 0, 0, 0],
    m: 3,
    nums2: [1, 2, 3],
    n: 3,
    expected: [1, 2, 3, 4, 5, 6],
  },
  {
    nums1: [1, 3, 5, 0, 0, 0],
    m: 3,
    nums2: [2, 4, 6],
    n: 3,
    expected: [1, 2, 3, 4, 5, 6],
  },
  {
    nums1: [1, 2, 4, 5, 6, 0],
    m: 5,
    nums2: [3],
    n: 1,
    expected: [1, 2, 3, 4, 5, 6],
  },
  { nums1: [1, 0, 0, 0], m: 1, nums2: [2, 3, 4], n: 3, expected: [1, 2, 3, 4] },
  {
    nums1: [2, 3, 4, 0, 0, 0],
    m: 3,
    nums2: [1, 5, 6],
    n: 3,
    expected: [1, 2, 3, 4, 5, 6],
  },
  {
    nums1: [1, 1, 1, 0, 0, 0],
    m: 3,
    nums2: [1, 1, 1],
    n: 3,
    expected: [1, 1, 1, 1, 1, 1],
  },

  {
    nums1: [5, 6, 7, 0, 0, 0],
    m: 3,
    nums2: [1, 2, 3],
    n: 3,
    expected: [1, 2, 3, 5, 6, 7],
  },
  {
    nums1: [1, 2, 3, 0, 0],
    m: 3,
    nums2: [4, 5],
    n: 2,
    expected: [1, 2, 3, 4, 5],
  },
  { nums1: [4, 0, 0, 0], m: 1, nums2: [1, 2, 3], n: 3, expected: [1, 2, 3, 4] },
  { nums1: [0, 0, 0], m: 0, nums2: [2, 5, 6], n: 3, expected: [2, 5, 6] },
  { nums1: [2, 0, 0], m: 1, nums2: [1, 3], n: 2, expected: [1, 2, 3] },

  { nums1: [3, 0, 0], m: 1, nums2: [1, 2], n: 2, expected: [1, 2, 3] },
  {
    nums1: [1, 5, 6, 0, 0, 0],
    m: 3,
    nums2: [2, 3, 4],
    n: 3,
    expected: [1, 2, 3, 4, 5, 6],
  },
  {
    nums1: [2, 2, 3, 0, 0, 0],
    m: 3,
    nums2: [1, 1, 2],
    n: 3,
    expected: [1, 1, 2, 2, 2, 3],
  },
  {
    nums1: [10, 20, 30, 0, 0, 0],
    m: 3,
    nums2: [5, 15, 25],
    n: 3,
    expected: [5, 10, 15, 20, 25, 30],
  },
  {
    nums1: [1, 2, 3, 0, 0, 0, 0],
    m: 3,
    nums2: [2, 2, 2, 2],
    n: 4,
    expected: [1, 2, 2, 2, 2, 2, 3],
  },

  {
    nums1: [7, 8, 9, 0, 0, 0],
    m: 3,
    nums2: [1, 2, 3],
    n: 3,
    expected: [1, 2, 3, 7, 8, 9],
  },
  {
    nums1: [1, 4, 7, 0, 0, 0],
    m: 3,
    nums2: [2, 3, 6],
    n: 3,
    expected: [1, 2, 3, 4, 6, 7],
  },
  {
    nums1: [2, 4, 6, 0, 0, 0],
    m: 3,
    nums2: [1, 3, 5],
    n: 3,
    expected: [1, 2, 3, 4, 5, 6],
  },
  {
    nums1: [1, 3, 5, 7, 0, 0, 0],
    m: 4,
    nums2: [2, 4, 6],
    n: 3,
    expected: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    nums1: [1, 2, 3, 4, 0, 0],
    m: 4,
    nums2: [5, 6],
    n: 2,
    expected: [1, 2, 3, 4, 5, 6],
  },

  {
    nums1: [6, 7, 8, 0, 0, 0],
    m: 3,
    nums2: [1, 2, 3],
    n: 3,
    expected: [1, 2, 3, 6, 7, 8],
  },
  {
    nums1: [1, 2, 3, 0, 0, 0],
    m: 3,
    nums2: [7, 8, 9],
    n: 3,
    expected: [1, 2, 3, 7, 8, 9],
  },
  {
    nums1: [2, 5, 7, 0, 0, 0],
    m: 3,
    nums2: [1, 3, 6],
    n: 3,
    expected: [1, 2, 3, 5, 6, 7],
  },
  { nums1: [0], m: 0, nums2: [1000000000], n: 1, expected: [1000000000] },
  {
    nums1: [-5, -3, -1, 0, 0, 0],
    m: 3,
    nums2: [-4, -2, 0],
    n: 3,
    expected: [-5, -4, -3, -2, -1, 0],
  },
];

// Run tests
describe("Merge Sorted Array - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ nums1, m, nums2, n, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const arr = [...nums1]; // avoid mutation issues
          fn(arr, m, nums2, n);
          expect(arr).toEqual(expected);
        });
      });
    });
  });
});
