// const printFibonacci = (prevSum = 0, currSum = 1) => {
//     // recursive algorithm to add the previous sum 
//     let newSum = prevSum + currSum 
//     console.log(newSum)
//     prevSum = currSum
//     currSum = newSum 
//     if (newSum < 500){  
//         printFibonacci(prevSum, currSum)
//     }
// }

fib = (n, prevSum = 0, currSum = 1) => {
	if (n === 0) return currSum
	let newSum = currSum + prevSum
	prevSum = currSum
	currSum = newSum
	return fib (n - 1, prevSum, currSum) 
}

fibMemo = (n, memo = {}) => {
    if (n in memo) return memo[n]
    if ( n < 3 ) return 1
    memo[n] = fibMemo( n - 1, memo ) + fibMemo( n - 2, memo )
    return memo[n]
}


console.log(fibMemo(5))
  
