// Import both solutions
const insertBrute = require("./solutions/solution1");
const insertOptimal = require("./solutions/solution2");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: insertBrute },
  { name: "Optimal (Single Pass)", fn: insertOptimal },
];

// Store test cases
const testCases = [
  {
    intervals: [
      [1, 3],
      [6, 9],
    ],
    newInterval: [2, 5],
    expected: [
      [1, 5],
      [6, 9],
    ],
  },
  {
    intervals: [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    newInterval: [4, 8],
    expected: [
      [1, 2],
      [3, 10],
      [12, 16],
    ],
  },
  { intervals: [], newInterval: [5, 7], expected: [[5, 7]] },
  { intervals: [[1, 5]], newInterval: [2, 3], expected: [[1, 5]] },
  { intervals: [[1, 5]], newInterval: [2, 7], expected: [[1, 7]] },
  {
    intervals: [[1, 5]],
    newInterval: [6, 8],
    expected: [
      [1, 5],
      [6, 8],
    ],
  },
  {
    intervals: [
      [3, 5],
      [7, 9],
    ],
    newInterval: [1, 2],
    expected: [
      [1, 2],
      [3, 5],
      [7, 9],
    ],
  },
  {
    intervals: [
      [3, 5],
      [7, 9],
    ],
    newInterval: [0, 10],
    expected: [[0, 10]],
  },
  {
    intervals: [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    newInterval: [7, 8],
    expected: [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ],
  },
  {
    intervals: [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    newInterval: [0, 0],
    expected: [
      [0, 0],
      [1, 2],
      [3, 4],
      [5, 6],
    ],
  },
  {
    intervals: [
      [1, 3],
      [6, 9],
    ],
    newInterval: [10, 11],
    expected: [
      [1, 3],
      [6, 9],
      [10, 11],
    ],
  },
  {
    intervals: [
      [1, 3],
      [6, 9],
    ],
    newInterval: [0, 0],
    expected: [
      [0, 0],
      [1, 3],
      [6, 9],
    ],
  },
  {
    intervals: [
      [2, 3],
      [5, 7],
    ],
    newInterval: [1, 6],
    expected: [[1, 7]],
  },
  {
    intervals: [
      [1, 5],
      [6, 8],
    ],
    newInterval: [5, 6],
    expected: [[1, 8]],
  },
  {
    intervals: [
      [1, 2],
      [4, 5],
      [7, 8],
    ],
    newInterval: [2, 7],
    expected: [[1, 8]],
  },
  {
    intervals: [
      [1, 2],
      [4, 5],
      [7, 8],
    ],
    newInterval: [3, 3],
    expected: [
      [1, 2],
      [3, 3],
      [4, 5],
      [7, 8],
    ],
  },
  { intervals: [[1, 10]], newInterval: [2, 3], expected: [[1, 10]] },
  { intervals: [[1, 10]], newInterval: [0, 20], expected: [[0, 20]] },
  {
    intervals: [
      [5, 7],
      [8, 10],
    ],
    newInterval: [1, 3],
    expected: [
      [1, 3],
      [5, 7],
      [8, 10],
    ],
  },
  {
    intervals: [
      [5, 7],
      [8, 10],
    ],
    newInterval: [6, 9],
    expected: [[5, 10]],
  },
  {
    intervals: [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    newInterval: [17, 19],
    expected: [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
      [17, 19],
    ],
  },
  {
    intervals: [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    newInterval: [0, 20],
    expected: [[0, 20]],
  },
  {
    intervals: [
      [2, 4],
      [6, 8],
    ],
    newInterval: [1, 9],
    expected: [[1, 9]],
  },
  {
    intervals: [
      [2, 4],
      [6, 8],
    ],
    newInterval: [4, 6],
    expected: [[2, 8]],
  },
  {
    intervals: [
      [1, 3],
      [5, 7],
      [9, 11],
    ],
    newInterval: [4, 8],
    expected: [
      [1, 3],
      [4, 8],
      [9, 11],
    ],
  },
  {
    intervals: [
      [1, 3],
      [5, 7],
      [9, 11],
    ],
    newInterval: [0, 12],
    expected: [[0, 12]],
  },
  {
    intervals: [
      [1, 3],
      [5, 7],
      [9, 11],
    ],
    newInterval: [3, 5],
    expected: [
      [1, 7],
      [9, 11],
    ],
  },
  {
    intervals: [
      [1, 3],
      [5, 7],
      [9, 11],
    ],
    newInterval: [6, 10],
    expected: [
      [1, 3],
      [5, 11],
    ],
  },
  {
    intervals: [
      [1, 3],
      [5, 7],
      [9, 11],
    ],
    newInterval: [11, 13],
    expected: [
      [1, 3],
      [5, 7],
      [9, 13],
    ],
  },
  {
    intervals: [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ],
    newInterval: [2, 7],
    expected: [[1, 8]],
  },
];

// Run tests
describe("Insert Interval - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ intervals, newInterval, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn(intervals, newInterval);

          expect(result).toEqual(expected);
        });
      });
    });
  });
});
