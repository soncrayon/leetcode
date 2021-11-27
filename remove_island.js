const removeIslands = (matrix) => {

      const seen = new Set(); 	
      
      for ( let r = 0; r < matrix.length; r++ ){
          for ( let c = 0; c < matrix[r].length; c++ ){
              const isOnEdge = r === 0 || r === matrix.length - 1 || 
              c === 0 || c === matrix[0].length - 1; 
              if ( !isOnEdge ) continue; 
              explore( matrix, r, c, seen); 
          }
      }
      
      transform(matrix); 
      
    return matrix;
  }
  
  const transform = ( matrix ) => {
      for ( let r = 0; r < matrix.length; r++ ){
          for ( let c = 0; c < matrix[0].length; c++ ){
              if ( matrix[r][c] === 2 ) {
                  matrix[r][c] = 1;
              } else if ( matrix[r][c] === 1 ){
                  matrix[r][c] = 0; 
              }
          }
      }
  }
  
  const explore = ( matrix, r, c, seen ) => {
      const rowInBounds = r >= 0 && r < matrix.length;
      const colInBounds = c >= 0 && c < matrix[0].length; 
      
      if ( !rowInBounds || !colInBounds ) return; 
      
      if ( matrix[r][c] === 0 ) return; 
      
      let coordinate = r + ',' + c; 
      
      if ( seen.has(coordinate) ) return;
      
      seen.add(coordinate); 
      
      matrix[r][c] = 2; 
      
      explore( matrix, r - 1, c, seen );
      explore( matrix, r, c - 1, seen );
      explore( matrix, r + 1, c, seen );
      explore( matrix, r, c + 1, seen ); 
      
      return; 
  }
  
  //another way is replace "1" connected to border with 2
      //then replace the remaining "1" values with "0" and replace the "2" values with "1" values
      //doesn't really improve on the above because operates in O( w * h ) space due to using stack
      //better average space complexity because, on average, not every element will be on the stack
  
  