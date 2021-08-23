const sumAllNumsInRange = (start, end) => {
    if (end === start) return end;
    if (end < start) return 'Invalid range'; 
    return start + sumAllNumsInRange (start + 1, end);
}

console.log( sumAllNumsInRange(3, 1) );
console.log ( sumAllNumsInRange(4, 20) ); 