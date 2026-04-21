// Import all 3 solutions
const combBrute = require("./solutions/solution1");
const combBacktrack = require("./solutions/solution2");
const combOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: combBrute },
  { name: "Backtracking", fn: combBacktrack },
  { name: "Optimal (Sort + Skip Duplicates)", fn: combOptimal },
];

// Helper to sort combinations for comparison
function normalize(arr) {
  return arr
    .map((sub) => sub.slice().sort((a, b) => a - b))
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
  {
    candidates: [10, 1, 2, 7, 6, 1, 5],
    target: 8,
    expected: [
      [1, 1, 6],
      [1, 2, 5],
      [1, 7],
      [2, 6],
    ],
  },
  { candidates: [2, 5, 2, 1, 2], target: 5, expected: [[1, 2, 2], [5]] },
  { candidates: [1, 1], target: 2, expected: [[1, 1]] },
  { candidates: [1, 2, 3], target: 3, expected: [[1, 2], [3]] },
  {
    candidates: [3, 1, 3, 5, 1],
    target: 8,
    expected: [
      [1, 1, 3, 3],
      [3, 5],
    ],
  },
  { candidates: [2, 2, 2], target: 4, expected: [[2, 2]] },
  { candidates: [2, 2, 2], target: 2, expected: [[2]] },
  { candidates: [5, 3, 9], target: 2, expected: [] },
  { candidates: [1], target: 1, expected: [[1]] },
  { candidates: [1], target: 2, expected: [] },
  {
    candidates: [4, 4, 2, 1, 4, 2, 2, 1, 3],
    target: 6,
    expected: [
      [1, 1, 2, 2],
      [1, 1, 4],
      [1, 2, 3],
      [2, 2, 2],
      [2, 4],
    ],
  },
  { candidates: [1, 2, 2, 2, 5], target: 5, expected: [[1, 2, 2], [5]] },
  {
    candidates: [1, 2, 3, 4, 5],
    target: 10,
    expected: [
      [1, 2, 3, 4],
      [1, 4, 5],
      [2, 3, 5],
    ],
  },
  { candidates: [1, 1, 1, 1, 1], target: 3, expected: [[1, 1, 1]] },
  {
    candidates: [8, 7, 4, 3],
    target: 11,
    expected: [
      [3, 8],
      [4, 7],
    ],
  },
  {
    candidates: [1, 3, 5, 7],
    target: 8,
    expected: [
      [1, 7],
      [3, 5],
    ],
  },
  { candidates: [2, 3, 6, 7], target: 7, expected: [[7]] },
  { candidates: [1, 2, 3], target: 7, expected: [] },
  {
    candidates: [2, 5, 2, 1, 2],
    target: 6,
    expected: [
      [1, 5],
      [2, 2, 2],
    ],
  },
  {
    candidates: [1, 2, 2, 3, 3],
    target: 6,
    expected: [
      [1, 2, 3],
      [3, 3],
    ],
  },
  {
    candidates: [9, 1, 2, 7, 6, 1, 5],
    target: 8,
    expected: [
      [1, 1, 6],
      [1, 2, 5],
      [1, 7],
      [2, 6],
    ],
  },
  { candidates: [3, 3, 3, 3], target: 6, expected: [[3, 3]] },
  { candidates: [2, 4, 6, 8], target: 8, expected: [[2, 6], [8]] },
  {
    candidates: [1, 2, 3, 4],
    target: 5,
    expected: [
      [1, 4],
      [2, 3],
    ],
  },
  { candidates: [5, 5, 5], target: 10, expected: [[5, 5]] },
  {
    candidates: [6, 1, 1, 2, 2, 3],
    target: 4,
    expected: [
      [1, 1, 2],
      [1, 3],
      [2, 2],
    ],
  },
  {
    candidates: [1, 2, 2, 2, 2],
    target: 4,
    expected: [[2, 2]],
  }, // note: normalized removes duplicate ordering
  {
    candidates: [7, 2, 1, 6, 1, 5],
    target: 9,
    expected: [
      [1, 1, 2, 5],
      [1, 2, 6],
      [1, 1, 7],
      [2, 7],
    ],
  },
  {
    candidates: [1, 3, 3, 5],
    target: 6,
    expected: [
      [1, 5],
      [3, 3],
    ],
  },
  {
    candidates: [2, 3, 5, 7],
    target: 10,
    expected: [
      [3, 7],
      [2, 3, 5],
    ],
  },
];

// Run tests
describe("Combination Sum II - All Implementations", () => {
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
