# Substring with Concatenation of All Words (LeetCode #30)

## Problem Statement

Given a string `s` and an array of strings `words`, return all the starting indices of substrings in `s` that are a concatenation of each word in `words` exactly once and without any intervening characters.

All words in `words` have the same length, and the concatenation can appear in **any order (permutation allowed)**.

---

### Constraints

- `1 <= s.length <= 10^4`
- `1 <= words.length <= 5000`
- `1 <= words[i].length <= 30`
- All strings consist of lowercase English letters
- All words are of equal length

### Examples

**Example 1:**

```
Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
```

**Example 2:**

```
Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
Output: []
```

**Example 3:**

```
Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
Output: [6,9,12]
```

## Solutions

## Solution 1: Brute Force (Permutation + Checking)

### Approach

Generate all permutations of `words`, concatenate them, and check if each appears in `s`.

---

### Steps

1. Generate all permutations of `words`
2. Concatenate each permutation into a single string
3. For every index in `s`, check if substring matches any permutation

---

### Complexity

- **Time Complexity:** O(k! × n × m)
- **Space Complexity:** O(k!)

(k = number of words, m = word length)

---

### [Click for solution](./solutions/solution1.js)

---

## Solution 2: Sliding Window (Fixed Window Check)

### Approach

We check every possible window of size:

```

windowSize = words.length × wordLength

```

Then split into chunks and validate frequency match.

---

### Steps

1. Build frequency map of `words`
2. For each index `i`:
   - Extract substring of `windowSize`
   - Split into words of fixed length
   - Compare frequency maps

---

### Complexity

- **Time Complexity:** O(n × wordCount × wordLen)
- **Space Complexity:** O(wordCount)

---

### [Click for solution](./solutions/solution2.js)

---

## Solution 3: Optimized Sliding Window (Best Solution)

### Approach

Use a sliding window with multiple offsets (0 to wordLength - 1) to avoid recomputation.

We maintain:

- a frequency map (`target`)
- a sliding window map (`window`)
- two pointers (`left`, `right`)

---

### Steps

1. Build frequency map of words
2. Iterate from `0 → wordLen - 1` (offsets)
3. Move window in steps of word length
4. Maintain counts:
   - Add word → increase count
   - If frequency exceeds → shrink window
5. If valid window found → record index

---

### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(wordCount)

---

### [Click for solution](./solutions/solution3.js)

## Summary

| Approach                 | Time Complexity | Space Complexity | Notes                        |
| ------------------------ | --------------- | ---------------- | ---------------------------- |
| Brute Force              | O(k! × n)       | O(k!)            | Not feasible for large input |
| Sliding Window (Naive)   | O(n × k × m)    | O(k)             | Better but redundant checks  |
| Optimized Sliding Window | O(n)            | O(k)             | Best and standard solution   |
