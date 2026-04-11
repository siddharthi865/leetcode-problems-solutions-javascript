// Import all 3 solutions
const solution1 = require("./solutions/solution1");
const solution2 = require("./solutions/solution2");
const solution3 = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force", fn: solution1 },
  { name: "Iterative Optimal", fn: solution2 },
  { name: "Recursive", fn: solution3 },
];

// Helper: Convert array to linked list
function arrayToList(arr) {
  let dummy = { val: 0, next: null };
  let current = dummy;

  for (let i = 0; i < arr.length; i++) {
    current.next = { val: arr[i], next: null };
    current = current.next;
  }

  return dummy.next;
}

// Helper: Convert linked list to array
function listToArray(head) {
  let arr = [];
  let current = head;

  while (current !== null) {
    arr[arr.length] = current.val;
    current = current.next;
  }

  return arr;
}

// Store test cases
const testCases = [
  { input: [], expected: [] },
  { input: [1], expected: [1] },
  { input: [1, 1], expected: [1] },
  { input: [1, 1, 2], expected: [1, 2] },
  { input: [1, 1, 2, 3, 3], expected: [1, 2, 3] },
  { input: [1, 2, 3, 4], expected: [1, 2, 3, 4] },
  { input: [1, 1, 1, 1], expected: [1] },
  { input: [0, 0, 0, 0, 0], expected: [0] },
  { input: [-1, -1, 0, 0, 1, 1], expected: [-1, 0, 1] },
  {
    input: [-100, -100, -50, 0, 0, 50, 100, 100],
    expected: [-100, -50, 0, 50, 100],
  },
  { input: [1, 2, 2, 2, 3], expected: [1, 2, 3] },
  { input: [1, 1, 2, 2, 3, 3, 4, 4], expected: [1, 2, 3, 4] },
  { input: [5, 5, 5, 6, 7, 7, 8], expected: [5, 6, 7, 8] },
  { input: [-3, -3, -2, -1, -1, 0], expected: [-3, -2, -1, 0] },
  { input: [1, 2, 3, 3, 3, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
  { input: [10, 10, 10, 10, 10], expected: [10] },
  { input: [-5, -5, -4, -4, -3, -3, -2, -1], expected: [-5, -4, -3, -2, -1] },
  { input: [0, 1, 1, 1, 2, 2, 3, 4, 4, 5], expected: [0, 1, 2, 3, 4, 5] },
  { input: [1, 1, 1, 2, 3, 4, 4, 5, 5, 6], expected: [1, 2, 3, 4, 5, 6] },
  {
    input: [-10, -10, -10, -5, -5, 0, 5, 5, 10],
    expected: [-10, -5, 0, 5, 10],
  },
  { input: [2, 2, 2, 3, 3, 4, 4, 4, 5], expected: [2, 3, 4, 5] },
  { input: [1, 2, 3, 4, 5, 5, 5, 5], expected: [1, 2, 3, 4, 5] },
  { input: [-2, -2, -2, -1, -1, 0, 1, 1, 2], expected: [-2, -1, 0, 1, 2] },
  { input: [100, 100, 100, 101, 102, 102], expected: [100, 101, 102] },
  { input: [-100, -100, -99, -98, -98, -97], expected: [-100, -99, -98, -97] },
  { input: [1, 1, 2, 3, 4, 4, 4, 5, 6, 6], expected: [1, 2, 3, 4, 5, 6] },
  { input: [7, 7, 7, 7, 8, 9, 9, 10], expected: [7, 8, 9, 10] },
  { input: [-1, -1, -1, -1, -1], expected: [-1] },
  { input: [0, 0, 1, 1, 2, 3, 3, 4, 4, 5, 5], expected: [0, 1, 2, 3, 4, 5] },
  { input: [1, 2, 2, 3, 3, 3, 4, 4, 4, 4], expected: [1, 2, 3, 4] },
];

// Run tests
describe("Remove Duplicates from Sorted List - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ input, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const head = arrayToList(input);
          const resultHead = fn(head);
          const result = listToArray(resultHead);

          expect(result).toEqual(expected);
        });
      });
    });
  });
});
