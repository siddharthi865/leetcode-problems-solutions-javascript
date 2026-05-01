# Unique Paths II (LeetCode #63)

## Problem Statement

You are given an `m x n` grid where:

- `0` represents an empty cell
- `1` represents an obstacle

A robot starts at the **top-left corner** and wants to reach the **bottom-right corner**.

The robot can only move:

- **Right →**
- **Down ↓**

Return the **number of unique paths** such that the robot **never steps on an obstacle**.

### Constraints

- `m == obstacleGrid.length`
- `n == obstacleGrid[i].length`
- `1 <= m, n <= 100`
- `obstacleGrid[i][j]` is `0` or `1`
- Answer ≤ `2 * 10^9`

## Examples

**Example 1:**

```
Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
```

**Example 2:**

```
Input: obstacleGrid = [[0,1],[0,0]]
Output: 1
```

## Solutions

### Solution 1: Brute Force (Recursion)

#### Approach

We recursively explore **all possible paths**:
- Move **right**
- Move **down**

If we hit:
- An obstacle → stop
- Out of bounds → stop
- Destination → count 1 path

#### Steps

1. Start from `(0,0)`
2. Recursively try:
   - `(i + 1, j)` → Down
   - `(i, j + 1)` → Right
3. If cell is obstacle → return 0
4. If destination reached → return 1
5. Sum all valid paths

#### Complexity

- **Time Complexity:** O(2^(m+n))
- **Space Complexity:** O(m + n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Memoization (Top-Down DP)

#### Approach

Same as recursion, but we **store results** of subproblems to avoid recomputation.

#### Steps

1. Create a `memo` table
2. Before computing `(i, j)`, check if already solved
3. If yes → return stored value
4. Otherwise compute and store result

#### Complexity

- **Time Complexity:** O(m × n)
- **Space Complexity:** O(m × n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Tabulation (Bottom-Up DP)

#### Approach

We build a DP table where:

- `dp[i][j]` = number of ways to reach cell `(i, j)`

Transition:
- From **top** → `dp[i-1][j]`
- From **left** → `dp[i][j-1]`

If obstacle → `dp[i][j] = 0`

#### Steps

1. Initialize `dp[0][0] = 1` (if not obstacle)
2. Iterate through grid
3. If obstacle → set `0`
4. Else:
   - Add paths from top
   - Add paths from left
5. Return `dp[m-1][n-1]`

#### Complexity

- **Time Complexity:** O(m × n)
- **Space Complexity:** O(m × n)

#### [Click for solution](./solutions/solution3.js)

---

### Solution 4: Space Optimized DP (Optimal)

#### Approach

We only need the **current row**, so we use a **1D array**.

- `dp[j]` represents number of ways to reach current cell in row

#### Steps

1. Initialize `dp[0] = 1` (if start is not obstacle)
2. Traverse grid row by row
3. If obstacle → `dp[j] = 0`
4. Else:
   - Add left value → `dp[j] += dp[j-1]`
5. Final answer is `dp[n-1]`

#### Complexity

- **Time Complexity:** O(m × n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution4.js)

## Summary

| Approach           | Time Complexity | Space Complexity | Notes                         |
|------------------|---------------|-----------------|-------------------------------|
| Brute Force       | O(2^(m+n))    | O(m+n)          | Exponential, very slow        |
| Memoization       | O(m×n)        | O(m×n)          | Avoids recomputation          |
| Tabulation        | O(m×n)        | O(m×n)          | Iterative DP                  |
| Space Optimized   | O(m×n)        | O(n)            | ✅ Best and most efficient     |