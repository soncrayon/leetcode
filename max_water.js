var maxArea = function(height) {
    let maxArea = 0; 
    let windowStart = 0, windowEnd = height.length - 1; 
    while ( windowStart < windowEnd ){
        let currentArea = ( windowEnd - windowStart ) * 
            Math.min( height[windowEnd], height[windowStart]); 
        maxArea = Math.max( maxArea, currentArea ); 
        if ( height[windowStart] < height[windowEnd]){
            windowStart++; 
        } else {
            windowEnd--; 
        }
    }
    return maxArea; 
};