function mergeTwo(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }

    current = current.next;
  }

  if (l1 !== null) current.next = l1;
  if (l2 !== null) current.next = l2;

  return dummy.next;
}

function mergeKLists(lists) {
  if (lists.length === 0) return null;

  let result = lists[0];

  for (let i = 1; i < lists.length; i++) {
    result = mergeTwo(result, lists[i]);
  }

  return result;
}

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

module.exports = mergeKLists;
