
// binary search

function binarySearch(array, target) {
    let start = 0, end = array.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (array[mid] === target) return mid;
      else if (array[mid] < target) start = mid + 1;
      else end = mid - 1;
    }
    return -1;
  }

  console.log(binarySearch([2,5,6,8,4,9],9));
 

//   linear Search

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === target) 
      return i;
    }
    return -1;
  }

  console.log(linearSearch([2,5,6,8,4,9],2));
