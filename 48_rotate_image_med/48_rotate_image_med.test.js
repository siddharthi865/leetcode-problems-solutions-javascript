// Import all 3 solutions
const rotateBrute = require("./solutions/solution1");
const rotateTranspose = require("./solutions/solution2");
const rotateOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force (Extra Space)", fn: rotateBrute },
  { name: "Transpose + Reverse", fn: rotateTranspose },
  { name: "Layer-by-Layer (Optimal)", fn: rotateOptimal },
];

// Helper to deep clone matrix (since rotation is in-place)
function cloneMatrix(matrix) {
  return matrix.map((row) => [...row]);
}

// Store test cases
const testCases = [
  { matrix: [[1]], expected: [[1]] },

  {
    matrix: [
      [1, 2],
      [3, 4],
    ],
    expected: [
      [3, 1],
      [4, 2],
    ],
  },

  {
    matrix: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    expected: [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ],
  },

  {
    matrix: [
      [5, 1, 9, 11],
      [2, 4, 8, 10],
      [13, 3, 6, 7],
      [15, 14, 12, 16],
    ],
    expected: [
      [15, 13, 2, 5],
      [14, 3, 4, 1],
      [12, 6, 8, 9],
      [16, 7, 10, 11],
    ],
  },

  {
    matrix: [
      [0, 0],
      [0, 0],
    ],
    expected: [
      [0, 0],
      [0, 0],
    ],
  },

  {
    matrix: [
      [-1, -2],
      [-3, -4],
    ],
    expected: [
      [-3, -1],
      [-4, -2],
    ],
  },

  {
    matrix: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    expected: [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4],
    ],
  },

  {
    matrix: [
      [2, 5],
      [8, 4],
    ],
    expected: [
      [8, 2],
      [4, 5],
    ],
  },

  {
    matrix: [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1],
    ],
    expected: [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1],
    ],
  },

  {
    matrix: [
      [3, 7, 8],
      [9, 11, 13],
      [15, 16, 17],
    ],
    expected: [
      [15, 9, 3],
      [16, 11, 7],
      [17, 13, 8],
    ],
  },

  {
    matrix: [
      [10, 20, 30],
      [40, 50, 60],
      [70, 80, 90],
    ],
    expected: [
      [70, 40, 10],
      [80, 50, 20],
      [90, 60, 30],
    ],
  },

  {
    matrix: [
      [1, 2],
      [3, 4],
    ],
    expected: [
      [3, 1],
      [4, 2],
    ],
  },

  {
    matrix: [
      [1000, -1000],
      [500, -500],
    ],
    expected: [
      [500, 1000],
      [-500, -1000],
    ],
  },

  {
    matrix: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    expected: [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ],
  },

  {
    matrix: [
      [9, 8, 7],
      [6, 5, 4],
      [3, 2, 1],
    ],
    expected: [
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7],
    ],
  },

  {
    matrix: [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
    ],
    expected: [
      [21, 16, 11, 6, 1],
      [22, 17, 12, 7, 2],
      [23, 18, 13, 8, 3],
      [24, 19, 14, 9, 4],
      [25, 20, 15, 10, 5],
    ],
  },

  {
    matrix: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ],
    expected: [
      [6, 3, 0],
      [7, 4, 1],
      [8, 5, 2],
    ],
  },

  {
    matrix: [
      [2, 4, 6],
      [8, 10, 12],
      [14, 16, 18],
    ],
    expected: [
      [14, 8, 2],
      [16, 10, 4],
      [18, 12, 6],
    ],
  },

  {
    matrix: [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
    expected: [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
  },

  {
    matrix: [
      [5, 10, 15],
      [20, 25, 30],
      [35, 40, 45],
    ],
    expected: [
      [35, 20, 5],
      [40, 25, 10],
      [45, 30, 15],
    ],
  },

  {
    matrix: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    expected: [
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4],
    ],
  },

  {
    matrix: [
      [-1, 0, 1],
      [2, -2, 3],
      [4, 5, -5],
    ],
    expected: [
      [4, 2, -1],
      [5, -2, 0],
      [-5, 3, 1],
    ],
  },

  {
    matrix: [
      [7, 7],
      [7, 7],
    ],
    expected: [
      [7, 7],
      [7, 7],
    ],
  },

  {
    matrix: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    expected: [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ],
  },

  {
    matrix: [
      [11, 12, 13],
      [14, 15, 16],
      [17, 18, 19],
    ],
    expected: [
      [17, 14, 11],
      [18, 15, 12],
      [19, 16, 13],
    ],
  },

  {
    matrix: [
      [2, 3],
      [4, 5],
    ],
    expected: [
      [4, 2],
      [5, 3],
    ],
  },

  {
    matrix: [
      [6, 7, 8],
      [9, 10, 11],
      [12, 13, 14],
    ],
    expected: [
      [12, 9, 6],
      [13, 10, 7],
      [14, 11, 8],
    ],
  },

  {
    matrix: [
      [1, 2],
      [3, 4],
    ],
    expected: [
      [3, 1],
      [4, 2],
    ],
  },

  { matrix: [[0]], expected: [[0]] },

  {
    matrix: [
      [-1000, 1000],
      [999, -999],
    ],
    expected: [
      [999, -1000],
      [-999, 1000],
    ],
  },
];

// Run tests
describe("Rotate Image - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ matrix, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const input = cloneMatrix(matrix);
          fn(input); // in-place modification

          expect(input).toEqual(expected);
        });
      });
    });
  });
});
