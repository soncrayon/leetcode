function find_single_numbers(nums) {

      const missingNums = []; 
      nums.sort((a, b) => a - b);
      let currNum = 0; 
      for ( let i = 0; i < nums.length; i += 2 ){
        currNum = nums[i] ^ nums[i + 1];
        if ( i === nums.length - 1 || currNum !== 0 ){
          missingNums.push(nums[i]); 
          i--; 
        }
      }
      return missingNums;
    }