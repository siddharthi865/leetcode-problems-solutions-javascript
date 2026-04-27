// Import both solutions
const spiralBrute = require("./solutions/solution1");
const spiralOptimal = require("./solutions/solution2");

// Store solutions
const solutions = [
  { name: "Visited Simulation (Brute Force)", fn: spiralBrute },
  { name: "Boundary Traversal (Optimal)", fn: spiralOptimal },
];

// Store test cases
const testCases = [
  { matrix: [[1]], expected: [1] },
  { matrix: [[1, 2]], expected: [1, 2] },
  { matrix: [[1], [2]], expected: [1, 2] },
  { matrix: [[1, 2, 3]], expected: [1, 2, 3] },
  { matrix: [[1], [2], [3]], expected: [1, 2, 3] },

  {
    matrix: [
      [1, 2],
      [3, 4],
    ],
    expected: [1, 2, 4, 3],
  },
  {
    matrix: [
      [1, 2, 3],
      [4, 5, 6],
    ],
    expected: [1, 2, 3, 6, 5, 4],
  },
  {
    matrix: [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    expected: [1, 2, 4, 6, 5, 3],
  },

  {
    matrix: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    expected: [1, 2, 3, 6, 9, 8, 7, 4, 5],
  },
  {
    matrix: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
    ],
    expected: [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8],
  },

  {
    matrix: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ],
    expected: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7],
  },
  {
    matrix: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    expected: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10],
  },

  {
    matrix: [
      [-1, -2, -3],
      [-4, -5, -6],
      [-7, -8, -9],
    ],
    expected: [-1, -2, -3, -6, -9, -8, -7, -4, -5],
  },

  { matrix: [[1, 2, 3, 4, 5]], expected: [1, 2, 3, 4, 5] },
  { matrix: [[1], [2], [3], [4], [5]], expected: [1, 2, 3, 4, 5] },

  {
    matrix: [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ],
    expected: [1, 2, 4, 6, 8, 7, 5, 3],
  },
  {
    matrix: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
      [13, 14, 15],
    ],
    expected: [1, 2, 3, 6, 9, 12, 15, 14, 13, 10, 7, 4, 5, 8, 11],
  },

  {
    matrix: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    matrix: [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },

  {
    matrix: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
    ],
    expected: [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8],
  },
  {
    matrix: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
      [17, 18, 19, 20],
    ],
    expected: [
      1, 2, 3, 4, 8, 12, 16, 20, 19, 18, 17, 13, 9, 5, 6, 7, 11, 15, 14, 10,
    ],
  },

  {
    matrix: [
      [5, 5, 5],
      [5, 5, 5],
      [5, 5, 5],
    ],
    expected: [5, 5, 5, 5, 5, 5, 5, 5, 5],
  },

  {
    matrix: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ],
    expected: [0, 1, 2, 5, 8, 7, 6, 3, 4],
  },

  {
    matrix: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
    ],
    expected: [1, 2, 3, 4, 8, 7, 6, 5],
  },
  {
    matrix: [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    expected: [1, 2, 4, 6, 5, 3],
  },

  {
    matrix: [
      [1, 2, 3],
      [4, 5, 6],
    ],
    expected: [1, 2, 3, 6, 5, 4],
  },

  {
    matrix: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
      [13, 14, 15],
      [16, 17, 18],
    ],
    expected: [1, 2, 3, 6, 9, 12, 15, 18, 17, 16, 13, 10, 7, 4, 5, 8, 11, 14],
  },

  {
    matrix: [
      [1, 2],
      [3, 4],
    ],
    expected: [1, 2, 4, 3],
  },
  {
    matrix: [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
    ],
    expected: [1, 2, 3, 4, 5, 10, 9, 8, 7, 6],
  },
];

// Run tests
describe("Spiral Matrix - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ matrix, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(matrix);

          if (result === undefined) {
            expect(result).toBeUndefined();
          } else {
            expect(result).toEqual(expected);
          }
        });
      });
    });
  });
});
