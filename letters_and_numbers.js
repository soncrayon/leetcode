const lettersAndNumbers = ( array ) => {
    let longestSubarrayIdxs = [ 0, 0 ]; 
    let currentLength = 0; 
    const hash = {
        letters: 0,
        numbers: 0
    }
    let windowStart = 0, windowEnd = 0; 
    while ( windowEnd < array.length ) {
        if ( typeof array[windowEnd] === 'number' ) hash.numbers++;
        if ( typeof array[windowEnd] === 'string' ) hash.letters++; 
        if ( hash.numbers === hash.letters && windowEnd - windowStart > currentLength ){
            longestSubarrayIdxs[0] = windowStart;
            longestSubarrayIdxs[1] = windowEnd; 
            currentLength = windowEnd - windowStart; 
        }
        windowEnd++; 
    }
    windowEnd--; 
    while ( windowStart < windowEnd ){
        if ( typeof array[windowStart] === 'number' ) hash.numbers--;
        if ( typeof array[windowStart] === 'string' ) hash.letters--; 
        if ( hash.numbers === hash.letters && windowEnd - windowStart + 1 > currentLength ){
            longestSubarrayIdxs[0] = windowStart + 1;
            longestSubarrayIdxs[1] = windowEnd; 
            currentLength = windowEnd - windowStart + 1; 
        }
        windowStart++; 
    }

    return longestSubarrayIdxs; 
}


console.log(lettersAndNumbers([2, 'a', 'a', 'b', 5, 6, 8, 9, 'c','d','j',8, 0]))