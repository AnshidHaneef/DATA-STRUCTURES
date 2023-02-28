//  Here Array is used to implement Stack ..

class Stack{
    constructor(){
        this.items = []
        this.length = 0
    }

push(data){
    this.items.push(data)
    this.length++
}    

pop(){
    if (this.items.length ==0) {
        return 'stack UnderFlow'
    }
     this.items.pop()
     this.length -- 
}

peek(){
    return this.items[this.items.length-1];
}

print(){
    let arr = []
    for (let i = 0; i < this.items.length; i++) {
        arr.push(this.items[i])
    }
    console.log(arr);
}
}

let stack = new Stack()

stack.push(2)
stack.push(5)
stack.push(7)
stack.push(1)
stack.push(9)
stack.pop()

stack.print()
console.log(stack.peek());
console.log(stack.length);
