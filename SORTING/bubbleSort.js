function swap(arr,idx1,idx2){
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp 
}


function bblSort(arr){
for (let i = 0; i < arr.length; i++) {
    noSwaps = true;
    for (let j = 0; j <arr.length-i-1; j++) {
        console.log(arr[j],arr[j+1]);
        if (arr[j]>arr[j+1]) { 
            swap(arr,j,j+1)
     noSwaps = false;
        }  
    }
    if(noSwaps) break;
} 
  console.log(arr);  
}


bblSort([8,1,2,3,4,5,6,7])