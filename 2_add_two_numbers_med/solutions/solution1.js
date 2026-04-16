function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let num1 = 0;
  let num2 = 0;
  let multiplier = 1;

  let temp = l1;
  while (temp !== null) {
    num1 += temp.val * multiplier;
    multiplier *= 10;
    temp = temp.next;
  }

  multiplier = 1;
  temp = l2;
  while (temp !== null) {
    num2 += temp.val * multiplier;
    multiplier *= 10;
    temp = temp.next;
  }

  let sum = num1 + num2;

  if (sum === 0) {
    return new ListNode(0);
  }

  let dummy = new ListNode(0);
  let current = dummy;

  while (sum > 0) {
    current.next = new ListNode(sum % 10);
    sum = Math.floor(sum / 10);
    current = current.next;
  }

  return dummy.next;
};

module.exports = addTwoNumbers;
