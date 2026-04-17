# 4Sum (LeetCode #18)

## Problem Statement

Given an array of integers `nums` and an integer `target`, return all the **unique quadruplets** `[nums[a], nums[b], nums[c], nums[d]]` such that:

- `0 <= a, b, c, d < n`
- All indices are **distinct**
- `nums[a] + nums[b] + nums[c] + nums[d] == target`

Return the answer in **any order**, but ensure no duplicate quadruplets.

### Constraints

- `1 <= nums.length <= 200`
- `-10⁹ <= nums[i] <= 10⁹`
- `-10⁹ <= target <= 10⁹`

## Examples

**Example 1:**

```
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
```

**Example 2:**

```
Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]
```

## Solutions

### Solution 1: Brute Force

#### Approach

We check **every possible combination of 4 elements** and see if their sum equals the target.

To ensure uniqueness, we manually check whether a quadruplet already exists before adding it to the result.

#### Steps

1. Use **four nested loops** to generate all combinations
2. Ensure indices are distinct (`a < b < c < d`)
3. Check if sum equals target
4. Before adding:
   - Verify the quadruplet is not already present
5. Add valid quadruplets to result

#### Complexity

- **Time Complexity:** O(n⁴)
- **Space Complexity:** O(k) (number of quadruplets)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Sorting + Two Pointers

#### Approach

This is an optimized extension of the **3Sum problem**.

We:

- Sort the array
- Fix two numbers
- Use **two pointers** to find the remaining two numbers

Sorting helps:

- Avoid duplicates efficiently
- Reduce complexity using two-pointer traversal

#### Steps

1. Sort the array (manually, since built-ins are not allowed)
2. Loop through first element `i`
3. Loop through second element `j`
4. Use two pointers:
   - `left = j + 1`
   - `right = n - 1`
5. Calculate sum:
   - If equal → store quadruplet
   - If less → move `left++`
   - If more → move `right--`
6. Skip duplicates for all pointers

#### Complexity

- **Time Complexity:** O(n³)
- **Space Complexity:** O(1) (excluding output)

#### [Click for solution](./solutions/solution2.js)

## Summary

| Approach              | Time Complexity | Space Complexity | Notes                     |
| --------------------- | --------------- | ---------------- | ------------------------- |
| Brute Force           | O(n⁴)           | O(k)             | Simple but extremely slow |
| Sorting + Two Pointer | O(n³)           | O(1)             | Optimal for 4Sum          |
