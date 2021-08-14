const reverseInteger = (x) => {
    if (`${x}`.length > 10) return 0 
    let numToRev = `${x}`
    let numArr = numToRev.split('')
    if ( x < 0 ) numArr.shift()
    let i = 0, temp
    while ( i < (numArr.length - (i + 1))) {
        temp = numArr[i]
        numArr[i] = numArr[numArr.length - (i + 1)]
        numArr[numArr.length - (i + 1)] = temp 
        i++
    }
    numToRev = parseInt(numArr.join(''))
    if ( x < 0 ) numToRev = -numToRev
    return (numToRev > 2**31) || (numToRev < -(2**31)) ? 0 : numToRev 
};

console.log(reverseInteger(12357))
console.log(reverseInteger(-20356))
console.log(reverseInteger(976543219876543))