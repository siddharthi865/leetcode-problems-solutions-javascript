# Valid Number (LeetCode #65)

## Problem Statement

Given a string `s`, return whether `s` is a **valid number**.

A valid number can be:

- An **integer** or a **decimal**
- Followed by an optional **exponent** (`e` or `E`)

### Rules

- An integer consists of an optional sign (`+` or `-`) followed by digits
- A decimal can be:
  - Digits followed by a dot `.`
  - Digits followed by a dot and more digits
  - A dot followed by digits
- An exponent consists of:
  - `'e'` or `'E'` followed by an integer

### Constraints

- `1 <= s.length <= 20`
- `s` contains only:
  - English letters
  - digits (`0-9`)
  - `'+'`, `'-'`, `'.'`

## Examples

**Example 1:**

```
Input: s = "0"
Output: true
```

**Example 2:**

```
Input: s = "e"
Output: false
```

**Example 3:**

```
Input: s = "."
Output: false
```

**Example 4:**

```
Input: s = "-123.456e789"
Output: true
```

## Solutions

### Solution 1: Brute Force (Using Native Parsing)

#### Approach

We attempt to convert the string into a number using built-in parsing and validate characters manually.

⚠️ Note: This approach relies on JavaScript parsing and is not ideal for strict validation but works with adjustments.

#### Steps

1. Trim the string
2. Ensure all characters are valid (`0-9`, `+`, `-`, `.`, `e`, `E`)
3. Use `Number()` to attempt conversion
4. Return false if result is `NaN`

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: State Tracking (Optimal Practical Solution)

#### Approach

We iterate through the string while tracking:

- Whether we've seen a digit
- Whether we've seen a dot
- Whether we've seen an exponent
- Whether digits exist after exponent

#### Steps

1. Initialize flags:
   - `seenDigit`
   - `seenDot`
   - `seenExp`
   - `digitAfterExp`
2. Traverse each character:
   - Update flags based on rules
3. Validate final conditions

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### Why it works

It enforces all constraints in a **single pass** without extra memory.

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Finite State Machine (FSM - Most Robust)

#### Approach

We model the problem as a **state machine**, where each character causes a transition between states.

This ensures strict rule enforcement and eliminates ambiguity.

#### States

- Start
- Sign
- Integer
- Dot (with/without digit)
- Decimal
- Exponent
- Exponent Sign
- Exponent Number

#### Steps

1. Start at initial state
2. Transition based on current character
3. Reject invalid transitions
4. Accept only valid ending states

#### Complexity

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

#### Why it’s best

- Most structured approach
- Handles all edge cases cleanly
- Preferred in advanced interviews

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach             | Time Complexity | Space Complexity | Notes                                |
| -------------------- | --------------- | ---------------- | ------------------------------------ |
| Brute Force          | O(n)            | O(1)             | Uses built-in parsing, less reliable |
| State Tracking       | O(n)            | O(1)             | Clean and practical                  |
| Finite State Machine | O(n)            | O(1)             | Most robust and interview-ready      |
