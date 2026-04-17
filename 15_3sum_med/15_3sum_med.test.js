// Import all 3 solutions
const threeSumBrute = require("./solutions/solution1");
const threeSumSort = require("./solutions/solution2");
const threeSumOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: threeSumBrute },
  { name: "Sorting + Two Pointer", fn: threeSumSort },
  { name: "Optimal Two Pointer", fn: threeSumOptimal },
];

// -------- NORMALIZATION (NO BUILT-IN SORT) --------
function normalize(arr) {
  // sort each triplet
  function sortTriplet(t) {
    for (let i = 0; i < 2; i++) {
      for (let j = i + 1; j < 3; j++) {
        if (t[i] > t[j]) {
          let temp = t[i];
          t[i] = t[j];
          t[j] = temp;
        }
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    sortTriplet(arr[i]);

    // fix -0 issue
    for (let j = 0; j < 3; j++) {
      if (arr[i][j] === -0) arr[i][j] = 0;
    }
  }

  // sort outer array
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let a = arr[i];
      let b = arr[j];

      if (
        a[0] > b[0] ||
        (a[0] === b[0] && a[1] > b[1]) ||
        (a[0] === b[0] && a[1] === b[1] && a[2] > b[2])
      ) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

// -------- TEST CASES (ALL FIXED) --------
const testCases = [
  {
    nums: [-1, 0, 1, 2, -1, -4],
    expected: [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  },
  { nums: [0, 1, 1], expected: [] },
  { nums: [0, 0, 0], expected: [[0, 0, 0]] },
  { nums: [1, 2, -2, -1], expected: [] },
  {
    nums: [-2, 0, 1, 1, 2],
    expected: [
      [-2, 0, 2],
      [-2, 1, 1],
    ],
  },
  { nums: [-1, -1, -1, 2, 2], expected: [[-1, -1, 2]] },
  {
    nums: [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4],
    expected: [
      [-4, 0, 4],
      [-4, 1, 3],
      [-4, 2, 2],
      [-2, -2, 4],
      [-2, 0, 2],
    ],
  },
  { nums: [3, -2, 1, 0], expected: [] },
  { nums: [-1, 0, 1], expected: [[-1, 0, 1]] },
  { nums: [-5, 2, 3, 0, 0], expected: [[-5, 2, 3]] },
  { nums: [-2, 0, 0, 2, 2], expected: [[-2, 0, 2]] },
  { nums: [-1, 0, 1, 0], expected: [[-1, 0, 1]] },
  { nums: [1, -1, -1, 0], expected: [[-1, 0, 1]] },
  { nums: [-2, -1, 1, 2], expected: [] },
  { nums: [0, 0, 0, 0], expected: [[0, 0, 0]] },
  { nums: [-100000, 50000, 50000], expected: [[-100000, 50000, 50000]] },
  { nums: [1, 1, -2], expected: [[-2, 1, 1]] },
  {
    nums: [-1, -1, 0, 1, 2],
    expected: [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  },
  { nums: [2, -2, 0, 0], expected: [[-2, 0, 2]] },
  {
    nums: [-3, -1, 0, 1, 2],
    expected: [
      [-3, 1, 2],
      [-1, 0, 1],
    ],
  },
  { nums: [-2, -2, 0, 0, 2, 2], expected: [[-2, 0, 2]] },
  { nums: [4, -2, -2, -2, 2, 2, 2], expected: [[-2, -2, 4]] },
  { nums: [-1, -1, 2, 2], expected: [[-1, -1, 2]] },
  { nums: [5, -5, 0], expected: [[-5, 0, 5]] },
  {
    nums: [3, -1, -7, 4, 5, 2, -4],
    expected: [
      [-7, 2, 5],
      [-7, 3, 4],
      [-4, -1, 5],
    ],
  },

  {
    nums: [-3, 0, 1, 2, -1, 1, -2],
    expected: [
      [-3, 1, 2],
      [-2, 0, 2],
      [-2, 1, 1],
      [-1, 0, 1],
    ],
  },
  {
    nums: [1, 2, 3, -3, -2, -1],
    expected: [
      [-3, 1, 2],
      [-2, -1, 3],
    ],
  },
  {
    nums: [0, 0, 0, 1, -1],
    expected: [
      [-1, 0, 1],
      [0, 0, 0],
    ],
  },

  { nums: [-2, 1, 1, 1, 1], expected: [[-2, 1, 1]] },
  {
    nums: [10, -10, 0, 0, 0],
    expected: [
      [-10, 0, 10],
      [0, 0, 0],
    ],
  },
];

// -------- RUN TESTS --------
describe("3Sum - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ nums, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(nums);

          expect(normalize(result)).toEqual(normalize(expected));
        });
      });
    });
  });
});
