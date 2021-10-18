const isMonotonic = ( arr ) => {
    let direction = null; 
    for ( let i = 1; i < arr.length; i++ ){
        if ( direction === null ){
            if ( arr[i] > arr[i - 1]) direction = "up";
            if ( arr[i] < arr[i - 1]) direction = "down"; 
            continue; 
        } else {
            if ( direction === "up" && arr[i] < arr[i - 1]) return false; 
            if ( direction === "down" && arr[i] > arr[i - 1]) return false; 
        }
    }
    return true; 
}