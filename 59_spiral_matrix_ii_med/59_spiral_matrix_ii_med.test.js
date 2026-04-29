// Import both solutions
const generateMatrixBrute = require("./solutions/solution1");
const generateMatrixOptimal = require("./solutions/solution2");

// Store solutions
const solutions = [
  { name: "Direction Simulation (Brute)", fn: generateMatrixBrute },
  { name: "Boundary Traversal (Optimal)", fn: generateMatrixOptimal },
];

// Store test cases
const testCases = [
  { n: 1, expected: [[1]] },

  {
    n: 2,
    expected: [
      [1, 2],
      [4, 3],
    ],
  },

  {
    n: 3,
    expected: [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ],
  },

  {
    n: 4,
    expected: [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ],
  },

  {
    n: 5,
    expected: [
      [1, 2, 3, 4, 5],
      [16, 17, 18, 19, 6],
      [15, 24, 25, 20, 7],
      [14, 23, 22, 21, 8],
      [13, 12, 11, 10, 9],
    ],
  },

  {
    n: 6,
    expected: [
      [1, 2, 3, 4, 5, 6],
      [20, 21, 22, 23, 24, 7],
      [19, 32, 33, 34, 25, 8],
      [18, 31, 36, 35, 26, 9],
      [17, 30, 29, 28, 27, 10],
      [16, 15, 14, 13, 12, 11],
    ],
  },

  {
    n: 7,
    expected: [
      [1, 2, 3, 4, 5, 6, 7],
      [24, 25, 26, 27, 28, 29, 8],
      [23, 40, 41, 42, 43, 30, 9],
      [22, 39, 48, 49, 44, 31, 10],
      [21, 38, 47, 46, 45, 32, 11],
      [20, 37, 36, 35, 34, 33, 12],
      [19, 18, 17, 16, 15, 14, 13],
    ],
  },

  {
    n: 8,
    expected: [
      [1, 2, 3, 4, 5, 6, 7, 8],
      [28, 29, 30, 31, 32, 33, 34, 9],
      [27, 48, 49, 50, 51, 52, 35, 10],
      [26, 47, 60, 61, 62, 53, 36, 11],
      [25, 46, 59, 64, 63, 54, 37, 12],
      [24, 45, 58, 57, 56, 55, 38, 13],
      [23, 44, 43, 42, 41, 40, 39, 14],
      [22, 21, 20, 19, 18, 17, 16, 15],
    ],
  },

  {
    n: 9,
    expected: [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [32, 33, 34, 35, 36, 37, 38, 39, 10],
      [31, 56, 57, 58, 59, 60, 61, 40, 11],
      [30, 55, 72, 73, 74, 75, 62, 41, 12],
      [29, 54, 71, 80, 81, 76, 63, 42, 13],
      [28, 53, 70, 79, 78, 77, 64, 43, 14],
      [27, 52, 69, 68, 67, 66, 65, 44, 15],
      [26, 51, 50, 49, 48, 47, 46, 45, 16],
      [25, 24, 23, 22, 21, 20, 19, 18, 17],
    ],
  },

  {
    n: 10,
    expected: (function () {
      let res = [];
      let num = 1;
      let top = 0,
        bottom = 9,
        left = 0,
        right = 9;
      for (let i = 0; i < 10; i++) res[i] = new Array(10);
      while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++) res[top][i] = num++;
        top++;
        for (let i = top; i <= bottom; i++) res[i][right] = num++;
        right--;
        for (let i = right; i >= left; i--) res[bottom][i] = num++;
        bottom--;
        for (let i = bottom; i >= top; i--) res[i][left] = num++;
        left++;
      }
      return res;
    })(),
  },

  // Edge + variety cases
  { n: 11, expected: generateMatrixOptimal(11) },
  { n: 12, expected: generateMatrixOptimal(12) },
  { n: 13, expected: generateMatrixOptimal(13) },
  { n: 14, expected: generateMatrixOptimal(14) },
  { n: 15, expected: generateMatrixOptimal(15) },
  { n: 16, expected: generateMatrixOptimal(16) },
  { n: 17, expected: generateMatrixOptimal(17) },
  { n: 18, expected: generateMatrixOptimal(18) },
  { n: 19, expected: generateMatrixOptimal(19) },
  { n: 20, expected: generateMatrixOptimal(20) },

  // Additional mixed small cases
  {
    n: 3,
    expected: [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ],
  },
  {
    n: 4,
    expected: [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ],
  },
  {
    n: 5,
    expected: [
      [1, 2, 3, 4, 5],
      [16, 17, 18, 19, 6],
      [15, 24, 25, 20, 7],
      [14, 23, 22, 21, 8],
      [13, 12, 11, 10, 9],
    ],
  },
  {
    n: 2,
    expected: [
      [1, 2],
      [4, 3],
    ],
  },
  { n: 1, expected: [[1]] },
  { n: 6, expected: generateMatrixOptimal(6) },
  { n: 7, expected: generateMatrixOptimal(7) },
  { n: 8, expected: generateMatrixOptimal(8) },
  { n: 9, expected: generateMatrixOptimal(9) },
  { n: 10, expected: generateMatrixOptimal(10) },
];

// Run tests
describe("Spiral Matrix II - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ n, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(n);
          expect(result).toEqual(expected);
        });
      });
    });
  });
});
