
// str1 = 'ab#c'
// str2 = 'ad#c'

// for(i=0;i<str1.length;i++){
//     if(str1[i]=='#')
//     return true
// }

let str = 'helloo';
let str1 = ''
for(let i = str.length-1;i>=0;i--){
    str1+=str[i]
}
console.log(str1);