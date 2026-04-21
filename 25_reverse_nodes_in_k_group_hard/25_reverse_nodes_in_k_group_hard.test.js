// Import all 3 solutions
const reverseKGroupBrute = require("./solutions/solution1");
const reverseKGroupRecursive = require("./solutions/solution2");
const reverseKGroupOptimal = require("./solutions/solution3");

// Linked list helper
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function buildList(arr) {
  let dummy = new ListNode(0);
  let curr = dummy;

  for (let num of arr) {
    curr.next = new ListNode(num);
    curr = curr.next;
  }

  return dummy.next;
}

function listToArray(head) {
  let res = [];
  while (head) {
    res[res.length] = head.val;
    head = head.next;
  }
  return res;
}

// Store solutions
const solutions = [
  { name: "Brute Force", fn: reverseKGroupBrute },
  { name: "Recursive", fn: reverseKGroupRecursive },
  { name: "Optimal Iterative", fn: reverseKGroupOptimal },
];

// 30 TEST CASES
const testCases = [
  { input: [1, 2, 3, 4, 5], k: 2, expected: [2, 1, 4, 3, 5] },
  { input: [1, 2, 3, 4, 5], k: 3, expected: [3, 2, 1, 4, 5] },
  { input: [1, 2, 3, 4, 5, 6], k: 2, expected: [2, 1, 4, 3, 6, 5] },
  { input: [1, 2, 3, 4, 5, 6], k: 3, expected: [3, 2, 1, 6, 5, 4] },
  { input: [1, 2, 3, 4, 5, 6], k: 6, expected: [6, 5, 4, 3, 2, 1] },

  { input: [1], k: 1, expected: [1] },
  { input: [1, 2], k: 1, expected: [1, 2] },
  { input: [1, 2], k: 2, expected: [2, 1] },
  { input: [1, 2, 3], k: 2, expected: [2, 1, 3] },
  { input: [1, 2, 3], k: 3, expected: [3, 2, 1] },

  { input: [1, 2, 3, 4], k: 3, expected: [3, 2, 1, 4] },
  { input: [1, 2, 3, 4, 5], k: 4, expected: [4, 3, 2, 1, 5] },
  { input: [1, 2, 3, 4, 5, 6, 7], k: 3, expected: [3, 2, 1, 6, 5, 4, 7] },
  { input: [1, 2, 3, 4, 5, 6, 7, 8], k: 4, expected: [4, 3, 2, 1, 8, 7, 6, 5] },

  { input: [10, 20, 30, 40, 50], k: 2, expected: [20, 10, 40, 30, 50] },
  { input: [10, 20, 30, 40, 50], k: 5, expected: [50, 40, 30, 20, 10] },

  { input: [1, 1, 1, 1], k: 2, expected: [1, 1, 1, 1] },
  { input: [1, 2, 2, 1], k: 2, expected: [2, 1, 1, 2] },
  { input: [9, 8, 7, 6, 5, 4], k: 3, expected: [7, 8, 9, 4, 5, 6] },

  { input: [100, 200, 300], k: 2, expected: [200, 100, 300] },
  { input: [0, 1, 2, 3, 4], k: 2, expected: [1, 0, 3, 2, 4] },

  { input: [5, 4, 3, 2, 1], k: 2, expected: [4, 5, 2, 3, 1] },
  { input: [5, 4, 3, 2, 1], k: 3, expected: [3, 4, 5, 2, 1] },

  {
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    k: 3,
    expected: [3, 2, 1, 6, 5, 4, 9, 8, 7],
  },
  {
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    k: 4,
    expected: [4, 3, 2, 1, 8, 7, 6, 5, 9, 10],
  },

  { input: [11, 22, 33, 44, 55, 66], k: 2, expected: [22, 11, 44, 33, 66, 55] },
  { input: [11, 22, 33, 44, 55, 66], k: 3, expected: [33, 22, 11, 66, 55, 44] },

  { input: [1, 2, 3, 4, 5, 6, 7, 8], k: 5, expected: [5, 4, 3, 2, 1, 6, 7, 8] },
  { input: [1, 2, 3, 4, 5, 6, 7, 8], k: 7, expected: [7, 6, 5, 4, 3, 2, 1, 8] },
];

// Run tests
describe("Reverse Nodes in k-Group - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ input, k, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const head = buildList(input);
          const result = fn(head, k);
          expect(listToArray(result)).toEqual(expected);
        });
      });
    });
  });
});
