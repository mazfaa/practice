const log = console.log;

const tree = [];

root('A');

setLeft('B', 0); // (value, parent)
setRight('C', 0);

setLeft('D', 1);
setRight('E', 1);

setRight('F', 2);

// printTree();

function root(x) {
  if (tree.length === 0) {
    tree.push(x);
  } else {
    console.log('This tree had already a root');
  }
}

// 0 - n-1
// P = parent
// 2 * P + 1 = Left Child
// 2 * P + 2 = Right Child

function setLeft(value, parent) {
  if (tree[parent] === null) {
    log(`Cannot set child at ${2 * parent + 1}`)
  } else {
    tree[2 * parent + 1] = value;
  }
}

function setRight(value, parent) {
  if (tree[parent] === null) {
    log(`Cannot set child at ${2 * parent + 2}`);
  } else {
    tree[2 * parent + 2] = value;
  }
}

function printTree() {
  for (let i = 0; i < tree.length; i++) {
    if (tree[i] != null) {
      log(tree[i]);
    } else {
      log('-');
    }
  }
}

// Tree Traversals

// Inorder Traversal

class Node {
  constructor(val) {
      this.key = val;
      this.left = null;
      this.right = null;
  }
}

// Root of Binary Tree
var root = null;
   
// Given a binary tree, print its nodes in inorder
function printInorder(node) {
  if (node == null)
      return;

  // First recur on left child */
  printInorder(node.left);

  // Then print the data of node
  console.log(node.key + " ");

  // Now recur on right child
  printInorder(node.right);
}

// Driver method 
   
  root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.left = new Node(6);
  root.right.right = new Node(7);

  console.log("Inorder traversal of binary tree is ");
  printInorder(root);

  function printPreorder(node) {
    if (node == null)
        return;
 
    // First print data of node
    log(node.key + " ");
 
    // Then recur on left subtree
    printPreorder(node.left);
 
    // Now recur on right subtree
    printPreorder(node.right);
}

console.log("Preorder traversal of binary tree is ");
printPreorder(root);

function printPostorder(node) {
  if (node == null)
      return;

  // First recur on left subtree
  printPostorder(node.left);

  // Then recur on right subtree
  printPostorder(node.right);

  // Now deal with the node
  console.log(node.key + " ");
}

console.log("Postorder traversal of binary tree is ");
printPostorder(root);