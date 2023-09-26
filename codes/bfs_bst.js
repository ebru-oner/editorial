function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
}

BinarySearchTree.prototype.add = function (value) {
  const newNode = new Node(value);
  if (!this.root) this.root = newNode;
  else {
    this.AddNode(this.root, newNode);
  }
};

BinarySearchTree.prototype.AddNode = function (node, newNode) {
  if (newNode.value < node.value) {
    if (!node.left) {
      node.left = newNode;
    } else {
      this.AddNode(node.left, newNode);
    }
  } else {
    if (!node.right) {
      node.right = newNode;
    } else {
      this.AddNode(node.right, newNode);
    }
  }
};

BinarySearchTree.prototype.bfs = function (root) {
  if (!root) return null;

  const queue = [root];
  const result = [];
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current.value);

    if (current && current.left) {
      queue.push(current.left);
    }
    if (current && current.right) {
      queue.push(current.right);
    }
  }
  return result;
};
