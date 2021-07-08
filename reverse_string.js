const reverseString = (s) => {
    let reversedString = []
    for(let i = 0; i < s.length; i++){
        reversedString.unshift(s[i])
    }
    return reversedString
}

const reverseString2 = (s) => {
    let reversedString = []
    while (s.length > 0){
        reversedString.push(s.pop())
    }
    return reversedString
}

const reverseInPlace = (s) => {
    for (let i = 0; i < s.length; i++){
        s.push(...s.splice(i, (s.length - (1+i))))
    }
    return s
}

const reverseInPlaceSimple = (s) => {
    s.reverse()
    return s
}

console.log(reverseString(["h","e","l","l","o"]))
console.log(reverseString2(["h","e","l","l","o"]))
console.log(reverseInPlace(["h","e","l","l","o"]))
console.log(reverseInPlaceSimple(["h","e","l","l","o"]))