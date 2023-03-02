
// Binary Search tree ...
class Node {
    constructor(data){
        this.data = data;
        this.left= null;
        this.right= null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    // Checking the tree is Empty .. 
  isEmpty(){
      return this.root === null;
  }
  
// Inserting Nodes to the Tree ..  
  insert(data){
      let newNode = new Node(data)
      if(this.isEmpty()){
          this.root = newNode;
      }else{
          this.insertNode(this.root,newNode)
      }
  } 
  insertNode(root,newNode){
     if(newNode.data < root.data){
         if(root.left == null){
             root.left = newNode;
         }else{
             this.insertNode(root.left,newNode)
         }  
     }else{
         if(newNode.data > root.data){
             if(root.right == null){
                 root.right = newNode
             }else{
                 this.insertNode(root.right,newNode);
             }
         }
     }
  }

  
//  Search the Node  
search(root,data){
    if (root === null) {
        return false
    }else if(root.data === data){
        return true
    }
    else if(root.data > data){
        return this.search(root.left,data)
    }else {
        return this.search(root.right,data)
    }
}


// Tree Traversal .. 
// preOrder .
preOrder(node){
    if (node) {
        console.log(node.data);
         this.preOrder(node.left);
         this.preOrder(node.right);
    }
}

// Inorder .
inOrder(node){
    if (node) {
       this.inOrder(node.left)
       console.log(node.data);
       this.inOrder(node.right)  
    }
}

// postOrder .
postOrder(node){
    if (node) {
        this.postOrder(node.left)
        this.postOrder(node.right)
        console.log(node.data);
    }
}

// Breadth First Search By creating a Queue ...
levelOrder(){
    let queue = [];
    queue.push(this.root)
    while (queue.length) {
        let temp = queue.shift();
        console.log(temp.data);
        if (temp.left) {
            queue.push(temp.left)
        }if (temp.right) {
            queue.push(temp.right)
        }
    }
}

// Minimum and Maximum Node In The tree ..
min(root){
    if (!root.left) {
        return root.data;    
    }else{
       return this.min(root.left)
    }
}

max(root){
    if (!root.right) {
        return root.data;
    }else{
        return this.max(root.right)
    }
}

// Delete a Node From the Tree ..
delete(node){
    this.root = this.deleteNode(this.root,node)
}
deleteNode(root,data){
    if (!root) {
        return root;
    }else if( data<root.data){
        root.left = this.deleteNode(root.left,data)
    }else if(data > root.data){
        root.right = this.deleteNode(root.right,data)
    }
    else{
        if (!root.left && !root.right) {
            return null
        }
         if(!root.left){
            return root.right;
        }else if(!root.right){
            return root.left
        }
        this.data = this.min(root.right)
        root.right = this.deleteNode(root.right,root.data)
    }
        return root;
}

}
  

let bst = new BinarySearchTree()

bst.insert(35)
bst.insert(15)
bst.insert(55)
bst.insert(60)
bst.insert(33)

console.log('BST is Empty ?', bst.isEmpty());

console.log("is this value Containing ",bst.search(bst.root,5))

// console.log('preOrder ' + bst.preOrder(bst.root));
// console.log('inOrder ' + bst.inOrder(bst.root));
// console.log('postOrder ' + bst.postOrder(bst.root));

// console.log(bst.levelOrder());

console.log('Largest Node =',bst.max(bst.root));
console.log('Smallest Node =',bst.min(bst.root));

bst.delete(60)

bst.levelOrder()
