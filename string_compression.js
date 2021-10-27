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

const stringCompression2 = (str) => {
    if ( str.length === 0 ) return ''; 
    let compressedString = ''; 
    let count = 1, currLetter = str[0]; 
    for (let i = 1; i < str.length; i++ ){
        if ( str[i] === currLetter && count === 9) {
            compressedString = compressedString + currLetter + count; 
            count = 1; 
        } else if ( str[i] === currLetter ){
            count++;
        } else {
            compressedString = compressedString + currLetter + count; 
            count = 1;
            currLetter = str[i]; 
        }
    }
    
    compressedString = compressedString + currLetter + count; 
    if ( compressedString.length >= str.length ) return str; 
    return compressedString; 
}

console.log(stringCompression2('aabccccccccccccccckkkkkkkkkkkkkaaa'))
console.log(stringCompression2('hello'))