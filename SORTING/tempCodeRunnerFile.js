function insersionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = i-1;
        while(j >= 0) {
            if(arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j] , arr[i]]
            }
            j--;
        }
    }
    console.log(arr);
}

insersionSort([1,3,5,3,2])