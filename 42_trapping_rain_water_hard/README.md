# Trapping Rain Water (LeetCode #42)

## Problem Statement

Given `n` non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

### Constraints

- `n == height.length`
- `1 <= n <= 2 * 10^4`
- `0 <= height[i] <= 10^5`

### Examples

**Example 1:**

```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
```

**Example 2:**

```
Input: height = [4,2,0,3,2,5]
Output: 9
```

## Solutions

### Solution 1: Brute Force

#### Approach

For every index, calculate:

- Maximum height to the left
- Maximum height to the right

Water trapped at index `i`:

```

min(leftMax, rightMax) - height[i]

```

#### Steps

1. Iterate through each index
2. Find maximum height on the left side
3. Find maximum height on the right side
4. Compute trapped water at current index
5. Add to total water

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Dynamic Programming (Prefix & Suffix Arrays)

#### Approach

Instead of recalculating left and right max repeatedly:

- Precompute arrays:
  - `leftMax[i]` → max height from left
  - `rightMax[i]` → max height from right

#### Steps

1. Create `leftMax` array
2. Create `rightMax` array
3. For each index:
   - Calculate water using precomputed values
4. Sum up total water

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Two Pointers (Optimal)

#### Approach

Use two pointers to avoid extra space:

- One pointer at start
- One pointer at end

Track:

- `leftMax`
- `rightMax`

Key insight:

- Water depends on the smaller boundary

#### Steps

1. Initialize two pointers (`left`, `right`)
2. Track `leftMax` and `rightMax`
3. If left height < right height:
   - Process left side
4. Else:
   - Process right side
5. Accumulate trapped water

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach               | Time Complexity | Space Complexity | Notes                        |
| ---------------------- | --------------- | ---------------- | ---------------------------- |
| Brute Force            | O(n²)           | O(1)             | Simple but inefficient       |
| DP Arrays              | O(n)            | O(n)             | Faster but uses extra memory |
| Two Pointers (Optimal) | O(n)            | O(1)             | Best solution                |
