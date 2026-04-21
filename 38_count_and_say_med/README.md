# Count and Say (LeetCode #38)

## Problem Statement

The **count-and-say sequence** is a sequence of digit strings defined recursively:

- `countAndSay(1) = "1"`
- `countAndSay(n)` is the **run-length encoding (RLE)** of `countAndSay(n - 1)`

Run-length encoding works by replacing consecutive identical digits with:

- `"count" + "digit"`

For example:

```
"3322251" → "23321511"
```

Given an integer `n`, return the **nth term** of the sequence.

---

### Constraints

- `1 <= n <= 30`

---

### Examples

**Example 1:**

```
Input: n = 4
Output: "1211"
```

**Example 2:**

```
Input: n = 1
Output: "1"
```

## Solutions

### Solution 1: Recursive (Brute Force Simulation)

#### Approach

We directly follow the recursive definition:

- Base case: `n = 1 → "1"`
- For any `n`, compute `countAndSay(n - 1)`
- Then apply **run-length encoding** on it

---

#### Steps

1. If `n === 1`, return `"1"`
2. Recursively compute previous string
3. Traverse string:
   - Count consecutive digits
   - Append `count + digit` to result

4. Return result

---

#### Complexity

- **Time Complexity:** O(2ⁿ)
  (String size grows exponentially)
- **Space Complexity:** O(2ⁿ) + O(n recursion stack)

---

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Iterative (Optimal)

#### Approach

Instead of recursion, we build the sequence **iteratively**:

- Start from `"1"`
- Repeatedly apply run-length encoding until we reach `n`

---

#### Steps

1. Initialize `result = "1"`
2. Loop from `2 → n`:
   - Process current string
   - Build next string using RLE

3. Return final result

---

#### Complexity

- **Time Complexity:** O(2ⁿ)
  (Cannot be improved due to output size)
- **Space Complexity:** O(2ⁿ)

---

#### [Click for solution](./solutions/solution2.js)

## Summary

| Approach  | Time Complexity | Space Complexity | Notes                          |
| --------- | --------------- | ---------------- | ------------------------------ |
| Recursive | O(2ⁿ)           | O(2ⁿ) + O(n)     | Simple but uses recursion      |
| Iterative | O(2ⁿ)           | O(2ⁿ)            | Optimal, no recursion overhead |
