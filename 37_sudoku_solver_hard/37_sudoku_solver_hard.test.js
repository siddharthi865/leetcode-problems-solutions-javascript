// Import all 3 solutions
const solveSudokuBrute = require("./solutions/solution1");
const solveSudokuBetter = require("./solutions/solution2");
const solveSudokuOptimal = require("./solutions/solution3");

// Store solutions
const solutions = [
  { name: "Backtracking Basic", fn: solveSudokuBrute },
  { name: "Backtracking Optimized", fn: solveSudokuBetter },
  { name: "Backtracking + Hashing (Optimal)", fn: solveSudokuOptimal },
];

// Store test cases
const testCases = [
  {
    board: [
      ["5", "3", ".", ".", "7", ".", ".", ".", "."],
      ["6", ".", ".", "1", "9", "5", ".", ".", "."],
      [".", "9", "8", ".", ".", ".", ".", "6", "."],
      ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
      ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
      ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
      [".", "6", ".", ".", ".", ".", "2", "8", "."],
      [".", ".", ".", "4", "1", "9", ".", ".", "5"],
      [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ],
    expected: [
      ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
      ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
      ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
      ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
      ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
      ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
      ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
      ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
      ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
    ],
  },

  // Nearly solved board
  {
    board: [
      ["5", "3", "4", "6", "7", "8", "9", "1", "."],
      ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
      ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
      ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
      ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
      ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
      ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
      ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
      ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
    ],
    expected: [
      ["5", "3", "4", "6", "7", "8", "9", "1", "2"],
      ["6", "7", "2", "1", "9", "5", "3", "4", "8"],
      ["1", "9", "8", "3", "4", "2", "5", "6", "7"],
      ["8", "5", "9", "7", "6", "1", "4", "2", "3"],
      ["4", "2", "6", "8", "5", "3", "7", "9", "1"],
      ["7", "1", "3", "9", "2", "4", "8", "5", "6"],
      ["9", "6", "1", "5", "3", "7", "2", "8", "4"],
      ["2", "8", "7", "4", "1", "9", "6", "3", "5"],
      ["3", "4", "5", "2", "8", "6", "1", "7", "9"],
    ],
  },

  // 27 more variations (pattern-based valid boards)
];

// Generate additional valid test cases programmatically
function generateValidBoard(shift) {
  const base = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const board = [];

  for (let i = 0; i < 9; i++) {
    const row = [];
    for (let j = 0; j < 9; j++) {
      row.push(base[(j + i * 3 + Math.floor(i / 3) + shift) % 9]);
    }
    board.push(row);
  }

  return board;
}

// Add 27 generated boards with 1 empty cell each
for (let i = 0; i < 27; i++) {
  const full = generateValidBoard(i);
  const testBoard = JSON.parse(JSON.stringify(full));

  // Remove one cell
  testBoard[i % 9][(i * 2) % 9] = ".";

  testCases.push({
    board: testBoard,
    expected: full,
  });
}

// Run tests
describe("Sudoku Solver - All Implementations", () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ board, expected }, index) => {
        test(`Test Case ${index + 1}`, () => {
          const input = JSON.parse(JSON.stringify(board));
          fn(input);

          expect(input).toEqual(expected);
        });
      });
    });
  });
});
