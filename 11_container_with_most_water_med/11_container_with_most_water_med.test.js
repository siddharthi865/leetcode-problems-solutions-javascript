// Import all 2 solutions
const maxAreaBrute = require("./solutions/solution1");
const maxAreaOptimal = require("./solutions/solution2");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: maxAreaBrute },
  { name: "Two Pointer (Optimal)", fn: maxAreaOptimal },
];

// Store test cases
const testCases = [
  { height: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 },
  { height: [1, 1], expected: 1 },
  { height: [4, 3, 2, 1, 4], expected: 16 },
  { height: [1, 2, 1], expected: 2 },
  { height: [2, 3, 4, 5, 18, 17, 6], expected: 17 },
  { height: [1, 2, 4, 3], expected: 4 },
  { height: [1, 3, 2, 5, 25, 24, 5], expected: 24 },
  { height: [5, 5, 5, 5, 5], expected: 20 },
  { height: [0, 0], expected: 0 },
  { height: [0, 1, 0, 2, 0, 3], expected: 4 },
  { height: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], expected: 25 },
  { height: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], expected: 25 },
  { height: [10000, 10000], expected: 10000 },
  { height: [10000, 0, 10000], expected: 20000 },
  { height: [1, 10000, 1, 10000, 1], expected: 20000 },
  { height: [3, 9, 3, 4, 7, 2, 12, 6], expected: 45 },
  { height: [1, 2], expected: 1 },
  { height: [2, 1], expected: 1 },
  { height: [1, 3, 2, 5, 25, 24, 5, 1, 3, 4], expected: 24 },
  { height: [6, 4, 3, 1, 4, 6, 99, 62, 1, 2, 6], expected: 62 },
  { height: [2, 2, 2, 2], expected: 6 },
  { height: [1, 0, 1, 0, 1, 0, 1], expected: 6 },
  { height: [9, 8, 7, 6, 5, 4, 3, 2, 1, 9], expected: 81 },
  { height: [5, 1, 2, 3, 4, 5], expected: 25 },
  { height: [1, 2, 1, 3, 1, 2, 1], expected: 8 },
  { height: [2, 3, 10, 5, 7, 8, 9], expected: 36 },
  { height: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], expected: 9 },
  { height: [1000, 2000, 3000, 4000, 5000], expected: 6000 },
  { height: [5000, 4000, 3000, 2000, 1000], expected: 6000 },
  { height: [1, 1000, 1, 1000, 1, 1000, 1], expected: 4000 },
];

// Run tests
describe("Container With Most Water - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ height, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(height);
          expect(result).toBe(expected);
        });
      });
    });
  });
});
