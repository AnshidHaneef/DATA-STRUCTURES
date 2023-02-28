// list.push(1)
// list.push(2)
// list.push(3)



let arr= [1,2,2,3,3,4,5,6]

let arr2 = []

for (let i=0;i<arr.length;i++){

    if (!arr2.includes(arr[i]) ){
        arr2.push(arr[i])
    }
}

console.log(arr2,'22222');