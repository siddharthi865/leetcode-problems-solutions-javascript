# Valid Palindrome (LeetCode #125)

## Problem Statement

A string is considered a **palindrome** if, after converting all uppercase letters into lowercase and removing all non-alphanumeric characters, it reads the same forward and backward.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

### Constraints

- `1 <= s.length <= 2 * 10^5`
- `s` consists only of printable ASCII characters

### Examples

**Example 1:**

```
Input: s = "A man, a plan, a canal: Panama"
Output: true
```

**Example 2:**

```
Input: s = "race a car"
Output: false
```

**Example 3:**

```
Input: s = " "
Output: true
```

## Solutions

### Solution 1: Brute Force (Clean + Reverse)

#### Approach

We first **clean the string** by:

- Removing all non-alphanumeric characters
- Converting uppercase letters to lowercase

Then we **reverse the cleaned string** and compare it with the original cleaned version.

#### Steps

1. Traverse the string and build a new cleaned string
2. Convert uppercase letters to lowercase manually
3. Keep only alphanumeric characters
4. Reverse the cleaned string
5. Compare both strings

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Two Pointers

#### Approach

Instead of creating a new string, we use **two pointers**:

- One at the beginning
- One at the end

We skip non-alphanumeric characters and compare characters directly.

#### Steps

1. Initialize `left = 0` and `right = n - 1`
2. Skip invalid characters from both ends
3. Convert characters to lowercase
4. Compare characters:
   - If mismatch → return false
5. Move pointers inward
6. Continue until pointers meet

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Optimized Two Pointer (Best)

#### Approach

This is an optimized version of the two-pointer approach:

- Avoids helper function calls
- Performs all checks inline for better performance

#### Steps

1. Use two pointers (`left`, `right`)
2. Skip non-alphanumeric characters inline
3. Convert characters manually to lowercase
4. Compare characters
5. Return false if mismatch
6. Continue until pointers cross

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach                      | Time Complexity | Space Complexity | Notes                       |
| ----------------------------- | --------------- | ---------------- | --------------------------- |
| Brute Force (Clean + Reverse) | O(n)            | O(n)             | Simple but uses extra space |
| Two Pointer                   | O(n)            | O(1)             | Efficient and clean         |
| Optimized Two Pointer         | O(n)            | O(1)             | Best possible solution      |
