# Group Anagrams (LeetCode #49)

## Problem Statement

Given an array of strings `strs`, group the **anagrams** together. You can return the answer in **any order**.

An **anagram** is a word formed by rearranging the letters of another word using all original letters exactly once.

### Constraints

- `1 <= strs.length <= 10^4`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters

### Examples

**Example 1:**

```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

**Example 2:**

```
Input: strs = [""]
Output: [[""]]
```

**Example 3:**

```
Input: strs = ["a"]
Output: [["a"]]
```

## Solutions

### Solution 1: Brute Force

#### Approach

We compare each string with existing groups and check if it is an anagram of the group's first element.

To verify anagrams, we sort both strings and compare them.

#### Steps

1. Initialize an empty list of groups
2. For each string:
   - Compare with each existing group
   - If anagram → add to that group
   - Otherwise → create a new group
3. Return all groups

#### Complexity

- **Time Complexity:** O(n² \* k log k)
- **Space Complexity:** O(n \* k)

#### [Click for solution](./solutions/solution1.js)

---

### Solution 2: Sorting + Hash Map

#### Approach

Instead of comparing every pair, we sort each string and use it as a **key** in a hash map.

All anagrams will have the same sorted representation.

#### Steps

1. Initialize an empty hash map
2. For each string:
   - Sort characters
   - Use sorted string as key
   - Add original string to the map
3. Return all map values

#### Complexity

- **Time Complexity:** O(n \* k log k)
- **Space Complexity:** O(n \* k)

#### [Click for solution](./solutions/solution2.js)

---

### Solution 3: Character Count (Optimal)

#### Approach

Instead of sorting, we count the frequency of each character (26 lowercase letters).

This frequency array uniquely identifies an anagram group.

#### Steps

1. Initialize an empty hash map
2. For each string:
   - Create a frequency array of size 26
   - Count occurrences of each character
   - Convert array to string key
   - Store string in map
3. Return all grouped values

#### Complexity

- **Time Complexity:** O(n \* k)
- **Space Complexity:** O(n \* k)

#### [Click for solution](./solutions/solution3.js)

## Summary

| Approach           | Time Complexity  | Space Complexity | Notes                         |
| ------------------ | ---------------- | ---------------- | ----------------------------- |
| Brute Force        | O(n² \* k log k) | O(n \* k)        | Very slow for large inputs    |
| Sorting + Hash Map | O(n \* k log k)  | O(n \* k)        | Simple and efficient          |
| Character Count    | O(n \* k)        | O(n \* k)        | Optimal (no sorting required) |
