const find_subsets = function(nums) {
    subsets = [];
    subsets.push([]); 
    for ( let i = 0; i < nums.length; i++ ){
      const powerSetLength = subsets.length; 
      for ( let j = 0; j < powerSetLength; j++ ){
        const currentPowerSet = subsets[j]; 
        subsets.push( currentPowerSet.concat(nums[i]) ); 
        console.log(subsets)
      }
    }
    return subsets;
  };