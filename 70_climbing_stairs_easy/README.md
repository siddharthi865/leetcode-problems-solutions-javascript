# Climbing Stairs (LeetCode #70)

## Problem Statement

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb **1 step or 2 steps**. Return the **number of distinct ways** to reach the top.

### Constraints

- `1 <= n <= 45`

### Examples

**Example 1:**

```
Input: n = 2
Output: 2
Explanation:

1. 1 step + 1 step
2. 2 steps
```

**Example 2:**

```
Input: n = 3
Output: 3
Explanation:

1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

## Solutions

### Solution 1: Brute Force (Recursion)

#### Approach

We explore **all possible ways** to reach the top by recursively trying:

- Take 1 step
- Take 2 steps

This results in a recursion tree where each node branches into two possibilities.

#### Steps

1. Start from step `n`
2. Recursively call for:
   - `n - 1`
   - `n - 2`
3. If `n == 0`, return 1 (valid way)
4. If `n < 0`, return 0 (invalid path)
5. Sum results

#### Complexity

- **Time Complexity:** O(2^n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Memoization (Top-Down DP)

#### Approach

We optimize the recursive solution by **storing already computed results** to avoid redundant work.

#### Steps

1. Use a memo array to store results
2. Before computing `ways(n)`, check if already computed
3. If yes → return from memo
4. Otherwise:
   - Compute `ways(n-1) + ways(n-2)`
   - Store in memo
5. Return result

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Bottom-Up Dynamic Programming

#### Approach

Instead of recursion, we **build the solution iteratively** from base cases.

This follows a Fibonacci-like relation:

```

ways(n) = ways(n-1) + ways(n-2)

```

#### Steps

1. Handle base cases:
   - `n = 1 → 1`
   - `n = 2 → 2`
2. Initialize DP array
3. Fill values from 3 to `n`
4. Return `dp[n]`

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach     | Time Complexity | Space Complexity | Notes                          |
| ------------ | --------------- | ---------------- | ------------------------------ |
| Brute Force  | O(2^n)          | O(n)             | Exponential, recomputes states |
| Memoization  | O(n)            | O(n)             | Optimized recursion            |
| Bottom-Up DP | O(n)            | O(n)             | Iterative and efficient        |
