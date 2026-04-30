var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) return head;

  // Find length
  let length = 0;
  let temp = head;
  while (temp) {
    length++;
    temp = temp.next;
  }

  k = k % length;
  if (k === 0) return head;

  for (let i = 0; i < k; i++) {
    let prev = null;
    let curr = head;

    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = null;
    curr.next = head;
    head = curr;
  }

  return head;
};

module.exports = rotateRight;
