const isSameTree = (p, q) => {
  function serialize(root, arr) {
    if (root === null) {
      arr[arr.length] = "null";
      return;
    }

    arr[arr.length] = root.val;

    serialize(root.left, arr);
    serialize(root.right, arr);
  }

  var arr1 = [];
  var arr2 = [];

  serialize(p, arr1);
  serialize(q, arr2);

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

module.exports = isSameTree;
