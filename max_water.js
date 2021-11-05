const maxArea = (height) => {
    let maxWater = 0; 
    let i = 0, j = height.length - 1;
    while ( i < j ){
        let currWater = ( j - i ) * Math.min( height[i], height[j]);
        maxWater = Math.max( maxWater, currWater );
        if ( height[i] < height[j] ){
            i++;
        } else {
            j--; 
        }
    }
    return maxWater;
}