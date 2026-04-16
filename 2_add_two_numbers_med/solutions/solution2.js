function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;

  let carry = 0;
  let p1 = l1;
  let p2 = l2;

  while (p1 !== null || p2 !== null) {
    let x = p1 !== null ? p1.val : 0;
    let y = p2 !== null ? p2.val : 0;

    let sum = x + y + carry;

    carry = 0;
    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    current.next = new ListNode(sum);
    current = current.next;

    if (p1 !== null) p1 = p1.next;
    if (p2 !== null) p2 = p2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummy.next;
};

module.exports = addTwoNumbers;
