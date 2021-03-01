class binaryTree {
  constructor(initialValue) {
    this.root = this._newNode(initialValue);
  }

  _newNode(value) {
    return {
      value,
      left: null,
      right: null,
    };
  }

  insert(value) {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (value > currentNode.value) {
        if (currentNode.right !== null) {
          currentNode = currentNode.right;
        } else {
          currentNode.right = this._newNode(value);
          break
        }
      } else {
        if (currentNode.left !== null) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = this._newNode(value);
          break
        }
      }
    }
  }

  breathFristSearch() {
    let currentNode = this.root;
  }
}

let tree = new binaryTree(7);

tree.insert(2);
tree.insert(9);
tree.insert(3);
tree.insert(8);

console.log(tree.root);
