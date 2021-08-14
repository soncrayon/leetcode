const reverseInteger = (x) => {
    let numToRev = x
    if ( x < 0 ) numToRev = -numToRev
    numToRev = `${x}`
    let numArr = numToRev.split('')
    let i = 0, j = numArr.length - 1, temp
    while ( i < j) {
        temp = numArr[i]
        numArr[i] = numArr[j]
        numArr[j] = temp 
        i++
        j--
    }
    numToRev = parseInt(numArr.join(''))
    if ( x < 0 ) numToRev = -numToRev 
    return (numToRev > 2**31) || (numToRev < -(2**31)) ? 0 : numToRev 
};