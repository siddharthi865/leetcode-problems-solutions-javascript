// Import all 3 solutions
const rotateBrute = require("./solutions/solution1");
const rotateBetter = require("./solutions/solution2");
const rotateOptimal = require("./solutions/solution3");

// Helper: Convert array → linked list
function arrayToList(arr) {
  if (arr.length === 0) return null;
  let head = { val: arr[0], next: null };
  let curr = head;

  for (let i = 1; i < arr.length; i++) {
    curr.next = { val: arr[i], next: null };
    curr = curr.next;
  }

  return head;
}

// Helper: Convert linked list → array
function listToArray(head) {
  let result = [];
  let curr = head;

  while (curr) {
    result[result.length] = curr.val;
    curr = curr.next;
  }

  return result;
}

// Store solutions
const solutions = [
  { name: "Brute Force", fn: rotateBrute },
  { name: "Better (k reduced)", fn: rotateBetter },
  { name: "Optimal (Circular List)", fn: rotateOptimal },
];

// Store test cases
const testCases = [
  { head: [1, 2, 3, 4, 5], k: 2, expected: [4, 5, 1, 2, 3] },
  { head: [0, 1, 2], k: 4, expected: [2, 0, 1] },
  { head: [], k: 5, expected: [] },
  { head: [1], k: 0, expected: [1] },
  { head: [1], k: 10, expected: [1] },
  { head: [1, 2], k: 1, expected: [2, 1] },
  { head: [1, 2], k: 2, expected: [1, 2] },
  { head: [1, 2, 3], k: 3, expected: [1, 2, 3] },
  { head: [1, 2, 3], k: 4, expected: [3, 1, 2] },
  { head: [1, 2, 3, 4], k: 1, expected: [4, 1, 2, 3] },
  { head: [1, 2, 3, 4], k: 2, expected: [3, 4, 1, 2] },
  { head: [1, 2, 3, 4], k: 3, expected: [2, 3, 4, 1] },
  { head: [1, 2, 3, 4], k: 4, expected: [1, 2, 3, 4] },
  { head: [1, 2, 3, 4], k: 5, expected: [4, 1, 2, 3] },
  { head: [5, 10, 15, 20, 25], k: 7, expected: [20, 25, 5, 10, 15] },
  { head: [-1, -2, -3, -4, -5], k: 2, expected: [-4, -5, -1, -2, -3] },
  { head: [100, 200, 300], k: 2000000000, expected: [200, 300, 100] },
  { head: [1, 2, 3, 4, 5, 6], k: 3, expected: [4, 5, 6, 1, 2, 3] },
  { head: [1, 2, 3, 4, 5, 6], k: 9, expected: [4, 5, 6, 1, 2, 3] },
  { head: [9, 8, 7, 6, 5], k: 1, expected: [5, 9, 8, 7, 6] },
  { head: [9, 8, 7, 6, 5], k: 2, expected: [6, 5, 9, 8, 7] },
  { head: [9, 8, 7, 6, 5], k: 10, expected: [9, 8, 7, 6, 5] },
  { head: [1, 1, 1, 1], k: 2, expected: [1, 1, 1, 1] },
  { head: [2, 2, 2, 3, 3], k: 3, expected: [2, 3, 3, 2, 2] },
  { head: [1, 2, 3, 4, 5], k: 0, expected: [1, 2, 3, 4, 5] },
  { head: [1, 2, 3, 4, 5], k: 1, expected: [5, 1, 2, 3, 4] },
  { head: [1, 2, 3, 4, 5], k: 10, expected: [1, 2, 3, 4, 5] },
  { head: [10, 20, 30, 40, 50], k: 6, expected: [50, 10, 20, 30, 40] },
  { head: [3, 6, 9, 12, 15], k: 8, expected: [9, 12, 15, 3, 6] },
  { head: [7, 14, 21, 28], k: 100, expected: [7, 14, 21, 28] },
];

// Run tests
describe("Rotate List - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ head, k, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const list = arrayToList(head);
          const resultHead = fn(list, k);
          const result = listToArray(resultHead);

          expect(result).toEqual(expected);
        });
      });
    });
  });
});
