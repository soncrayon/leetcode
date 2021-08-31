const minimumWaitingTime = (queries) => {
      queries = quickSort(queries); 
      let minWait = 0;
      for (let i = 0; i < queries.length; i++) {
          if ( queries[i] !== 0 && i !== queries.length - 1){
              minWait += (queries.length - (i + 1)) * queries[i]; 
          }
      }
    return minWait;
  }
  
  const quickSort = (arr) => {
      if (arr.length === 1) return arr; 
      let pivot = arr[arr.length - 1]
      const leftArr = [];
      const rightArr = [];
      
      for (let i = 0; i < arr.length - 1; i++){
          if (arr[i] < pivot) {
              leftArr.push(arr[i]);
          } else {
              rightArr.push(arr[i]);
          }
      }
      
      if (leftArr.length > 0 && rightArr.length > 0){
          return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
      } else if (leftArr.length > 0) {
          return [...quickSort(leftArr), pivot];
      } else if (rightArr.length > 0) {
          return [pivot, ...quickSort(rightArr)]; 
      }
  }
  

  