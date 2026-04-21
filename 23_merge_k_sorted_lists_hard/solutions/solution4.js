class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(node) {
    this.heap[this.heap.length] = node;
    this.bubbleUp(this.heap.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);

      if (this.heap[parent].val <= this.heap[index].val) break;

      let temp = this.heap[parent];
      this.heap[parent] = this.heap[index];
      this.heap[index] = temp;

      index = parent;
    }
  }

  extractMin() {
    if (this.heap.length === 0) return null;

    let min = this.heap[0];
    let end = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.bubbleDown(0);
    }

    return min;
  }

  bubbleDown(index) {
    let length = this.heap.length;

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (left < length && this.heap[left].val < this.heap[smallest].val) {
        smallest = left;
      }

      if (right < length && this.heap[right].val < this.heap[smallest].val) {
        smallest = right;
      }

      if (smallest === index) break;

      let temp = this.heap[index];
      this.heap[index] = this.heap[smallest];
      this.heap[smallest] = temp;

      index = smallest;
    }
  }

  size() {
    return this.heap.length;
  }
}

function mergeKLists(lists) {
  let heap = new MinHeap();

  for (let i = 0; i < lists.length; i++) {
    if (lists[i] !== null) {
      heap.insert(lists[i]);
    }
  }

  let dummy = new ListNode(0);
  let current = dummy;

  while (heap.size() > 0) {
    let node = heap.extractMin();

    current.next = node;
    current = current.next;

    if (node.next !== null) {
      heap.insert(node.next);
    }
  }

  return dummy.next;
}

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

module.exports = mergeKLists;
