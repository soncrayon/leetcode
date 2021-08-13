const findWordSquareSets = (arr) => {
    // if the array return true, then push to overall array in the format "(" + arr.join(", ") + ")"
    const squareSetsArr = []
    const checkArr = []
    const wordLookup = buildLookup(arr)
    let i = 0, j = 1
    while (i < arr.length){
        if (wordLookup[arr[i].length][arr[i][j]]){
            checkArr.push(arr[i])
            if(checkArr.length === arr[i].length){
                if (isWordSquare(checkArr)) {
                    squareSetsArr.push("(" + checkArr.join(", ") + ")")
                }
            }
            j++
        }
        if (j === arr[i].length - 1){
            j = 0
            i++
        }
    }
    return squareSetsArr
}

const isWordSquare = (arr) => {
    let i = 0, j= 0
    while (i < arr.length){
        if (arr[i].length != arr.length) return false 
        if (arr[i][j] != arr[j][i]){
            return false
        }
        if (j === arr.length - 1){
            j = 0
            i++
        }
        j++
    }
    return true 
}

const buildLookup = (arr) => {
    const wordLookup = {}
    for (let i = 0; i < arr.length; i++) {
        let wordLen = arr[i].length
        if (!wordLookup[`${wordLen}`]){
            wordLookup[`${wordLen}`] = {}
        }
        let firstLet = arr[i][0]
        if (!wordLookup[`${wordLen}`][`${firstLet}`]){
            wordLookup[`${wordLen}`][`${firstLet}`] = []
        }
        wordLookup[wordLen][firstLet].push(arr[i])
    }
    return wordLookup
}


console.log(findWordSquareSets(["lady", "loon", "area", "dear", "yard", "goon", "hat", "new", "ok", "terrible", "mistakes"]))