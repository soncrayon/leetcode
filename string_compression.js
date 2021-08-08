const stringCompression = (str) => {
    let valuesHash = {}
    let strArr = str.split('')
    for (let i=0; i<strArr.length; i++){
        if (valuesHash[strArr[i]] &&
            (strArr[i] == strArr[i - 1]) &&
            i > 0) {
            valuesHash[strArr[i]] = valuesHash[strArr[i]] + 1
        } else {
            valuesHash[strArr[i]] = 1
        }
    }
    let valuesStr = Object.entries(valuesHash).flat().join('').split(',').join('')
    if(valuesStr.length > str.length){
        return str
    }
    return valuesStr
}

console.log(stringCompression('aabcccccaaa'))