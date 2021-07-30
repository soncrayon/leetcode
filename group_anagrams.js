const groupAnagrams = (strArr) => {
    let sortObj = {}
    strArr.map((str) => {
        sortObj[strArr.indexOf(str)] = str
    })
    let revSortObj = {}
    Object.entries(sortObj).forEach(([k,v]) => {
        revSortObj[v] = k
    })
    // sortObj.map((k,v) => {
    //     revSortObj[v] = k
    // })
    // return sortObj
    // let sortStrArr = []
    // strArr.forEach((str) => {sortStrArr.push(str.split('').sort().join(''))})
    let newArr = Object.entries(revSortObj).sort().map((arrItem) => {
        return [arrItem[0].split('').sort().join(''), arrItem[1]]
    })


    return newArr.sort() 
}

console.log(groupAnagrams(['hey', 'now', ,'won', 'you', 'are', 'tops', 'stop']))