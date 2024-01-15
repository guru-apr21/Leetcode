function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var leafSimilar = function (root1, root2) {
  function findSequence(node, seq) {
    if (node === null) return; // Handling null nodes
    if (node.left === null && node.right === null) {
      seq.push(node.val); // Collect leaf values
      return;
    }
    findSequence(node.left, seq);
    findSequence(node.right, seq);
  }

  let root1LeafSequence = [];
  findSequence(root1, root1LeafSequence);

  let root2LeafSequence = [];
  findSequence(root2, root2LeafSequence);

  // Comparing the arrays element by element
  if (root1LeafSequence.length !== root2LeafSequence.length) return false;
  for (let i = 0; i < root1LeafSequence.length; i++) {
    if (root1LeafSequence[i] !== root2LeafSequence[i]) {
      return false;
    }
  }
  return true;
};

let root1 = new TreeNode(
  3,
  new TreeNode(
    5,
    new TreeNode(6, null, null),
    new TreeNode(2, new TreeNode(7, null, null), new TreeNode(4, null, null))
  ),
  new TreeNode(1, new TreeNode(9, null, null), new TreeNode(8, null, null))
);
