const isSameTree = (p, q) => {
  var queue = [];

  queue[queue.length] = [p, q];

  while (queue.length > 0) {
    var pair = queue[0];

    // manual shift
    for (var i = 0; i < queue.length - 1; i++) {
      queue[i] = queue[i + 1];
    }
    queue.length = queue.length - 1;

    var node1 = pair[0];
    var node2 = pair[1];

    if (node1 === null && node2 === null) {
      continue;
    }

    if (node1 === null || node2 === null) {
      return false;
    }

    if (node1.val !== node2.val) {
      return false;
    }

    queue[queue.length] = [node1.left, node2.left];
    queue[queue.length] = [node1.right, node2.right];
  }

  return true;
};

module.exports = isSameTree;
