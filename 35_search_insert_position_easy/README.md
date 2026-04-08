# Search Insert Position (LeetCode #35)

## Problem Statement

Given a **sorted array of distinct integers** `nums` and a target value `target`, return the **index** if the target is found.

If not, return the index where it **would be inserted** in order.

### Constraints

- `1 <= nums.length <= 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` contains **distinct values**
- `nums` is sorted in **ascending order**
- `-10^4 <= target <= 10^4`

## Examples

**Example 1:**

```
Input: nums = [1,3,5,6], target = 5
Output: 2
```

**Example 2:**

```
Input: nums = [1,3,5,6], target = 2
Output: 1
```

**Example 3:**

```
Input: nums = [1,3,5,6], target = 7
Output: 4
```

## Solutions

### Solution 1: Brute Force (Linear Search)

#### Approach

We iterate through the array and find the **first position where the element is greater than or equal to the target**.

This position is either:

- The exact match
- Or the correct insertion index

---

#### Steps

1. Traverse the array from left to right
2. If `nums[i] >= target` → return `i`
3. If no such element is found → return `nums.length`

---

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

---

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Binary Search (Optimal)

#### Approach

Since the array is sorted, we use **Binary Search** to achieve O(log n).

We narrow down the search space by comparing the middle element with the target.

---

#### Steps

1. Initialize:
   - `left = 0`
   - `right = nums.length - 1`
2. While `left <= right`:
   - Find `mid`
   - If `nums[mid] === target` → return `mid`
   - If `nums[mid] < target` → search right half
   - If `nums[mid] > target` → search left half
3. When loop ends → return `left` (insertion index)

---

#### Complexity

- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)

---

#### [Click for solution](./solutions/solution2.js)

## Summary

| Approach      | Time Complexity | Space Complexity | Notes                         |
| ------------- | --------------- | ---------------- | ----------------------------- |
| Brute Force   | O(n)            | O(1)             | Simple but not optimal        |
| Binary Search | O(log n)        | O(1)             | Optimal and required approach |
