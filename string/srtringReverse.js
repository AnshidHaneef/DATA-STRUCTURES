// reverse a string in js 

let str = new String('hello')

let str2 = '';
for(let i = str.length-1;i>=0;i--){
    str2 += str[i]
}
console.log(str2);


//  sample sort using sort()
let num = [44,567,3,5,1,333]
let newNum = num.sort()
console.log(newNum);