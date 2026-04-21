# Next Permutation (LeetCode #31)

## Problem Statement

Given an array of integers `nums`, rearrange it into the **next lexicographically greater permutation** of numbers.

If such arrangement is not possible (i.e., the array is in descending order), rearrange it to the **lowest possible order (sorted in ascending order)**.

The transformation must be done **in-place** using only **constant extra memory**.

---

### Constraints

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 100`
- Must modify array **in-place**
- Must use **O(1) extra space**

### Examples

**Example 1:**

```
Input: nums = [1,2,3]
Output: [1,3,2]
```

**Example 2:**

```
Input: nums = [3,2,1]
Output: [1,2,3]
```

**Example 3:**

```
Input: nums = [1,1,5]
Output: [1,5,1]
```

## Solutions

### Solution 1: Brute Force (Generate All Permutations)

#### Approach

We generate **all permutations** of the array, sort them lexicographically, and then find the current permutation. The next one in order is the answer.

---

#### Steps

1. Generate all permutations of `nums`
2. Sort all permutations lexicographically
3. Find index of current permutation
4. Return the next permutation (or first if at end)

---

#### Complexity

- **Time Complexity:** O(n! × n)
- **Space Complexity:** O(n!)

---

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Optimal Greedy Approach (Pivot + Swap + Reverse)

#### Approach

We construct the next permutation using a greedy observation:

We want the **next smallest increase** in lexicographical order.

---

#### Key Idea

1. Find the first decreasing element from the right (pivot)
2. Find the smallest element greater than pivot on the right side
3. Swap them
4. Reverse the suffix to get the smallest arrangement

---

#### Steps

1. Traverse from right and find pivot (`nums[i] < nums[i+1]`)
2. If pivot exists:
   - Find element just larger than pivot
   - Swap them
3. Reverse the suffix after pivot index

---

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

---

#### [Click for solution](./solutions/solution2.js)

---

## Summary

| Approach         | Time Complexity | Space Complexity | Notes                                      |
| ---------------- | --------------- | ---------------- | ------------------------------------------ |
| Brute Force      | O(n!)           | O(n!)            | Generates all permutations (not practical) |
| Greedy (Optimal) | O(n)            | O(1)             | Best possible solution                     |
