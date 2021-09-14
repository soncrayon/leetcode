const riverSizes = (matrix) => {
      const visited = new Set(); 
      const sizesArray = [];
      for ( let r = 0; r < matrix.length; r++ ){
          for ( let c = 0; c < matrix[0].length; c++){
              let size = explore(r, c, matrix, visited); 
              if (size > 0 ) sizesArray.push( size ); 
          }
      }
      return sizesArray; 
  }
  
  const explore = ( r, c, matrix, visited ) => {
      
      const rowInBounds = r >= 0 && r < matrix.length;
      const columnInBounds = c >=0 && c < matrix[0].length; 
      
      if ( !rowInBounds || !columnInBounds ) return 0; 
      if ( matrix[r][c] === 0) return 0; 
      
      const riverPart = r + "," + c; 
      
      if ( visited.has(riverPart) ) return 0; 
      visited.add( riverPart ); 
      
      let size = 1; 
      size += explore(r + 1, c, matrix, visited);
      size += explore( r - 1, c, matrix, visited);
      size += explore ( r, c + 1, matrix, visited); 
      size += explore ( r, c - 1, matrix, visited); 
      
      return size; 
  }
  
  