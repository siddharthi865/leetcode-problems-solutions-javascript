# Permutations II (LeetCode #47)

## Problem Statement

Given a collection of numbers `nums` that **might contain duplicates**, return **all possible unique permutations** in any order.

### Constraints

- `1 <= nums.length <= 8`
- `-10 <= nums[i] <= 10`

### Examples

**Example 1:**

```
Input: nums = [1,1,2]
Output: [[1,1,2],[1,2,1],[2,1,1]]
```

**Example 2:**

```
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
```

## Solutions

### Solution 1: Brute Force (Generate All + Remove Duplicates)

#### Approach

We generate **all possible permutations** without worrying about duplicates.
After generating them, we **remove duplicate permutations** using a set.

#### Steps

1. Use backtracking to generate all permutations
2. Store each permutation
3. Convert each permutation to a string and store in a set
4. Only keep unique permutations

#### Complexity

- **Time Complexity:** O(n! \* n)
- **Space Complexity:** O(n! \* n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Backtracking with Duplicate Skipping (Optimal)

#### Approach

To avoid generating duplicates in the first place:

- Sort the array so duplicates are adjacent
- Use a `used` array to track visited elements
- Skip duplicate elements during recursion

Key condition:

```

if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;

```

This ensures duplicates are only used in the correct order.

#### Steps

1. Sort the input array
2. Use backtracking to build permutations
3. Track used elements
4. Skip duplicates using the condition above
5. Add valid permutations to result

#### Complexity

- **Time Complexity:** O(n!)
- **Space Complexity:** O(n) (excluding output)

#### [Click for solution](./solutions/solution2.js)

## Summary

| Approach                          | Time Complexity | Space Complexity | Notes                                  |
| --------------------------------- | --------------- | ---------------- | -------------------------------------- |
| Brute Force + Deduplication       | O(n! \* n)      | O(n! \* n)       | Simple but generates duplicates first  |
| Backtracking with Skip Duplicates | O(n!)           | O(n)             | Optimal, avoids duplicates efficiently |
