const multiplyPosIntWOOp = ( num1, num2, memo = {} ) => {
    if ( num2 === 1 ) return num1; 
    if ( memo[num2] ) return memo[num2]; 
    memo[num2] = num1 + multiplyPosIntWOOp( num1, num2 - 1, memo )
    return memo[num2]; 
}

console.log( multiplyPosIntWOOp(11, 10))