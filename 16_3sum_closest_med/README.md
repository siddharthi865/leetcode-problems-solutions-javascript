# 3Sum Closest (LeetCode #16)

## Problem Statement

Given an integer array `nums` of length `n` and an integer `target`, find **three integers** in `nums` such that the sum is **closest to the target**.

Return the **sum of the three integers**.

### Constraints

- `3 <= nums.length <= 500`
- `-1000 <= nums[i] <= 1000`
- `-10^4 <= target <= 10^4`
- Each input has **exactly one solution**

## Examples

**Example 1:**

```
Input: nums = [-1,2,1,-4], target = 1
Output: 2
```

**Example 2:**

```
Input: nums = [0,0,0], target = 1
Output: 0
```

## Solutions

### Solution 1: Brute Force

#### Approach

We check **every possible triplet** in the array and compute their sum.
For each triplet, we track how close the sum is to the target.

#### Steps

1. Iterate through all triplets `(i, j, k)` where `i < j < k`
2. Compute the sum of the three elements
3. Track the sum with the **minimum absolute difference** from the target
4. Return the closest sum

#### Complexity

- **Time Complexity:** O(n³)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Sorting + Two Pointers (Optimal)

#### Approach

We first **sort the array**, then fix one element and use a **two-pointer technique** to find the best pair.

This reduces the problem from 3 nested loops to **2 loops**.

#### Steps

1. Sort the array
2. Loop through each element as the first number
3. Use two pointers:
   - `left = i + 1`
   - `right = n - 1`
4. Calculate sum:
   - If sum < target → move `left` forward
   - If sum > target → move `right` backward
   - If equal → return immediately
5. Track the closest sum throughout

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

---

## Summary

| Approach              | Time Complexity | Space Complexity | Notes                   |
| --------------------- | --------------- | ---------------- | ----------------------- |
| Brute Force           | O(n³)           | O(1)             | Simple but inefficient  |
| Sorting + Two Pointer | O(n²)           | O(1)             | Optimal and widely used |
