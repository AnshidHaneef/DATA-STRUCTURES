function findDuplicates(arr) {
    let hash = {};
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (hash[arr[i]] !== undefined) {
        if (hash[arr[i]] === false) {
          result.push(arr[i]);
          hash[arr[i]] = true;
        }
      } else {
        hash[arr[i]] = false;
      }
    }
    
    return result;
  }

  let arr = [3,4,3,6,7,6]
let newArr = findDuplicates(arr)
  console.log(newArr);