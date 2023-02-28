function quickSort(arr) {
    if (arr.length<2) {
       return arr
    }

    const pivotIndex = Math.floor(Math.random() * arr.length);
    
    const pivot = arr[pivotIndex];

//    let pivot = arr[arr.length-1];
   let left  =[]
   let right = []

   for (let i = 0; i < arr.length; i++) {
    if (i===pivotIndex) {
        continue;
    }
       if (arr[i]<pivot) {
           left.push(arr[i])
       }else{
           right.push(arr[i])
       }
   }
   return [...quickSort(left),pivot,...quickSort(right)]
}

let arr= [10,11,5,3,9,22]

let newArr = quickSort(arr)

console.log(newArr);

