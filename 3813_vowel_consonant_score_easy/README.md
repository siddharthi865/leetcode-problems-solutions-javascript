# Score of String (Vowels vs Consonants)

## Problem Statement

You are given a string `s` consisting of:

- lowercase English letters
- spaces
- digits

Let:

- `v` = number of **vowels** (`a, e, i, o, u`)
- `c` = number of **consonants** (all other lowercase letters)

The **score** of the string is defined as:

- If `c > 0` → `floor(v / c)`
- Otherwise → `0`

Return the score.

## Constraints

- `1 <= s.length <= 100`
- `s` consists of lowercase English letters, spaces, and digits

## Examples

**Example 1:**

```
Input: s = "cooear"
Output: 2
```

**Example 2:**

```
Input: s = "axeyizou"
Output: 1
```

**Example 3:**

```
Input: s = "au 123"
Output: 0
```

## Solutions

### Solution 1: Basic Counting

#### Approach

We iterate through the string and:

- Count vowels
- Count consonants
- Ignore non-letter characters

Finally compute `floor(v / c)`.

---

#### Steps

1. Initialize `v = 0`, `c = 0`
2. Traverse each character:
   - If it's a letter:
     - Check if vowel → increment `v`
     - Else → increment `c`
3. If `c == 0` → return `0`
4. Else → return `floor(v / c)`

---

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

---

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Bitmask Optimization

#### Approach

Instead of checking vowels using multiple comparisons, we use a **bitmask**.

Each letter maps to an index:

- `'a' → 0`, `'b' → 1`, ..., `'z' → 25`

We create a bitmask where vowel positions are set to `1`.

Then we can check if a character is a vowel using:

```

(mask >> index) & 1

```

---

#### Steps

1. Precompute vowel bitmask:
   - Set bits for `a, e, i, o, u`
2. Traverse string:
   - Convert char → index using ASCII
   - Check bitmask:
     - If bit = 1 → vowel
     - Else → consonant
3. Compute result as before

---

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

---

#### [Click for solution](./solutions/solution2.js)

## Summary

| Approach          | Time Complexity | Space Complexity | Notes                       |
| ----------------- | --------------- | ---------------- | --------------------------- |
| Basic Counting    | O(n)            | O(1)             | Simple and readable         |
| Bitmask Optimized | O(n)            | O(1)             | Faster constant-time checks |
