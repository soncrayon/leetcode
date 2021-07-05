const rotateArray = (nums, k) => {   
    nums.push(nums.splice(0,k+1))
    return nums.flat()
} 

// O(k) solution

const rotateArray2 = (nums, k) => {
    let splicedArr = nums.splice(0, k+1)
    splicedArr.forEach((num) => {
        nums.push(num)
    })
    return nums
}

// closer to a O(1) solution

const rotateArray3 = (nums, k) => {
    if (k > nums.length){
        while (k > 0){
            nums.unshift(nums.pop())
            k--
        }
    } else {
        nums.unshift(...(nums.splice((nums.length - k), nums.length)))
    } 
    return nums
}

// console.log(rotateArray([1,2,3,4,5], 3))

// // console.log(rotateArray2([1,2,3,4,5], 3))

// // console.log(rotateArray3([1,2,3,4,5], 3))