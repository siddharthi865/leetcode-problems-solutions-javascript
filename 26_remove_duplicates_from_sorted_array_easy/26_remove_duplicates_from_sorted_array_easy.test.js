// Import both solutions
const removeDuplicatesBrute = require("./solutions/solution1");
const removeDuplicatesOptimal = require("./solutions/solution2");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: removeDuplicatesBrute },
  { name: "Two Pointer (Optimal)", fn: removeDuplicatesOptimal },
];

// Store test cases
const testCases = [
  { nums: [1, 1, 2], expectedK: 2, expectedNums: [1, 2] },
  {
    nums: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
    expectedK: 5,
    expectedNums: [0, 1, 2, 3, 4],
  },
  { nums: [1], expectedK: 1, expectedNums: [1] },
  { nums: [1, 1, 1, 1, 1], expectedK: 1, expectedNums: [1] },
  { nums: [1, 2, 3, 4, 5], expectedK: 5, expectedNums: [1, 2, 3, 4, 5] },
  {
    nums: [-3, -3, -2, -1, -1, 0],
    expectedK: 4,
    expectedNums: [-3, -2, -1, 0],
  },
  { nums: [0, 0, 0, 0, 0, 0], expectedK: 1, expectedNums: [0] },
  {
    nums: [-100, -100, -50, 0, 50, 100],
    expectedK: 5,
    expectedNums: [-100, -50, 0, 50, 100],
  },
  { nums: [1, 2, 2, 2, 3], expectedK: 3, expectedNums: [1, 2, 3] },
  { nums: [1, 1, 2, 2, 3, 3, 4, 4], expectedK: 4, expectedNums: [1, 2, 3, 4] },
  { nums: [2, 2, 2, 3, 3, 4, 5, 5], expectedK: 4, expectedNums: [2, 3, 4, 5] },
  { nums: [-1, -1, 0, 0, 1, 1], expectedK: 3, expectedNums: [-1, 0, 1] },
  { nums: [10, 10, 10, 10], expectedK: 1, expectedNums: [10] },
  {
    nums: [-5, -4, -4, -3, -2, -2, -1],
    expectedK: 5,
    expectedNums: [-5, -4, -3, -2, -1],
  },
  {
    nums: [0, 1, 1, 1, 2, 2, 3, 4, 4, 5],
    expectedK: 6,
    expectedNums: [0, 1, 2, 3, 4, 5],
  },
  {
    nums: [-100, -50, -50, -50, 0, 0, 50, 100],
    expectedK: 5,
    expectedNums: [-100, -50, 0, 50, 100],
  },
  {
    nums: [1, 1, 2, 3, 3, 3, 4, 5, 5, 6],
    expectedK: 6,
    expectedNums: [1, 2, 3, 4, 5, 6],
  },
  {
    nums: [7, 7, 8, 8, 9, 9, 10, 10],
    expectedK: 4,
    expectedNums: [7, 8, 9, 10],
  },
  {
    nums: [-2, -2, -2, -1, -1, 0, 1, 1, 2],
    expectedK: 5,
    expectedNums: [-2, -1, 0, 1, 2],
  },
  {
    nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    expectedK: 10,
    expectedNums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
];

// Run tests
describe("Remove Duplicates from Sorted Array - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ nums, expectedK, expectedNums }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const input = [...nums]; // preserve original input
          const k = fn(input);

          expect(k).toBe(expectedK);

          for (let i = 0; i < k; i++) {
            expect(input[i]).toBe(expectedNums[i]);
          }
        });
      });
    });
  });
});
