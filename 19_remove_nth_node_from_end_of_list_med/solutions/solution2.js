var removeNthFromEnd = function (head, n) {
  var fast = head;
  var slow = head;

  var i = 0;

  while (i < n) {
    fast = fast.next;
    i++;
  }

  if (fast === null) {
    return head.next;
  }

  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return head;
};

module.exports = removeNthFromEnd;
