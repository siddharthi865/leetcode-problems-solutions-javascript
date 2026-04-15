// Import all 3 solutions
const generateBrute = require("./solutions/solution1");
const generateBetter = require("./solutions/solution2");
const generateOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: generateBrute },
  { name: "Better Construction", fn: generateBetter },
  { name: "In-Place Optimal", fn: generateOptimal },
];

// Store test cases
const testCases = [
  { numRows: 1, expected: [[1]] },
  { numRows: 2, expected: [[1], [1, 1]] },
  { numRows: 3, expected: [[1], [1, 1], [1, 2, 1]] },
  { numRows: 4, expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]] },
  {
    numRows: 5,
    expected: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]],
  },
  {
    numRows: 6,
    expected: [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
    ],
  },
  {
    numRows: 7,
    expected: [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
      [1, 6, 15, 20, 15, 6, 1],
    ],
  },
  {
    numRows: 8,
    expected: [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
      [1, 6, 15, 20, 15, 6, 1],
      [1, 7, 21, 35, 35, 21, 7, 1],
    ],
  },
  {
    numRows: 9,
    expected: [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
      [1, 6, 15, 20, 15, 6, 1],
      [1, 7, 21, 35, 35, 21, 7, 1],
      [1, 8, 28, 56, 70, 56, 28, 8, 1],
    ],
  },
  {
    numRows: 10,
    expected: [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
      [1, 6, 15, 20, 15, 6, 1],
      [1, 7, 21, 35, 35, 21, 7, 1],
      [1, 8, 28, 56, 70, 56, 28, 8, 1],
      [1, 9, 36, 84, 126, 126, 84, 36, 9, 1],
    ],
  },

  // Edge-heavy & mid cases
  {
    numRows: 11,
    expected: [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
      [1, 6, 15, 20, 15, 6, 1],
      [1, 7, 21, 35, 35, 21, 7, 1],
      [1, 8, 28, 56, 70, 56, 28, 8, 1],
      [1, 9, 36, 84, 126, 126, 84, 36, 9, 1],
      [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1],
    ],
  },
  {
    numRows: 12,
    expected: [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
      [1, 6, 15, 20, 15, 6, 1],
      [1, 7, 21, 35, 35, 21, 7, 1],
      [1, 8, 28, 56, 70, 56, 28, 8, 1],
      [1, 9, 36, 84, 126, 126, 84, 36, 9, 1],
      [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1],
      [1, 11, 55, 165, 330, 462, 462, 330, 165, 55, 11, 1],
    ],
  },

  // Random smaller checks
  { numRows: 13, expected: generateBrute(13) },
  { numRows: 14, expected: generateBrute(14) },
  { numRows: 15, expected: generateBrute(15) },
  { numRows: 16, expected: generateBrute(16) },
  { numRows: 17, expected: generateBrute(17) },
  { numRows: 18, expected: generateBrute(18) },
  { numRows: 19, expected: generateBrute(19) },
  { numRows: 20, expected: generateBrute(20) },

  // Larger edge cases (constraint upper bound testing)
  { numRows: 21, expected: generateBrute(21) },
  { numRows: 22, expected: generateBrute(22) },
  { numRows: 23, expected: generateBrute(23) },
  { numRows: 24, expected: generateBrute(24) },
  { numRows: 25, expected: generateBrute(25) },
  { numRows: 26, expected: generateBrute(26) },
  { numRows: 27, expected: generateBrute(27) },
  { numRows: 28, expected: generateBrute(28) },
  { numRows: 29, expected: generateBrute(29) },
  { numRows: 30, expected: generateBrute(30) },
];

// Run tests
describe("Pascal Triangle - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ numRows, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(numRows);
          expect(result).toEqual(expected);
        });
      });
    });
  });
});
