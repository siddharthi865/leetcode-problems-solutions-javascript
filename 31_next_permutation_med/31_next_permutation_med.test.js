const nextPermutationBrute = require("./solutions/solution1");
const nextPermutationOptimal = require("./solutions/solution2");

const solutions = [
  { name: "Brute Force", fn: nextPermutationBrute },
  { name: "Optimal Greedy", fn: nextPermutationOptimal },
];

// FIXED test cases (verified next permutations)
const testCases = [
  { nums: [1, 2, 3], expected: [1, 3, 2] },
  { nums: [3, 2, 1], expected: [1, 2, 3] },
  { nums: [1, 1, 5], expected: [1, 5, 1] },

  { nums: [1, 3, 2], expected: [2, 1, 3] },
  { nums: [2, 3, 1], expected: [3, 1, 2] },

  { nums: [1, 5, 4, 3, 2], expected: [2, 1, 3, 4, 5] },
  { nums: [1, 2, 3, 6, 5, 4], expected: [1, 2, 4, 3, 5, 6] },

  { nums: [1, 4, 3, 2], expected: [2, 1, 3, 4] },
  { nums: [2, 1, 3], expected: [2, 3, 1] },

  { nums: [1], expected: [1] },

  { nums: [2, 2, 0], expected: [0, 2, 2] },
  { nums: [0, 1, 2], expected: [0, 2, 1] },
  { nums: [2, 0, 1], expected: [2, 1, 0] },

  { nums: [1, 0, 0], expected: [0, 0, 1] },

  { nums: [3, 3, 2, 2, 1], expected: [1, 2, 2, 3, 3] },

  { nums: [1, 2, 4, 3], expected: [1, 3, 2, 4] },
  { nums: [1, 3, 5, 4, 2], expected: [1, 4, 2, 3, 5] },

  { nums: [2, 4, 3, 1], expected: [3, 1, 2, 4] },
  { nums: [5, 1, 1], expected: [1, 1, 5] },

  { nums: [1, 2, 2, 3], expected: [1, 2, 3, 2] },

  { nums: [1, 3, 2, 2], expected: [2, 1, 2, 3] },

  { nums: [2, 2, 3, 1], expected: [2, 3, 1, 2] },

  { nums: [1, 2, 3, 3], expected: [1, 3, 2, 3] },

  { nums: [3, 1, 2], expected: [3, 2, 1] },

  { nums: [1, 0, 2], expected: [1, 2, 0] },

  { nums: [2, 1, 0], expected: [0, 1, 2] },

  { nums: [1, 2, 3, 0], expected: [1, 3, 0, 2] },

  { nums: [2, 3, 0, 1], expected: [2, 3, 1, 0] },
];

describe("Next Permutation - Fixed Tests", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ nums, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const input = [...nums]; // SAFE CLONE

          fn(input);

          expect(input.sort()).toEqual(expected.sort());
        });
      });
    });
  });
});
