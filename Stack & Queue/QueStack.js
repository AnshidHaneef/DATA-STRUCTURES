
//  Implement Queue Using 2 Stacks ..
        // push(x)
        // s1  ->  s2
        // x   ->  s1
        // s2  ->  s1

         // pop()
        // s1.pop()


class Queue{
    constructor(){
        let s1 =[];
        let s2 = [];
    }

    enqueue(data){
        while (this.s1.length!=0) {
            this.s2.push(this.s1.pop())
        }

        this.s1.push(data)

        while (this.s2.length!=0) {
            this.s1.push(this.s2.pop())
        }
    }

    print(){
        let arr = []
        for (let i = 0; i < this.s1.length; i++) {
            arr.push(this.s1[i]) 
        }
        console.log(arr,'arr');
    }

}

let que = new Queue()

que.enqueue(20)
que.enqueue(30)
que.enqueue(50)

que.print()