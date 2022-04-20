const convertBinaryToDecimal = (num) => {
    num = String(num).split('');
    let i = num.length - 1, multiplier = 1, decimalNum = 0; 
    while ( i >= 0 ) {
        let currentNumber = num[i] * multiplier; 
        decimalNum += currentNumber; 
        i--;
        multiplier *= 2; 
        console.log(multiplier)
    }
    return decimalNum; 
}

const binary = 101101101010;
const binary2 = 101;

// 101101101010
// 1011011010100

console.log(convertBinaryToDecimal(binary2))
