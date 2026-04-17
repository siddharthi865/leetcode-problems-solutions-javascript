# Zigzag Conversion (LeetCode #6)

## Problem Statement

The string `s` is written in a zigzag pattern on a given number of rows `numRows`.

You need to:

1. Arrange the characters of the string in a zigzag pattern.
2. Then read the pattern **row-by-row** to form a new string.

Return the final converted string.

### Constraints

- `1 <= s.length <= 1000`
- `s` consists of English letters (lower-case and upper-case), `,` and `.`
- `1 <= numRows <= 1000`

### Examples

**Example 1:**

```
Input: s = "PAYPALISHIRING", numRows = 3

Zigzag:
P A H N
A P L S I I G
Y I R

Output: "PAHNAPLSIIGYIR"
```

---

**Example 2:**

```
Input: s = "PAYPALISHIRING", numRows = 4

Zigzag:
P I N
A L S I G
Y A H R
P I

Output: "PINALSIGYAHRPI"
```

---

**Example 3:**

```
Input: s = "A", numRows = 1
Output: "A"
```

## Solutions

### Solution 1: Brute Force (Matrix Simulation)

#### Approach

We simulate the zigzag pattern using a **2D matrix**.

- Move **downward vertically**
- Then move **diagonally upward**
- Fill characters in the matrix accordingly
- Finally, read the matrix row-by-row

#### Steps

1. Create a matrix of size `numRows x s.length`
2. Traverse downward filling characters
3. Then traverse diagonally upward
4. Repeat until all characters are placed
5. Read matrix row-by-row to build result

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(n²)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Row Simulation (Optimized)

#### Approach

Instead of using a matrix, we maintain an array of strings representing rows.

We simulate the zigzag movement:

- Move **down** through rows
- Then move **up diagonally**
- Repeat

#### Steps

1. Create an array of strings for each row
2. Traverse the string:
   - Append character to current row
   - Move down or up based on direction
3. Reverse direction at top and bottom
4. Join all rows to get final result

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Mathematical Pattern (Optimal)

#### Approach

Zigzag pattern repeats in cycles.

Cycle length:

```

cycleLen = 2 × numRows − 2

```

- First and last rows: one character per cycle
- Middle rows: two characters per cycle (vertical + diagonal)

#### Steps

1. Iterate row by row
2. Jump through string using `cycleLen`
3. For middle rows, add diagonal elements
4. Append characters directly to result

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1) (excluding output)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach             | Time Complexity | Space Complexity | Notes                        |
| -------------------- | --------------- | ---------------- | ---------------------------- |
| Brute Force (Matrix) | O(n²)           | O(n²)            | Intuitive but inefficient    |
| Row Simulation       | O(n)            | O(n)             | Clean and interview-friendly |
| Mathematical Pattern | O(n)            | O(1)             | Most optimal and elegant     |
