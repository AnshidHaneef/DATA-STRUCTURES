 
 function midStack(stack) {
    let size = stack.length
    let mid = Math.floor(size/2)

    let temp = []
    for (let i = 0; i <mid; i++) {
        temp.push(stack.pop())  
    }
    
    stack.pop()
 
    for (let j = 0; j < mid; j++) {
        stack.push(temp.pop())
    }
// return stack
 }

let stack = [34,5,6,7,32]
 midStack(stack)
console.log(stack);
 