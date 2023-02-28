class Node{
    constructor(data){
        this.data = data
        this.next = null

    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.tail= null
        this.length = 0
    }

push(data){
    let newNode = new Node(data)
    if(!this.head){
        this.head = newNode
        this.tail = this.head
        return newNode;
    }
    this.tail.next = newNode
    this.tail = newNode  
    this.length++

}
// function to print array elements

printArr(a,n){
    for(let i=0; i<n;i++){
        console.log(a[i]+" ");
    }
}

// function to return the length of the linked list

findLength(){
    let temp = this.head;
    let count = 0;
    while(temp!= null){
        count ++
        temp = temp.next
    }
    return count;
}

//  function to convert linkedList to array..

convertArr(){
    let len = this.findLength()

    let arr = new Arrary(len);

    let index = 0;
    let temp = this.head;

    while(temp!= null){
        arr(index++) = temp.data
        temp = temp.next
    }
    this.printArr(arr,len)
}





// print(){
//     let temp = this.head
//     while(temp){
//     process.stdout.write(temp.data+ ' -> ')
//         temp =temp.next;
//     }
// }
}

let list = new LinkedList( )

list.push(3)
list.push(4)
list.push(5)

// list.print()
list.convertArr()