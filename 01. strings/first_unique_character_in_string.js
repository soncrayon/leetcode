const firstUniqueCharacterInString = (s) => {
    if (s.length === 1){
        return 0
    } else {
        for(let i=0; i<s.length; i++){
            for (let j=0; j<s.length; j++){
                if ((s[i] === s[j]) && (i !== j)){ break }
                if (j === s.length - 1){
                    return i
                } 
            }
        }
        return -1 
    }
   
}

console.log(firstUniqueCharacterInString('aabb'))
console.log(firstUniqueCharacterInString('b'))
console.log(firstUniqueCharacterInString('aabbc'))
