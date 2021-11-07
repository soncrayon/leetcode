const numOfWays = ( stairs, steps = 0 ) => {
	// if ( stairs < 0 ) return 0;
	if ( stairs === 0 ) return 1;
    let count = 0; 
	for ( let i = 1; i < steps + 1; i++ ){
        count += numOfWays( stairs - i, steps); 
    } 
    return count; 
} 

const fibonacci = ( n , memo = {} ) => {
    if ( n < 3 ) return 1; 
    if ( memo[n] ) return memo[n]; 
    memo[n] = fibonacci( n - 1, memo) + fibonacci( n - 2, memo ); 
    return memo[n]; 
}

// console.log(fibonacci(15))

console.log(numOfWays(3, 2))

//221
//212
//122
//1112
//2111
//1211
//1121
//11111
//32
//23
//113
//131
//311