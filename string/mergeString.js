let str1 = 'hello';
let str2 = 'world';

let big =  " it's a big baloon"

let str3='';

let length = str1.length+str2.length  

for(let i=0;i<length;i++){
    if(i<str1.length){
        str3+=str1[i]
    }

    if(i<str2.length){
        str3+=str2[i]
    }
}
console.log(str3);

str3 = str1.concat(" ",str2 ," ", big)
console.log(str3,'RESULT');

// str1 = "ab#c"     str2 = "ad#c"      

function search(str1,str2){
    let lstr = ''
    let fstr = ''

for(let i=0;i<str1.length;i++){
    if(str1[i] != '#' && str1[i+1]!='#'){
        lstr+=str1[i]
    }
}
for(let i=0;i<str2.length;i++){
    if(str1[i] != '#' && str2[i+1]!='#'){
        fstr+=str2[i]
    }
}
console.log(fstr,lstr);
if(lstr==fstr) {
    return true
}
return false

}

console.log(search('abcd#f','abcd#f'));