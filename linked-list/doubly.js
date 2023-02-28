
class Node{

    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }

}

class LinkedList{
    constructor (){
        this.head = null;
    }

    adNode(data){
    let newNode = new Node(data)      
    newNode.next = this.head;
    this.head = newNode;
    newNode.prev =null;

    }

    display(){
        let temp = this.head;   
        while (temp) {
            process.stdout.write(temp.data+'->')
        //    console.log(current.data);
           temp = temp.next;
         }
    }   
}

let list = new LinkedList
list.adNode(1)
list.adNode(2)
list.adNode(3)

list.display()