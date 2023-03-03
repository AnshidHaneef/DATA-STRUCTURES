// Binary Search Tree ..

class Node {
    constructor(data){
        this.data = data ;
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
    if(this.isEmpty()){
   this.root = newNode     
    }else{
        this.insertNode(this.root,newNode)
    }
}

insertNode(root,newNode){
   
    if(newNode.data < root.data){
        if(root.left === null){
        root.left = newNode;
    }else{
        this.insertNode(root.left,newNode)
    }
   }
    if (newNode.data > root.data){
 if(root.right === null){
           root.right = newNode;
       }else{
           this.insertNode(this.root,newNode)
       }
    }
        
}

inOrder(node){
    if(node){
        this.inOrder(node.left)
        console.log(node.data)
        this.inOrder(node.right)
    }
}

}

function isBst(root) {
    function inOrderTrav(node,value) {
        if (!node) {
            return;
        }
        inOrderTrav(node.left,value)
        value.push(node.val)
        inOrderTrav(node.right,value)
    }
    const value = []
    inOrderTrav(root,value);

    for (let i = 1; i < value.length; i++) {
        if (value[i] <= value[i - 1]) {
          return false;
        }
      }
    
      return true;
}

let bst = new BinarySearchTree()
bst.insert(5)
bst.insert(10)
bst.insert(15)
bst.insert(7)

bst.inOrder(bst.root);
console.log(bst.isEmpty())