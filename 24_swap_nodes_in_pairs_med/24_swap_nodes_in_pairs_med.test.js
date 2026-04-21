// Import all 3 solutions
const swapPairs1 = require("./solutions/solution1");
const swapPairs2 = require("./solutions/solution2");
const swapPairs3 = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Solution 1", fn: swapPairs1 },
  { name: "Solution 2", fn: swapPairs2 },
  { name: "Solution 3", fn: swapPairs3 },
];

// ListNode helper
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Build linked list from array
function buildList(arr) {
  let dummy = new ListNode(0);
  let curr = dummy;

  for (let i = 0; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }

  return dummy.next;
}

// Convert linked list to array
function toArray(head) {
  let result = [];
  let curr = head;

  while (curr !== null) {
    result.push(curr.val);
    curr = curr.next;
  }

  return result;
}

// Store test cases (30 cases)
const testCases = [
  { input: [], expected: [] },
  { input: [1], expected: [1] },
  { input: [1, 2], expected: [2, 1] },
  { input: [1, 2, 3], expected: [2, 1, 3] },
  { input: [1, 2, 3, 4], expected: [2, 1, 4, 3] },
  { input: [1, 2, 3, 4, 5], expected: [2, 1, 4, 3, 5] },
  { input: [1, 2, 3, 4, 5, 6, 7, 8], expected: [2, 1, 4, 3, 6, 5, 8, 7] },
  { input: [2, 1], expected: [1, 2] },
  { input: [2, 1, 3], expected: [1, 2, 3] },
  { input: [2, 1, 4, 3], expected: [1, 2, 3, 4] },
  { input: [3, 4, 5, 6, 7], expected: [4, 3, 6, 5, 7] },
  { input: [1, 1], expected: [1, 1] },
  { input: [1, 1, 2, 2], expected: [1, 1, 2, 2] },
  { input: [5, 5, 5, 5], expected: [5, 5, 5, 5] },
  { input: [0, 1, 0, 1], expected: [1, 0, 1, 0] },
  { input: [9, 8, 7, 6, 5, 4], expected: [8, 9, 6, 7, 4, 5] },
  { input: [10, 20, 30, 40, 50, 60], expected: [20, 10, 40, 30, 60, 50] },
  {
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    expected: [2, 1, 4, 3, 6, 5, 8, 7, 10, 9],
  },
  {
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    expected: [2, 1, 4, 3, 6, 5, 8, 7, 10, 9, 11],
  },
  { input: [100, 99, 98, 97], expected: [99, 100, 97, 98] },
  { input: [1, 3, 5, 7, 9, 11], expected: [3, 1, 7, 5, 11, 9] },
  { input: [2, 4, 6, 8, 10], expected: [4, 2, 8, 6, 10] },
  { input: [0, 2, 4, 6, 8, 10], expected: [2, 0, 6, 4, 10, 8] },
  { input: [1, 2], expected: [2, 1] },
  { input: [1, 2, 3], expected: [2, 1, 3] },
  { input: [1, 2, 3, 4], expected: [2, 1, 4, 3] },
  { input: [1, 2, 3, 4, 5, 6, 7], expected: [2, 1, 4, 3, 6, 5, 7] },
  { input: [7, 7, 7], expected: [7, 7, 7] },
  { input: [8, 9], expected: [9, 8] },
  { input: [9], expected: [9] },
];

// Run tests
describe("Swap Nodes in Pairs - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ input, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const head = buildList(input);
          const resultHead = fn(head);
          const result = toArray(resultHead);

          expect(result).toEqual(expected);
        });
      });
    });
  });
});
