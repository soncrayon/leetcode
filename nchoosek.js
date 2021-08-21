const nChooseK = (n, k) => {
    const factorial = (n, memo ={}) => {
        if ( memo[n] ) return memo[n];
        if (n === 1) return 1;
        memo[n] = n * factorial(n - 1, memo); 
        return memo[n]
    }
    return factorial(n)/(factorial(n - k) * factorial(k)); 
}

console.log(nChooseK(3,2));
