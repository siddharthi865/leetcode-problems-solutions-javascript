// Import all 3 solutions
const permuteBrute = require("./solutions/solution1");
const permuteSwap = require("./solutions/solution2");
const permuteHeap = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Visited Array (Backtracking)", fn: permuteBrute },
  { name: "In-place Swapping", fn: permuteSwap },
  { name: "Heap's Algorithm (Iterative)", fn: permuteHeap },
];

// Helper to sort permutations for comparison
function sortPermutations(arr) {
  return arr.map((p) => p.join(",")).sort();
}

// Store test cases
const testCases = [
  { nums: [1], expected: [[1]] },
  { nums: [0], expected: [[0]] },

  {
    nums: [1, 2],
    expected: [
      [1, 2],
      [2, 1],
    ],
  },
  {
    nums: [0, 1],
    expected: [
      [0, 1],
      [1, 0],
    ],
  },
  {
    nums: [-1, 1],
    expected: [
      [-1, 1],
      [1, -1],
    ],
  },

  {
    nums: [1, 2, 3],
    expected: [
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ],
  },

  {
    nums: [0, 1, 2],
    expected: [
      [0, 1, 2],
      [0, 2, 1],
      [1, 0, 2],
      [1, 2, 0],
      [2, 0, 1],
      [2, 1, 0],
    ],
  },

  {
    nums: [-1, 0, 1],
    expected: [
      [-1, 0, 1],
      [-1, 1, 0],
      [0, -1, 1],
      [0, 1, -1],
      [1, -1, 0],
      [1, 0, -1],
    ],
  },

  {
    nums: [2, 3, 4],
    expected: [
      [2, 3, 4],
      [2, 4, 3],
      [3, 2, 4],
      [3, 4, 2],
      [4, 2, 3],
      [4, 3, 2],
    ],
  },

  { nums: [1, 2, 3, 4], expectedLength: 24 },
  { nums: [0, 1, 2, 3], expectedLength: 24 },
  { nums: [-1, 0, 1, 2], expectedLength: 24 },

  { nums: [1, 2, 3, 4, 5], expectedLength: 120 },
  { nums: [0, 1, 2, 3, 4], expectedLength: 120 },

  { nums: [1, 2, 3, 4, 5, 6], expectedLength: 720 },
  { nums: [0, 1, 2, 3, 4, 5], expectedLength: 720 },

  { nums: [-3, -2, -1], expectedLength: 6 },
  { nums: [-2, -1, 0], expectedLength: 6 },

  {
    nums: [5, 6],
    expected: [
      [5, 6],
      [6, 5],
    ],
  },
  {
    nums: [9, 8],
    expected: [
      [9, 8],
      [8, 9],
    ],
  },

  { nums: [3, 1, 2], expectedLength: 6 },
  { nums: [4, 2, 1, 3], expectedLength: 24 },

  { nums: [6, 5, 4, 3], expectedLength: 24 },
  {
    nums: [10, -10],
    expected: [
      [10, -10],
      [-10, 10],
    ],
  },

  { nums: [7, 8, 9], expectedLength: 6 },
  { nums: [2, 4, 6, 8], expectedLength: 24 },

  { nums: [-1, -2, -3, -4], expectedLength: 24 },
  { nums: [1, 3, 5, 7, 9], expectedLength: 120 },

  {
    nums: [2, 1],
    expected: [
      [2, 1],
      [1, 2],
    ],
  },
];

// Run tests
describe("Permutations - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ nums, expected, expectedLength }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn([...nums]); // avoid mutation issues

          if (expected) {
            expect(sortPermutations(result)).toEqual(
              sortPermutations(expected),
            );
          } else {
            expect(result.length).toBe(expectedLength);
          }
        });
      });
    });
  });
});
