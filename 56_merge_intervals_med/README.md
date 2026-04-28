# Merge Intervals (LeetCode #56)

## Problem Statement

Given an array of intervals `intervals` where `intervals[i] = [starti, endi]`, merge all overlapping intervals, and return an array of the **non-overlapping intervals** that cover all the intervals in the input.

### Constraints

- `1 <= intervals.length <= 10^4`
- `intervals[i].length == 2`
- `0 <= starti <= endi <= 10^4`

### Examples

**Example 1:**

```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
```

**Example 2:**

```
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
```

**Example 3:**

```
Input: intervals = [[4,7],[1,4]]
Output: [[1,7]]
```

## Solutions

### Solution 1: Brute Force

#### Approach

We repeatedly compare every pair of intervals and merge them if they overlap.
This process continues until no more merges are possible.

#### Steps

1. Iterate through all pairs of intervals
2. If two intervals overlap:
   - Merge them into a new interval
   - Replace the old intervals
3. Repeat the process until no merges occur

#### Complexity

- **Time Complexity:** O(n²) to O(n³)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Sorting + Merge (Optimal)

#### Approach

If intervals are sorted by their start time, overlapping intervals will be adjacent.
We can then merge them in a single pass.

#### Steps

1. Sort intervals based on start time (using custom merge sort)
2. Initialize result with the first interval
3. Traverse remaining intervals:
   - If current interval overlaps with last merged interval → merge them
   - Otherwise → add as a new interval

#### Complexity

- **Time Complexity:** O(n log n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution2.js)

## Summary

| Approach        | Time Complexity | Space Complexity | Notes                   |
| --------------- | --------------- | ---------------- | ----------------------- |
| Brute Force     | O(n² - n³)      | O(1)             | Simple but inefficient  |
| Sorting + Merge | O(n log n)      | O(n)             | Optimal and widely used |
