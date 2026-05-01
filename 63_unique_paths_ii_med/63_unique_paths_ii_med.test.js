// Import all 4 solutions
const sol1 = require("./solutions/solution1"); // Brute
const sol2 = require("./solutions/solution2"); // Memo
const sol3 = require("./solutions/solution3"); // Tabulation
const sol4 = require("./solutions/solution4"); // Optimized

// Store solutions
const solutions = [
  { name: "Brute Force", fn: sol1 },
  { name: "Memoization", fn: sol2 },
  { name: "Tabulation", fn: sol3 },
  { name: "Space Optimized", fn: sol4 },
];

// Store test cases
const testCases = [
  { grid: [[0]], expected: 1 },
  { grid: [[1]], expected: 0 },
  { grid: [[0, 0]], expected: 1 },
  { grid: [[0, 1]], expected: 0 },
  { grid: [[0], [0]], expected: 1 },
  { grid: [[0], [1]], expected: 0 },

  {
    grid: [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    expected: 2,
  },
  {
    grid: [
      [0, 1],
      [0, 0],
    ],
    expected: 1,
  },

  {
    grid: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    expected: 6,
  },
  {
    grid: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    expected: 1,
  },

  {
    grid: [
      [0, 0, 1],
      [0, 0, 0],
      [1, 0, 0],
    ],
    expected: 4,
  },
  {
    grid: [
      [0, 1, 1],
      [0, 0, 1],
      [0, 0, 0],
    ],
    expected: 2,
  },

  { grid: [[0, 0, 0, 0]], expected: 1 },
  { grid: [[0, 1, 0, 0]], expected: 0 },

  { grid: [[0], [0], [0], [0]], expected: 1 },
  { grid: [[0], [1], [0], [0]], expected: 0 },

  {
    grid: [
      [0, 0],
      [0, 0],
    ],
    expected: 2,
  },
  {
    grid: [
      [0, 1],
      [1, 0],
    ],
    expected: 0,
  },

  {
    grid: [
      [0, 0, 0],
      [1, 1, 0],
      [0, 0, 0],
    ],
    expected: 1,
  },
  {
    grid: [
      [0, 0, 0],
      [1, 1, 1],
      [0, 0, 0],
    ],
    expected: 0,
  },

  {
    grid: [
      [0, 0, 0],
      [0, 0, 1],
      [0, 0, 0],
    ],
    expected: 3,
  },
  {
    grid: [
      [0, 0, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    expected: 1,
  },

  {
    grid: [
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    expected: 4,
  },
  {
    grid: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    expected: 1,
  },

  {
    grid: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 1, 0],
    ],
    expected: 3,
  },
  {
    grid: [
      [0, 0, 0],
      [0, 0, 0],
      [1, 1, 0],
    ],
    expected: 3,
  },

  {
    grid: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    expected: 20,
  },
  {
    grid: [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    expected: 5,
  },

  {
    grid: [
      [0, 0, 0],
      [0, 1, 0],
      [1, 0, 0],
    ],
    expected: 1,
  },
  {
    grid: [
      [0, 0, 1],
      [1, 0, 0],
      [0, 0, 0],
    ],
    expected: 2,
  },
];

// Run tests
describe("Unique Paths II - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ grid, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(grid);

          expect(result).toBe(expected);
        });
      });
    });
  });
});
