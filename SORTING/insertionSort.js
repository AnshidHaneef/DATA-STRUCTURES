
function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {

        let temp = arr[i]
        let j= i-1;
     while (j>=0 && arr[j]>temp) {
        arr[j+1]=arr[j]
        j--;
     }
      arr[j+1] = temp  
    }
    console.log(arr);
}



function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
       let temp = arr[i]
        for (let j = i-1; j >=0 && arr[j]>temp ; j--) {
           arr[j+1] = arr[j]
        }  
        arr[j+1] = temp
    }
    console.log(arr);
}




insertSort([10,3,5,7,9])

insertionSort([10,3,5,7,9])