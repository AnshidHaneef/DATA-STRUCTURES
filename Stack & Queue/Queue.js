    class Node{
        constructor(data){
            this.data = data
            this.next = null;
        }
    }

    class Queue{
        constructor(){
            this.first = null;
            this.last = null;
            this.length = 0
        }

        enqueue(data){
            let newNode = new Node(data)
            if(!this.first){
                this.first= newNode
                this.last = newNode
            }else{
                this.last.next= newNode;
                this.last = newNode 
                console.log('Queue Added');
            }
            this.length ++
        }
        dequeue(){
            if (!this.first) {
                return null;
            }
            this.first = this.first.next
            this.length--;
            
        }

        print(){
            let temp = this.first
            while(temp!=null){

                console.log(temp.data);
                temp = temp.next
            }
            
        }
    }

    let queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4) 

queue.print()