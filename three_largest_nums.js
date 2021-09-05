const findThreeLargestNumbers = (array) => {
      if ( array.length < 4 ) return array.sort((a,b) => a - b); 
      let largeArr = array.slice(0, 3).sort((a,b) => a - b);
      for ( let i = 3; i < array.length; i++) {
          if ( array[i] >= largeArr[2] ) {
              let temp = largeArr[2];
              largeArr[2] = array[i]; 
              largeArr[0] = largeArr[1];
              largeArr[1] = temp; 
          } else if ( array[i] >= largeArr[1] ) {
              let temp = largeArr[1]; 
              largeArr[1] = array[i]; 
              largeArr[0] = temp; 
          } else if ( array[i] >= largeArr[0] ) {
              largeArr[0] = array[i]; 
          }
      }
      return largeArr; 
  }

  console.log(findThreeLargestNumbers([8,7,6,5,2,9,11,45,10,10]))