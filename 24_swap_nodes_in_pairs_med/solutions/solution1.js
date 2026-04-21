var swapPairs = function (head) {
  var curr = head;

  while (curr != null && curr.next != null) {
    var temp = curr.val;
    curr.val = curr.next.val;
    curr.next.val = temp;

    curr = curr.next.next;
  }

  return head;
};

module.exports = swapPairs;
