var swapPairs = function (head) {
  var dummy = new ListNode(0);
  dummy.next = head;

  var prev = dummy;

  while (prev.next != null && prev.next.next != null) {
    var first = prev.next;
    var second = prev.next.next;

    first.next = second.next;
    second.next = first;
    prev.next = second;

    prev = first;
  }

  return dummy.next;
};

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

module.exports = swapPairs;
