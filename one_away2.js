const oneAway = ( str1, str2 ) => {
    const hash = {};
    let count = 0; 
    for ( let i = 0; i < str1.length; i++ ){
        hash[str1[i]] ? hash[str1[i]]++ : hash[str1[i]] = 1; 
    }
    for ( let i = 0; i < str2.length; i++ ){
        hash[str2[i]] ? hash[str2[i]]-- : hash[str2[i]] = -1; 
    }
    for ( let letter in hash ){
        count += Math.abs(hash[letter]); 
    }
    return count < 2; 
}

console.log(oneAway('pale', 'ple'))
console.log(oneAway('pale', 'bake'))
console.log(oneAway('pale', 'pales'))