const palindromePermutation = ( str ) => {
    let charCount = 0, onesCount = 0; 
    const hash = {};
    for (let i = 0; i < str.length; i++ ){
        if ( str[i] !== " "){
            hash[str[i]] ? hash[str[i]]++ : hash[str[i]] = 1; 
        }  
    }

    for ( let ltr in hash ){
        charCount += hash[ltr]; 
    }
    let count = charCount % 2 === 0 ? "even" : "odd"; 
 
    for (let ltr in hash ){
        if ( count === "even"){
            if ( hash[ltr] !== 2 ) return false; 
        }
        if ( count === "odd"){
            if ( hash[ltr] !== 2 && hash[ltr] !== 1){
                return false;
            } else if ( hash[ltr] === 1 && onesCount > 0 ){
                
                return false;
            } else if ( hash[ltr] === 1 ){
                onesCount++; 
            }
        }
    }
    return true; 
}

console.log(palindromePermutation('tactb coa'))