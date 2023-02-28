

// create a class and that will store the data and the reference to the next node

 class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null ;
        this.tail = null;
        this.length = 0
    }

push(data){

    let newNode = new Node(data)    
    if(this.head==null){
        this.head = newNode
        this.tail = this.head  
    }else{
        this.tail.next= newNode
        this.tail = newNode
    }
    this.length++
    return this;
}



unshift(data){
let newNode = new Node(data)
if(!this.head){
    this.head= newNode   
    this.tail=this.head
}else{
    newNode.next = this.head
this.head = newNode
}
this.length++
return this;
}






insert(data,position= this.length){

// if (index == 0){
//     console.log('Index canot be null');
// }

let newNode = new Node(data)

if(!this.head){
    this.head = newNode
    this.tail = this.head
    return this;
}

let iter = 1;
let temp = this.head
while(temp.next!= null && iter<position){
    temp = temp.next;
    iter++
}

newNode.next = temp.next
temp.next = newNode;
this.length++
return newNode
}


print() {
    
    let current = this.head;   
   while (current != null) {
    process.stdout.write(current.data+ ' -> ')
    //   console.log(current.data );
      current = current.next;
      
    }
  }

}


let list = new LinkedList();

// list.push(1);
// list.push(2);
// list.push(3);
list.insert(24);
list.insert(25);
list.insert(26);
list.insert(2,1);
list.unshift(0)



list.print( )
