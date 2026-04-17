var removeNthFromEnd = function (head, n) {
  var length = 0;
  var current = head;

  while (current !== null) {
    length++;
    current = current.next;
  }

  var removeIndex = length - n;

  if (removeIndex === 0) {
    return head.next;
  }

  current = head;
  var i = 0;

  while (i < removeIndex - 1) {
    current = current.next;
    i++;
  }

  current.next = current.next.next;

  return head;
};

module.exports = removeNthFromEnd;
