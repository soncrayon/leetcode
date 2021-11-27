const findHeights = ( matrix ) => {
    return [ getTallestOfShortest( matrix ), getShortestOfTallest( matrix ) ]; 
}

const getTallestOfShortest = ( matrix ) => {
    let currentTarget = matrix[0][0]; 
    let currentTallestOfShortest = -Infinity; 
    //sorting each row assuming n elements in each row will be n * log(n) time for EACH row, so overall time of 
    //sorting then comparing heights will be O(n^2 * log(n)), which is worse than a simple O(n ^ 2) matrix search
    for ( let r = 0; r < matrix.length; r++ ){
        let currentShortest = matrix[r][0]; 
        for  (let c = 0; c < matrix[0].length; c++ ){
            if ( matrix[r][c] < currentShortest ) {
                currentShortest = matrix[r][c];
            }
        }
        currentTallestOfShortest = Math.max( currentTallestOfShortest, currentShortest );
    }
    return currentTallestOfShortest; 
}

const getShortestOfTallest = ( matrix ) => {
    let currentTarget = matrix[0][0]; 
    let currentShortestOfTallest = Infinity; 
    for ( let c = 0; c < matrix[0].length; c++ ){
        let currentTallest = matrix[0][c]; 
        for  (let r = 0; r < matrix.length; r++ ){
            if ( matrix[r][c] > currentTallest ) {
                currentTallest = matrix[r][c];
            }
        }
        currentShortestOfTallest = Math.min( currentShortestOfTallest, currentTallest );
    }
    return currentShortestOfTallest; 
}

console.log( findHeights( [ [1, 3, 2, 4], 
                            [6, 7, 8, 11], 
                            [3, 3, 2, 0], 
                            [5, 4, 8, 9]])); 