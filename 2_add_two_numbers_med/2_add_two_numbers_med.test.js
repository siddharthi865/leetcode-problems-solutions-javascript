// Import all 3 solutions
const addTwoNumbersBrute = require("./solutions/solution1");
const addTwoNumbersBetter = require("./solutions/solution2");
const addTwoNumbersOptimal = require("./solutions/solution3");

// Helper: Convert array → linked list
function buildList(arr) {
  let dummy = { val: 0, next: null };
  let current = dummy;

  for (let i = 0; i < arr.length; i++) {
    current.next = { val: arr[i], next: null };
    current = current.next;
  }

  return dummy.next;
}

// Helper: Convert linked list → array
function listToArray(head) {
  const result = [];
  let current = head;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

// Store solutions
const solutions = [
  { name: "Brute Force", fn: addTwoNumbersBrute },
  { name: "Better (Simulation)", fn: addTwoNumbersBetter },
  { name: "Optimal (Clean Carry)", fn: addTwoNumbersOptimal },
];

// Store test cases
const testCases = [
  { l1: [2, 4, 3], l2: [5, 6, 4], expected: [7, 0, 8] },
  { l1: [0], l2: [0], expected: [0] },
  {
    l1: [9, 9, 9, 9, 9, 9, 9],
    l2: [9, 9, 9, 9],
    expected: [8, 9, 9, 9, 0, 0, 0, 1],
  },
  { l1: [1], l2: [9], expected: [0, 1] },
  { l1: [5], l2: [5], expected: [0, 1] },
  { l1: [1, 8], l2: [0], expected: [1, 8] },
  { l1: [0], l2: [1, 8], expected: [1, 8] },
  { l1: [2, 4, 9], l2: [5, 6, 4, 9], expected: [7, 0, 4, 0, 1] },
  { l1: [9], l2: [9, 9, 9], expected: [8, 0, 0, 1] },
  { l1: [3, 7], l2: [9, 2], expected: [2, 0, 1] },
  { l1: [1, 2, 3], l2: [4, 5, 6], expected: [5, 7, 9] },
  { l1: [9, 9], l2: [1], expected: [0, 0, 1] },
  { l1: [1], l2: [9, 9], expected: [0, 0, 1] },
  { l1: [8, 1], l2: [2], expected: [0, 2] },
  { l1: [9, 8, 7, 6], l2: [1, 2, 3, 4], expected: [0, 1, 1, 1, 1] },
  { l1: [2, 2, 2], l2: [2, 2, 2], expected: [4, 4, 4] },
  { l1: [9, 9, 9], l2: [9, 9, 9], expected: [8, 9, 9, 1] },
  { l1: [0, 1], l2: [0, 1], expected: [0, 2] },
  { l1: [5, 6, 7], l2: [5, 6, 7], expected: [0, 3, 5, 1] },
  { l1: [9, 9, 1], l2: [1], expected: [0, 0, 2] },
  { l1: [1, 1, 1, 1], l2: [9, 9, 9, 9], expected: [0, 1, 1, 1, 1] },
  { l1: [7, 3], l2: [5, 9], expected: [2, 3, 1] },
  { l1: [4], l2: [6], expected: [0, 1] },
  { l1: [3, 4, 2], l2: [4, 6, 5], expected: [7, 0, 8] },
  { l1: [9, 9, 9, 9], l2: [9, 9, 9, 9], expected: [8, 9, 9, 9, 1] },
  { l1: [1, 2, 3, 4, 5], l2: [5, 4, 3, 2, 1], expected: [6, 6, 6, 6, 6] },
  { l1: [0], l2: [0], expected: [0] },
  { l1: [2, 9, 9], l2: [8], expected: [0, 0, 0, 1] },
  { l1: [1, 9, 9, 9, 9], l2: [9], expected: [0, 0, 0, 0, 0, 1] },
];

// Run tests
describe("Add Two Numbers - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ l1, l2, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const list1 = buildList(l1);
          const list2 = buildList(l2);

          const result = fn(list1, list2);
          const resultArray = listToArray(result);

          expect(resultArray).toEqual(expected);
        });
      });
    });
  });
});
