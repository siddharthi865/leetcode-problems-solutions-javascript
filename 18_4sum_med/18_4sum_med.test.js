// Import both solutions
const fourSumBrute = require("./solutions/solution1");
const fourSumOptimal = require("./solutions/solution2");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: fourSumBrute },
  { name: "Sorting + Two Pointer", fn: fourSumOptimal },
];

// Helper function to normalize output (order-independent comparison)
function normalize(arr) {
  return arr
    .map((quad) => quad.slice().sort((a, b) => a - b))
    .sort((a, b) => {
      for (let i = 0; i < 4; i++) {
        if (a[i] !== b[i]) return a[i] - b[i];
      }
      return 0;
    });
}

// Test cases
const testCases = [
  {
    nums: [1, 0, -1, 0, -2, 2],
    target: 0,
    expected: [
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1],
    ],
  },
  { nums: [2, 2, 2, 2, 2], target: 8, expected: [[2, 2, 2, 2]] },
  { nums: [0, 0, 0, 0], target: 0, expected: [[0, 0, 0, 0]] },
  { nums: [1, 2, 3, 4, 5], target: 10, expected: [[1, 2, 3, 4]] },
  { nums: [-3, -1, 0, 2, 4, 5], target: 2, expected: [[-3, -1, 2, 4]] },
  {
    nums: [-2, -1, -1, 1, 1, 2, 2],
    target: 0,
    expected: [
      [-2, -1, 1, 2],
      [-1, -1, 1, 1],
    ],
  },
  { nums: [5, 5, 5, 5, 5], target: 20, expected: [[5, 5, 5, 5]] },
  { nums: [-5, -4, -3, -2, -1], target: -10, expected: [[-4, -3, -2, -1]] },
  { nums: [1, 1, 1, 1, 1, 1], target: 4, expected: [[1, 1, 1, 1]] },
  { nums: [3, 7, 4, 0, -1, 2], target: 10, expected: [[-1, 0, 4, 7]] },

  {
    nums: [1, 0, -1, 0, -2, 2, 2],
    target: 2,
    expected: [
      [-2, 0, 2, 2],
      [-1, 0, 1, 2],
    ],
  },
  {
    nums: [1000000000, 1000000000, 1000000000, 1000000000],
    target: 4000000000,
    expected: [[1000000000, 1000000000, 1000000000, 1000000000]],
  },
  {
    nums: [-1000000000, -1000000000, 1000000000, 1000000000],
    target: 0,
    expected: [[-1000000000, -1000000000, 1000000000, 1000000000]],
  },
  {
    nums: [2, 3, 4, 5, 6, 7, 8],
    target: 20,
    expected: [
      [2, 3, 7, 8],
      [2, 4, 6, 8],
      [2, 5, 6, 7],
      [3, 4, 5, 8],
      [3, 4, 6, 7],
    ],
  },
  {
    nums: [0, 1, 2, 3, 4, 5],
    target: 10,
    expected: [
      [1, 2, 3, 4],
      [0, 2, 3, 5],
      [0, 1, 4, 5],
    ],
  },

  { nums: [1, 2, 3, 4], target: 50, expected: [] },
  { nums: [-2, -1, 0, 1, 2], target: 0, expected: [[-2, -1, 1, 2]] },
  {
    nums: [-3, -2, -1, 0, 0, 1, 2, 3],
    target: 0,
    expected: [
      [-3, -2, 2, 3],
      [-3, -1, 1, 3],
      [-3, 0, 0, 3],
      [-3, 0, 1, 2],
      [-2, -1, 0, 3],
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1],
    ],
  },
  { nums: [4, 3, 2, 1], target: 10, expected: [[1, 2, 3, 4]] },
  {
    nums: [1, 2, 2, 2, 3, 3, 4],
    target: 9,
    expected: [
      [1, 2, 2, 4],
      [1, 2, 3, 3],
      [2, 2, 2, 3],
    ],
  },

  { nums: [0, 0, 0, 0, 0], target: 0, expected: [[0, 0, 0, 0]] },
  {
    nums: [1, -2, -5, -4, -3, 3, 3, 5],
    target: -11,
    expected: [[-5, -4, -3, 1]],
  },
  { nums: [10, 20, 30, 40, 1, 2], target: 91, expected: [[1, 20, 30, 40]] },
  {
    nums: [1, 2, 3, 4, 5, 6, 7, 8],
    target: 18,
    expected: [
      [1, 2, 7, 8],
      [1, 3, 6, 8],
      [1, 4, 5, 8],
      [1, 4, 6, 7],
      [2, 3, 5, 8],
      [2, 3, 6, 7],
      [2, 4, 5, 7],
      [3, 4, 5, 6],
    ],
  },
  {
    nums: [-1, 0, 1, 2, -1, -4],
    target: -1,
    expected: [
      [-4, 0, 1, 2],
      [-1, -1, 0, 1],
    ],
  },

  { nums: [2, 2, 2, 2, 2, 2], target: 8, expected: [[2, 2, 2, 2]] },
  { nums: [-2, -2, -2, -2, 2, 2, 2, 2], target: 0, expected: [[-2, -2, 2, 2]] },
  {
    nums: [5, 1, 0, -1, -2, 3],
    target: 3,
    expected: [
      [-2, -1, 1, 5],
      [-1, 0, 1, 3],
    ],
  },
  {
    nums: [7, 6, 4, -1, 1, 2],
    target: 16,
    expected: [
      [-1, 4, 6, 7],
      [1, 2, 6, 7],
    ],
  },
];

// Run tests
describe("Four Sum - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ nums, target, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(nums, target);
          expect(normalize(result)).toEqual(normalize(expected));
        });
      });
    });
  });
});
