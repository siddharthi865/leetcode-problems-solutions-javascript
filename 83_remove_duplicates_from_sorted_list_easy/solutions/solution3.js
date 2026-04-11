const deleteDuplicates = (head) => {
  // Base case
  if (head === null || head.next === null) {
    return head;
  }

  // Recursively process the rest
  head.next = deleteDuplicates(head.next);

  // Check for duplicate
  if (head.val === head.next.val) {
    return head.next; // skip current node
  }

  return head;
};

module.exports = deleteDuplicates;
