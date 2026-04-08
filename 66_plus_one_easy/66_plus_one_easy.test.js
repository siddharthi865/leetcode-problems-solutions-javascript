// Import solution
const plusOne = require("./solutions/solution1");

// Store solutions
const solutions = [{ name: "Iterative Carry (Optimal)", fn: plusOne }];

// Helper to generate large arrays
function generateArray(length, value) {
  const arr = new Array(length);
  for (let i = 0; i < length; i++) {
    arr[i] = value;
  }
  return arr;
}

// Store test cases
const testCases = [
  // Basic cases
  { digits: [1, 2, 3], expected: [1, 2, 4] },
  { digits: [4, 3, 2, 1], expected: [4, 3, 2, 2] },
  { digits: [0], expected: [1] },

  // Single digit edge
  { digits: [9], expected: [1, 0] },

  // Carry propagation
  { digits: [1, 9, 9], expected: [2, 0, 0] },
  { digits: [2, 3, 9], expected: [2, 4, 0] },
  { digits: [1, 2, 9, 9], expected: [1, 3, 0, 0] },

  // No carry needed
  { digits: [3, 4, 5, 6], expected: [3, 4, 5, 7] },
  { digits: [9, 8, 7, 6], expected: [9, 8, 7, 7] },

  // All 9s (critical edge)
  { digits: [9, 9], expected: [1, 0, 0] },
  { digits: [9, 9, 9], expected: [1, 0, 0, 0] },

  // Mixed tricky cases
  { digits: [9, 0, 9], expected: [9, 1, 0] },
  { digits: [8, 9, 9, 9], expected: [9, 0, 0, 0] },
  { digits: [1, 0, 9], expected: [1, 1, 0] },
  { digits: [2, 0, 0], expected: [2, 0, 1] },

  // Medium large
  { digits: [5, 9, 9, 9, 9], expected: [6, 0, 0, 0, 0] },

  // 🔥 LARGE EDGE CASES (length = 100)

  // All 9s → biggest carry expansion
  {
    digits: generateArray(100, 9),
    expected: [1, ...generateArray(100, 0)],
  },

  // All 0s except last
  {
    digits: [...generateArray(99, 0), 0],
    expected: [...generateArray(99, 0), 1],
  },

  // Large with no carry
  {
    digits: [...generateArray(99, 1), 1],
    expected: [...generateArray(99, 1), 2],
  },

  // Large with long carry chain at end
  {
    digits: [...generateArray(95, 1), 9, 9, 9, 9, 9],
    expected: [...generateArray(94, 1), 2, 0, 0, 0, 0, 0],
  },

  // Large with carry stopping midway
  {
    digits: [...generateArray(50, 2), 9, 9, 9, ...generateArray(47, 3)],
    expected: [...generateArray(50, 2), 9, 9, 9, ...generateArray(46, 3), 4],
  },
];

// Run tests
describe("Plus One - Iterative Solution", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ digits, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const result = fn([...digits]); // avoid mutation issues
          expect(result).toEqual(expected);
        });
      });
    });
  });
});
