# Remove Duplicates from Sorted Array (LeetCode #26)

## Problem Statement

Given an integer array `nums` sorted in **non-decreasing order**, remove the duplicates **in-place** such that each unique element appears only once.

Return the number of unique elements `k`.

- The first `k` elements of `nums` should contain the unique elements in sorted order
- The remaining elements beyond index `k - 1` can be ignored

### Constraints

- `1 <= nums.length <= 3 * 10⁴`
- `-100 <= nums[i] <= 100`
- `nums` is sorted in non-decreasing order

## Examples

**Example 1:**

```
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
```

**Example 2:**

```
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,*,*,*,*,_]
```

## Solutions

### Solution 1: Brute Force (Extra Space)

#### Approach

We use an additional array to store only unique elements.

Since the array is sorted, we can compare each element with the previous one and only keep distinct values.

#### Steps

1. Initialize a temporary array
2. Add the first element
3. Traverse the array:
   - If current element ≠ previous → add to temp
4. Copy elements back into original array
5. Return the size of temp (`k`)

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Two Pointers (Optimal)

#### Approach

We use the **two-pointer technique** to modify the array in-place.

- One pointer (`i`) scans the array
- Another pointer (`k`) keeps track of the position to place the next unique element

Since the array is sorted, duplicates are adjacent.

#### Steps

1. Initialize `k = 1` (first element is always unique)
2. Traverse from index `1`:
   - If `nums[i] !== nums[k - 1]`:
     - Place `nums[i]` at index `k`
     - Increment `k`
3. Return `k`

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

---

## Summary

| Approach               | Time Complexity | Space Complexity | Notes                       |
| ---------------------- | --------------- | ---------------- | --------------------------- |
| Brute Force            | O(n)            | O(n)             | Uses extra array            |
| Two Pointers (Optimal) | O(n)            | O(1)             | In-place and most efficient |

```

---

If you want, I can also add:

- visual diagrams (pointer movement)
- dry run tables
- or GitHub badges + structure improvements 🚀
```
