class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
isEmpty(){
    return this.root === null;
}

insert(data){
    let newNode = new Node(data)
    if (this.isEmpty()) {
        this.root = newNode;
    }else{
        this.insertNode(this.root,newNode)
    }
}
insertNode(root,newNode){
    if (root.data < newNode.data) {
        if (root.left == null) {
            root.left = newNode
        }else{
            this.insertNode(root.left,newNode)
        }
    }else{
        if (root.data > newNode.data) {
            if (root.right == null) {
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }
}

// inOrder ...

inOrder(node){
    if (!node) {
        return null;
    }else{
        this.inOrder(node.left)
        console.log(node.data);
        this.inOrder(node.right)
    }
}

// preOrder ..

preOrder(node){
    if (!node) {
        return null;
    }else{
        console.log(node.data);
        this.preOrder(node.left)
        this.preOrder(node.right)
    }
}

// PostOrder  ..

postOrder(node){
    if (!node) {
        return null;
    }else{
        this.postOrder(node.left)
        this.postOrder(node.right)
        console.log(node.data);
    }

}

}

let bst = new BinarySearchTree()

bst.insert(15);
bst.insert(5);
bst.insert(25);

// bst.inOrder(bst.root)

// bst.preOrder(bst.root)

bst.postOrder(bst.root)

console.log(bst.isEmpty());