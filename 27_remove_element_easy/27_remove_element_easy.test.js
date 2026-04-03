// Import all 3 solutions
const removeElementBrute = require("./solutions/solution1");
const removeElementTwoPointer = require("./solutions/solution2");
const removeElementOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: removeElementBrute },
  { name: "Two Pointer (Overwrite)", fn: removeElementTwoPointer },
  { name: "Swap with End (Optimal)", fn: removeElementOptimal },
];

// Store test cases
const testCases = [
  { nums: [3, 2, 2, 3], val: 3, expected: 2 },
  { nums: [0, 1, 2, 2, 3, 0, 4, 2], val: 2, expected: 5 },
  { nums: [], val: 1, expected: 0 },
  { nums: [1], val: 1, expected: 0 },
  { nums: [1], val: 2, expected: 1 },
  { nums: [2, 2, 2], val: 2, expected: 0 },
  { nums: [4, 5, 6], val: 3, expected: 3 },
  { nums: [1, 2, 3, 4, 5], val: 5, expected: 4 },
  { nums: [5, 5, 5, 1, 2, 3], val: 5, expected: 3 },
  { nums: [1, 2, 3, 4, 5], val: 1, expected: 4 },
  { nums: [2, 3, 2, 3, 2, 3], val: 2, expected: 3 },
  { nums: [0, 0, 0, 0], val: 0, expected: 0 },
  { nums: [1, 2, 3, 4, 5], val: 6, expected: 5 },
  { nums: [1, 1, 1, 2, 2, 3], val: 1, expected: 3 },
  { nums: [10, 20, 30, 40], val: 20, expected: 3 },
  { nums: [7, 7, 7, 7, 8, 9], val: 7, expected: 2 },
  { nums: [1, 2, 3, 2, 4, 2, 5], val: 2, expected: 4 },
  { nums: [50, 50, 50, 50], val: 50, expected: 0 },
  { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], val: 10, expected: 9 },
  { nums: [2, 2, 3, 3, 4, 4, 5, 5], val: 3, expected: 6 },
];

// Run tests
describe("Remove Element - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ nums, val, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const input = [...nums]; // clone to avoid mutation issues
          const k = fn(input, val);

          expect(k).toBe(expected);

          // Validate first k elements do not contain val
          for (let i = 0; i < k; i++) {
            expect(input[i]).not.toBe(val);
          }
        });
      });
    });
  });
});
