# Single Number (LeetCode #136)

## Problem Statement

Given a **non-empty array of integers `nums`**, every element appears **twice except for one**.  
Find and return that **single unique element**.

### Constraints

- `1 <= nums.length <= 3 * 10^4`
- `-3 * 10^4 <= nums[i] <= 3 * 10^4`
- Every element appears **exactly twice except one**
- Must solve in **O(n) time** and **O(1) space**

## Examples

**Example 1:**

```
Input: nums = [2,2,1]
Output: 1
```

**Example 2:**

```
Input: nums = [4,1,2,1,2]
Output: 4
```

**Example 3:**

```
Input: nums = [1]
Output: 1
```

## Solutions

### Solution 1: Brute Force

#### Approach

For every element, we count how many times it appears in the array.
If an element appears only once, that is our answer.

#### Steps

1. Iterate through each element
2. For each element, count its occurrences
3. If count is `1`, return that element

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Hash Map

#### Approach

We use a hash map (object) to store the **frequency of each number**.

After building the frequency map, we find the element that appears only once.

#### Steps

1. Create an empty map
2. Traverse the array and count frequencies
3. Iterate over the map
4. Return the element with frequency `1`

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Bit Manipulation (XOR - Optimal)

#### Approach

We use the **XOR operation** to eliminate duplicate numbers.

Key properties of XOR:

- `a ^ a = 0` (same numbers cancel out)
- `a ^ 0 = a`
- XOR is commutative

So, when we XOR all elements:

- Duplicate numbers cancel each other
- Only the unique number remains

#### Steps

1. Initialize a variable `result = 0`
2. Traverse the array
3. XOR each element with `result`
4. Return the final value

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach      | Time Complexity | Space Complexity | Notes                                 |
| ------------- | --------------- | ---------------- | ------------------------------------- |
| Brute Force   | O(n²)           | O(1)             | Simple but inefficient                |
| Hash Map      | O(n)            | O(n)             | Faster but uses extra space           |
| XOR (Optimal) | O(n)            | O(1)             | Best solution (meets all constraints) |
