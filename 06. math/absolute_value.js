const absoluteValue = (num) => {
    if ( num < 0) {
        return num * -1
    } else {
        return num 
    }
}

console.log(absoluteValue(-78));
console.log(absoluteValue(8));
console.log(absoluteValue(-7));
console.log(absoluteValue(7));