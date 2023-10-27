class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insertRecursive(data) {
        this.root = this.insertNode(this.root, data);
    }

    insertNode(current, data) {
        if (current === null) {
            return new Node(data);
        }

        if (data < current.data) {
            current.left = this.insertNode(current.left, data);
        } else if (data > current.data) {
            current.right = this.insertNode(current.right, data);
        }

        return current;
    }
}

// Example usage:
const bst = new BinarySearchTree();
bst.insertRecursive(5);
bst.insertRecursive(3);
bst.insertRecursive(8);
bst.insertRecursive(2);
bst.insertRecursive(4);