# Insert Interval (LeetCode #57)

## Problem Statement

You are given an array of **non-overlapping intervals** `intervals` where `intervals[i] = [starti, endi]` and the intervals are sorted in ascending order by `starti`.

You are also given a new interval `newInterval = [start, end]`.

Insert `newInterval` into `intervals` such that:

- The resulting list remains **sorted**
- There are **no overlapping intervals**
- Merge intervals if necessary

Return the updated list of intervals.

### Constraints

- `0 <= intervals.length <= 10^4`
- `intervals[i].length == 2`
- `0 <= starti <= endi <= 10^5`
- Intervals are sorted in ascending order
- `newInterval.length == 2`
- `0 <= start <= end <= 10^5`

## Examples

**Example 1:**

```
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
```

**Example 2:**

```
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
```

## Solutions

### Solution 1: Brute Force (Insert + Sort + Merge)

#### Approach

We insert the new interval into the array and then treat the entire problem like the **Merge Intervals** problem.

#### Steps

1. Insert `newInterval` into `intervals`
2. Sort intervals manually based on start time
3. Traverse and merge overlapping intervals

#### Complexity

- **Time Complexity:** O(n²) (due to manual sorting)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Optimal (Single Pass Merge)

#### Approach

Since the intervals are already **sorted and non-overlapping**, we can solve this in a **single pass**.

We divide the process into 3 parts:

1. Add all intervals **before overlap**
2. Merge all **overlapping intervals**
3. Add remaining intervals

#### Steps

1. Traverse and add intervals that end before `newInterval` starts
2. Merge overlapping intervals:
   - Update start = min(current start, newInterval start)
   - Update end = max(current end, newInterval end)
3. Add the merged interval
4. Add remaining intervals

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution2.js)

## Summary

| Approach              | Time Complexity | Space Complexity | Notes                   |
| --------------------- | --------------- | ---------------- | ----------------------- |
| Brute Force           | O(n²)           | O(n)             | Simple but inefficient  |
| Single Pass (Optimal) | O(n)            | O(n)             | Best and most efficient |
