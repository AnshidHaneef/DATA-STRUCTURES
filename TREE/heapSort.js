function heapSort(array) {
    // Helper function to build a max heap from the array
    function buildMaxHeap(array) {
      const n = array.length;
      for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i);
      }
    }
  
    // Helper function to maintain the max heap property
    function heapify(array, n, i) {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;
  
      if (left < n && array[left] > array[largest]) {
        largest = left;
      }
  
      if (right < n && array[right] > array[largest]) {
        largest = right;
      }
  
      if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]];
        heapify(array, n, largest);
      }
    }
  
    // Build the max heap
    buildMaxHeap(array);
  
    // Sort the array
    for (let i = array.length - 1; i >= 1; i--) {
      [array[0], array[i]] = [array[i], array[0]];
      heapify(array, i, 0);
    }
  
    return array;
  }