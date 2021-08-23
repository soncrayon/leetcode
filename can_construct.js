const canConstruct = (target, strArr, memo = {}) => {
    if (target in memo ) return memo[target]; 
    if (target === '') return true; 

    for (let str of strArr) {
        if (target.indexOf(str) === 0){
            const suffix = target.slice(str.length); 
            if ( canConstruct(suffix, strArr, memo) === true){
                memo[suffix] = true;  
                return true; 
            }
        }
    }
    memo[target] = false; 
    return false; 
}

const countConstruct = (target, strArr, memo={}) => {
    if (target in memo) return memo[target]; 
    if (target === '') return 1;
    let totalCount = 0; 

    for (let str of strArr) {
        if ( target.indexOf(str) === 0) {
            const suffix = target.slice(str.length);
            const count = countConstruct(suffix, strArr, memo); 
            totalCount += count; 
        }
    }

    memo[target] = totalCount;
    return totalCount;  
}

console.log(canConstruct ('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));