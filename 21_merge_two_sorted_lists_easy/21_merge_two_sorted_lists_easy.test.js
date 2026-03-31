// Import all 3 solutions
const mergeBrute = require("./solutions/solution1");
const mergeIterative = require("./solutions/solution2");
const mergeRecursive = require("./solutions/solution3");

// Helper: Convert array → linked list
const arrayToList = (arr) => {
  if (arr.length === 0) return null;

  let head = { val: arr[0], next: null };
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = { val: arr[i], next: null };
    current = current.next;
  }

  return head;
};

// Helper: Convert linked list → array
const listToArray = (head) => {
  let result = [];
  let current = head;

  while (current !== null) {
    result[result.length] = current.val;
    current = current.next;
  }

  return result;
};

// Store solutions
const solutions = [
  { name: "Brute Force", fn: mergeBrute },
  { name: "Iterative Merge (Optimal)", fn: mergeIterative },
  { name: "Recursive Merge", fn: mergeRecursive },
];

// Store test cases
const testCases = [
  { list1: [1, 2, 4], list2: [1, 3, 4], expected: [1, 1, 2, 3, 4, 4] },
  { list1: [], list2: [], expected: [] },
  { list1: [], list2: [0], expected: [0] },
  { list1: [0], list2: [], expected: [0] },
  { list1: [1], list2: [2], expected: [1, 2] },
  { list1: [2], list2: [1], expected: [1, 2] },
  { list1: [1, 3, 5], list2: [2, 4, 6], expected: [1, 2, 3, 4, 5, 6] },
  {
    list1: [-10, -5, 0],
    list2: [-6, -3, 2],
    expected: [-10, -6, -5, -3, 0, 2],
  },
  { list1: [1, 1, 1], list2: [1, 1], expected: [1, 1, 1, 1, 1] },
  { list1: [5, 10, 15], list2: [2, 3, 20], expected: [2, 3, 5, 10, 15, 20] },
  { list1: [1, 2, 3], list2: [4, 5, 6], expected: [1, 2, 3, 4, 5, 6] },
  { list1: [4, 5, 6], list2: [1, 2, 3], expected: [1, 2, 3, 4, 5, 6] },
  { list1: [1, 4, 7, 10], list2: [2, 3, 9], expected: [1, 2, 3, 4, 7, 9, 10] },
  { list1: [-100], list2: [100], expected: [-100, 100] },
  { list1: [0, 0, 0], list2: [0, 0], expected: [0, 0, 0, 0, 0] },
  { list1: [1, 2, 2, 3], list2: [2, 2, 4], expected: [1, 2, 2, 2, 2, 3, 4] },
  { list1: [50], list2: [10, 20, 30, 40], expected: [10, 20, 30, 40, 50] },
  {
    list1: [1, 3, 5, 7, 9],
    list2: [2, 4, 6, 8, 10],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    list1: [-5, -3, -1],
    list2: [-4, -2, 0],
    expected: [-5, -4, -3, -2, -1, 0],
  },
  { list1: [1], list2: [1], expected: [1, 1] },
];

// Run tests
describe("Merge Two Sorted Lists - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ list1, list2, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const l1 = arrayToList(list1);
          const l2 = arrayToList(list2);

          const result = fn(l1, l2);
          const resultArray = listToArray(result);

          expect(resultArray).toEqual(expected);
        });
      });
    });
  });
});
