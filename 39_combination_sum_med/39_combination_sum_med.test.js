// Import both solutions
const combinationSumBrute = require("./solutions/solution1");
const combinationSumOptimal = require("./solutions/solution2");

// Store solutions
const solutions = [
  { name: "Brute Force Backtracking", fn: combinationSumBrute },
  { name: "Optimized Backtracking", fn: combinationSumOptimal },
];

// Helper to sort combinations for comparison
function normalize(result) {
  return result
    .map((arr) => arr.slice().sort((a, b) => a - b))
    .sort((a, b) => {
      if (a.length !== b.length) return a.length - b.length;
      for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return a[i] - b[i];
      }
      return 0;
    });
}

// Store test cases
const testCases = [
  { candidates: [2, 3, 6, 7], target: 7, expected: [[2, 2, 3], [7]] },
  {
    candidates: [2, 3, 5],
    target: 8,
    expected: [
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ],
  },
  { candidates: [2], target: 1, expected: [] },
  { candidates: [1], target: 1, expected: [[1]] },
  { candidates: [1], target: 2, expected: [[1, 1]] },
  {
    candidates: [2, 4, 6],
    target: 8,
    expected: [
      [2, 2, 2, 2],
      [2, 2, 4],
      [2, 6],
      [4, 4],
    ],
  },
  {
    candidates: [3, 5, 7],
    target: 10,
    expected: [
      [3, 7],
      [5, 5],
    ],
  },
  {
    candidates: [2, 3],
    target: 6,
    expected: [
      [2, 2, 2],
      [3, 3],
    ],
  },
  { candidates: [4, 5], target: 3, expected: [] },
  {
    candidates: [2, 7],
    target: 14,
    expected: [
      [2, 2, 2, 2, 2, 2, 2],
      [7, 7],
    ],
  },
  {
    candidates: [3, 4, 5],
    target: 9,
    expected: [
      [3, 3, 3],
      [4, 5],
    ],
  },
  {
    candidates: [2, 3, 5],
    target: 10,
    expected: [
      [2, 2, 2, 2, 2],
      [2, 2, 3, 3],
      [2, 3, 5],
      [5, 5],
    ],
  },
  { candidates: [6, 7, 8], target: 6, expected: [[6]] },
  { candidates: [6, 7, 8], target: 5, expected: [] },
  { candidates: [2, 3, 4], target: 1, expected: [] },
  { candidates: [2, 3, 4], target: 5, expected: [[2, 3]] },
  {
    candidates: [2, 3, 4],
    target: 6,
    expected: [
      [2, 2, 2],
      [2, 4],
      [3, 3],
    ],
  },
  {
    candidates: [5, 10],
    target: 20,
    expected: [
      [5, 5, 5, 5],
      [5, 5, 10],
      [10, 10],
    ],
  },
  { candidates: [3], target: 9, expected: [[3, 3, 3]] },
  { candidates: [4], target: 2, expected: [] },
  {
    candidates: [2, 5, 10],
    target: 15,
    expected: [
      [2, 2, 2, 2, 2, 5],
      [5, 5, 5],
      [5, 10],
    ],
  },
  { candidates: [7, 3, 2], target: 7, expected: [[2, 2, 3], [7]] },
  {
    candidates: [8, 3, 4],
    target: 11,
    expected: [
      [3, 4, 4],
      [3, 8],
    ],
  },
  {
    candidates: [9, 2, 3],
    target: 9,
    expected: [[2, 2, 2, 3], [3, 3, 3], [9]],
  },
  { candidates: [2, 3, 5, 7], target: 1, expected: [] },
  { candidates: [2, 3, 5, 7], target: 2, expected: [[2]] },
  { candidates: [2, 3, 5, 7], target: 3, expected: [[3]] },
  // Test Case 10 (FIXED)
  {
    candidates: [2, 7],
    target: 14,
    expected: [
      [2, 2, 2, 2, 2, 2, 2],
      [7, 7],
    ],
  },

  // Test Case 13 (FIXED)
  { candidates: [2, 3, 5, 7], target: 7, expected: [[2, 2, 3], [2, 5], [7]] },

  // Test Case 23 (FIXED)
  {
    candidates: [2, 3, 6],
    target: 12,
    expected: [
      [2, 2, 2, 2, 2, 2],
      [2, 2, 2, 3, 3],
      [2, 2, 2, 6],
      [3, 3, 3, 3],
      [3, 3, 6],
      [6, 6],
    ],
  },
];

// Run tests
describe("Combination Sum - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ candidates, target, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(candidates, target);

          expect(normalize(result)).toEqual(normalize(expected));
        });
      });
    });
  });
});
