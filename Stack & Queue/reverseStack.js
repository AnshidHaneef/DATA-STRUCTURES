//  Reverse array using stack 


function revStack(arr) {

    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i]); 
    }
    for (let j = 0; j < arr.length; j++) {
        arr[j]=stack.pop() 
    }
    console.log(arr);
    return arr;
}

 revStack([1,2,3,4,5])



 function midStack(arr) {
    let mid = Math.floor(arr.length/2)
    let temp =[]
for (let i = 0; i < mid; i++) {
    temp.push(arr.pop())
}

arr.pop()

for (let j = 0; j < mid; j++) {
    arr.push(temp.pop())
}
console.log(arr);
 }

 midStack([1,2,3,4,5])
