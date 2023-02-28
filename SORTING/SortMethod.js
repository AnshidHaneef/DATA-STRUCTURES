
//  Sorting using javascript sort()   ||  in javascript Sort method , The default sort order is according to string Unicode code points.



let arr = [45,65,78,3,1,9,0]
function numberCompare(num1,num2) {
    return num1-num2
}

arr.sort(numberCompare)
console.log(arr);


//  Sorting stringss..

let arr2 = ['hello','world','jupiter','mars','earth']

function stringCompare(str1,str2) {
    return str1.length - str2.length
}

arr2.sort(stringCompare)
console.log(arr2);