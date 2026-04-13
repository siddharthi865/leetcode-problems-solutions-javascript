# Merge Sorted Array (LeetCode #88)

## Problem Statement

You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.

The final sorted array should **not be returned**, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where:

- The first `m` elements denote valid elements
- The last `n` elements are `0` placeholders to hold additional elements

### Constraints

- `nums1.length == m + n`
- `nums2.length == n`
- `0 <= m, n <= 200`
- `1 <= m + n <= 200`
- `-10^9 <= nums1[i], nums2[j] <= 10^9`

---

## Examples

**Example 1:**

```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
```

**Example 2:**

```
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
```

**Example 3:**

```
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
```

## Solutions

### Solution 1: Brute Force (Merge + Sort)

#### Approach

We first copy all elements of `nums2` into `nums1`, then sort the entire array manually.

#### Steps

1. Copy elements of `nums2` into the empty slots of `nums1`
2. Apply a sorting algorithm (e.g., Bubble Sort)
3. The array becomes sorted

#### Complexity

- **Time Complexity:** O((m + n)²)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Extra Array (Merge Like Merge Sort)

#### Approach

We use an additional array to merge both sorted arrays efficiently, then copy back to `nums1`.

#### Steps

1. Initialize a new array of size `m + n`
2. Use two pointers to compare elements from both arrays
3. Insert smaller element into result array
4. Copy remaining elements (if any)
5. Copy result back into `nums1`

#### Complexity

- **Time Complexity:** O(m + n)
- **Space Complexity:** O(m + n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Two Pointers from End (Optimal)

#### Approach

We take advantage of the empty space at the end of `nums1` and fill it from the back.

#### Steps

1. Initialize three pointers:
   - `i = m - 1` (end of valid elements in `nums1`)
   - `j = n - 1` (end of `nums2`)
   - `k = m + n - 1` (end of `nums1`)
2. Compare `nums1[i]` and `nums2[j]`
3. Place the larger element at position `k`
4. Move pointers accordingly
5. If elements remain in `nums2`, copy them

#### Complexity

- **Time Complexity:** O(m + n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach              | Time Complexity | Space Complexity | Notes                      |
| --------------------- | --------------- | ---------------- | -------------------------- |
| Brute Force           | O((m+n)²)       | O(1)             | Simple but inefficient     |
| Extra Array           | O(m+n)          | O(m+n)           | Easy but uses extra space  |
| Two Pointer (Optimal) | O(m+n)          | O(1)             | Best and in-place solution |
