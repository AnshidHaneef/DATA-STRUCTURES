

  // Merge an array

let arr1 = [1, 2, 3, 4]
let newArr = []

let i = 0
let j = 0

function insert() {
    if (i > arr1.length - 1) {
        return;
    }

    newArr.push(arr1[i++])
    insert()
    newArr.push(arr1[j++])
}

insert();
console.log(newArr,'newArr');


// usig for loop 

let arr  = [1,2,3,4]
let arr2= []
n= arr.length
for (let k=0;k<n*2;k++){
  arr2[k]=arr[ k % n ]
}
console.log(arr2 , 'arr2'); 