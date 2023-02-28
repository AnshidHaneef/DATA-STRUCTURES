class Node{
    constructor(data){
        this.data = data
        this.next= null
    }
}

class Stack{
    constructor(data){
        let newNode = new Node(data)
        this.top = newNode
        this.length = 0;
    }

    push(data){
        let newNode = new Node(data)
        if(this.top ==null){
            this.top = newNode
        }else{
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
    }

    pop(){
        if (this.top==null) {
            console.log('stack udnerflow');
        }
        // if (!this.top.next) {
        //     this.top = null
        //     return null
        // }
        this.top=this.top.next
        this.length--
    }

    print(){
        let temp = this.top
        while(temp!=null){
            console.log(temp.data);
            temp = temp.next
        }
    }
}

let stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.pop()

stack.print()
console.log(' length : '+ stack.length);