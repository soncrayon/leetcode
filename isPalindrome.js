const isPalindrome = (s) => {
    let sStripped = s.split(" ").join("").replace(/[^0-9a-zA-Z]+/gmi,"").toLowerCase()
    console.log(sStripped)
    let boolean = true
    const palCallback = (sStripped, i1=0, i2=sStripped.length - 1) => {
        if (i2 <= i1) {
            return
        } else if (sStripped[i1] !== sStripped[i2]) {
            boolean = false 
            return 
        } else {  
            i1++
            i2--
            palCallback(sStripped, i1, i2)
        }
    }
    palCallback(sStripped)
    return boolean
}

console.log(isPalindrome("A man, ```a plan, a canal: [[]]]Panama"))