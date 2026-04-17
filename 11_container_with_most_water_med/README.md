# Container With Most Water (LeetCode #11)

## Problem Statement

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i-th` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the **maximum amount of water**.

Return the maximum amount of water a container can store.

> Note: You may not slant the container.

### Constraints

- `n == height.length`
- `2 <= n <= 10^5`
- `0 <= height[i] <= 10^4`

### Examples

**Example 1:**

```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
```

**Example 2:**

```
Input: height = [1,1]
Output: 1
```

**Example 3:**

```
Input: height = [4,3,2,1,4]
Output: 16
```

## Solutions

### Solution 1: Brute Force

#### Approach

We check **every possible pair of lines** and calculate the area formed between them.

The area is determined by:

```

area = min(height[i], height[j]) \* (j - i)

```

We keep track of the maximum area found.

---

#### Steps

1. Iterate through each index `i`
2. For every `i`, iterate through `j > i`
3. Compute:
   - Width = `j - i`
   - Height = minimum of both lines
4. Calculate area
5. Update maximum if needed

---

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)

---

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Two Pointer (Optimal)

#### Approach

We use **two pointers** to reduce unnecessary calculations:

- Start with one pointer at the beginning and one at the end
- Calculate the area
- Move the pointer pointing to the **shorter line**

Why?

- The shorter line limits the height
- Moving the taller line won't increase area
- Only moving the shorter line gives a chance to find a taller boundary

---

#### Steps

1. Initialize:
   - `left = 0`
   - `right = n - 1`
2. While `left < right`:
   - Compute area
   - Update max area
   - Move:
     - `left++` if left height is smaller
     - else `right--`
3. Return max area

---

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

---

#### [Click for solution](./solutions/solution2.js)

## Summary

| Approach              | Time Complexity | Space Complexity | Notes                          |
| --------------------- | --------------- | ---------------- | ------------------------------ |
| Brute Force           | O(n²)           | O(1)             | Simple but very slow           |
| Two Pointer (Optimal) | O(n)            | O(1)             | Best and most efficient method |
