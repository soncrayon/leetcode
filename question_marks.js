// given a string of characters, determine if exactly 3 question marks exist between every pair of numbers that add up to 10. 
//If so, return true, otherwise return false. 

const questionMarks = (str) => {
    if (str === '') return false 
    const arr = str.split('')
    let nums = null 
    let qMarks = 0
    for (itm of arr) {
        if (nums != null) {
            itm === "?" ? qMarks += 1 : qMarks
            if (parseInt(itm)) {
                if (nums >= (10 - itm) && qMarks != 3){
                    return false 
                }
                nums = itm 
                qMarks = 0
            } 
        }
        if (parseInt(itm)) {
            nums = itm
        }
    }
    return true 
}

// "arrb6???4xxbl5???eee5" => true
// "acc?7??sss?3rr1??????5" => true
// "5??aaaaaaaaaaaaaaaaaaa?5?5" => false
// "9???1???9???1???9" => true
// "aa6?9" => false

console.log(questionMarks("5??aaaaaaaaaaaaaaaaaaa?5?5"))

console.log(questionMarks("aa6?9"))

console.log(questionMarks("arrb6???4xxbl5???eee5"))

console.log(questionMarks(''))

console.log(questionMarks("9???1???9???1???9"))