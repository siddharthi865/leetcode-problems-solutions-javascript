const deleteDuplicates = (head) => {
  let current = head;

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next; // remove duplicate
    } else {
      current = current.next; // move forward
    }
  }

  return head;
};

module.exports = deleteDuplicates;
