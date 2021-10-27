const rotateMatrix = ( matrix ) => {
    // const swapped = new Set(); 
	// let middleColIdx = Math.floor( matrix[0].length / 2); 
	// for ( let i = 0; i < matrix.length; i++ ) {
    //     for ( let j = 0; j < matrix[0].length; j++ ) {
            
    //         let origDifference = i - middleColIdx; 
    //         let newCol = middleColIdx + (origDifference * -1); 
    //         let newRow = j; 
    //         let temp = matrix[newRow][newCol]; 
    //         console.log( [i, j])
    //         console.log([newRow, newCol])
    //         const newCoord = newRow + ',' + newCol;
    //         const oldCoord = i + ',' + j; 
    //         if ( !swapped.has( newCoord) && !swapped.has(oldCoord) ) {
    //             matrix[newRow][newCol] = matrix[i][j]; 
    //             matrix[i][j] = temp; 
    //             swapped.add( newCoord );
    //             swapped.add( oldCoord ); 
    //         }
           
    //     }
    // }
    if ( matrix.length === 0 || matrix.length !== matrix[0].length ) return "Invalid matrix"; 
    let n = matrix.length; 
    for ( let i = 0; i < n; i++ ){
        let first = i; 
        let last = n - 1 - i; 
        for ( let j = first; j < last; j++ ){
            let offset = i - first; 
            let top = matrix[first][i] 
            matrix[first][i] = matrix[ last - offset][first];
            matrix[last - offset][first] = matrix[last][ last - offset];
            matrix[last][last - offset] = matrix[i][last]; 
            matrix[i][last] = top; 
        }
    }
    return matrix; 
}

console.log(rotateMatrix (

[[0, 0, 1, 1, 0], 
[0, 0, 1, 1, 0],
[0, 0, 1, 1, 0], 
[0, 0, 1, 1, 0], 
[0, 0, 1, 1, 0]] 


))
