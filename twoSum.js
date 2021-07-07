const twoSum = (nums, target) => {
    nums.sort()
    for (let i=0; i<nums.length; i++){
        let indexArr = []
        indexArr.push(nums[i])
        let neededNum = target - nums[i]
        for (let j=0; j<nums.length; j++){
            if (i !== j){
                if (nums[j] + neededNum > target){
                break 
                } else if (neededNum === nums[j]){
                    indexArr.push(nums[j])
                    return indexArr
                }
            }
        }
    }
}