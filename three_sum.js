var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
	const triplets = [];
    const seen = new Set(); 
	for ( let i = 0; i < nums.length - 2; i++ ){
		let left = i + 1;
		let right = nums.length - 1;
		while ( left < right ) {
            const currentString = nums[i] + ',' + nums[left] + ',' + nums[right];
			const currentSum = nums[i] + nums[left] + nums[right];
			if (currentSum === 0) {
				if (!seen.has(currentString) ) triplets.push([nums[i], nums[left], nums[right]]);
                seen.add( currentString); 
				left++;
				right--; 
			} else if ( currentSum < 0 ) {
				left++;
			} else if ( currentSum > 0 ) {
				right--; 
			}
 		}
	}
	return triplets; 
};