const longestWord = (s, d) => {
    let longWord = ''
    d.forEach((w) => {
        if (checkMatches(s, w) && (w.length > longWord.length)) {
            longWord = w
        }
    })
    return longWord
}

const checkMatches = (s, w, sIndex = 0, wIndex = 0) => {
    while (sIndex < s.length){
        if (w[wIndex] === s[sIndex]){
            wIndex++
            sIndex++
        } else {
            sIndex++
        }
    }
    if (wIndex === w.length) {
        return true
    }
    return false 
}

console.log(longestWord("abppplee", new Set(["able", "ale", "apple", "bale", "kangaroo"])))

console.log(checkMatches("abppplee", "ale"))
console.log(checkMatches("abppplee", "bale"))