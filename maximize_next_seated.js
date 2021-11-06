var maxDistToClosest = function(seats) {
    let closestLeft = getClosestLeft( seats );
    let closestRight = getClosestRight( seats ); 
    let maxDistance = -Infinity;
    for ( let i = 0; i < seats.length; i++ ){
        let currentDistance = 0;
        if ( i === 0 ) {
            currentDistance = Math.abs(i - closestRight[i]);
        } else if ( i === seats.length - 1 ){
            currentDistance = Math.abs( i - closestLeft[i]); 
        } else {
            currentDistance = Math.min( Math.abs( i - closestRight[i]), 
                                       Math.abs( i - closestLeft[i]) );
        }
        if ( seats[i] === 0 ){
            maxDistance = Math.max( maxDistance, currentDistance ); 
        }
    }
    return maxDistance; 
};

const getClosestRight = ( seats ) => {
    const right = new Array(seats.length).fill( null);
    for ( let i = seats.length - 2; i >= 0; i-- ){
        if ( seats[i + 1] === 1 ){
            right[i] = i + 1;
        } else {
            right[i] = right[ i + 1 ]
        }
    }
    return right; 
}

const getClosestLeft = ( seats ) => {
    const left = new Array(seats.length).fill(null);
    for ( let i = 1; i < seats.length; i++ ){
        if ( seats[i - 1] === 1 ) {
            left[i] = i - 1; 
        } else {
            left[i] = left[i - 1]; 
        }
    }
    return left; 
}