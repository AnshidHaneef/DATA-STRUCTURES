
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList{
    constructor(data) {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

  push(data){
    let newNode = new Node(data)
    if(!this.head){
        this.head = newNode
        this.tail= newNode
        
    }else{
        this.tail.next= newNode;
        this.tail= newNode
    }
    this.length++
  } 
  
  unshift(data){
    let newNode = new Node(data)
    if(!this.head) {
        this.head = newNode
        this.tail = newNode
    }else{
        newNode.next=this.head
        this.head = newNode;
    }
    return this
    this.length++
  }
  
// pop(){
//  if (!this.head) return undefined;
//    let temp = this.head
//    let pre = this.head
//    while(temp.next){
//     pre = temp;
//     temp= temp.next
//    }
//    this.tail= pre;
// }

pop(head){
    if (!this.head) return undefined;

    let current = this.head;
    let prev = null;
    while(current && current.next){
        prev = current;
        current = current.next
    }
    prev.next= null;
    return head
}


print(){
    let temp = this.head;
    while(temp!=null){
        process.stdout.write(temp.data+'->')
        temp= temp.next;
    }
}


}

let list = new LinkedList()

list.push(1)
list.push(2)
list.push(3)
list.unshift(9)
list.pop()

list.print()