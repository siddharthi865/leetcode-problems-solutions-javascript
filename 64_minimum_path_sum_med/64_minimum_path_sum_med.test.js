// Import all 4 solutions
const minPathBrute = require("./solutions/solution1");
const minPathMemo = require("./solutions/solution2");
const minPathDP = require("./solutions/solution3");
const minPathOptimal = require("./solutions/solution4");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: minPathBrute },
  { name: "Memoization", fn: minPathMemo },
  { name: "2D DP (Tabulation)", fn: minPathDP },
  { name: "1D DP (Optimal)", fn: minPathOptimal },
];

// Store test cases
const testCases = [
  { grid: [[1]], expected: 1 },
  { grid: [[1, 2, 3]], expected: 6 },
  { grid: [[1], [2], [3]], expected: 6 },
  {
    grid: [
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1],
    ],
    expected: 7,
  },
  {
    grid: [
      [1, 2, 3],
      [4, 5, 6],
    ],
    expected: 12,
  },
  {
    grid: [
      [5, 1, 0],
      [2, 3, 4],
      [1, 1, 1],
    ],
    expected: 10,
  },
  {
    grid: [
      [0, 0, 0],
      [0, 0, 0],
    ],
    expected: 0,
  },
  {
    grid: [
      [1, 2],
      [1, 1],
    ],
    expected: 3,
  },
  {
    grid: [
      [1, 9, 1],
      [1, 9, 1],
      [1, 1, 1],
    ],
    expected: 5,
  },
  {
    grid: [
      [3, 4, 1, 2],
      [2, 1, 8, 9],
      [4, 7, 8, 1],
    ],
    expected: 20,
  },
  {
    grid: [
      [1, 2, 5],
      [3, 2, 1],
    ],
    expected: 6,
  },
  {
    grid: [
      [7, 1, 3],
      [2, 8, 2],
      [1, 1, 1],
    ],
    expected: 12,
  },
  {
    grid: [
      [1, 2, 3],
      [4, 1, 2],
      [7, 8, 1],
    ],
    expected: 7,
  },
  {
    grid: [
      [5, 9, 6],
      [11, 5, 2],
    ],
    expected: 21,
  },
  { grid: [[1, 2, 3, 4]], expected: 10 },
  { grid: [[1], [2], [3], [4]], expected: 10 },
  {
    grid: [
      [1, 10, 1],
      [1, 10, 1],
      [1, 1, 1],
    ],
    expected: 5,
  },
  {
    grid: [
      [2, 2, 1],
      [3, 8, 2],
      [5, 3, 1],
    ],
    expected: 8,
  },
  {
    grid: [
      [1, 3, 5],
      [2, 1, 2],
      [4, 3, 1],
    ],
    expected: 7,
  },
  {
    grid: [
      [8, 2, 4],
      [6, 5, 7],
      [3, 1, 2],
    ],
    expected: 18,
  },
  {
    grid: [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
    expected: 5,
  },
  {
    grid: [
      [0, 1, 2],
      [1, 0, 1],
      [2, 1, 0],
    ],
    expected: 2,
  },
  {
    grid: [
      [1, 4, 8, 6, 2, 2, 1],
      [4, 7, 3, 1, 4, 5, 5],
      [8, 8, 2, 1, 1, 8, 0],
      [8, 9, 2, 9, 8, 0, 8],
      [5, 7, 5, 7, 1, 8, 5],
      [7, 0, 9, 4, 5, 6, 5],
      [4, 9, 9, 7, 9, 1, 9],
    ],
    expected: 48,
  },
  {
    grid: [
      [1, 2],
      [5, 6],
      [1, 1],
    ],
    expected: 8,
  },
  {
    grid: [
      [3, 2],
      [1, 0],
    ],
    expected: 4,
  },
  {
    grid: [
      [1, 100],
      [1, 1],
    ],
    expected: 3,
  },
  {
    grid: [
      [9, 1, 4],
      [6, 2, 8],
      [5, 3, 7],
    ],
    expected: 22,
  },
  {
    grid: [
      [1, 2, 3],
      [3, 2, 1],
    ],
    expected: 6,
  },
  {
    grid: [
      [2, 1, 3, 4],
      [3, 2, 1, 5],
      [4, 3, 2, 1],
    ],
    expected: 9,
  },
  {
    grid: [
      [5, 5, 5],
      [5, 5, 5],
      [5, 5, 5],
    ],
    expected: 25,
  },
];

// Run tests
describe("Minimum Path Sum - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ grid, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(grid);

          if (result === undefined) {
            expect(result).toBeUndefined();
          } else {
            expect(result).toBe(expected);
          }
        });
      });
    });
  });
});
