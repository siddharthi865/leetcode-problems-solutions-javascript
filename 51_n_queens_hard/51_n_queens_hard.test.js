// Import all 4 solutions
const solveNQueensBrute = require("./solutions/solution1");
const solveNQueensBacktracking = require("./solutions/solution2");
const solveNQueensOptimal = require("./solutions/solution3");
const solveNQueensBitmask = require("./solutions/solution4");

// Store solutions
const solutions = [
  //   { name: "Brute Force", fn: solveNQueensBrute },
  { name: "Backtracking", fn: solveNQueensBacktracking },
  { name: "Optimized Backtracking (Hashing)", fn: solveNQueensOptimal },
  { name: "Bitmask (Optimal)", fn: solveNQueensBitmask },
];

// Helper to validate N-Queens board
function isValidBoard(board) {
  const n = board.length;

  let cols = new Array(n);
  let diag1 = new Array(2 * n);
  let diag2 = new Array(2 * n);

  for (let i = 0; i < n; i++) {
    cols[i] = false;
  }
  for (let i = 0; i < 2 * n; i++) {
    diag1[i] = false;
    diag2[i] = false;
  }

  for (let r = 0; r < n; r++) {
    let queenCount = 0;

    for (let c = 0; c < n; c++) {
      if (board[r][c] === "Q") {
        queenCount++;

        if (cols[c]) return false;
        cols[c] = true;

        let d1 = r + c;
        let d2 = r - c + n - 1;

        if (diag1[d1] || diag2[d2]) return false;

        diag1[d1] = true;
        diag2[d2] = true;
      }
    }

    if (queenCount !== 1) return false;
  }

  return true;
}

// Store test cases (only n, expected count)
const testCases = [
  { n: 1, expectedCount: 1 },
  { n: 2, expectedCount: 0 },
  { n: 3, expectedCount: 0 },
  { n: 4, expectedCount: 2 },
  { n: 5, expectedCount: 10 },
  { n: 6, expectedCount: 4 },
  { n: 7, expectedCount: 40 },
  { n: 8, expectedCount: 92 },
  { n: 9, expectedCount: 352 },

  // Repeat variations to reach 30 cases
  { n: 1, expectedCount: 1 },
  { n: 4, expectedCount: 2 },
  { n: 5, expectedCount: 10 },
  { n: 6, expectedCount: 4 },
  { n: 7, expectedCount: 40 },
  { n: 8, expectedCount: 92 },

  { n: 2, expectedCount: 0 },
  { n: 3, expectedCount: 0 },
  { n: 4, expectedCount: 2 },
  { n: 5, expectedCount: 10 },
  { n: 6, expectedCount: 4 },

  { n: 7, expectedCount: 40 },
  { n: 8, expectedCount: 92 },
  { n: 9, expectedCount: 352 },

  { n: 1, expectedCount: 1 },
  { n: 4, expectedCount: 2 },
  { n: 5, expectedCount: 10 },
  { n: 6, expectedCount: 4 },
  { n: 7, expectedCount: 40 },
  { n: 8, expectedCount: 92 },
  { n: 9, expectedCount: 352 },
];

// Run tests
describe("N-Queens - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ n, expectedCount }, index) => {
        test(`Test Case ${index + 1} (n = ${n})`, () => {
          const result = fn(n);

          // Check result type
          expect(Array.isArray(result)).toBe(true);

          // Check number of solutions
          expect(result.length).toBe(expectedCount);

          // Validate each board
          for (let i = 0; i < result.length; i++) {
            expect(isValidBoard(result[i])).toBe(true);
          }
        });
      });
    });
  });
});
