# Remove Element (LeetCode #27)

## Problem Statement

Given an integer array `nums` and an integer `val`, remove all occurrences of `val` **in-place**. The order of the elements may be changed.

Return the number of elements `k` such that the first `k` elements of `nums` contain values **not equal to `val`**.

### Constraints

- `0 <= nums.length <= 100`
- `0 <= nums[i] <= 50`
- `0 <= val <= 100`
- You must modify the array **in-place**
- The order of elements **does not matter**

## Examples

**Example 1:**

```
Input: nums = [3,2,2,3], val = 3
Output: 2
Explanation: nums = [2,2,*,*]
```

**Example 2:**

```
Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5
Explanation: nums = [0,1,4,0,3,*,*,_]
```

## Solutions

### Solution 1: Brute Force (Extra Array)

#### Approach

We create a temporary array to store all elements that are **not equal to `val`**, and then copy them back into the original array.

#### Steps

1. Traverse the array
2. Store elements ≠ `val` in a temporary array
3. Copy them back to `nums`
4. Return the count of valid elements

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Two Pointer (Overwrite Method)

#### Approach

We use a pointer `k` to track where the next valid element should go. Traverse the array and overwrite unwanted elements.

#### Steps

1. Initialize `k = 0`
2. Traverse array:
   - If element ≠ `val`, assign it to `nums[k]` and increment `k`
3. Return `k`

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Swap with End (Optimal)

#### Approach

Since order does not matter, we can swap unwanted elements with the last element and shrink the array size.

#### Steps

1. Initialize two pointers:
   - `i = 0`
   - `n = nums.length`
2. While `i < n`:
   - If `nums[i] === val`:
     - Replace it with `nums[n - 1]`
     - Decrease `n`
   - Else:
     - Move `i` forward
3. Return `n`

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach                | Time Complexity | Space Complexity | Notes                          |
| ----------------------- | --------------- | ---------------- | ------------------------------ |
| Brute Force             | O(n)            | O(n)             | Not in-place                   |
| Two Pointer (Overwrite) | O(n)            | O(1)             | Maintains relative order       |
| Swap with End (Optimal) | O(n)            | O(1)             | Best, fewer unnecessary writes |
