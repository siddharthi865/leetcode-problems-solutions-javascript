# Longest Substring Without Repeating Characters (LeetCode #3)

## Problem Statement

Given a string `s`, find the **length of the longest substring** without repeating characters.

### Constraints

- `0 <= s.length <= 5 * 10^4`
- `s` consists of English letters, digits, symbols and spaces.

### Examples

**Example 1:**

```
Input: s = "abcabcbb"
Output: 3
Explanation: "abc" is the longest substring without repeating characters.
```

**Example 2:**

```
Input: s = "bbbbb"
Output: 1
Explanation: "b" is the longest substring.
```

**Example 3:**

```
Input: s = "pwwkew"
Output: 3
Explanation: "wke" is the longest substring.
```

## Solutions

### Solution 1: Brute Force

#### Approach

We generate **all possible substrings** and check if each substring contains unique characters.

#### Steps

1. Generate all substrings using two loops
2. For each substring, check for duplicate characters
3. Track the maximum length of valid substrings

#### Complexity

- **Time Complexity:** O(n³)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Improved Brute Force

#### Approach

Instead of rechecking duplicates from scratch, we use a **frequency map** while expanding the substring.

#### Steps

1. Fix a starting index
2. Expand the substring one character at a time
3. Use a map to track seen characters
4. Stop when a duplicate is found

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Sliding Window (Optimal)

#### Approach

We use a **sliding window** with two pointers and a map to track the **last seen index** of characters.

When a duplicate is found, we move the left pointer just past the previous occurrence.

#### Steps

1. Initialize `left = 0`
2. Traverse string with `right` pointer
3. If character seen before inside window:
   - Move `left` to `lastSeen + 1`
4. Update max length

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution3.js)

---

### Solution 4: Sliding Window + ASCII Array (Most Optimal)

#### Approach

Instead of using a map, we use a **fixed-size array (128)** to store last seen indices of ASCII characters.

This improves performance by using direct indexing instead of hashing.

#### Steps

1. Initialize array of size 128 with `-1`
2. Use sliding window with `left` pointer
3. For each character:
   - Get ASCII index
   - Update `left` if duplicate found
4. Track max length

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution4.js)

## Summary

| Approach                     | Time Complexity | Space Complexity | Notes                        |
| ---------------------------- | --------------- | ---------------- | ---------------------------- |
| Brute Force                  | O(n³)           | O(1)             | Very slow                    |
| Improved Brute Force         | O(n²)           | O(n)             | Better but still inefficient |
| Sliding Window (Hash Map)    | O(n)            | O(n)             | Optimal                      |
| Sliding Window (ASCII Array) | O(n)            | O(1)             | Best practical solution      |
