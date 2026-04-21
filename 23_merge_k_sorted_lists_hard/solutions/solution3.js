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

  while (lists.length > 1) {
    let merged = [];
    let index = 0;

    for (let i = 0; i < lists.length; i += 2) {
      let l1 = lists[i];
      let l2 = null;

      if (i + 1 < lists.length) {
        l2 = lists[i + 1];
      }

      merged[index] = mergeTwo(l1, l2);
      index++;
    }

    lists = merged;
  }

  return lists[0];
}

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

module.exports = mergeKLists;
