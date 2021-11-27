const fizzBuzz = (arr) => {
    return arr.map((num) => {
        if ( num % 3 === 0 && num % 5 === 0 ) {
            return "FizzBuzz"; 
        } else if ( num % 3 === 0 ){
            return "Fizz"; 
        } else if ( num % 5 === 0 ){
            return "Buzz"; 
        } else {
            return num; 
        }
    })
}

const fizzBuzz2 = (arr) => {
    let str = ''; 

    for ( let i = 0; i < arr.length; i++ ){
        if ( arr[i] % 3 === 0 ) str += "Fizz";
        if ( arr[i] % 5 === 0 ) str += "Buzz"; 
        if ( str !== '' ) arr[i] = str; 
        str = ''; 
    }
    
    return arr; 
}

console.log(fizzBuzz2([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])); 

const nthFibo = ( n, memo = {} ) => {
    if ( n < 2 ) return 1; 
    if ( memo[n] ) return memo[n];
    memo[n] = nthFibo( n - 2, memo ) + nthFibo(n - 1, memo); 
    return memo[n]; 
} 

// console.log(nthFibo(56)) 

const nthFactorial = ( n, memo = {} ) => {
    if ( n === 1 ) return 1; 
    if ( memo[n] ) return memo[n]; 
    memo[n] = n * nthFactorial( n - 1, memo );
    return memo[n];  
}

// console.log(nthFactorial(15)); 