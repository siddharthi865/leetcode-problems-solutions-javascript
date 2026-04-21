# Combination Sum II (LeetCode #40)

## Problem Statement

Given a collection of integers `candidates` and a target integer `target`, return all **unique combinations** in `candidates` where the candidate numbers sum to `target`.

Each number in `candidates` may be used **only once** in the combination.

### Constraints

- `1 <= candidates.length <= 100`
- `1 <= candidates[i] <= 50`
- `1 <= target <= 30`
- The solution set must **not contain duplicate combinations**

## Examples

**Example 1:**

```
Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: [
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
```

**Example 2:**

```
Input: candidates = [2,5,2,1,2], target = 5
Output: [
[1,2,2],
[5]
]
```

## Solutions

### Solution 1: Brute Force (Generate All Subsets + Deduplication)

#### Approach

We generate **all possible subsets** using recursion and check if their sum equals the target.

Since duplicates exist in the input, we:

- Normalize each valid combination (sort it)
- Use a **hash map (`seen`)** to avoid duplicate combinations

#### Steps

1. Generate all subsets using include/exclude recursion
2. If subset sum equals target:
   - Sort the subset
   - Convert it to a unique key
   - Store only if not seen before
3. Return all unique subsets

#### Complexity

- **Time Complexity:** O(2ⁿ \* n)
- **Space Complexity:** O(n) (recursion stack) + O(k) result

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Backtracking (Without Duplicate Handling)

#### Approach

We build combinations incrementally using backtracking.

- At each step, choose an element and move forward
- Stop early if sum exceeds target

However, this version **does not handle duplicates**, so it may produce repeated combinations.

#### Steps

1. Start from index `0`
2. For each element:
   - Add to current combination
   - Recurse with `i + 1` (since each element used once)
   - Backtrack
3. Stop when sum exceeds target

#### Complexity

- **Time Complexity:** O(2ⁿ)
- **Space Complexity:** O(n)

#### ⚠️ Note

This solution may generate **duplicate combinations** and is not fully correct.

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Optimized Backtracking (Sort + Skip Duplicates)

#### Approach

We optimize backtracking by:

1. **Sorting the array** to group duplicates
2. Skipping duplicate elements during recursion

Key idea:

```

if (i > start && candidates[i] === candidates[i - 1]) continue;

```

This ensures:

- Each unique number is used only once per recursion level
- Duplicate combinations are avoided

#### Steps

1. Sort the array
2. Use backtracking:
   - For each index:
     - Skip duplicates
     - Stop early if sum exceeds target
     - Add element and recurse with `i + 1`
3. Store valid combinations

#### Complexity

- **Time Complexity:** O(2ⁿ)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach                        | Time Complexity | Space Complexity | Notes                             |
| ------------------------------- | --------------- | ---------------- | --------------------------------- |
| Brute Force                     | O(2ⁿ \* n)      | O(n)             | Needs deduplication using map     |
| Backtracking (Naive)            | O(2ⁿ)           | O(n)             | Generates duplicate combinations  |
| Optimized Backtracking (Sorted) | O(2ⁿ)           | O(n)             | ✅ Correct and efficient solution |
