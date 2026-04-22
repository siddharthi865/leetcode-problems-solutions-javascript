# First Missing Positive (LeetCode #41)

## Problem Statement

Given an unsorted integer array `nums`, return the **smallest missing positive integer**.

You must implement an algorithm that runs in **O(n)** time and uses **O(1)** auxiliary space.

### Constraints

- `1 <= nums.length <= 10^5`
- `-2^31 <= nums[i] <= 2^31 - 1`

### Examples

**Example 1:**

```
Input: nums = [1,2,0]
Output: 3
```

**Example 2:**

```
Input: nums = [3,4,-1,1]
Output: 2
```

**Example 3:**

```
Input: nums = [7,8,9,11,12]
Output: 1
```

## Solutions

### Solution 1: Brute Force

#### Approach

We check every positive integer starting from `1` and verify whether it exists in the array.

#### Steps

1. Start from number `1`
2. For each number, scan the entire array
3. If the number is not found → return it
4. Otherwise, continue to the next number

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Hash Set

#### Approach

We store all numbers in a hash set for fast lookup, then check from `1 → n+1` for the missing number.

#### Steps

1. Insert all elements into a hash set
2. Iterate from `1` to `n + 1`
3. Return the first number not found in the set

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Cyclic Sort (Optimal)

#### Approach

We place each number `x` at index `x - 1` (if valid). This uses the array itself as a hash map.

After rearranging:

- If `nums[i] !== i + 1`, then `i + 1` is missing

#### Steps

1. Iterate through array:
   - While current number is in range `[1, n]`
   - Swap it with its correct position (`nums[x - 1]`)
2. Traverse array again:
   - First index where `nums[i] !== i + 1` → return `i + 1`
3. If all positions are correct → return `n + 1`

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach    | Time Complexity | Space Complexity | Notes                         |
| ----------- | --------------- | ---------------- | ----------------------------- |
| Brute Force | O(n²)           | O(1)             | Simple but inefficient        |
| Hash Set    | O(n)            | O(n)             | Fast but uses extra memory    |
| Cyclic Sort | O(n)            | O(1)             | Optimal and in-place solution |
