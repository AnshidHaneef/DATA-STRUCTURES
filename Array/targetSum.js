
const twoSum = (arr,target) => {
    let numSet = new Set();

    for (let i = 0; i < arr.length; i++) {     // O(n)

        if (numSet.has(target-arr[i])) {          //O(1)
            let j = arr.indexOf(target-arr[i]);
            console.log(arr[j],arr[i]);
        }        
        numSet.add(arr[i])
    }
}


let arr = [3, 5, 2, 4,8,6]
twoSum(arr, 7)