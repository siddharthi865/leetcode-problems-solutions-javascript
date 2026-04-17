var removeNthFromEnd = function (head, n) {
  var dummy = { val: 0, next: head };

  var fast = dummy;
  var slow = dummy;

  var i = 0;

  // Move fast n+1 steps ahead
  while (i <= n) {
    fast = fast.next;
    i++;
  }

  // Move both pointers
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // Remove the node
  slow.next = slow.next.next;

  return dummy.next;
};

module.exports = removeNthFromEnd;
