# Jump Game II (LeetCode #45)

## Problem Statement

You are given a 0-indexed array of integers `nums` of length `n`. You are initially positioned at index `0`.

Each element `nums[i]` represents the **maximum length of a forward jump** from index `i`. In other words, if you are at index `i`, you can jump to any index `(i + j)` where:

- `0 <= j <= nums[i]`
- `i + j < n`

Return the **minimum number of jumps** required to reach index `n - 1`.

### Constraints

- `1 <= nums.length <= 10^4`
- `0 <= nums[i] <= 1000`
- It is guaranteed that you can reach `nums[n - 1]`

## Examples

**Example 1:**

```
Input: nums = [2,3,1,1,4]
Output: 2
```

**Example 2:**

```
Input: nums = [2,3,0,1,4]
Output: 2
```

**Example 3:**

```
Input: nums = [1,1,1,1]
Output: 3
```

## Solutions

### Solution 1: Brute Force (Recursion)

#### Approach

Try **all possible jumps** from each index recursively and return the minimum jumps required to reach the end.

#### Steps

1. Start from index `0`
2. From each index, try all jumps from `1` to `nums[i]`
3. Recursively compute jumps for each path
4. Return the minimum of all possibilities

#### Complexity

- **Time Complexity:** O(2ⁿ)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Memoization (Top-Down DP)

#### Approach

Optimize brute force by storing already computed results to avoid recomputation.

#### Steps

1. Use a memo array to store results for each index
2. If already computed → return stored value
3. Otherwise, compute recursively like brute force
4. Store result before returning

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Bottom-Up Dynamic Programming

#### Approach

Build the solution iteratively using a DP array where:

- `dp[i]` = minimum jumps to reach index `i`

#### Steps

1. Initialize `dp[0] = 0`, rest as `Infinity`
2. For each index, update reachable positions
3. Take minimum jumps for each position

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution3.js)

---

### Solution 4: Greedy (Optimal)

#### Approach

Use a greedy strategy to track:

- Current jump range
- Farthest reachable index

This mimics a **level-based traversal (BFS)**.

#### Steps

1. Initialize:
   - `jumps = 0`
   - `currentEnd = 0`
   - `farthest = 0`
2. Iterate through array:
   - Update `farthest = max(farthest, i + nums[i])`
   - If `i == currentEnd`:
     - Increment jumps
     - Update `currentEnd = farthest`
3. Return total jumps

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution4.js)

## Summary

| Approach         | Time Complexity | Space Complexity | Notes                      |
| ---------------- | --------------- | ---------------- | -------------------------- |
| Brute Force      | O(2ⁿ)           | O(n)             | Exponential, not practical |
| Memoization      | O(n²)           | O(n)             | Avoids recomputation       |
| Bottom-Up DP     | O(n²)           | O(n)             | Iterative DP solution      |
| Greedy (Optimal) | O(n)            | O(1)             | Best and most efficient    |
