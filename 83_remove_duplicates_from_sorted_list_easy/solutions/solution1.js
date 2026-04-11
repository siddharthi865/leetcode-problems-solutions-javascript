const deleteDuplicates = (head) => {
  if (!head) return null;

  let arr = [];
  let current = head;

  // Step 1: Convert to array
  while (current !== null) {
    arr[arr.length] = current.val;
    current = current.next;
  }

  // Step 2: Remove duplicates manually
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
      unique[unique.length] = arr[i];
    }
  }

  // Step 3: Rebuild linked list
  let dummy = { val: 0, next: null };
  let temp = dummy;

  for (let i = 0; i < unique.length; i++) {
    temp.next = { val: unique[i], next: null };
    temp = temp.next;
  }

  return dummy.next;
};

module.exports = deleteDuplicates;
