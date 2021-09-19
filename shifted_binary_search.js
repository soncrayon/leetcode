const shiftedBinarySearch = (array, target) => {

      let newArray = [...array]; 
      
      newArray.sort((a, b) => a - b)
      
      console.log(binarySearch(newArray, target))
      return array.indexOf(binarySearch(newArray, target));
  }
  
  const binarySearch = (arr, target) => {
      let start = 0, end = arr.length - 1;
      
      while ( start <= end ){
          let mid = Math.floor( (start + end) / 2);
          console.log(arr[mid])
          if (arr[mid] === target) return target;
          if (arr[mid] > target) {
              end = mid - 1;
          } else if (arr[mid] < target){
              start = mid + 1; 
          }
      }
       
      return -1;
      
  }