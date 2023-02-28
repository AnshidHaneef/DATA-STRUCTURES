//  Sorting the Elements in the Stack with the help of another stack

function stackSort(input) {
  let tempStack = [];
while (input.length>0) {
    let temp = input.pop()
    while (tempStack.length>0 && tempStack[tempStack.length-1]>temp) {
        input.push(tempStack.pop())
    }
    tempStack.push(temp)
}

  return tempStack
}

let input = [9,4,7,1,0,5]

let output = stackSort(input)

console.log(output);