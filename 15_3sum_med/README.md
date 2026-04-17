# 3Sum (LeetCode #15)

## Problem Statement

Given an integer array `nums`, return all the **unique triplets** `[nums[i], nums[j], nums[k]]` such that:

- `i != j`, `i != k`, and `j != k`
- `nums[i] + nums[j] + nums[k] == 0`

### Constraints

- `3 <= nums.length <= 3000`
- `-10^5 <= nums[i] <= 10^5`
- The solution set **must not contain duplicate triplets**

### Examples

**Example 1:**

```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
```

**Example 2:**

```
Input: nums = [0,1,1]
Output: []
```

**Example 3:**

```
Input: nums = [0,0,0]
Output: [[0,0,0]]
```

## Solutions

### Solution 1: Brute Force

#### Approach

We check **every possible triplet** in the array and see if their sum equals `0`.

To avoid duplicates:

- Each valid triplet is sorted manually
- A hash is used to store only unique triplets

#### Steps

1. Use three nested loops (`i`, `j`, `k`)
2. Check if `nums[i] + nums[j] + nums[k] === 0`
3. Sort the triplet manually
4. Store it only if not already seen

#### Complexity

- **Time Complexity:** O(n³)
- **Space Complexity:** O(n) (for storing unique triplets)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Sorting + Two Pointers

#### Approach

We first **sort the array**, then fix one element and use a **two-pointer approach** to find the other two elements.

This approach naturally helps in:

- Efficient searching
- Skipping duplicates

#### Steps

1. Sort the array
2. Iterate with index `i`
   - Skip duplicate values for `i`
3. Use two pointers:
   - `left = i + 1`
   - `right = end`
4. Calculate sum:
   - If sum < 0 → move `left`
   - If sum > 0 → move `right`
   - If sum === 0 → store triplet
5. Skip duplicate values for `left` and `right`

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(1) (ignoring output)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Hash Set (Improved Brute)

#### Approach

We reduce one loop by using a **hash set** to solve a 2-sum problem for each element.

To avoid duplicates:

- Each triplet is sorted manually
- A global hash ensures uniqueness

#### Steps

1. Fix an element `i`
2. Use a hash map (`seen`) for remaining elements
3. For each `j`:
   - Compute `complement = -nums[i] - nums[j]`
   - If complement exists → valid triplet found
4. Sort triplet manually
5. Store only if not already seen

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach              | Time Complexity | Space Complexity | Notes                                    |
| --------------------- | --------------- | ---------------- | ---------------------------------------- |
| Brute Force           | O(n³)           | O(n)             | Simple but very slow                     |
| Sorting + Two Pointer | O(n²)           | O(1)             | Optimal and most commonly used           |
| Hash Set              | O(n²)           | O(n)             | Easier than two-pointer, but extra space |
