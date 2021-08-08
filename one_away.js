const oneAway = (str1, str2) => {
    let str1Arr = str1.split('')
    let str2Arr = str2.split('')
    if (str1Arr.length > str2Arr.length) {
        return str2Arr.every((arrItem) => str1Arr.includes(arrItem))
    }
    if (str2Arr.length > str1Arr.length) {
        return str1Arr.every((arrItem) => str2Arr.includes(arrItem))
    }
    if (compareStrings(str1Arr, str2Arr) < 2) {
        return true
    }
    return false
}

const compareStrings = (str1Arr, str2Arr, idx = 0, nonMatches = 0) => {
    if (idx < Math.min(str1Arr.length, str2Arr.length)) {
        if (str1Arr[idx] != str2Arr[idx]){
            nonMatches = nonMatches + 1 
        }
        idx++
        return compareStrings(str1Arr, str2Arr, idx, nonMatches)
    }
    return nonMatches
}

console.log(oneAway("pale", "ple"))
console.log(oneAway("pale", "bale"))
console.log(oneAway("pale", "bake"))