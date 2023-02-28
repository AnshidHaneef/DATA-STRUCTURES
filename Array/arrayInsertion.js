// insert  at a specific position'

// using splice method
let arr = [1,2,3,4]

function spliced(){
    let arr1 = arr.splice(5,0,23,44)
     
    console.log(arr);
    console.log(arr1);
}

//  without using any method .

function insert(){
    for(let i= arr.length;i>2;i--){
        arr[i]=arr[i-1]
    }
    arr[2]=55;
    console.log(arr);
}

// spliced()
insert()