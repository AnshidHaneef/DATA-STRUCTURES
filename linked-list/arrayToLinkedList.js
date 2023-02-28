class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {    
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNode(data) {
        const newNode = new Node(data);
        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            return
        }
        this.tail.next = newNode
        this.tail = newNode
    }

    print () {
        this.temp = this.head;
        while(this.temp !== null) {
            console.log(this.temp.data);
    // process.stdout.write(this.temp.data+ ' -> ')
            this.temp = this.temp.next;
        }
    }
}

let list = new LinkedList()
let arr=[ 1,2,3,4,5,6,8]
arr.forEach( i => list.addNode(i) )

list.print()


