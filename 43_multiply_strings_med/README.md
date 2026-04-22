# Multiply Strings (LeetCode #43)

## Problem Statement

Given two non-negative integers `num1` and `num2` represented as **strings**, return the **product of num1 and num2**, also represented as a string.

### Constraints

- `1 <= num1.length, num2.length <= 200`
- `num1` and `num2` consist of digits only
- Both numbers do not contain leading zeros (except "0" itself)
- You **must not** convert the inputs directly to integers
- You **must not** use any BigInteger library

## Examples

**Example 1:**

```
Input: num1 = "2", num2 = "3"
Output: "6"
```

**Example 2:**

```
Input: num1 = "123", num2 = "456"
Output: "56088"
```

**Example 3:**

```
Input: num1 = "0", num2 = "52"
Output: "0"
```

## Solutions

### Solution 1: Brute Force (Repeated Addition)

#### Approach

We simulate multiplication as **repeated addition**:

- Add `num1` to itself `num2` times
- Since inputs are strings, we implement:
  - String addition
  - String decrement (to reduce `num2`)

#### Steps

1. Initialize result as `"0"`
2. While `num2` is not `"0"`:
   - Add `num1` to result
   - Decrement `num2` by 1 (string-wise)
3. Return the final result

#### Complexity

- **Time Complexity:** O(n × value of num2) → ❌ extremely slow
- **Space Complexity:** O(n)

#### Notes

- This approach is **not practical**
- Used only for conceptual understanding

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Grade School Multiplication (String-Based)

#### Approach

We simulate the **manual multiplication method**:

```

123
× 456

---

738
615
492

---

56088

```

- Multiply each digit
- Shift results based on position
- Add intermediate results

#### Steps

1. Loop through each digit of `num2` (right to left)
2. Multiply it with all digits of `num1`
3. Append zeros based on position (shifting)
4. Add intermediate results using string addition
5. Remove leading zeros

#### Complexity

- **Time Complexity:** O(n × m × (n + m))
- **Space Complexity:** O(n + m)

#### Notes

- More efficient than brute force
- Still slower due to repeated string additions

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Array-Based Multiplication (Optimal)

#### Approach

We optimize by using an **array to store results directly**, avoiding repeated string operations.

Key idea:

- If digit `i` from `num1` and digit `j` from `num2` multiply,
  - Result goes to index `i + j + 1`
  - Carry goes to `i + j`

#### Steps

1. Initialize array of size `n + m` with zeros
2. Multiply digits from right to left
3. Store result and carry in correct positions
4. Convert array to string
5. Skip leading zeros

#### Complexity

- **Time Complexity:** O(n × m)
- **Space Complexity:** O(n + m)

#### Notes

- No repeated additions
- Matches how multiplication is done internally in many systems

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach              | Time Complexity      | Space Complexity | Notes                          |
| --------------------- | -------------------- | ---------------- | ------------------------------ |
| Brute Force           | O(n × value of num2) | O(n)             | Conceptual only, not practical |
| Grade School          | O(n × m × (n + m))   | O(n + m)         | Better but still inefficient   |
| Array-Based (Optimal) | O(n × m)             | O(n + m)         | Best solution                  |
