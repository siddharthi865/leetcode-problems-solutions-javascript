// Import both solutions
const permuteBrute = require("./solutions/solution1");
const permuteOptimal = require("./solutions/solution2");

// Store solutions
const solutions = [
  { name: "Brute Force (Generate + Deduplicate)", fn: permuteBrute },
  { name: "Backtracking with Skip Duplicates (Optimal)", fn: permuteOptimal },
];

// Helper to normalize permutations (sort inner arrays + outer array)
function normalize(arr) {
  return arr
    .map((p) => p.slice().sort((a, b) => a - b))
    .sort((a, b) => {
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return a[i] - b[i];
      }
      return 0;
    });
}

// Store test cases
const testCases = [
  {
    nums: [1, 1, 2],
    expected: [
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1],
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
  { nums: [1], expected: [[1]] },
  { nums: [2, 2], expected: [[2, 2]] },
  {
    nums: [1, 2],
    expected: [
      [1, 2],
      [2, 1],
    ],
  },
  { nums: [1, 1, 1], expected: [[1, 1, 1]] },
  {
    nums: [1, 2, 2],
    expected: [
      [1, 2, 2],
      [2, 1, 2],
      [2, 2, 1],
    ],
  },
  {
    nums: [2, 1, 1],
    expected: [
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1],
    ],
  },
  {
    nums: [3, 3, 0, 3],
    expected: [
      [3, 3, 3, 0],
      [3, 3, 0, 3],
      [3, 0, 3, 3],
      [0, 3, 3, 3],
    ],
  },
  {
    nums: [0, 1, 0],
    expected: [
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0],
    ],
  },
  {
    nums: [-1, -1, 2],
    expected: [
      [-1, -1, 2],
      [-1, 2, -1],
      [2, -1, -1],
    ],
  },
  { nums: [1, 2, 3, 4], expected: 24 }, // count check
  { nums: [1, 1, 2, 2], expected: 6 },
  { nums: [0, 0, 0, 0], expected: [[0, 0, 0, 0]] },
  {
    nums: [1, 2, 1],
    expected: [
      [1, 1, 2],
      [1, 2, 1],
      [2, 1, 1],
    ],
  },
  { nums: [2, 2, 1, 1], expected: 6 },
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
  { nums: [5, 5, 5, 5, 5], expected: [[5, 5, 5, 5, 5]] },
  { nums: [1, 2, 2, 3], expected: 12 },
  { nums: [3, 2, 1], expected: 6 },
  { nums: [1, 1, 2, 3], expected: 12 },
  { nums: [2, 3, 2, 3], expected: 6 },
  { nums: [0, 1, 2, 0], expected: 12 },
  { nums: [-2, -2, -1, -1], expected: 6 },
  { nums: [1, 2, 3, 4, 5], expected: 120 },
  { nums: [1, 1, 1, 2], expected: 4 },
  { nums: [2, 2, 2, 3, 3], expected: 10 },
  { nums: [1, 2, 3, 1], expected: 12 },
  { nums: [4, 4, 4, 4, 4, 4, 4, 4], expected: [[4, 4, 4, 4, 4, 4, 4, 4]] },
  { nums: [1, 2, 2, 2, 3], expected: 20 },
];

// Run tests
describe("Permutations II - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ nums, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(nums);

          if (typeof expected === "number") {
            // Only check count when permutations are too many
            expect(result.length).toBe(expected);
          } else {
            expect(normalize(result)).toEqual(normalize(expected));
          }
        });
      });
    });
  });
});
