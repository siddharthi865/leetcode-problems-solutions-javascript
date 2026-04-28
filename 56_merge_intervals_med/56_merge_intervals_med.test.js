// Import both solutions
const mergeBrute = require("./solutions/solution1");
const mergeOptimal = require("./solutions/solution2");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: mergeBrute },
  { name: "Sorting + Merge (Optimal)", fn: mergeOptimal },
];

function sortIntervals(arr) {
  // simple bubble sort (no built-in sort)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j][0] > arr[j + 1][0]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Store test cases
const testCases = [
  {
    intervals: [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ],
    expected: [
      [1, 6],
      [8, 10],
      [15, 18],
    ],
  },
  {
    intervals: [
      [1, 4],
      [4, 5],
    ],
    expected: [[1, 5]],
  },
  {
    intervals: [
      [4, 7],
      [1, 4],
    ],
    expected: [[1, 7]],
  },
  {
    intervals: [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    expected: [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
  },
  {
    intervals: [
      [1, 10],
      [2, 3],
      [4, 8],
    ],
    expected: [[1, 10]],
  },
  {
    intervals: [
      [5, 7],
      [1, 3],
      [2, 6],
    ],
    expected: [[1, 7]],
  },
  { intervals: [[1, 4]], expected: [[1, 4]] },
  {
    intervals: [
      [1, 4],
      [0, 4],
    ],
    expected: [[0, 4]],
  },
  {
    intervals: [
      [1, 4],
      [2, 3],
    ],
    expected: [[1, 4]],
  },
  {
    intervals: [
      [1, 5],
      [6, 10],
    ],
    expected: [
      [1, 5],
      [6, 10],
    ],
  },
  {
    intervals: [
      [1, 5],
      [5, 6],
    ],
    expected: [[1, 6]],
  },
  {
    intervals: [
      [1, 5],
      [2, 6],
      [3, 7],
      [4, 8],
    ],
    expected: [[1, 8]],
  },
  {
    intervals: [
      [6, 8],
      [1, 9],
      [2, 4],
      [4, 7],
    ],
    expected: [[1, 9]],
  },
  {
    intervals: [
      [1, 3],
      [2, 4],
      [5, 7],
      [6, 8],
    ],
    expected: [
      [1, 4],
      [5, 8],
    ],
  },
  {
    intervals: [
      [1, 4],
      [0, 0],
    ],
    expected: [
      [0, 0],
      [1, 4],
    ],
  },
  {
    intervals: [
      [2, 3],
      [4, 5],
      [6, 7],
      [8, 9],
      [1, 10],
    ],
    expected: [[1, 10]],
  },
  { intervals: [[1, 10000]], expected: [[1, 10000]] },
  {
    intervals: [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    expected: [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
  },
  {
    intervals: [
      [0, 5],
      [3, 10],
      [9, 12],
    ],
    expected: [[0, 12]],
  },
  {
    intervals: [
      [1, 2],
      [2, 3],
      [3, 4],
    ],
    expected: [[1, 4]],
  },
  {
    intervals: [
      [1, 3],
      [5, 7],
      [2, 6],
      [8, 10],
    ],
    expected: [
      [1, 7],
      [8, 10],
    ],
  },
  {
    intervals: [
      [10, 12],
      [1, 3],
      [4, 6],
      [7, 9],
    ],
    expected: [
      [1, 3],
      [4, 6],
      [7, 9],
      [10, 12],
    ],
  },
  {
    intervals: [
      [1, 4],
      [2, 5],
      [7, 9],
      [8, 10],
    ],
    expected: [
      [1, 5],
      [7, 10],
    ],
  },
  {
    intervals: [
      [1, 4],
      [0, 2],
      [3, 5],
    ],
    expected: [[0, 5]],
  },
  {
    intervals: [
      [2, 3],
      [5, 5],
      [2, 2],
      [3, 4],
    ],
    expected: [
      [2, 4],
      [5, 5],
    ],
  },
  {
    intervals: [
      [1, 4],
      [6, 8],
      [2, 3],
      [7, 9],
    ],
    expected: [
      [1, 4],
      [6, 9],
    ],
  },
  {
    intervals: [
      [1, 2],
      [1, 2],
      [1, 2],
    ],
    expected: [[1, 2]],
  },
  {
    intervals: [
      [3, 5],
      [1, 2],
      [2, 4],
    ],
    expected: [[1, 5]],
  },
  {
    intervals: [
      [0, 2],
      [3, 5],
      [4, 6],
      [7, 8],
      [8, 10],
    ],
    expected: [
      [0, 2],
      [3, 6],
      [7, 10],
    ],
  },
  {
    intervals: [
      [100, 200],
      [50, 150],
      [160, 300],
    ],
    expected: [[50, 300]],
  },
];

// Run tests
describe("Merge Intervals - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ intervals, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const input = JSON.parse(JSON.stringify(intervals));
          const result = fn(input);

          const sortedResult = sortIntervals(result);
          const sortedExpected = sortIntervals(expected);

          expect(sortedResult).toEqual(sortedExpected);
        });
      });
    });
  });
});
