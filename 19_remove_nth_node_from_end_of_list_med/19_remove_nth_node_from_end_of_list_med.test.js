// Import all 3 solutions
const removeNthBrute = require("./solutions/solution1");
const removeNthOptimal = require("./solutions/solution2");
const removeNthDummy = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Brute Force (Two Pass)", fn: removeNthBrute },
  { name: "Two Pointer", fn: removeNthOptimal },
  { name: "Dummy Node (Optimal)", fn: removeNthDummy },
];

// Helper: Convert array -> linked list
function buildList(arr) {
  if (arr.length === 0) return null;

  var head = { val: arr[0], next: null };
  var current = head;

  for (var i = 1; i < arr.length; i++) {
    current.next = { val: arr[i], next: null };
    current = current.next;
  }

  return head;
}

// Helper: Convert linked list -> array
function listToArray(head) {
  var result = [];
  var current = head;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

// Store test cases
const testCases = [
  { head: [1, 2, 3, 4, 5], n: 2, expected: [1, 2, 3, 5] },
  { head: [1], n: 1, expected: [] },
  { head: [1, 2], n: 1, expected: [1] },
  { head: [1, 2], n: 2, expected: [2] },
  { head: [1, 2, 3], n: 1, expected: [1, 2] },
  { head: [1, 2, 3], n: 2, expected: [1, 3] },
  { head: [1, 2, 3], n: 3, expected: [2, 3] },
  { head: [1, 2, 3, 4], n: 1, expected: [1, 2, 3] },
  { head: [1, 2, 3, 4], n: 4, expected: [2, 3, 4] },
  { head: [1, 2, 3, 4, 5], n: 5, expected: [2, 3, 4, 5] },

  { head: [5, 4, 3, 2, 1], n: 3, expected: [5, 4, 2, 1] },
  { head: [10, 20, 30, 40, 50], n: 2, expected: [10, 20, 30, 50] },
  { head: [7, 7, 7, 7], n: 2, expected: [7, 7, 7] },
  { head: [1, 1, 1, 1, 1], n: 5, expected: [1, 1, 1, 1] },
  { head: [2, 4, 6, 8], n: 3, expected: [2, 6, 8] },

  { head: [100], n: 1, expected: [] },
  { head: [0, 1], n: 2, expected: [1] },
  { head: [0, 1], n: 1, expected: [0] },
  { head: [9, 8, 7, 6, 5, 4], n: 4, expected: [9, 8, 6, 5, 4] },
  { head: [1, 2, 3, 4, 5, 6], n: 6, expected: [2, 3, 4, 5, 6] },

  { head: [3, 1, 4, 1, 5, 9], n: 3, expected: [3, 1, 4, 5, 9] },
  { head: [2, 2, 2, 2], n: 1, expected: [2, 2, 2] },
  { head: [2, 2, 2, 2], n: 4, expected: [2, 2, 2] },
  { head: [1, 3, 5, 7, 9], n: 2, expected: [1, 3, 5, 9] },
  { head: [1, 3, 5, 7, 9], n: 5, expected: [3, 5, 7, 9] },

  { head: [8, 6, 4, 2], n: 2, expected: [8, 6, 2] },
  { head: [8, 6, 4, 2], n: 4, expected: [6, 4, 2] },
  { head: [1, 2, 3, 4, 5, 6, 7, 8], n: 7, expected: [1, 3, 4, 5, 6, 7, 8] },
  { head: [1, 2, 3, 4, 5, 6, 7, 8], n: 8, expected: [2, 3, 4, 5, 6, 7, 8] },
  { head: [1, 2, 3, 4, 5, 6, 7, 8], n: 1, expected: [1, 2, 3, 4, 5, 6, 7] },
];

// Run tests
describe("Remove Nth Node From End - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ head, n, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const inputList = buildList(head);
          const resultHead = fn(inputList, n);
          const result = listToArray(resultHead);

          expect(result).toEqual(expected);
        });
      });
    });
  });
});
