var reverseKGroup = function (head, k) {
  let count = 0;
  let curr = head;

  // Check if enough nodes exist
  while (curr && count < k) {
    curr = curr.next;
    count++;
  }

  if (count < k) return head;

  // Reverse k nodes
  let prev = null;
  curr = head;
  let next = null;
  count = 0;

  while (count < k) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    count++;
  }

  // Recursive call
  head.next = reverseKGroup(curr, k);

  return prev;
};

module.exports = reverseKGroup;
