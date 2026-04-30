var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head;

  // Step 1: Find length and last node
  let length = 1;
  let tail = head;

  while (tail.next) {
    tail = tail.next;
    length++;
  }

  // Step 2: Make circular
  tail.next = head;

  // Step 3: Reduce k
  k = k % length;

  // Step 4: Find new tail
  let stepsToNewTail = length - k - 1;
  let newTail = head;

  for (let i = 0; i < stepsToNewTail; i++) {
    newTail = newTail.next;
  }

  // Step 5: Break circle
  let newHead = newTail.next;
  newTail.next = null;

  return newHead;
};

module.exports = rotateRight;
