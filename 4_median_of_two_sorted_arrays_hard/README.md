# Median of Two Sorted Arrays (LeetCode #4)

## Problem Statement

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the **median** of the two sorted arrays.

The overall run time complexity should be **O(log (m+n))**.

### Constraints

- `nums1.length == m`
- `nums2.length == n`
- `0 <= m <= 1000`
- `0 <= n <= 1000`
- `1 <= m + n <= 2000`
- `-10^6 <= nums1[i], nums2[i] <= 10^6`

### Examples

**Example 1:**

```
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
```

**Example 2:**

```
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
```

**Example 3:**

```
Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000
```

## Solutions

### Solution 1: Brute Force (Merge + Sort)

#### Approach

We combine both arrays into a single array and then sort it manually. After sorting, we compute the median based on whether the total length is odd or even.

#### Steps

1. Create a new array of size `m + n`
2. Copy elements from both arrays
3. Sort the merged array (without using built-in sort)
4. Compute median:
   - If odd → middle element
   - If even → average of two middle elements

#### Complexity

- **Time Complexity:** O((m+n)²)
- **Space Complexity:** O(m+n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Merge (Two Pointer Approach)

#### Approach

Since both arrays are already sorted, we can merge them efficiently using two pointers (similar to merge sort), avoiding unnecessary sorting.

#### Steps

1. Initialize two pointers for both arrays
2. Compare elements and build a sorted merged array
3. Continue until all elements are merged
4. Compute median from merged array

#### Complexity

- **Time Complexity:** O(m+n)
- **Space Complexity:** O(m+n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Binary Search Partition (Optimal)

#### Approach

Instead of merging, we use **binary search** to partition both arrays such that:

- Left half contains half of total elements
- All elements in left half are ≤ all elements in right half

We perform binary search on the smaller array to find the correct partition.

#### Steps

1. Always binary search on smaller array
2. Partition both arrays:
   - `partitionX` for `nums1`
   - `partitionY` for `nums2`
3. Compute:
   - `maxLeftX`, `minRightX`
   - `maxLeftY`, `minRightY`
4. Check:
   - If valid partition → compute median
   - Else adjust binary search
5. Repeat until correct partition is found

#### Complexity

- **Time Complexity:** O(log(min(m, n)))
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach                  | Time Complexity  | Space Complexity | Notes                      |
| ------------------------- | ---------------- | ---------------- | -------------------------- |
| Brute Force (Sort)        | O((m+n)²)        | O(m+n)           | Simple but inefficient     |
| Merge (Two Pointer)       | O(m+n)           | O(m+n)           | Uses sorted property       |
| Binary Search (Partition) | O(log(min(m,n))) | O(1)             | Optimal and most efficient |
