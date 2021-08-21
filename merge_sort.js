const mergeSort = (arr) => {
    if ( arr.length <= 1 ) return arr; 

    const middleIndex = Math.floor(arr.length / 2);
    const arr1 = arr.slice(0, middleIndex);
    const arr2 = arr.slice(middleIndex); 

    return merge( mergeSort(arr1), mergeSort(arr2));
}

const merge = (arr1, arr2) => {
    let i = 0, j = 0; 
    const mergedArr = []; 
    while ( i < arr1.length || j < arr2.length) {
        if ( i < arr1.length && j < arr2.length ) {
            mergedArr.push(Math.min(arr1[i], arr2[j]));
            arr1[i] < arr2[j] ? i++ : j++; 
        } else if ( i < arr1.length ) {
            mergedArr.push(arr1[i]); 
            i++; 
        } else {
            mergedArr.push(arr2[j]); 
            j++; 
        }
    }
    return mergedArr;
}

// [1,3] [2,4] --> [1,2,3,4]

// console.log ( merge([1,4], [2,3,5,6]) ); 

console.log ( mergeSort([6,5,3,7,9,2,1,4]) ); 