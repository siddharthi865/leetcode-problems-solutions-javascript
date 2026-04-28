# Jump Game (LeetCode #55)

## Problem Statement

You are given an integer array `nums`. You are initially positioned at the array's first index, and each element in the array represents your **maximum jump length** at that position.

Return `true` if you can reach the last index, or `false` otherwise.

### Constraints

- `1 <= nums.length <= 10^4`
- `0 <= nums[i] <= 10^5`

### Examples

**Example 1:**

```
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
```

**Example 2:**

```
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3. Its maximum jump length is 0, making it impossible to reach the last index.
```

## Solutions

### Solution 1: Brute Force (Recursion)

#### Approach

Try **all possible jumps** from each index recursively and check if any path reaches the last index.

#### Steps

1. Start from index `0`
2. From each index, try all jumps from `1` to `nums[i]`
3. Recursively check if any path reaches the end
4. If yes → return `true`, else `false`

#### Complexity

- **Time Complexity:** O(2^n)
- **Space Complexity:** O(n) (recursion stack)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Memoization (Top-Down DP)

#### Approach

Optimize brute force by storing already computed results to avoid recomputation.

#### Steps

1. Use a memo array to store results of indices
2. If a result is already computed, reuse it
3. Otherwise, explore all jumps and store result

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Bottom-Up DP

#### Approach

Build a DP array where each index tells whether it is reachable.

#### Steps

1. Initialize `dp[0] = true`
2. For each reachable index, mark all reachable future indices
3. At the end, check `dp[n - 1]`

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution3.js)

---

### Solution 4: Greedy (Optimal)

#### Approach

Track the **farthest reachable index** while iterating through the array.

#### Steps

1. Initialize `maxReach = 0`
2. Iterate through array:
   - If current index > `maxReach` → return false
   - Update `maxReach = max(maxReach, i + nums[i])`
3. If loop completes → return true

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution4.js)

## Summary

| Approach               | Time Complexity | Space Complexity | Notes                   |
| ---------------------- | --------------- | ---------------- | ----------------------- |
| Brute Force            | O(2^n)          | O(n)             | Very slow (TLE)         |
| Memoization (Top-Down) | O(n²)           | O(n)             | Avoids recomputation    |
| Bottom-Up DP           | O(n²)           | O(n)             | Iterative DP approach   |
| Greedy (Optimal)       | O(n)            | O(1)             | Best and most efficient |
