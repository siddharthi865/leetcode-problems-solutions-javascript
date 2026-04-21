# Find First and Last Position of Element in Sorted Array (LeetCode #34)

## Problem Statement

Given an array of integers `nums` sorted in **non-decreasing order**, find the **starting and ending position** of a given `target` value.

If the target is not found in the array, return `[-1, -1]`.

You must write an algorithm with **O(log n)** runtime complexity.

### Constraints

- `0 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`
- `nums` is sorted in **non-decreasing order**
- `-10^9 <= target <= 10^9`

## Examples

**Example 1:**

```
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```

**Example 2:**

```
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

**Example 3:**

```
Input: nums = [], target = 0
Output: [-1,-1]
```

## Solutions

### Solution 1: Brute Force

#### Approach

We traverse the array linearly and track the **first** and **last** occurrence of the target.

#### Steps

1. Initialize `start = -1` and `end = -1`
2. Iterate through the array
3. If element equals target:
   - If `start` is not set → assign current index
   - Always update `end`
4. Return `[start, end]`

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Binary Search (Optimal)

#### Approach

Since the array is sorted, we use **Binary Search** to achieve O(log n).

We perform **two separate binary searches**:

- One to find the **first occurrence (left boundary)**
- One to find the **last occurrence (right boundary)**

#### Steps

1. Run binary search to find first occurrence:
   - If target found → move left to find earlier occurrence
2. Run binary search to find last occurrence:
   - If target found → move right to find later occurrence
3. Return both indices

#### Complexity

- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

## Summary

| Approach      | Time Complexity | Space Complexity | Notes                         |
| ------------- | --------------- | ---------------- | ----------------------------- |
| Brute Force   | O(n)            | O(1)             | Simple but not optimal        |
| Binary Search | O(log n)        | O(1)             | Optimal and required solution |
