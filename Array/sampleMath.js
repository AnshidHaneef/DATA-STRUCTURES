// function sum(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) { // O(n)
//         sum += i;
//     }
//     return sum;
// }
// 1+2+3+4+5 = 15


// const getSum =((n) => (n*(n+1))/2) //O(1)
// console.log();

const set = new Set([1,2,3,4])
set.add(5,6,7)

for(const item of set){
    console.log(item);
}