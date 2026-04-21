var reverseKGroup = function (head, k) {
  if (!head || k === 1) return head;

  let dummy = { next: head };
  let prevGroup = dummy;

  while (true) {
    let kth = prevGroup;

    // Find kth node
    for (let i = 0; i < k; i++) {
      kth = kth.next;
      if (!kth) return dummy.next;
    }

    let groupStart = prevGroup.next;
    let nextGroup = kth.next;

    // Reverse group
    let prev = nextGroup;
    let curr = groupStart;

    while (curr !== nextGroup) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }

    // Connect previous group to reversed
    prevGroup.next = kth;

    // Move prevGroup forward
    prevGroup = groupStart;
  }
};

module.exports = reverseKGroup;
