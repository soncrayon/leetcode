const kadanes = ( arr ) => {
    let max = -Infinity, localMax = 0;  
    for ( let i = 0; i < arr.length; i++ ){
        localMax = Math.max( localMax, localMax + arr[i]); 
        max = Math.max( max, localMax ); 
    }
    return max; 
}

const maxSequence = ( arr ) => {
    let windowEnd = 0, max = arr[i];
    for ( let windowStart = 1; windowStart < arr.length; windowStart++ ){
        let currMax = max + arr[windowStart];
        if ( currMax > max ){
            max = currMax; 
            //TODO 
        }
    }
}

console.log( kadanes([2, -8, 3, -2, 4, -10]))