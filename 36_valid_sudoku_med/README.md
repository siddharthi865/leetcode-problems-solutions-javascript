# Valid Sudoku (LeetCode #36)

## Problem Statement

Determine if a **9 × 9 Sudoku board** is valid. Only the filled cells need to be validated according to the following rules:

- Each **row** must contain digits `1-9` without repetition
- Each **column** must contain digits `1-9` without repetition
- Each of the nine **3 × 3 sub-boxes** must contain digits `1-9` without repetition

### Constraints

- `board.length == 9`
- `board[i].length == 9`
- `board[i][j]` is a digit `'1'-'9'` or `'.'`
- The board may be partially filled
- Only filled cells need validation

## Examples

**Example 1:**

```
Input:
[
["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]
]

Output: true
```

**Example 2:**

```
Input:
[
["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]
]

Output: false
```

## Solutions

### Solution 1: Brute Force

#### Approach

For every filled cell, we check:

- Entire row
- Entire column
- Entire 3×3 sub-box

If any duplicate is found → invalid Sudoku.

#### Steps

1. Iterate through each cell
2. If cell is not empty:
   - Check row for duplicates
   - Check column for duplicates
   - Check 3×3 box for duplicates
3. If any duplicate found → return false
4. Otherwise → return true

#### Complexity

- **Time Complexity:** O(1) (fixed 9×9 board, but ~O(81×27))
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Hashing (Better Approach)

#### Approach

Instead of re-checking repeatedly, we track seen numbers using hash maps:

- 9 row maps
- 9 column maps
- 9 box maps

#### Steps

1. Initialize:
   - `rows[9]`, `cols[9]`, `boxes[9]`
2. Traverse board:
   - Skip empty cells
   - Compute box index:
     ```
     boxIndex = Math.floor(i/3)*3 + Math.floor(j/3)
     ```
   - Check if number already exists in row/col/box
   - If yes → return false
   - Otherwise mark as seen
3. Return true

#### Complexity

- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Bitmask (Optimal)

#### Approach

Use **bit manipulation** to store seen numbers efficiently.

Each row, column, and box is represented by a **9-bit integer**.

- Bit position represents number (1–9)
- Check and set bits using bitwise operations

#### Steps

1. Initialize:
   - `rows[9]`, `cols[9]`, `boxes[9]` with 0
2. Traverse board:
   - Skip empty cells
   - Convert char → number
   - Create bit mask:
     ```
     bit = 1 << (num - 1)
     ```
   - Compute box index
   - If bit already set → duplicate → return false
   - Otherwise set bit
3. Return true

#### Complexity

- **Time Complexity:** O(1)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach    | Time Complexity | Space Complexity | Notes                           |
| ----------- | --------------- | ---------------- | ------------------------------- |
| Brute Force | O(1)            | O(1)             | Repeated checks, less efficient |
| Hashing     | O(1)            | O(1)             | Clean and readable              |
| Bitmask     | O(1)            | O(1)             | Fastest and most optimal        |
