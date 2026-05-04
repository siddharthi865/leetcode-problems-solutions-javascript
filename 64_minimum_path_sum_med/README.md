# Minimum Path Sum (LeetCode #64)

## Problem Statement

Given an `m x n` grid filled with **non-negative numbers**, find a path from the **top-left** to the **bottom-right** that minimizes the sum of all numbers along its path.

### Rules

- You can only move:
  - **Right →**
  - **Down ↓**

### Constraints

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 200`
- `0 <= grid[i][j] <= 200`

## Examples

**Example 1:**

```
Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
```

**Example 2:**

```
Input: grid = [[1,2,3],[4,5,6]]
Output: 12
```

## Solutions

### Solution 1: Brute Force (Recursion)

#### Approach

Explore **all possible paths** by recursively moving:

- Right
- Down

At each step, choose the minimum path sum.

#### Steps

1. Start at `(0,0)`
2. Recursively go:
   - Right `(i, j+1)`
   - Down `(i+1, j)`
3. Return the minimum of both paths
4. Add current cell value

#### Complexity

- **Time Complexity:** O(2^(m+n))
- **Space Complexity:** O(m+n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Memoization (Top-Down DP)

#### Approach

Avoid recomputation by storing results of previously computed cells.

#### Steps

1. Use a 2D `memo` array
2. Before computing a cell, check if it's already solved
3. Store results after computation

#### Complexity

- **Time Complexity:** O(m × n)
- **Space Complexity:** O(m × n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Dynamic Programming (2D Tabulation)

#### Approach

Build the solution iteratively using a 2D DP table.

Each cell depends on:

- Top cell `(i-1, j)`
- Left cell `(i, j-1)`

#### Steps

1. Initialize `dp[0][0] = grid[0][0]`
2. Fill first row and column
3. For remaining cells:
   - `dp[i][j] = grid[i][j] + min(top, left)`
4. Return `dp[m-1][n-1]`

#### Complexity

- **Time Complexity:** O(m × n)
- **Space Complexity:** O(m × n)

#### [Click for solution](./solutions/solution3.js)

---

### Solution 4: Space Optimized DP (1D Array)

#### Approach

We only need the **previous row**, so we optimize space using a 1D array.

#### Steps

1. Initialize a 1D array `dp`
2. Fill first row
3. Iterate row by row:
   - Update values using current and previous values
4. Return last element

#### Complexity

- **Time Complexity:** O(m × n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution4.js)

## Summary

| Approach                | Time Complexity | Space Complexity | Notes                  |
| ----------------------- | --------------- | ---------------- | ---------------------- |
| Brute Force             | O(2^(m+n))      | O(m+n)           | Exponential, very slow |
| Memoization             | O(m × n)        | O(m × n)         | Avoids recomputation   |
| 2D DP (Tabulation)      | O(m × n)        | O(m × n)         | Iterative solution     |
| 1D DP (Space Optimized) | O(m × n)        | O(n)             | ✅ Optimal solution    |
