const shortestSuperSequence = ( shorterArray, longerArray ) => {
    let sequence = [0, 0]; 
    let shortestLength = Infinity; 
    let windowStart = 0, windowEnd = 0; 
    while ( windowEnd < longerArray.length ){
        for ( let i = 0; i < shorterArray.length; i++ ){
           for( let j = 0; j < longerArray.length; j++ ){
               if ( longerArray[j] === shorterArray[i] ) {
                    if (windowStart === 0 ) windowStart = j; 
                    if ( j > windowEnd ) windowEnd = j; 
               }
           }
        }
        if ( windowEnd - windowStart < shortestLength ){
            sequence[0] = windowStart;
            sequence[1] = windowEnd; 
        }
        windowEnd++;
        windowStart++; 
    }
   return sequence; 
}
 
const short = [1, 5, 9]; 
const long = [7, 5, 9, 0, 2, 1, 3, 5, 7, 9, 1, 1, 5, 8, 8, 9, 7]; 

console.log(shortestSuperSequence(short, long)); 