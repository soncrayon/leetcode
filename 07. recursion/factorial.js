const factorial = (num, memo = {}) => {
    if (memo[num]) return memo[num]; 
    if (num === 0) return 1;
    memo[num] = num * factorial(num - 1);
    return memo[num]
}

console.log(factorial(100)) 