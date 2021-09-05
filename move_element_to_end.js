const moveElementToEnd = (array, toMove) => {
      let i = 0, limit = array.length - 1; 
      
      while ( i < limit ) {
          if ( array[i] === toMove ) {
              array.push(array[i]); 
              array.splice(i, 1); 
              limit--; 
          } else {
              i++; 
          }
      }
      
      return array; 
  }

  