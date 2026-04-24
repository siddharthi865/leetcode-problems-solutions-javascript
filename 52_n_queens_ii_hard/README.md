# N-Queens II (LeetCode #52)

## Problem Statement

The **n-queens puzzle** is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other.

Given an integer `n`, return the **number of distinct solutions** to the n-queens puzzle.

### Constraints

- `1 <= n <= 9`

### Examples

**Example 1:**

```
Input: n = 4
Output: 2
```

**Example 2:**

```
Input: n = 1
Output: 1
```

## Solutions

### Solution 1: Brute Force

#### Approach

We generate **all possible board configurations** by deciding for every cell whether to place a queen or not.
Then we validate each board:

- Check if exactly `n` queens are placed
- Ensure no two queens attack each other

#### Steps

1. Generate all possible board states using recursion
2. For each board:
   - Count queens
   - Check row, column, and diagonal conflicts
3. If valid → increment result

#### Complexity

- **Time Complexity:** O(2^(n²) \* n²)
- **Space Complexity:** O(n²)

#### [Click for solution](./solutions/solution4.js)

---

### Solution 2: Backtracking (Board Check)

#### Approach

Instead of generating all boards, we place queens **row by row**:

- Try placing a queen in each column of the current row
- Before placing, check if it is safe using board traversal

#### Steps

1. Start from row 0
2. For each column:
   - Check if safe (column + diagonals)
   - Place queen
   - Recurse to next row
   - Backtrack
3. If all rows filled → count solution

#### Complexity

- **Time Complexity:** O(n!)
- **Space Complexity:** O(n²)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 3: Hashing Optimization

#### Approach

Instead of scanning the board repeatedly, we use arrays to track:

- Used columns
- Used diagonals

This allows **O(1) safety checks**.

#### Steps

1. Maintain:
   - `columns[col]`
   - `diag1[row + col]`
   - `diag2[row - col + (n-1)]`
2. For each row:
   - Check if position is safe using arrays
   - Place queen and mark arrays
   - Recurse
   - Backtrack

#### Complexity

- **Time Complexity:** O(n!)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 4: Bitmask (Optimal)

#### Approach

We use **bit manipulation** to represent:

- Columns
- Diagonals

Each bit represents whether a position is occupied.
This reduces memory usage and speeds up operations.

#### Steps

1. Use integers as bitmasks
2. Compute available positions using bit operations
3. Pick one position at a time
4. Update masks and recurse
5. Backtrack automatically via recursion

#### Complexity

- **Time Complexity:** O(n!) (fastest in practice)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach             | Time Complexity | Space Complexity | Notes                           |
| -------------------- | --------------- | ---------------- | ------------------------------- |
| Brute Force          | O(2^(n²))       | O(n²)            | Extremely slow, not practical   |
| Backtracking (Board) | O(n!)           | O(n²)            | Prunes invalid states early     |
| Hashing Optimization | O(n!)           | O(n)             | Faster checks using arrays      |
| Bitmask (Optimal)    | O(n!)           | O(n)             | Best performance, minimal space |
