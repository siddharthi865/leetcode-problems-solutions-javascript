# N-Queens (LeetCode #51)

## Problem Statement

The **n-queens puzzle** is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other.

Given an integer `n`, return **all distinct solutions** to the n-queens puzzle.

Each solution contains a distinct board configuration of the queens' placement, where:

- `'Q'` indicates a queen
- `'.'` indicates an empty space

### Constraints

- `1 <= n <= 9`

## Examples

**Example 1:**

```
Input: n = 4
Output: [
[".Q..","...Q","Q...","..Q."],
["..Q.","Q...","...Q",".Q.."]
]
```

**Example 2:**

```
Input: n = 1
Output: [["Q"]]
```

## Solutions

### Solution 1: Brute Force

#### Approach

Generate **all possible board configurations** with `n` queens and validate each board.

#### Steps

1. Place queens in all possible positions row by row
2. Generate every configuration
3. Validate:
   - No two queens share row, column, or diagonal
4. Store valid boards

#### Complexity

- **Time Complexity:** O(n^n \* n²)
- **Space Complexity:** O(n²)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Backtracking

#### Approach

Place queens **row by row**, ensuring safety before placing.

#### Steps

1. Start from row 0
2. Try placing queen in each column
3. Check:
   - Column conflict
   - Diagonal conflicts
4. If safe → place and recurse
5. Backtrack if needed

#### Complexity

- **Time Complexity:** O(n!)
- **Space Complexity:** O(n²)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Optimized Backtracking (Hashing)

#### Approach

Use arrays to track attacks:

- Columns
- Main diagonals
- Anti-diagonals

This avoids scanning the board repeatedly.

#### Steps

1. Maintain:
   - `cols[]`
   - `diag1[]`
   - `diag2[]`
2. Check safety in O(1)
3. Place queen and recurse
4. Backtrack after recursion

#### Complexity

- **Time Complexity:** O(n!)
- **Space Complexity:** O(n²)

#### [Click for solution](./solutions/solution3.js)

---

### Solution 4: Bitmask Optimization (Best)

#### Approach

Use **bit manipulation** instead of arrays to track:

- Columns
- Diagonals

This significantly improves performance using bit operations.

#### Steps

1. Use integers as bitmasks:
   - `cols`, `diag1`, `diag2`
2. Compute available positions:

```

available = ~(cols | diag1 | diag2) & ((1 << n) - 1)

```

3. Extract position:

```

position = available & (-available)

```

4. Recurse with updated masks
5. Backtrack using bit removal

#### Complexity

- **Time Complexity:** O(n!) (fast in practice)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution4.js)

## Summary

| Approach                         | Time Complexity | Space Complexity | Notes                    |
| -------------------------------- | --------------- | ---------------- | ------------------------ |
| Brute Force                      | O(n^n)          | O(n²)            | Very slow                |
| Backtracking                     | O(n!)           | O(n²)            | Standard approach        |
| Optimized Backtracking (Hashing) | O(n!)           | O(n²)            | Faster safety checks     |
| Bitmask Optimization             | O(n!)           | O(n)             | Fastest and most optimal |
