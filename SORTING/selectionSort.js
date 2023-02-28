function swap(arr,idx1,idx2) {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

function selSort(arr) {
    for (let i = 0; i < arr.length; i++) {
       for (let j = i+1; j < arr.length; j++) {
        if (arr[j]<arr[i]) {
            swap(arr,i,j)
        }
       } 
    }
    console.log(arr);
}

selSort([23,4,7,5,4,9])