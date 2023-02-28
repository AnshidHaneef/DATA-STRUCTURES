

class Node{
    constructor(data){
        this.data=data;
        this.next = null;
    }
}

class LinkedList{
    constructor(data){
        let newNode = new Node(data)

        this.head =newNode;
        this.tail = newNode;
        this.length = 0;

    }

    push(data){
        let newNode = new Node(data)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next= newNode
            this.tail= newNode
        }
        this.length++
    }


    print(){
        
        let temp = this.head
        while(temp!=null){  
            process.stdout.write(temp.data + '->')
            // console.log(temp.data);
            temp= temp.next
        }
    }

}

let list = new LinkedList()

// let arr = new Set([1,2,3,4,5,5,6,6,5,5,5,7,7,7,8])
let arr = [1,2,3,4,5,5,6,6,5,5,5,7,7,7,8]
let obj ={}
let arr2 =[]
            for(let j=0;j<arr.length;j++){
                console.log(obj[arr[j]]);
                if (!obj[arr[j]]) {
                    arr2[arr2.length]=arr[j]
                    obj[arr[j]]=arr[j]   
                }
            }
console.log(arr2,'222222222');

let array = [...arr]

console.log(array);

// array.forEach(i => list.push(i))

for(let i=0;i<array.length;i++){
   let ele = array[i]
   list.push(ele)
// console.log(ele,'eeeeee');
}

list.print()


// let an = [1,2,3,4,5,5,6,6]

// for (let i = 0; i < an.length; i++) {
//     let v = 0;
//     for (let j = 0; j <= an[i]; j++) {
//         v *= an[i]
//     }
//     console.log(v,'vvvvvvvv');
// }