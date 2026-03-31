const mergeTwoLists = (list1, list2) => {
  let arr = [];

  let current = list1;
  while (current !== null) {
    arr[arr.length] = current.val;
    current = current.next;
  }

  current = list2;
  while (current !== null) {
    arr[arr.length] = current.val;
    current = current.next;
  }

  // Manual bubble sort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  if (arr.length === 0) return null;

  let head = { val: arr[0], next: null };
  let node = head;

  for (let i = 1; i < arr.length; i++) {
    node.next = { val: arr[i], next: null };
    node = node.next;
  }

  return head;
};

module.exports = mergeTwoLists;
