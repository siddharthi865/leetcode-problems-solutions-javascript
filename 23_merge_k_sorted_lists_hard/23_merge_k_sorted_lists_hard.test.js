// Import all 4 solutions
const mergeKListsBrute = require("./solutions/solution1");
const mergeKListsSequential = require("./solutions/solution2");
const mergeKListsDivide = require("./solutions/solution3");
const mergeKListsHeap = require("./solutions/solution4");

// Store solutions
const solutions = [
  { name: "Brute Force (Collect + Sort)", fn: mergeKListsBrute },
  { name: "Sequential Merge", fn: mergeKListsSequential },
  { name: "Divide & Conquer", fn: mergeKListsDivide },
  { name: "Min Heap (Optimal)", fn: mergeKListsHeap },
];

// Helper: ListNode constructor
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// Helper: build linked list from array
function buildList(arr) {
  let dummy = new ListNode(0);
  let curr = dummy;
  for (let i = 0; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }
  return dummy.next;
}

// Helper: convert linked list to array
function toArray(head) {
  let result = [];
  while (head !== null) {
    result[result.length] = head.val;
    head = head.next;
  }
  return result;
}

// Store test cases (30 cases)
const testCases = [
  {
    input: [
      [1, 4, 5],
      [1, 3, 4],
      [2, 6],
    ],
    expected: [1, 1, 2, 3, 4, 4, 5, 6],
  },
  { input: [], expected: [] },
  { input: [[]], expected: [] },
  { input: [[1]], expected: [1] },
  { input: [[1, 2, 3]], expected: [1, 2, 3] },

  {
    input: [
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    input: [
      [-5, -3, 0],
      [-4, -2, 1],
      [-1, 2, 3],
    ],
    expected: [-5, -4, -3, -2, -1, 0, 1, 2, 3],
  },
  {
    input: [
      [10, 20, 30],
      [15, 25, 35],
    ],
    expected: [10, 15, 20, 25, 30, 35],
  },
  {
    input: [
      [5, 10],
      [1, 2, 3, 4, 6],
    ],
    expected: [1, 2, 3, 4, 5, 6, 10],
  },
  { input: [[100], [50], [75]], expected: [50, 75, 100] },

  { input: [[1, 1, 1], [1, 1], [1]], expected: [1, 1, 1, 1, 1, 1] },
  {
    input: [
      [2, 6],
      [1, 7],
      [4, 5],
    ],
    expected: [1, 2, 4, 5, 6, 7],
  },
  { input: [[-10, -5], [0], [5, 10]], expected: [-10, -5, 0, 5, 10] },
  {
    input: [
      [3, 3, 3],
      [2, 2],
      [1, 1],
    ],
    expected: [1, 1, 2, 2, 3, 3, 3],
  },
  { input: [[8], [3, 9], [1, 7]], expected: [1, 3, 7, 8, 9] },

  {
    input: [
      [-1, 0, 1],
      [2, 3, 4],
      [5, 6, 7],
    ],
    expected: [-1, 0, 1, 2, 3, 4, 5, 6, 7],
  },
  {
    input: [
      [1, 5, 9],
      [2, 6, 10],
      [3, 7, 11],
      [4, 8, 12],
    ],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  { input: [[0]], expected: [0] },
  {
    input: [
      [-2, -1, 0],
      [1, 2],
      [3, 4, 5],
    ],
    expected: [-2, -1, 0, 1, 2, 3, 4, 5],
  },
  {
    input: [
      [9, 10, 11],
      [1, 2, 3],
      [4, 5, 6],
      [7, 8],
    ],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  },

  {
    input: [[1, 3, 5], [2, 4, 6], [7, 8, 9], [10]],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    input: [
      [-100, -50, 0],
      [50, 100],
    ],
    expected: [-100, -50, 0, 50, 100],
  },
  {
    input: [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
    ],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  { input: [[2]], expected: [2] },
  { input: [[1, 100000], [50000]], expected: [1, 50000, 100000] },

  { input: [[-3, -2, -1], [0], [1, 2, 3]], expected: [-3, -2, -1, 0, 1, 2, 3] },
  {
    input: [
      [1, 4, 7, 10],
      [2, 5, 8, 11],
      [3, 6, 9, 12],
    ],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  {
    input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  { input: [[], [], [1]], expected: [1] },
  { input: [[-1], [0], [1]], expected: [-1, 0, 1] },
];

// Run tests
describe("Merge K Sorted Lists - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ input, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          // convert input arrays -> linked lists
          let lists = input.map((arr) => buildList(arr));

          const resultHead = fn(lists);
          const result = toArray(resultHead);

          expect(result).toEqual(expected);
        });
      });
    });
  });
});
