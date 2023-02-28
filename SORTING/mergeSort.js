

function mergeSort(arr) {
    if (arr.length<2) {
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let  leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)

    return merge(mergeSort(leftArr),mergeSort(rightArr))  // recursively calls mergeSort() for devide the array into single element . 
}

function merge(leftArr,rightArr) {
    let sortedArr = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr,...leftArr,...rightArr]
}

let arr = [33,5,7,8,9,1]
let newArr = mergeSort(arr)
console.log(newArr);



