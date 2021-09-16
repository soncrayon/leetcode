const heapSort = (array) => {
      buildMaxHeap(array);
      
      let lastElement = array.length - 1;
      
      while ( lastElement > 0) {
          swap( array, 0, lastElement);
          heapify( array, 0, lastElement); 
          lastElement -= 1;
      }
      
      return array; 
  }
  
  const buildMaxHeap = (arr) => {
      let i = Math.floor( arr.length/2 - 1);
      
      while ( i >= 0 ) {
          heapify( arr, i, arr.length);
          i -= 1; 
      }
  }
  
  const heapify = ( heap, i, max) => {
      let index, leftChild, rightChild; 
      
      while ( i < max ) {
          index = i;
          leftChild = 2 * i + 1;
          rightChild = leftChild + 1; 
          
          if ( leftChild < max && heap[leftChild] > heap[index]){
              index = leftChild; 
          }
          
          if ( rightChild < max && heap[rightChild] > heap[index]) {
              index = rightChild; 
          }
          
          if ( index === i ){
              return; 
          }
          
          swap( heap, i, index); 
          
          i = index; 
      }
  }
  
  const swap = ( arr, firstItemIndex, lastItemIndex ) => {
      const temp = arr[firstItemIndex]; 
      arr[firstItemIndex] = arr[lastItemIndex]; 
      arr[lastItemIndex] = temp; 
  }