# Sudoku Solver (LeetCode #37)

## Problem Statement

Write a program to solve a **Sudoku puzzle** by filling the empty cells.

A valid Sudoku solution must satisfy:

- Each digit `1–9` appears **exactly once in each row**
- Each digit `1–9` appears **exactly once in each column**
- Each digit `1–9` appears **exactly once in each 3×3 sub-box**

Empty cells are represented by `"."`.

### Constraints

- `board.length == 9`
- `board[i].length == 9`
- `board[i][j]` is a digit or `"."`
- The input board has **exactly one solution**

## Examples

### Example 1:

```
Input:
board = [
["5","3",".",".","7",".",".",".","."],
["6",".",".","1","9","5",".",".","."],
[".","9","8",".",".",".",".","6","."],
["8",".",".",".","6",".",".",".","3"],
["4",".",".","8",".","3",".",".","1"],
["7",".",".",".","2",".",".",".","6"],
[".","6",".",".",".",".","2","8","."],
[".",".",".","4","1","9",".",".","5"],
[".",".",".",".","8",".",".","7","9"]
]
```

```
Output:
[
["5","3","4","6","7","8","9","1","2"],
["6","7","2","1","9","5","3","4","8"],
["1","9","8","3","4","2","5","6","7"],
["8","5","9","7","6","1","4","2","3"],
["4","2","6","8","5","3","7","9","1"],
["7","1","3","9","2","4","8","5","6"],
["9","6","1","5","3","7","2","8","4"],
["2","8","7","4","1","9","6","3","5"],
["3","4","5","2","8","6","1","7","9"]
]
```

## Solutions

### Solution 1: Brute Force Backtracking

#### Approach

We try filling each empty cell with digits `1–9` and check if the placement is valid by scanning:

- Entire row
- Entire column
- Entire 3×3 box

If valid → continue
If invalid → backtrack

---

#### Steps

1. Traverse the board
2. When an empty cell `"."` is found:
   - Try digits `1–9`
   - Check if placement is valid

3. If valid:
   - Place the digit
   - Recurse

4. If recursion fails:
   - Undo the placement (backtrack)

5. Continue until board is solved

---

#### Complexity

- **Time Complexity:** O(9^n)
- **Space Complexity:** O(n) (recursion stack)

---

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Optimized Backtracking (Preprocessed Empty Cells)

#### Approach

Instead of scanning the whole board every time:

- First, store all empty cells
- Then process only those cells in recursion

This avoids repeated scanning and improves performance.

---

#### Steps

1. Store positions of all empty cells
2. Use recursion on this list:
   - Pick next empty cell
   - Try digits `1–9`
   - Validate placement

3. If valid:
   - Place number
   - Move to next cell

4. Backtrack if needed

---

#### Complexity

- **Time Complexity:** O(9^n) (but faster in practice)
- **Space Complexity:** O(n)

---

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Backtracking + Hashing (Optimal)

#### Approach

Use helper structures to track used numbers:

- `rows[9][9]`
- `cols[9][9]`
- `boxes[9][9]`

This allows **O(1) validity checks**, eliminating repeated scans.

---

#### Steps

1. Initialize tracking arrays
2. Fill them based on initial board
3. For each empty cell:
   - Try digits `1–9`
   - Check:
     - row
     - column
     - box

4. If valid:
   - Place number
   - Update tracking arrays

5. Backtrack if needed

---

#### Complexity

- **Time Complexity:** O(9^n) (highly optimized in practice)
- **Space Complexity:** O(1) (fixed size arrays)

---

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach                         | Time Complexity | Space Complexity | Notes                    |
| -------------------------------- | --------------- | ---------------- | ------------------------ |
| Brute Force Backtracking         | O(9^n)          | O(n)             | Simple but slower        |
| Optimized Backtracking           | O(9^n)          | O(n)             | Avoids repeated scans    |
| Backtracking + Hashing (Optimal) | O(9^n)          | O(1)             | Fastest with O(1) checks |
