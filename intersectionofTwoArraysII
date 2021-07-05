const intersect = (nums1, nums2) => {
    let matchArr = []
    for(let i = 0; i < nums1.length; i++){
        for (let j = 0; j < nums2.length; j++){
            if (nums1[i] === nums2[j]){
                matchArr.push(nums1[i])
                nums2.splice(j,1)
                break 
            }
        }
    }
    return matchArr
}