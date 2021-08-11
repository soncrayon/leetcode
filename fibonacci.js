const printFibonacci = (prevSum = 0, currSum = 1) => {
    // recursive algorithm to add the previous sum 
    let newSum = prevSum + currSum 
    console.log(newSum)
    prevSum = currSum
    currSum = newSum 
    if (newSum < 500){
        printFibonacci(prevSum, currSum)
    }
}

printFibonacci()