# Palindrome Number (LeetCode #9)

## Problem Statement

Given an integer `x`, return `true` if `x` is a **palindrome**, and `false` otherwise.

A palindrome is a number that reads the same **forward and backward**.

### Constraints

- `-2^31 <= x <= 2^31 - 1`

### Examples

**Example 1:**

```
Input: x = 121
Output: true
```

**Example 2:**

```
Input: x = -121
Output: false
```

**Example 3:**

```
Input: x = 10
Output: false
```

---

## Solutions

### Solution 1: Brute Force (Store Digits in Array)

#### Approach

We extract all digits of the number and store them in an array.
Then we compare digits from **start and end** to check if they match.

#### Steps

1. If number is negative → return false
2. Extract digits using `% 10`
3. Store digits in an array
4. Compare from both ends
5. If all match → palindrome

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Reverse Full Number

#### Approach

Instead of using extra space, we reverse the entire number mathematically and compare it with the original.

#### Steps

1. If number is negative → return false
2. Reverse the number using:
   - `reversed = reversed * 10 + digit`

3. Compare reversed with original
4. If equal → palindrome

#### Complexity

- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Reverse Half (Optimal)

#### Approach

We only reverse **half of the number**, which avoids unnecessary work and prevents overflow.

Key idea:

- Stop when reversed half becomes **greater than or equal to remaining half**

#### Steps

1. If number is negative → return false
2. If number ends with `0` (and not `0`) → return false
3. Reverse digits until `reversedHalf >= x`
4. Check:
   - `x === reversedHalf` (even length)
   - `x === Math.floor(reversedHalf / 10)` (odd length)

#### Complexity

- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution3.js)

---

## Summary

| Approach            | Time Complexity | Space Complexity | Notes                        |
| ------------------- | --------------- | ---------------- | ---------------------------- |
| Brute Force         | O(n)            | O(n)             | Simple but uses extra memory |
| Reverse Full Number | O(log n)        | O(1)             | Efficient and clean          |
| Reverse Half (Best) | O(log n)        | O(1)             | Optimal, avoids extra work   |

---

## Key Takeaways

- Negative numbers are **never palindromes**
- Numbers ending in `0` (except `0`) are **not palindromes**
- Reversing **half** the number is the most optimal approach
- No need for extra space in the optimal solution
