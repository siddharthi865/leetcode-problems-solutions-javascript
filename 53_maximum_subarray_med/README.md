# Maximum Subarray (LeetCode #53)

## Problem Statement

Given an integer array `nums`, find the **contiguous subarray** (containing at least one number) which has the **largest sum**, and return its sum.

### Constraints

- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

### Examples

**Example 1:**

```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
```

**Example 2:**

```
Input: nums = [1]
Output: 1
```

**Example 3:**

```
Input: nums = [5,4,-1,7,8]
Output: 23
```

## Solutions

### Solution 1: Brute Force

#### Approach

We generate **all possible subarrays** and calculate their sums, keeping track of the maximum.

#### Steps

1. Pick a starting index
2. Pick an ending index
3. Compute sum of subarray between them
4. Track maximum sum

#### Complexity

- **Time Complexity:** O(n³)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Improved Brute Force

#### Approach

Instead of recalculating subarray sums repeatedly, we use a **running sum** while expanding the subarray.

#### Steps

1. Fix a starting index
2. Expand subarray one element at a time
3. Keep adding to current sum
4. Update maximum sum

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Kadane’s Algorithm (Optimal)

#### Approach

At each position, decide whether to:

- **Start a new subarray**, or
- **Extend the current subarray**

We keep track of:

- Current subarray sum
- Global maximum sum

#### Steps

1. Initialize `currentSum` and `maxSum` with first element
2. Traverse the array
3. For each element:
   - Either start new subarray OR extend existing one
4. Update global maximum

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach             | Time Complexity | Space Complexity | Notes                           |
| -------------------- | --------------- | ---------------- | ------------------------------- |
| Brute Force          | O(n³)           | O(1)             | Very slow, checks all subarrays |
| Improved Brute Force | O(n²)           | O(1)             | Avoids recomputation            |
| Kadane’s Algorithm   | O(n)            | O(1)             | Optimal solution                |
