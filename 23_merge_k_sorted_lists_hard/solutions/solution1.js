function mergeKLists(lists) {
  if (lists.length === 0) return null;

  let values = [];

  for (let i = 0; i < lists.length; i++) {
    let node = lists[i];
    while (node !== null) {
      values[values.length] = node.val;
      node = node.next;
    }
  }

  // Selection Sort
  for (let i = 0; i < values.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < values.length; j++) {
      if (values[j] < values[minIndex]) {
        minIndex = j;
      }
    }

    let temp = values[i];
    values[i] = values[minIndex];
    values[minIndex] = temp;
  }

  let dummy = new ListNode(0);
  let current = dummy;

  for (let i = 0; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }

  return dummy.next;
}

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

module.exports = mergeKLists;
