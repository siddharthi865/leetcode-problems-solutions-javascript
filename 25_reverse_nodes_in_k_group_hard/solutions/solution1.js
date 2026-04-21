var reverseKGroup = function (head, k) {
  if (!head) return head;

  let arr = [];
  let curr = head;

  // Store nodes in array
  while (curr) {
    arr[arr.length] = curr;
    curr = curr.next;
  }

  // Reverse in groups of k
  for (let i = 0; i + k <= arr.length; i += k) {
    let left = i;
    let right = i + k - 1;

    while (left < right) {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }

  // Reconnect nodes
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1];
  }

  arr[arr.length - 1].next = null;

  return arr[0];
};

module.exports = reverseKGroup;
