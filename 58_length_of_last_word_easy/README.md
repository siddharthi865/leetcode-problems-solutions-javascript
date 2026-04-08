# Length of Last Word (LeetCode #58)

## Problem Statement

Given a string `s` consisting of words and spaces, return the **length of the last word** in the string.

A **word** is a maximal substring consisting of non-space characters only.

### Constraints

- `1 <= s.length <= 10^4`
- `s` consists of only English letters and spaces `' '`
- There will be **at least one word** in `s`

---

## Examples

**Example 1:**

```
Input: s = "Hello World"
Output: 5
```

**Example 2:**

```
Input: s = " fly me to the moon "
Output: 4
```

**Example 3:**

```
Input: s = "luffy is still joyboy"
Output: 6
```

## Solutions

### Solution 1: Brute Force (Word Extraction)

#### Approach

We simulate splitting the string into words manually and store each word. Then we return the length of the last word.

#### Steps

1. Traverse the string character by character
2. Build words using a temporary string
3. When a space is encountered:
   - Store the word (if not empty)
   - Reset the temporary string
4. After traversal, add the last word if it exists
5. Return the length of the last stored word

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Reverse Traversal (Optimal)

#### Approach

Instead of storing all words, we traverse the string **from the end**:

- Skip trailing spaces
- Count characters until the next space appears

#### Steps

1. Start from the last index of the string
2. Skip all trailing spaces
3. Count characters until a space is encountered
4. Return the count

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution2.js)

## Summary

| Approach                    | Time Complexity | Space Complexity | Notes                        |
| --------------------------- | --------------- | ---------------- | ---------------------------- |
| Brute Force                 | O(n)            | O(n)             | Uses extra space for storage |
| Reverse Traversal (Optimal) | O(n)            | O(1)             | Most efficient solution      |
