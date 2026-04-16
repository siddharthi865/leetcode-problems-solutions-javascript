const hasCycle = (head) => {
  let visited = [];

  let current = head;

  while (current !== null) {
    // Check if current node is already visited
    for (let i = 0; i < visited.length; i++) {
      if (visited[i] === current) {
        return true;
      }
    }

    visited[visited.length] = current;
    current = current.next;
  }

  return false;
};

module.exports = hasCycle;
