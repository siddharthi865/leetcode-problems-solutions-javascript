# Two Sum (LeetCode #1)

## Problem Statement

Given an array of integers `nums` and an integer `target`, return the **indices** of the two numbers such that they add up to the target.

### Constraints

- Each input has **exactly one solution**
- You **may not use the same element twice**
- Return the answer in **any order**

### Examples

**Example 1:**

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
```

**Example 2:**

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3:**

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

## Solutions

### Solution 1: Brute Force

#### Approach

We check **every possible pair** of elements in the array and see if their sum equals the target.

#### Steps

1. Pick the first element
2. Compare it with every other element
3. If the sum matches the target → return indices
4. Otherwise, move to the next element

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Sorting + Two Pointers

#### Approach

We sort the array and use two pointers:

- One pointer at the beginning
- One pointer at the end

Move pointers based on the sum.

Since sorting changes indices, we store original indices alongside values.

#### Steps

1. Store `(value, index)` pairs
2. Sort based on values
3. Use two pointers:
   - If sum < target → move left pointer
   - If sum > target → move right pointer
   - If equal → return original indices

#### Complexity

- **Time Complexity:** O(n log n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Hash Map (Optimal)

#### Approach

Instead of checking all pairs, we store values in a hash map.

For each element:

- Compute its **complement** (`target - current`)
- Check if complement already exists in map

#### Steps

1. Initialize empty map
2. Iterate through array
3. For each number:
   - Compute complement
   - If complement exists → return indices
   - Otherwise, store current number with index

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution3.js)

---

## Summary

| Approach              | Time Complexity | Space Complexity | Notes                         |
| --------------------- | --------------- | ---------------- | ----------------------------- |
| Brute Force           | O(n²)           | O(1)             | Simple but slow               |
| Sorting + Two Pointer | O(n log n)      | O(n)             | Better but modifies structure |
| Hash Map              | O(n)            | O(n)             | Optimal                       |
