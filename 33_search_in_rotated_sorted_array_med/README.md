# Search in Rotated Sorted Array (LeetCode #33)

## Problem Statement

There is an integer array `nums` sorted in ascending order with **distinct values**.

Before being passed to your function, `nums` may be **rotated at an unknown index `k`** such that:

```
[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]
```

Given the array `nums` after rotation and an integer `target`, return the **index of target** if it exists in the array, otherwise return `-1`.

You must write an algorithm with **O(log n)** runtime complexity.

### Constraints

- `1 <= nums.length <= 5000`
- `-10^4 <= nums[i] <= 10^4`
- All values of `nums` are **unique**
- `nums` is an ascending array that is **possibly rotated**
- `-10^4 <= target <= 10^4`

### Examples

**Example 1:**

```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

**Example 2:**

```
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
```

**Example 3:**

```
Input: nums = [1], target = 0
Output: -1
```

## Solutions

### Solution 1: Brute Force

#### Approach

We simply **scan the entire array** and return the index when we find the target.

#### Steps

1. Iterate through the array from start to end
2. Compare each element with the target
3. If match found → return index
4. If no match → return `-1`

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Binary Search (Optimal)

#### Approach

Even though the array is rotated, **at least one half of the array is always sorted**.

We modify binary search to:

- Detect which half is sorted
- Check if the target lies in that half
- Narrow down the search space accordingly

#### Steps

1. Initialize `low = 0`, `high = n - 1`
2. While `low <= high`:
   - Compute `mid`
   - If `nums[mid] == target` → return `mid`
   - Check if **left half is sorted**:
     - If yes, check if target lies in left half
       - If yes → search left
       - Else → search right
   - Else, **right half must be sorted**:
     - Check if target lies in right half
       - If yes → search right
       - Else → search left
3. If not found → return `-1`

#### Complexity

- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

## Summary

| Approach      | Time Complexity | Space Complexity | Notes                               |
| ------------- | --------------- | ---------------- | ----------------------------------- |
| Brute Force   | O(n)            | O(1)             | Simple but does not meet constraint |
| Binary Search | O(log n)        | O(1)             | Optimal solution                    |
