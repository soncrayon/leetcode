const plusOne = (arr, idx = 1) => {
    // handle 9's 
    if (arr[arr.length - idx] === 9) {
        arr[arr.length - idx] = 0 
        return plusOne(arr, idx+1)
    }
    // return incremented array
    if (arr.length - idx === -1){
        arr.unshift(1)
        return arr
    } else {
        arr[arr.length - idx]++
        return arr
    }
}

console.log(plusOne([9,9,9,9]))
console.log(plusOne([1,9,9,9]))
console.log(plusOne([1,2,3,4]))
console.log(plusOne([4]))
console.log(plusOne([9]))