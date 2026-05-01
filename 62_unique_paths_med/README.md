# Unique Paths (LeetCode #62)

## Problem Statement

There is a robot on an `m x n` grid. The robot starts at the **top-left corner** and wants to reach the **bottom-right corner**.

The robot can only move:

- **Right →**
- **Down ↓**

Return the **total number of unique paths** the robot can take.

### Constraints

- `1 <= m, n <= 100`
- The answer is guaranteed to be **≤ 2 * 10⁹**

---

## Examples

**Example 1:**

```cmd
Input: m = 3, n = 7
Output: 28
```

**Example 2:**

```cmd
Input: m = 3, n = 2
Output: 3
```

**Explanation:**

```cmd
1. Right → Down → Down
2. Down → Down → Right
3. Down → Right → Down
```

## Solutions

### Solution 1: Brute Force (Recursion)

#### Approach

At each position, the robot has two choices:

- Move **right**
- Move **down**

We recursively explore all possible paths.

#### Steps

1. Start from `(0, 0)`
2. Recursively move right and down
3. If destination reached → return 1
4. If out of bounds → return 0
5. Sum all possible paths

#### Complexity

- **Time Complexity:** O(2^(m+n))
- **Space Complexity:** O(m + n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Memoization (Top-Down DP)

#### Approach

We store results of already computed cells to avoid recomputation.

#### Steps

1. Use a 2D array `memo`
2. If result already exists → reuse it
3. Otherwise compute and store it

#### Complexity

- **Time Complexity:** O(m × n)
- **Space Complexity:** O(m × n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Tabulation (Bottom-Up DP)

#### Approach

We build a DP table where each cell represents number of ways to reach it.

#### Steps

1. Initialize first row and column with 1
2. For each cell:
   - `dp[i][j] = dp[i-1][j] + dp[i][j-1]`
3. Return bottom-right cell

#### Complexity

- **Time Complexity:** O(m × n)
- **Space Complexity:** O(m × n)

#### [Click for solution](./solutions/solution3.js)

---

### Solution 4: Space Optimized DP

#### Approach

We only need the previous row to compute current row, so we use a 1D array.

#### Steps

1. Initialize array with 1s
2. Update values row by row
3. Each cell becomes:
   - `dp[j] = dp[j] + dp[j-1]`

#### Complexity

- **Time Complexity:** O(m × n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution4.js)

---

### Solution 5: Combinatorics (Optimal)

#### Approach

To reach destination:

- Total moves = `(m-1) down + (n-1) right`
- Total steps = `m + n - 2`

We choose positions for one type of move:

- Choose `(m-1)` positions from `(m+n-2)`

#### Formula

```cmd
C(m+n-2, m-1)
```

#### Steps

1. Compute combination using iterative multiplication
2. Avoid factorial to prevent overflow

#### Complexity

- **Time Complexity:** O(min(m, n))
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution5.js)

## Summary

| Approach              | Time Complexity | Space Complexity | Notes                          |
|----------------------|----------------|------------------|-------------------------------|
| Brute Force          | O(2^(m+n))     | O(m+n)           | Very slow                     |
| Memoization          | O(m × n)       | O(m × n)         | Eliminates recomputation      |
| Tabulation           | O(m × n)       | O(m × n)         | Iterative DP                  |
| Space Optimized      | O(m × n)       | O(n)             | Efficient DP                  |
| Combinatorics        | O(n)           | O(1)             |  Most optimal solution      |