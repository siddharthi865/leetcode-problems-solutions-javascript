# Combination Sum (LeetCode #39)

## Problem Statement

Given an array of **distinct integers** `candidates` and a target integer `target`, return a list of all **unique combinations** of candidates where the chosen numbers sum to `target`.

- You may use the **same number unlimited times**
- Two combinations are unique if the **frequency of at least one number differs**
- You may return the combinations in **any order**

### Constraints

- `1 <= candidates.length <= 30`
- `2 <= candidates[i] <= 40`
- All elements of `candidates` are **distinct**
- `1 <= target <= 40`
- Total unique combinations < 150

## Examples

**Example 1:**

```
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
```

**Example 2:**

```
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
```

**Example 3:**

```
Input: candidates = [2], target = 1
Output: []
```

## Solutions

### Solution 1: Brute Force Backtracking

#### Approach

We explore **all possible combinations** using recursion by making two choices at every step:

- Include the current element (and stay on same index since reuse is allowed)
- Exclude the current element (move to next index)

This approach generates all subsets and filters those that sum to the target.

#### Steps

1. Start from index `0`
2. At each step:
   - Include current element → stay at same index
   - Exclude current element → move to next index
3. Track current sum
4. If sum equals target → store result
5. If sum exceeds target or index out of bounds → stop

#### Complexity

- **Time Complexity:** O(2^target) (exponential due to branching)
- **Space Complexity:** O(target) (recursion stack)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Optimized Backtracking (Best)

#### Approach

Instead of include/exclude branching, we use a **loop-based backtracking approach**:

- Iterate over candidates starting from a given index
- For each element:
  - Include it
  - Recurse with reduced target
  - Backtrack

This avoids duplicate work and ensures unique combinations.

#### Steps

1. Start from index `0`
2. Loop through candidates from current index
3. For each candidate:
   - Add to current combination
   - Recurse with:
     - Same index (to allow reuse)
     - Reduced target
4. If target becomes `0` → store result
5. If target becomes negative → stop
6. Backtrack after each recursion

#### Complexity

- **Time Complexity:** O(N^(target/min))
  (Much better pruning than brute force)
- **Space Complexity:** O(target)

#### [Click for solution](./solutions/solution2.js)

## Summary

| Approach                 | Time Complexity   | Space Complexity | Notes                           |
| ------------------------ | ----------------- | ---------------- | ------------------------------- |
| Brute Force Backtracking | O(2^target)       | O(target)        | Explores all possibilities      |
| Optimized Backtracking   | O(N^(target/min)) | O(target)        | Efficient and avoids duplicates |
