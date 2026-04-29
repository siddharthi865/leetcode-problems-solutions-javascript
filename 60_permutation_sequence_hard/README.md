# Permutation Sequence (LeetCode #60)

## Problem Statement

The set `[1, 2, 3, ..., n]` contains a total of `n!` unique permutations.

By listing all permutations in **lexicographical order**, return the **k-th permutation sequence**.

### Constraints

- `1 <= n <= 9`
- `1 <= k <= n!`

### Examples

**Example 1:**

```
Input: n = 3, k = 3
Output: "213"
```

**Example 2:**

```
Input: n = 4, k = 9
Output: "2314"
```

**Example 3:**

```
Input: n = 3, k = 1
Output: "123"
```

## Solutions

### Solution 1: Brute Force (Generate + Sort)

#### Approach

We generate **all possible permutations**, store them, sort them lexicographically, and return the k-th permutation.

#### Steps

1. Use backtracking to generate all permutations
2. Store each permutation as a string
3. Sort all permutations manually (no built-in sort)
4. Return the `(k - 1)` index

#### Complexity

- **Time Complexity:** O(n!²)
- **Space Complexity:** O(n!)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Backtracking (Early Termination)

#### Approach

Instead of generating all permutations, we generate them in **lexicographical order** and **stop once we reach the k-th permutation**.

#### Steps

1. Use backtracking to build permutations
2. Maintain a counter
3. Each time a permutation is formed, increment count
4. Stop recursion when count equals `k`
5. Return the result

#### Complexity

- **Time Complexity:** O(n! \* n) (worst case)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Factorial Number System (Optimal)

#### Approach

Instead of generating permutations, we directly compute the k-th permutation using **factorial math**.

Each position has `(n-1)!` permutations. We determine which number belongs in each position.

#### Steps

1. Precompute factorial values
2. Store numbers from `1` to `n`
3. Convert `k` to 0-based index (`k = k - 1`)
4. For each position:
   - Find index = `k / factorial`
   - Pick that number
   - Remove it from list
   - Update `k = k % factorial`
5. Build the result string

#### Complexity

- **Time Complexity:** O(n²)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach                   | Time Complexity | Space Complexity | Notes                               |
| -------------------------- | --------------- | ---------------- | ----------------------------------- |
| Brute Force (Generate All) | O(n!²)          | O(n!)            | Very slow, not practical            |
| Backtracking (Early Stop)  | O(n! \* n)      | O(n)             | Better but still factorial          |
| Factorial Math (Optimal)   | O(n²)           | O(n)             | Best solution, no generation needed |
