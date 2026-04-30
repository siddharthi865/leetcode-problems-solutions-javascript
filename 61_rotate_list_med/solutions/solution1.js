var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head;

  for (let i = 0; i < k; i++) {
    let prev = null;
    let curr = head;

    // Traverse to last node
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }

    // Move last node to front
    prev.next = null;
    curr.next = head;
    head = curr;
  }

  return head;
};

module.exports = rotateRight;
