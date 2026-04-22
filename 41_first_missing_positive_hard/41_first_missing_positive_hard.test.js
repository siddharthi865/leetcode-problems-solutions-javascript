// Import all 3 solutions
const sol1 = require("./solutions/solution1");
const sol2 = require("./solutions/solution2");
const sol3 = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: sol1 },
  { name: "Hash Set", fn: sol2 },
  { name: "Cyclic Sort (Optimal)", fn: sol3 },
];

// Store test cases
const testCases = [
  { nums: [1, 2, 0], expected: 3 },
  { nums: [3, 4, -1, 1], expected: 2 },
  { nums: [7, 8, 9, 11, 12], expected: 1 },
  { nums: [1], expected: 2 },
  { nums: [2], expected: 1 },
  { nums: [1, 1], expected: 2 },
  { nums: [2, 2], expected: 1 },
  { nums: [1, 2, 3, 4, 5], expected: 6 },
  { nums: [-1, -2, -3], expected: 1 },
  { nums: [0, 0, 0], expected: 1 },
  { nums: [2, 3, 4], expected: 1 },
  { nums: [1, 2, 6, 3, 5, 4], expected: 7 },
  { nums: [1, 1000], expected: 2 },
  { nums: [2, 1], expected: 3 },
  { nums: [3, 2, 1], expected: 4 },
  { nums: [4, 3, 2, 1], expected: 5 },
  { nums: [1, 2, 3, 10, 2147483647], expected: 4 },
  { nums: [5, 4, 3, 2, 1], expected: 6 },
  { nums: [1, 1, 0, -1, -2], expected: 2 },
  { nums: [2, 3, 7, 6, 8, -1, -10, 15], expected: 1 },
  { nums: [1, 2, 3, 4, 5, 7], expected: 6 },
  { nums: [10, 9, 8, 7, 6, 5, 4, 3, 2], expected: 1 },
  { nums: [1, 2, 3, 4, 5, 6, 8, 9], expected: 7 },
  { nums: [2, 2, 2, 2, 2], expected: 1 },
  { nums: [1, 2, 2, 1, 3, 1, 0, 4, 0], expected: 5 },
  { nums: [100, 101, 102], expected: 1 },
  { nums: [1, 2, 3, 4, 5, 100000], expected: 6 },
  { nums: [-100000, 100000], expected: 1 },
  { nums: [1, 2, 3, 4, 6, 7, 8, 9, 10], expected: 5 },
  { nums: [3, 3, 3, 1, 2], expected: 4 },
];

// Run tests
describe("First Missing Positive - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ nums, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn([...nums]); // clone to avoid mutation issues
          expect(result).toBe(expected);
        });
      });
    });
  });
});
