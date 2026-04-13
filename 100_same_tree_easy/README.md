# Same Tree (LeetCode #100)

## Problem Statement

Given the roots of two binary trees `p` and `q`, write a function to check whether they are the same.

Two binary trees are considered the same if:

- They are **structurally identical**
- Corresponding nodes have the **same value**

### Constraints

- The number of nodes in both trees is in the range `[0, 100]`
- `-10⁴ <= Node.val <= 10⁴`

---

## Examples

**Example 1:**

```
Input: p = [1,2,3], q = [1,2,3]
Output: true
```

**Example 2:**

```
Input: p = [1,2], q = [1,null,2]
Output: false
```

**Example 3:**

```
Input: p = [1,2,1], q = [1,1,2]
Output: false
```

## Solutions

### Solution 1: Brute Force (Serialize Trees)

#### Approach

We convert both trees into arrays using traversal (including `null` values to preserve structure), and then compare the arrays.

#### Steps

1. Traverse both trees (DFS)
2. Store values in arrays (include `"null"` for missing nodes)
3. Compare both arrays element by element
4. If all elements match → return true

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Recursive DFS (Optimal)

#### Approach

We recursively compare both trees node by node.

At each step:

- If both nodes are `null` → they match
- If one is `null` → not same
- If values differ → not same
- Recursively check left and right subtrees

#### Steps

1. If both nodes are null → return true
2. If one node is null → return false
3. If values differ → return false
4. Recursively check:
   - left subtree
   - right subtree
5. Return true only if both sides match

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n) (recursive stack in worst case)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: BFS (Level Order Traversal)

#### Approach

We use a queue to compare both trees level by level.

Instead of recursion, we process nodes in pairs using BFS.

#### Steps

1. Initialize queue with `(p, q)`
2. While queue is not empty:
   - Remove a pair
   - If both are null → continue
   - If one is null → return false
   - If values differ → return false
   - Add children pairs:
     - `(left1, left2)`
     - `(right1, right2)`
3. If all nodes match → return true

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach            | Time Complexity | Space Complexity | Notes                        |
| ------------------- | --------------- | ---------------- | ---------------------------- |
| Serialize + Compare | O(n)            | O(n)             | Extra storage used           |
| Recursive DFS       | O(n)            | O(n)             | Clean and optimal            |
| BFS (Level Order)   | O(n)            | O(n)             | Iterative alternative to DFS |
