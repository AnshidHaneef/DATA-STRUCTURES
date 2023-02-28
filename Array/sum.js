


// var twoSum = function(nums,target){
//     const previousValues ={}
// for (let i=0; i<nums.length;i++){
//     const currentNumber = nums[i]
//     const neededValues = target- currentNumber
//     const index2 = previousValues[neededValues] 
//         if (index2 != null){
//             return [index2 , index]
//         }else{
            
//             previousValues[currentNumber]=i
//         }
//     }
// }


let arr1 = [1, 2, 3, 4]

let newArr = []

let i = 0
let j = 0

function insert() {
    if (i > arr1.length - 1) {
        i = 0
        return;
    }

    newArr[j++] = arr1[i++]
    insert()
    newArr[j++] = arr1[i++]
}

insert()

console.log(newArr);